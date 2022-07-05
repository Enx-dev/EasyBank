import Cards from './Cards/Cards';
import styles from './InfoSection.module.scss';
import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useEffect } from 'react';
/* eslint-disable-next-line */
export interface InfoSectionProps {}

export function InfoSection(props: InfoSectionProps) {
  return (
    <section id="InfoSection" className={styles['container']}>
      <h1 id="InfoTitle" className={styles['container__title']}>
        Why choose Easybank?
      </h1>
      <p className={styles['container__text']}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className={styles['container__cards']}>
        <Cards
          posttion="-100vw"
          title="Online Banking"
          content="  Our modern web and mobile applications allow you to keep track of your finances
          wherever you are in the world."
          img="../../assets/images/icon-online.svg"
        />
        <Cards
          posttion="100vw"
          title="Simple Budgeting"
          content=" See exactly where your money goes each month. Receive notifications when you’re
  lose to hitting your limits.
"
          img="../../assets/images/icon-budgeting.svg"
        />
        <Cards
          posttion="-100vw"
          title="Fast Onboarding"
          content="We don’t do branches. Open your account in minutes online and start taking control
  of your finances right away.
"
          img="../../assets/images/icon-onboarding.svg"
        />
        <Cards
          posttion="100vw"
          title=" Open API"
          content="Manage your savings, investments, pension, and much more from one account. Tracking
  your money has never been easier.
"
          img="../../assets/images/icon-api.svg"
        />
      </div>
    </section>
  );
}

export default InfoSection;
//

//

//

//
