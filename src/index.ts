import { gsap, ScrollTrigger } from 'gsap/all';

import { getVariable, query } from '$utils/common';

import { NavBackground, Parallax, SwitchLogo } from '$animations/scroll';
import { Fade, SlideFade } from '$animations/in';
import { NavSlideDown } from '$animations/nav';

export interface VariableTypes {
  duration: string;
  staggerDuration: string;
}

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  const variables: VariableTypes = {
    // duration: getComputedStyle(document.body).getPropertyValue(
    //   '--_animations---animation-duration'
    // ),
    // staggerDuration: getComputedStyle(document.body).getPropertyValue(
    //   '--_animations---animation-stagger'
    // ),
    duration: '0.5',
    staggerDuration: '0.1',
  };

  $('.w-nav-button').on('click', function () {
    // if (!$('.navigation').hasClass('has-bg')) {
    //   $('.navigation').css('background-color', 'red');
    // }

    const nav = $('.navigation');
    const isOpen = $(this).hasClass('w--open');
    if (!isOpen && !nav.hasClass('has-bg')) {
      gsap.to(nav, {
        duration: 0.18,
        backgroundColor: getComputedStyle(document.body).getPropertyValue(
          '--background-colour--bg-secondary'
        ),
      });
    } else if (isOpen && !nav.hasClass('has-bg')) {
      gsap.to(nav, {
        duration: 0.18,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
    }
  });

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

  const navBackground = '[animate-scroll="nav-background"]';
  if (query(navBackground)) NavBackground(navBackground);

  const parallax = '[animate-scroll="parallax"]';
  if (query(parallax)) Parallax(parallax);

  /*
    NAV SCROLL
  */
  const navSlideDown = '[animate-nav="slide-transparent"]';
  if (query(navSlideDown)) NavSlideDown(navSlideDown, variables);
});
