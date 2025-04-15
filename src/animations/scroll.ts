import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const SwitchLogo = (changeImageAnimation: string) => {
  const vh = (coef: any) => window.innerHeight * (coef / 100);
  const vw = (coef: any) => window.innerWidth * (coef / 100);

  const inAnimation = {
    opacity: 1,
    duration: 0.25,
    x: 0,
    ease: 'power1.out',
  };

  const outAnimation = {
    opacity: 0,
    x: -10,
    duration: 0.25,
    ease: 'power1.out',
  };

  gsap.to('.secondary-logo', { x: -10 });
  ScrollTrigger.batch(changeImageAnimation, {
    interval: 0.1,
    batchMax: 4,
    onEnter: (el) => {
      gsap.to(el, outAnimation);
      gsap.to('.secondary-logo', inAnimation);
    },
    onLeaveBack: (el) => {
      gsap.to(el, inAnimation);
      gsap.to('.secondary-logo', outAnimation);
    },
    onEnterBack: (el) => {
      gsap.to(el, inAnimation);
      gsap.to('.secondary-logo', outAnimation);
    },
    start: Math.min(vw(100), vh(100)) + ' top',
    end: 'bottom bottom',
  });
};
