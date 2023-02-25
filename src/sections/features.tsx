import { CommandPaletteScreen } from "@/screens/command-palette";
import { DevtoolsScreen } from "@/screens/devtools";
import MainScreen from "@/screens/main-screen";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
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
      ref={containerRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <MainScreen className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <CommandPaletteScreen className="absolute inset-0 h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <DevtoolsScreen className="absolute inset-0 h-full w-auto" />
          </motion.figure>
        </motion.div>
        <motion.p
          style={{ opacity: text1Opacity, "--y": text1Y } as any}
          className="absolute top-1/2 left-0 translate-y-[calc(-50%_+_var(--y))]"
        >
          <span className="text-primary">Preconfigured environments</span>
          <br />
          We detect your environment so you don't need to fiddle with
          configuration files.
        </motion.p>
        <motion.p
          style={{ opacity: text2Opacity, "--y": text2Y } as any}
          className="absolute top-1/2 left-0 translate-y-[calc(-50%_+_var(--y))]"
        >
          <span className="text-primary">Command Pallete</span>
          <br />
          Access and complete any action in seconds with the command palette.
        </motion.p>
        <motion.p
          style={{ opacity: text3Opacity, "--y": text3Y } as any}
          className="absolute top-1/2 left-0 translate-y-[calc(-50%_+_var(--y))]"
        >
          <span className="text-primary">Devtools</span>
          <br />
          We've bundled useful tools to help you get your work done faster and
          more efficiently.
        </motion.p>
      </div>
    </section>
  );
};