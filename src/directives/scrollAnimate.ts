// Scroll Animation Directive
export const vScrollAnimate = {
  mounted(el: HTMLElement) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optionally unobserve after animation
            // observer.unobserve(entry.target)
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    el.classList.add("scroll-animate");
    observer.observe(el);

    // Store observer on element for cleanup
    (el as any)._scrollObserver = observer;
  },

  unmounted(el: HTMLElement) {
    const observer = (el as any)._scrollObserver;
    if (observer) {
      observer.disconnect();
    }
  },
};
