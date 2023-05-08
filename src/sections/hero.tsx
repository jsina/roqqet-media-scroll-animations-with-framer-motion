import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    console.log({ pos });
    return pos >= 1 ? "relative" : "fixed";
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center"
      >
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">Projects</span> Beta
        </p>
        <p className="mb-8 text-center text-xs font-light text-text">
          by{" "}
          <a
            href="https://www.codesandbox.com"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            RM Devs
          </a>
          ,
          <br />
          redesign by{" "}
          <a
            href="https://www.frontend.fyi"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            RoqqetMedia
          </a>
        </p>

        <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
          Development
          <br />
          reimagined.
        </h1>

        <a href="#" className="flex items-center text-lg text-secondary">
          <Image
            width={32}
            height={32}
            alt="rm"
            src="/rm.png"
            className="mr-2 inline"
          />
          Order Your project
        </a>
      </motion.div>
    </motion.section>
  );
};
