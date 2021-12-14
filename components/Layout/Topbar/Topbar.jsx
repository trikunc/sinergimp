import styles from './Topbar.module.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <span className={styles.logo}>SMP dashboard</span>
        </div>
        {/* <div className={styles.topRight}>
          <div className={styles.topbarIconContainer}>
            <NotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Language />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Settings />
          </div>
          <AccountCircleIcon className={styles.topAvatar} />
          <Image src={AccountCircleIcon} alt="" className={styles.topAvatar} />
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
