import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import type { VariableTypes } from '../index';

export const SlideFade = (slideFadeAnimation: string, variables: VariableTypes) => {
  gsap.set(slideFadeAnimation, { opacity: 0, y: 50 });
  ScrollTrigger.batch(slideFadeAnimation, {
    interval: 0.1,
    batchMax: 4,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: variables.staggerDuration,
        duration: variables.duration,
        ease: 'power1.out',
      }),
    start: '20px bottom',
    end: 'top top',
  });
};

export const Fade = (fadeAnimation: string, variables: VariableTypes) => {
  gsap.set(fadeAnimation, { opacity: 0 });
  ScrollTrigger.batch(fadeAnimation, {
    interval: 0.1,
    batchMax: 4,
    onEnter: (item) =>
      gsap.to(item, {
        autoAlpha: 1,
        stagger: variables.staggerDuration,
        duration: variables.duration,
        ease: 'power1.out',
      }),
    start: '20px bottom',
    end: 'top top',
  });
};
