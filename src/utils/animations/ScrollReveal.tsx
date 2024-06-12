import React, { useEffect, useState } from "react";
import { motion, Variants, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  style,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const variants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "fade",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("onscreen");
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          controls.start("offscreen");
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, controls, threshold, triggerOnce]);

  return (
    <motion.div
      ref={setRef}
      initial="offscreen"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
