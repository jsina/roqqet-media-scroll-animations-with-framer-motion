import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 2.5, 4.2, 1]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-55vw", "-135vw", "-18vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.75, 1],
    ["0vh", "40vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const avatarGroupOpacity = useTransform(
    scrollYProgress,
    [0, 0.11, 0.15],
    [0, 0, 1]
  );

  const avatarGroupX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.24, 0.32, 0.48, 0.6, 0.72],
    ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
  );

  const avatarOneScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.12, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarTwoScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.24, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarTwoOpacity = useTransform(
    scrollYProgressIncludingOverlap,
    [0.9999, 1],
    [1, 0]
  );

  const avatarThreeScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.32, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarFourScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.48, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarFiveScale = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarSixScale = useTransform(
    scrollYProgress,
    [0, 0.7, 0.72],
    [0, 0, 1]
  );

  return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, y }} className="origin-top">
              <motion.img
                style={{ opacity }}
                src="/Section_ Header.svg"
                className="h-auto max-h-none w-[70vw]"
              />
              <motion.div
                style={{ opacity: avatarGroupOpacity, x: avatarGroupX }}
                className="absolute right-[10%] top-[5.5%] flex gap-2"
              >
                <motion.img
                  style={{ scale: avatarOneScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#CEF144] object-cover"
                  src="/alireza.jpeg"
                />
                <motion.img
                  style={{ scale: avatarTwoScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#5EE7FF] object-cover"
                  src="farshad.jpeg"
                />
                <motion.img
                  style={{ scale: avatarThreeScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#FD80F2] object-cover"
                  src="ali.jpeg"
                />
                <motion.img
                  style={{ scale: avatarFourScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#171833] object-cover"
                  src="/sina.jpeg"
                />
                <motion.img
                  style={{ scale: avatarFiveScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#DB00FF] object-cover"
                  src="fiach.jpeg"
                />
                <motion.img
                  style={{ scale: avatarSixScale, opacity: avatarTwoOpacity }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#8B6EFF] object-cover"
                  src="matt.jpeg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
