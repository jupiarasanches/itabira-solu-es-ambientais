import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the animation starts (useful for staggering). */
  delay?: number;
  /** Slide direction. Defaults to "up". */
  direction?: Direction;
  /** Additional classes applied to the wrapper. */
  className?: string;
  /** Render as a different tag. Defaults to "div". */
  as?: "div" | "section" | "article" | "li" | "span";
  /** Animation duration in ms. Defaults to 700. */
  duration?: number;
}

const initialTransform: Record<Direction, string> = {
  up: "translate3d(0, 28px, 0)",
  down: "translate3d(0, -28px, 0)",
  left: "translate3d(28px, 0, 0)",
  right: "translate3d(-28px, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as: Tag = "div",
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0)" : initialTransform[direction],
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
