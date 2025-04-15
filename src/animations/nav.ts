import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import type { VariableTypes } from '../index';

export const NavSlideDown = (slideFadeAnimation: string, variables: VariableTypes) => {
  const vh = (coef: any) => window.innerHeight * (coef / 100);
  const vw = (coef: any) => window.innerWidth * (coef / 100);

  ScrollTrigger.batch(slideFadeAnimation, {
    onEnter: (el) => {
      //gsap.to(slideFadeAnimation, inAnimation);
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'var(--_theme---background)',
        duration: 2,
        ease: 'elastic.out(1,0.5)',
      });
    },
    onLeaveBack: (el) => {
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'transparent',
        duration: 2,
        ease: 'elastic.out(1,0.5)',
      });
    },
    onEnterBack: (el) => {
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'transparent',
        duration: 2,
        ease: 'elastic.out(1,0.5)',
      });
    },
    start: Math.min(vw(100), vh(50)) + ' top',
    end: 'bottom bottom',
  });
};
