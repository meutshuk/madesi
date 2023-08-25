import { useRef, useEffect, useState } from "react";

export default function Home() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Reset the animation by using a setTimeout
        setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Assuming 1s is your animation duration
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="scroll-snap-start shrink-0 h-screen flex justify-center items-center">
      <div
        ref={ref}
        className={`container text-center font-extrabold text-5xl md:text-7xl ${
          isVisible ? "animate-scaleUp" : ""
        }`}
      >
        Madheshi NGO Federation
      </div>
    </section>
  );
}
