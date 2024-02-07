import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./INBOXCHAT.module.css";

const INBOXCHAT: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/inbox-chat");
  }, [navigate]);

  return (
    <div className={styles.inboxChat}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.frameParent}>
        <div className={styles.textParent} onClick={onFrameContainerClick}>
          <div className={styles.text} />
          <img
            className={styles.chevronBack1Icon}
            alt=""
            src="/chevronback-1.svg"
          />
        </div>
        <img className={styles.frameChild} alt="" src="/frame-11@2x.png" />
        <div className={styles.oyoNigeria}>Oyo, Nigeria</div>
        <img className={styles.frameItem} alt="" src="/vector-3.svg" />
        <img className={styles.frameInner} alt="" src="/frame-18788@2x.png" />
        <div className={styles.seen225pm}>Seen 2:25pm</div>
        <img className={styles.frameIcon} alt="" src="/frame-18791@2x.png" />
        <img className={styles.frameChild1} alt="" src="/frame-18792@2x.png" />
        <div className={styles.imOkayHowsYourDayGoingWrapper}>
          <div className={styles.imOkayHows}>
            I’m okay. How’s your day going so far ?
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.typeAMessageWrapper}>
            <div className={styles.typeAMessage}>Type a message..</div>
          </div>
          <img className={styles.frameChild2} alt="" src="/frame-18792.svg" />
        </div>
        <b className={styles.emmanuelJohnson}>Emmanuel Johnson</b>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.allMessages0Wrapper}>
          <div className={styles.allMessages0}>All messages (0)</div>
        </div>
        <div className={styles.unreadMessages0Wrapper}>
          <div className={styles.allMessages0}>Unread messages (0)</div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.text} />
          <b className={styles.inboxes}>Inboxes</b>
          <img className={styles.mailOpen1Icon} alt="" src="/mailopen-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default INBOXCHAT;
