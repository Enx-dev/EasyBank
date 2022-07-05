import styles from './Cards.module.scss';
/* eslint-disable-next-line */
export interface CardsProps {
  title: string;
  content: string;
  img: string;
  posttion: string;
}

export function Cards({ title, content, img, posttion }: CardsProps) {
  return (
    <div id="Cards" className={styles['container']}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Cards;
