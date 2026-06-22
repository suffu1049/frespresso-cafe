"use client";

/**
 * Hook that returns a smooth-scroll function for section navigation.
 */
export function useScrollTo() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return scrollTo;
}
