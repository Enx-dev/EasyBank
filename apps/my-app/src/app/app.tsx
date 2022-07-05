// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ArticleSection from '../Components/ArticleSection/ArticleSection';
import FooterSection from '../Components/FooterSection/FooterSection';
import HeroSection from '../Components/HeroSection/HeroSection';
import InfoSection from '../Components/InfoSection/InfoSection';
import Navbar from '../Components/Navbar/Navbar';
import styles from './app.module.scss';
import Animations from '../animations/index';

export function App() {
  return (
    <div className={styles['App']}>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ArticleSection />
      <FooterSection />
      <Animations />
    </div>
  );
}

export default App;
