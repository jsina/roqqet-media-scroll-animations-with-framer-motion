import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9, 0.91],
    [1, 1, 0.4, 0.4, 0.1, 0]
  );
  const display = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9, 0.91],
    ["block", "block", "block", "block", "block", "none"]
  );
  const finalOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9, 0.91, 0.96, 1],
    [0, 0, 0, 0, 0, 0.9, 0.96, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity, display }} className="h-full">
            <img src="/featuer-1.svg" className="h-full w-auto" />
          </motion.figure>
          {/* final pic */}
          <motion.figure style={{ opacity: finalOpacity }} className="h-full">
            <img src="/feature-final.svg" className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <img
              src="/feature-logo.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <img
              src="/feature-items.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">Full-Service Brand Creation</span>
          <br />
          We are committed to crafting your brand from scratch to a finished
          product that reflects your values and vision.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">Designing LOGO</span>
          <br />
          We specialize in creating custom logos tailored to your unique brand
          identity and vision.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">content strategy</span>
          <br />
          content creation services to bring your brand to life
        </motion.p>
      </div>
    </section>
  );
};
