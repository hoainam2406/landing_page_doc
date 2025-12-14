import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

export function useScrollAnimation(
  elementRef: Ref<HTMLElement | null>,
  options = {}
) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px",
    ...options,
  };

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!elementRef.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, defaultOptions);

    // Add initial hidden state
    elementRef.value.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700"
    );
    observer.observe(elementRef.value);
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
