import { FunctionComponent } from "react";
import styles from "./ACCOUNTSETTINGS.module.css";

const ACCOUNTSETTINGS: FunctionComponent = () => {
  return (
    <div className={styles.accountSettings}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.discover}>Discover</b>
      <b className={styles.blog}>Blog</b>
      <b className={styles.contactUs}>{`Contact Us `}</b>
      <div className={styles.asAFreeContainer}>
        <p className={styles.asAFreePlanUserYouAreA}>
          <span>{`As a free plan user, you are able to start a limited number of conversations per month. Your limit will reset on  `}</span>
          <b>21st February 2023.</b>
        </p>
        <p className={styles.asAFreePlanUserYouAreA}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.asAFreePlanUserYouAreA}>
          Remove the limit and get access to more features by upgrading to Pro.
        </p>
      </div>
      <div className={styles.cautionThisAction}>
        Caution: This action is irreversible. All your conversations and profile
        data linked to this personal account will be permanently deleted.
      </div>
      <b className={styles.subscriptionPlanFree}>Subscription Plan: Free</b>
      <b className={styles.dangerZone}>Danger Zone</b>
      <div className={styles.upgradeToProWrapper}>
        <div className={styles.upgradeToPro}>Upgrade to Pro</div>
      </div>
      <div className={styles.deleteThisAccountWrapper}>
        <div className={styles.deleteThisAccount}>Delete this Account</div>
      </div>
      <img className={styles.accountSettingsChild} alt="" src="/vector-3.svg" />
      <b className={styles.myAvailability}>My Availability</b>
      <b className={styles.bookingSettings}>Booking Settings</b>
      <b className={styles.monday}>Monday:</b>
      <img className={styles.accountSettingsItem} alt="" src="/vector-3.svg" />
      <img
        className={styles.checkboxOutline1Icon}
        alt=""
        src="/checkboxoutline-1.svg"
      />
      <div className={styles.parent}>
        <div className={styles.div}>09:30</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.utcParent}>
        <div className={styles.div}>UTC</div>
        <img className={styles.frameItem} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.group}>
        <div className={styles.div}>16:00</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.to}>to</div>
      <b className={styles.tuesday}>Tuesday:</b>
      <img
        className={styles.checkboxOutline2Icon}
        alt=""
        src="/checkboxoutline-1.svg"
      />
      <div className={styles.container}>
        <div className={styles.div}>09:30</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div}>16:00</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.to1}>to</div>
      <b className={styles.wednesday}>Wednesday:</b>
      <img
        className={styles.checkboxOutline3Icon}
        alt=""
        src="/checkboxoutline-1.svg"
      />
      <div className={styles.parent1}>
        <div className={styles.div}>09:30</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.parent2}>
        <div className={styles.div}>16:00</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.to2}>to</div>
      <b className={styles.thursday}>Thursday:</b>
      <img
        className={styles.checkboxOutline4Icon}
        alt=""
        src="/checkboxoutline-1.svg"
      />
      <div className={styles.parent3}>
        <div className={styles.div}>09:30</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.parent4}>
        <div className={styles.div}>16:00</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.to3}>to</div>
      <b className={styles.friday}>Friday:</b>
      <img
        className={styles.checkboxOutline5Icon}
        alt=""
        src="/checkboxoutline-1.svg"
      />
      <div className={styles.parent5}>
        <div className={styles.div}>09:30</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.parent6}>
        <div className={styles.div}>16:00</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.to4}>to</div>
      <b className={styles.saturday}>Saturday:</b>
      <img
        className={styles.checkboxOutline6Icon}
        alt=""
        src="/checkboxoutline-6.svg"
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.unavailableWrapper}>
        <div className={styles.unavailable}>Unavailable</div>
      </div>
      <b className={styles.sunday}>Sunday:</b>
      <div className={styles.checkboxOutline7} />
      <div className={styles.unavailableContainer}>
        <div className={styles.unavailable}>Unavailable</div>
      </div>
      <div className={styles.bookingsIsCurrentlyInBetaWrapper}>
        <div className={styles.bookingsIsCurrentlyContainer}>
          <span>{`Bookings is currently in beta, if you have any feedback from using bookings please submit a `}</span>
          <b className={styles.featureRequest}>feature request</b>
        </div>
      </div>
      <div className={styles.timezoneThisIs}>
        Timezone, this is used for bookings
      </div>
      <div className={styles.frameParent}>
        <div className={styles.generalWrapper}>
          <div className={styles.general}>General</div>
        </div>
        <div className={styles.blockingsWrapper}>
          <div className={styles.blockings}>Blockings</div>
        </div>
        <div className={styles.bookingsWrapper}>
          <div className={styles.bookings}>Bookings</div>
        </div>
        <div className={styles.textParent}>
          <div className={styles.text} />
          <b className={styles.accountSettings1}>Account Settings</b>
          <img className={styles.settings1Icon} alt="" src="/settings-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ACCOUNTSETTINGS;
