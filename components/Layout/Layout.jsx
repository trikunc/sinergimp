import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';

const index = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
};

export default index;
