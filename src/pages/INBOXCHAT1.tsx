import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./INBOXCHAT1.module.css";

const INBOXCHAT1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/inbox-chat1");
  }, [navigate]);

  return (
    <div className={styles.inboxChat}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.frameParent} onClick={onFrameContainerClick}>
        <img className={styles.frameChild} alt="" src="/frame-11@2x.png" />
        <div className={styles.imOkayHows}>
          I’m okay. How’s your day going so far ?
        </div>
        <div className={styles.m}>30m</div>
        <b className={styles.emmanuelJohnson}>Emmanuel Johnson</b>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-11@2x.png" />
        <div className={styles.imOkayHows}>How’re you doing ?</div>
        <div className={styles.h}>1h</div>
        <b className={styles.emmanuelJohnson}>Jack Snow</b>
      </div>
      <div className={styles.frameContainer}>
        <img className={styles.frameChild} alt="" src="/frame-11@2x.png" />
        <div className={styles.imOkayHows}>Hey can you join my podcast ?</div>
        <div className={styles.h}>2h</div>
        <b className={styles.emmanuelJohnson}>Jack Snow</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.allMessages0Wrapper}>
          <div className={styles.allMessages0}>All messages (0)</div>
        </div>
        <div className={styles.unreadMessages0Wrapper}>
          <div className={styles.allMessages0}>Unread messages (0)</div>
        </div>
        <div className={styles.textParent}>
          <div className={styles.text} />
          <b className={styles.inboxes}>Inboxes</b>
          <img className={styles.mailOpen1Icon} alt="" src="/mailopen-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default INBOXCHAT1;
