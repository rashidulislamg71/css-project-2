import styles from ".//PrayerTime.module.css";

const PrayerTime = () => {
  return (
    <section id="prayerTime">
      <div className={styles.prayerTime_container}>
        <div className={styles.prayerTime_inner_content}>
          <div className={styles.prayerTime_text_left}>
            <p>PRAYER TIME</p>
            <h3>Today's Prayer Times</h3>
            <p>Islamic: 26 Dhul-Hijjah, 1445</p>
            <p className={styles.english_date}>Wednesday, July 03, 2024</p>{" "}
            <br />
            <q>
              O you who have belived, seek help through patience <br /> and
              prayer. Inded, Allah is with the patient.{" "}
            </q>{" "}
            <span>(2.153)</span>
          </div>
          <div className={styles.prayerTime_text_right}>
            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Tahajjud Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>Tahajjud</h3>
                <p>2:40 AM</p>
              </div>
            </div>

            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Dawn Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>FAJAR</h3>
                <p>3:51 AM</p>
              </div>
            </div>
            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Sunrise Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>ZOHAR</h3>
                <p>12:09 PM</p>
              </div>
            </div>
            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Afternoon Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>ASAR</h3>
                <p>4:48 PM</p>
              </div>
            </div>
            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Sunset Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>MAGRIB</h3>
                <p>6:57 PM</p>
              </div>
            </div>
            <div className={styles.prayer_box}>
              <div className={styles.box_content_1}>
                <b>Evening Prayer</b>
              </div>
              <div className={styles.box_content_2}>
                <h3>ISHA</h3>
                <p>8:25 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTime;
