"use client";

import { useEffect } from "react";

const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const easing = (t: number) => t * (2 - t); // Ease-out fonksiyonu

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startY + distance * easing(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a[href^='#']");
      if (target) {
        event.preventDefault();
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          const section = document.querySelector(href);
          if (section) {
            smoothScrollTo(section.offsetTop, 2000); // 2 saniyede scroll
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
