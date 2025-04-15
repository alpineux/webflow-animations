/*
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import type { VariableTypes } from '../index';

export const NavSlideDown = (slideFadeAnimation: string, variables: VariableTypes) => {
  gsap.set(slideFadeAnimation, { position: 'absolute', top: 0, width: '100%' });
  gsap.set('.navigation', { backgroundColor: 'transparent' });
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
*/

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import type { VariableTypes } from '../index';

export const NavSlideDown = (slideFadeAnimation: string, variables: VariableTypes) => {
  const vh = (coef: any) => window.innerHeight * (coef / 100);
  const vw = (coef: any) => window.innerWidth * (coef / 100);

  // const inAnimation = {
  //   // position: 'sticky',
  //   // top: 0,
  //   // width: '100%',
  //   ease: 'power1.out',
  // };
  //
  // const outAnimation = {
  //   // position: 'absolute',
  //   // width: '100%',
  //   ease: 'power1.out',
  // };

  ScrollTrigger.batch(slideFadeAnimation, {
    onEnter: (el) => {
      //gsap.to(slideFadeAnimation, inAnimation);
      gsap.to(slideFadeAnimation, {
        backgroundColor: 'var(--background-colour--bg-secondary)',
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
