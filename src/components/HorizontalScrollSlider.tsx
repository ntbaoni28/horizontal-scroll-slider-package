import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollOffset } from "@motionone/dom/types/gestures/scroll/types";

type Props = {
  scrollHeight?: string;
  className?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  offsetOptions?: ScrollOffset;
};

const HorizontalScrollSlider = ({
  scrollHeight = "400vh",
  offsetOptions = ["start start", "end end"],
  className,
  children,
  header,
  footer,
}: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerSliderRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState<number>(0);

  function updateSize() {
    if (sliderRef.current) {
      setRange(sliderRef.current.clientWidth - window.innerWidth);
    }
  }

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerSliderRef,
    offset: offsetOptions,
  });

  const transform = useTransform(scrollYProgress, [0, 1], [0, -range]);

  return (
    <div style={{ height: scrollHeight }} ref={containerSliderRef}>
      <div
        style={{
          position: "sticky",
          top: 0,
          overflow: "hidden",
          minHeight: "100vh",
        }}
        className={className}
      >
        {header}
        <motion.div
          ref={sliderRef}
          style={{ x: transform, width: "max-content", transition: "all" }}
        >
          {children}
        </motion.div>
        {footer}
      </div>
    </div>
  );
};

export default HorizontalScrollSlider;
