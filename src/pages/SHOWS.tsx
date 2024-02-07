import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SHOWS.module.css";

const SHOWS: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer7Click = useCallback(() => {
    navigate("/create-show");
  }, [navigate]);

  return (
    <div className={styles.shows}>
      <div className={styles.textParent}>
        <div className={styles.text} />
        <b className={styles.myShows}>My Shows</b>
        <img
          className={styles.logoYoutube1Icon}
          alt=""
          src="/logoyoutube-1.svg"
        />
      </div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.myPodcastParent}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
      </div>
      <div className={styles.myPodcastGroup}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.myPodcastContainer}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.frameDiv}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
      </div>
      <div className={styles.myPodcastParent1}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.myPodcastParent2}>
        <b className={styles.myPodcast}>My Podcast</b>
        <div className={styles.category}>Category:</div>
        <b className={styles.arts}>Arts</b>
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
        <b className={styles.abakilikiNigeria}>Abakiliki, Nigeria</b>
        <img className={styles.frameInner} alt="" src="/vector-5.svg" />
        <img className={styles.location1Icon} alt="" src="/location-1.svg" />
        <div className={styles.editParent}>
          <div className={styles.edit}>Edit</div>
          <img className={styles.pencil1Icon} alt="" src="/pencil-1.svg" />
        </div>
        <div className={styles.deleteParent}>
          <div className={styles.delete}>Delete</div>
          <img className={styles.trash1Icon} alt="" src="/trash-1.svg" />
        </div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.frameChild} alt="" src="/vector-3.svg" />
      </div>
      <div className={styles.createShowParent} onClick={onFrameContainer7Click}>
        <div className={styles.createShow}>Create Show</div>
        <img className={styles.add1Icon} alt="" src="/add-1.svg" />
      </div>
    </div>
  );
};

export default SHOWS;
