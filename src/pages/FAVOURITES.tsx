import { FunctionComponent } from "react";
import styles from "./FAVOURITES.module.css";

const FAVOURITES: FunctionComponent = () => {
  return (
    <div className={styles.favourites}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.sortByLast}>Sort by: Last seen</div>
      <div className={styles.fatimaFatimaParent}>
        <b className={styles.fatimaFatima}>Fatima Fatima</b>
        <div className={styles.lagosNigeria}>Lagos, Nigeria</div>
        <b className={styles.interests}>Interests</b>
        <div className={styles.arts}>Arts</div>
        <div className={styles.lastSeen2}>Last seen 2 hours ago</div>
        <img className={styles.frameChild} alt="" src="/frame-10.svg" />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.johnEmmanuelParent}>
        <b className={styles.fatimaFatima}>John Emmanuel</b>
        <div className={styles.lagosNigeria}>Lagos, Nigeria</div>
        <b className={styles.interests}>Interests</b>
        <div className={styles.arts}>Tech</div>
        <div className={styles.online}>Online</div>
        <img className={styles.frameChild} alt="" src="/frame-10.svg" />
        <div className={styles.ellipseDiv} />
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <img className={styles.image5Icon1} alt="" src="/image-5@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.allProfilesWrapper}>
          <div className={styles.allProfiles}>All Profiles</div>
        </div>
        <div className={styles.guestsWrapper}>
          <div className={styles.guests}>Guests</div>
        </div>
        <div className={styles.showsWrapper}>
          <div className={styles.shows}>Shows</div>
        </div>
        <div className={styles.textParent}>
          <div className={styles.text} />
          <b className={styles.favourites1}>Favourites</b>
          <img className={styles.heart1Icon} alt="" src="/heart-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default FAVOURITES;
