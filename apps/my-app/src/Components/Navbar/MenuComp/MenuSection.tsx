import styles from './MenuSection.module.scss';

/* eslint-disable-next-line */
export interface MenuCompProps {}

export function MenuComp(props: MenuCompProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container__menu']}>
        <ul className={styles['container__menu__links']}>
          <li>Home </li>
          <li>About</li>
          <li> Contact </li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuComp;
