import styles from "./Service.module.css";

import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";
import { FaMosque } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const Service = () => {
  return (
    <section id="services">
      <div className={styles.services_container}>
        <h4>Services</h4>
        <h2>Our Services For Humanity</h2>
        <div className={styles.services_inner_content}>
          <div className={styles.single_services}>
            <div className={styles.services_icon}>
              <FaHandsHoldingChild />
            </div>
            <div className={styles.services_title}>
              <h3>Spacial Child Care</h3>
            </div>
            <div className={styles.services_text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet molestiae culpa accusantium minima adipisci ducimus. Ab dolore temporibus modi velit, blanditiis iste ipsam? Dolores omnis mollitia ipsum iusto praesentium.
              </p>
            </div>
            <div className={styles.services_see_more_btn}><button>See More</button></div>
          </div>


          <div className={styles.single_services}>
            <div className={`${styles.services_icon} ${styles.services_quran_icon}`}>
              <FaBookQuran /> 
            </div>
            <div className={styles.services_title}>
              <h3>Quran Memorization</h3>
            </div>
            <div className={styles.services_text}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet molestiae culpa accusantium minima adipisci ducimus. Ab dolore temporibus modi velit, blanditiis iste ipsam? 
              Dolores omnis mollitia ipsum iusto praesentium.
              </p>
            </div>
            <div className={styles.services_see_more_btn}><button>See More</button></div>
          </div>


          <div className={styles.single_services}>
            <div className={styles.services_icon}>
              <FaMosque />
            </div>
            <div className={styles.services_title}>
              <h3>Mosque Development</h3>
            </div>
            <div className={styles.services_text}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet molestiae culpa accusantium minima adipisci ducimus. Ab dolore temporibus modi velit, blanditiis iste ipsam? Dolores omnis mollitia ipsum iusto praesentium.
              </p>
            </div>
            <div className={styles.services_see_more_btn}><button>See More</button></div>
          </div>


          <div className={styles.single_services}>
            <div className={styles.services_icon}>
              <FaHandsHelping />
            </div>
            <div className={styles.services_title}>
              <h3>Help Poor</h3>
            </div>
            <div className={styles.services_text}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet molestiae culpa accusantium minima adipisci ducimus. Ab dolore temporibus modi velit, blanditiis iste ipsam? Dolores omnis mollitia ipsum iusto praesentium.
              </p>
            </div>
            <div className={styles.services_see_more_btn}><button>See More</button></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
