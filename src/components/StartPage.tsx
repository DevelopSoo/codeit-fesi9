"use client";

import { motion } from "motion/react";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div className="text-center">
      <motion.h1
        initial={{
          scale: 0,
          y: 10,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mb-8 text-4xl font-bold"
      >
        MBTI 테스트
      </motion.h1>
      <motion.button
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={onStart}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </motion.button>
    </motion.div>
  );
}
