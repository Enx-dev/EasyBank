import styles from './Cards.module.scss';
/* eslint-disable-next-line */
export interface CardsProps {
  title: string;
  author: string;
  img: string;
  content: string;
}

export function Cards({ author, content, img, title }: CardsProps) {
  return (
    <div className={styles['container']}>
      <img id="ArticleImg" src={img} alt={title} />
      <div id="ArticleTrigger">
        <p id="ArticleText" className={styles['author']}>
          By {author}
        </p>
        <h1 id="ArticleText" className={styles['title']}>
          {title}
        </h1>
        <p id="ArticleText" className={styles['content']}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default Cards;
