export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

export const stagger = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
