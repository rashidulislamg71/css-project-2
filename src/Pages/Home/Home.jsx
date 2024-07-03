import styles from "./Home.module.css";
import quranReadingMan from "..//..//assets/IMG/css_project_1_img/quran man.png"
import PrayerTime from "../../Component/PrayerTime/PrayerTime";
import VideoPlayer from "../../Component/VideoPlayer/VideoPlayer";
import Service from "../../Component/Service/Service";

const Home = () => {
  return (
    <section id="home_section">
      <div className={styles.home_container}>
        <div className={styles.home_inner_content}>
          <div className={styles.hero_container}>
            <div className={styles.hero_inner_content}>
              <div className={styles.hero_text}>
                <h5>Bismillah Hir Rahman Nir Rahim</h5>
                <h1>Read! in th e Name of <br />
                 Allah Who has Created</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing  elit.
                  Itaque, quisquam. Id optio doloribus veritatis numquam 
                  recusandae aperiam architecto eaque ratione.
                </p>

                <a href="#">
                  <button>Discover More</button>
                </a>
              </div>
              <div className={styles.hero_img}>
                <img src={quranReadingMan} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrayerTime />

      <Service />

    </section>
  );
};

export default Home;
