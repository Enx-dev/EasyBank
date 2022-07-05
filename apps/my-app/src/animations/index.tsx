/* eslint-disable-file */
import React, { useEffect } from 'react';
import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import DrawSvgPlugin from 'gsap-trial/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger, DrawSvgPlugin);
const Index = () => {
  useEffect(() => {
    const tl = gsap.fromTo(
      '#InfoTitle',
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.2, yoyo: true }
    );
    /* eslint-disable-next-line */
    gsap.utils.toArray('#ArticleImg').forEach((img: any, i) => {
      gsap.fromTo(
        img,
        { scale: 1.1, opacity: 0.5 },
        {
          duration: 1,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: 'top 95%',
          },
        }
      );
    });
    /* eslint-disable-next-line */
    gsap.utils.toArray('#ArticleText').forEach((text: any, i) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: { trigger: text, start: 'top 90%' },
          stagger: 0.2,
        }
      );
    });
    ScrollTrigger.saveStyles('#Cards, #FrontImg, #stagger');
    ScrollTrigger.create({
      trigger: '#InfoSection',
      start: 'top 70%',
      animation: tl,
    });
    ScrollTrigger.matchMedia({
      '(max-width: 768px)': function () {
        /* eslint-disable-next-line */
        const Cards: any = gsap.utils.toArray('#Cards');
        gsap.fromTo(
          Cards[0],
          {
            x: '-100vw',
            duration: 2,
          },
          { scrollTrigger: { trigger: Cards[0], start: 'top 70%' }, x: 0 }
        );
        gsap.fromTo(
          Cards[1],
          {
            x: '100vw',
          },
          {
            scrollTrigger: { trigger: Cards[1], start: 'top 70%' },
            x: 0,
            duration: 0.5,
          }
        );
        gsap.fromTo(
          Cards[2],
          {
            x: '-100vw',
            duration: 2,
          },
          { scrollTrigger: { trigger: Cards[2], start: 'top 70%' }, x: 0 }
        );
        gsap.fromTo(
          Cards[3],
          {
            x: '100vw',
            duration: 2,
          },
          { scrollTrigger: { trigger: Cards[3], start: 'top 70%' }, x: 0 }
        );
        const tl = gsap.fromTo(
          '#stagger',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
            delay: 0.5,
            stagger: {
              amount: 0.5,
              ease: 'circIn',
            },
          }
        );
        gsap.fromTo(
          '#FrontImg',
          { y: '-100%', opacity: 0 },
          { y: 0, duration: 0.5, opacity: 1, delay: 0.5, ease: 'power1.in' }
        );
        ScrollTrigger.create({
          trigger: '#HeroSection',
          start: '20% 30%',
          animation: tl,
        });
      },
      '(min-width: 768px)': function () {
        /* eslint-disable-next-line */
        gsap.utils.toArray('#Cards').forEach((card: any, i) => {
          gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.4,
              duration: 1,
              scrollTrigger: {
                trigger: '#InfoSection',
                start: 'top 60%',
              },
            }
          );
        });

        gsap.fromTo(
          '#stagger',
          { opacity: 0, y: -100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            stagger: {
              amount: 0.5,
              ease: 'power1.in',
            },
          }
        );
        gsap.fromTo(
          '#FrontImg',
          { x: '50vw', opacity: 0 },
          { x: 0, duration: 1, opacity: 1, delay: 0.5, ease: 'power1.in' }
        );
      },
    });
  }, []);

  return <div className="hidden">Index</div>;
};

export default Index;
