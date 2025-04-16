import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const vh = (coef: any) => window.innerHeight * (coef / 100);
const vw = (coef: any) => window.innerWidth * (coef / 100);

export const SwitchLogo = (changeImageAnimation: string) => {
  const inAnimation = {
    opacity: 1,
    duration: 0.25,
    x: 0,
  };

  const outAnimation = {
    opacity: 0,
    x: -10,
    duration: 0.25,
  };

  gsap.to('.secondary-logo', { x: -10 });
  ScrollTrigger.batch(changeImageAnimation, {
    //interval: 0.1,
    //batchMax: 4,
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
    start: Math.min(vw(100), vh(50)) + ' top',
    end: 'bottom bottom',
  });
};

export const Parallax = (changeImageAnimation: string) => {
  gsap.to(changeImageAnimation, {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: changeImageAnimation,
      scrub: true,
    },
  });
};

export const NavBackground = (changeImageAnimation: string) => {
  ScrollTrigger.batch(changeImageAnimation, {
    onEnter: (el) => {
      gsap.to('.navigation', {
        duration: 0.3,
        backgroundColor: (i, el) =>
          getComputedStyle(el).getPropertyValue('--background-colour--bg-secondary'),
      });
      $('.navigation').addClass('has-bg');
    },
    onLeaveBack: (el) => {
      gsap.to('.navigation', {
        duration: 0.3,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
      $('.navigation').removeClass('has-bg');
    },
    onEnterBack: (el) => {
      gsap.to('.navigation', {
        duration: 0.3,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
      $('.navigation').removeClass('has-bg');
    },
    start: Math.min(vw(100), vh(50)) + ' top',
    end: 'bottom bottom',
  });
};
