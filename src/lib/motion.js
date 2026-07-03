// Check if user prefers reduced motion
const isReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const pageVariants = {
  initial: {
    opacity: 0,
    y: isReducedMotion() ? 0 : 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Custom slow cubic-bezier
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: isReducedMotion() ? 0 : -24,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: isReducedMotion() ? 0 : 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
    },
  },
});

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cartDrawerVariants = {
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

export const megaMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    pointerEvents: "none",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const mobileNavVariants = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerReveal = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
