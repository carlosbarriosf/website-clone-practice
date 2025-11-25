"use client";

import React, { useEffect, useState } from "react";

export default function TypewriterLoop({
  texts = [],
  typingSpeed = 40,
  deletingSpeed = 30,
  delayBetween = 1200,
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[index];

    if (!deleting && subIndex === currentText.length) {
      const pause = setTimeout(() => setDeleting(true), delayBetween);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    index,
    deleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return <span>{texts[index].slice(0, subIndex)}</span>;
}
