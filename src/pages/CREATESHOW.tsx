import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CREATESHOW.module.css";

const CREATESHOW: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/shows");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/create-show");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/create-show");
  }, [navigate]);

  return (
    <div className={styles.createShow}>
      <div className={styles.textParent} onClick={onFrameContainerClick}>
        <div className={styles.text} />
        <img
          className={styles.chevronBack1Icon}
          alt=""
          src="/chevronback-1.svg"
        />
      </div>
      <div className={styles.textGroup}>
        <div className={styles.text} />
        <b className={styles.createShow1}>Create Show</b>
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
      <img className={styles.createShowChild} alt="" src="/frame-19.svg" />
      <div
        className={styles.createANewProfileWrapper}
        onClick={onFrameContainer2Click}
      >
        <b className={styles.createANew}>Create a new profile</b>
      </div>
      <img className={styles.createShowItem} alt="" src="/frame-20.svg" />
      <div
        className={styles.importExistingShowWrapper}
        onClick={onFrameContainer3Click}
      >
        <b className={styles.importExistingShow}>Import existing show</b>
      </div>
    </div>
  );
};

export default CREATESHOW;
