import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { getVariable, query } from '$utils/common';

import { SwitchLogo } from '$animations/scroll';
import { Fade, SlideFade } from '$animations/in';

export interface VariableTypes {
  duration: string;
  staggerDuration: string;
}

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  const variables: VariableTypes = {
    duration: getVariable('_animations---duration'),
    staggerDuration: getVariable('_animations---stagger-duration'),
  };

  /*
    ANIMATIONS IN
  */
  const fades = '[animate-in="fade"]';
  if (query(fades)) Fade(fades, variables);

  const slideFades = '[animate-in="slide-fade"]';
  if (query(slideFades)) SlideFade(slideFades, variables);

  /*
    ANIMATIONS SCROLL
  */
  const changeImages = '[animate-scroll="change-image"]';
  if (query(changeImages)) SwitchLogo(changeImages);
});
