import styles from './ArticleSection.module.scss';
import Cards from './Cards/Cards';

/* eslint-disable-next-line */
export interface ArticleSectionProps {}

export function ArticleSection(props: ArticleSectionProps) {
  return (
    <section id="Articles" className={styles['container']}>
      <h1 className={styles['container__title']}>Latest Articles</h1>
      <div className={styles['container__articles']}>
        <Cards
          author="Claire Robinson"
          content="  The world is getting smaller and we’re becoming more mobile. So why should you be
          forced to only receive money in a single …"
          title="Receive money in any currency with no fees"
          img="../../assets/images/image-currency.jpg"
        />
        <Cards
          author="Wilson Hutton"
          content="Our simple budgeting feature allows you to separate out your spending and set
  realistic limits each month. That means you …
"
          title="Treat yourself without worrying about money"
          img="../../assets/images/image-restaurant.jpg"
        />
        <Cards
          author="Wilson Hutton"
          content=" We want you to enjoy your travels. This is why we don’t charge any fees on purchases
  while you’re abroad. We’ll even show you …
"
          title="  Take your Easybank card wherever you go"
          img="../../assets/images/image-plane.jpg"
        />
        <Cards
          author="Claire Robinson"
          content="  After a lot of hard work by the whole team, we’re excited to launch our closed beta.
  It’s easy to request an invite through the site ...
"
          title=" Our invite-only Beta accounts are now live!"
          img="../../assets/images/image-confetti.jpg"
        />
      </div>
    </section>
  );
}

//
//

//   By
//

//   By
//

//   By
//

export default ArticleSection;
