import React, { useEffect, useRef, useState } from 'react';

export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 1000,
  className = '', 
  once = true,
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  let baseClass = "transition-all ease-out";
  let hiddenClass = "";
  let visibleClass = "opacity-100 translate-x-0 translate-y-0 scale-100";

  switch (animation) {
    case 'fade-up':
      hiddenClass = "opacity-0 translate-y-12";
      break;
    case 'fade-down':
      hiddenClass = "opacity-0 -translate-y-12";
      break;
    case 'slide-left':
      // comes FROM the right
      hiddenClass = "opacity-0 translate-x-12"; 
      break;
    case 'slide-right':
      // comes FROM the left
      hiddenClass = "opacity-0 -translate-x-12";
      break;
    case 'scale-up':
      hiddenClass = "opacity-0 scale-95";
      break;
    case 'fade-in':
    default:
      hiddenClass = "opacity-0";
      break;
  }

  return (
    <div
      ref={domRef}
      className={`${baseClass} ${isVisible ? visibleClass : hiddenClass} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};
