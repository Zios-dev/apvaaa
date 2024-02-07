import { FunctionComponent } from "react";
import styles from "./INBOX.module.css";

const INBOX: FunctionComponent = () => {
  return (
    <div className={styles.inbox}>
      <div className={styles.youCanStart10MoreConversaParent}>
        <div className={styles.youCanStartContainer}>
          <span>{`You can start `}</span>
          <b>10</b>
          <span>{` more conversations. Your limit resets in `}</span>
          <b>29</b>
          <span> days</span>
        </div>
        <div className={styles.unlockUnlimitedConversationsParent}>
          <div className={styles.unlockUnlimitedConversations}>
            Unlock Unlimited Conversations
          </div>
          <img className={styles.lockOpen1Icon} alt="" src="/lockopen-1.svg" />
        </div>
      </div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.searchByNameParent}>
        <div className={styles.searchByName}>Search by name</div>
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
      </div>
      <img
        className={styles.messagingAmico1Icon}
        alt=""
        src="/messagingamico-1.svg"
      />
      <b className={styles.noConversationSelected}>No conversation selected</b>
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.frameParent}>
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

export default INBOX;
