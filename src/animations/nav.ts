import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import type { VariableTypes } from '../index';

export const NavSlideDown = (slideFadeAnimation: string, variables: VariableTypes) => {
  const vh = (coef: any) => window.innerHeight * (coef / 100);
  const vw = (coef: any) => window.innerWidth * (coef / 100);

  const inAnimation = {
    backgroundColor: 'red',
    duration: 0.25,
    ease: 'none',
  };

  ScrollTrigger.batch(slideFadeAnimation, {
    onEnter: (el) => {
      //gsap.to(slideFadeAnimation, inAnimation);
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'red',
        duration: 0.25,
        ease: 'none',
      });
    },
    onLeaveBack: (el) => {
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'transparent',
        duration: 1,
        ease: 'none',
      });
    },
    onEnterBack: (el) => {
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'transparent',
        duration: 1,
        ease: 'none',
      });
    },
    //start: Math.min(vw(100), vh(50)) + ' top',
    start: 'top top',
    end: 'bottom bottom',
  });
};
