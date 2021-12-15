import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './login.module.css';
import Button from '../../components/Button';
import Logo from '../../public/img/LogoCrop.png';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const size = useWindowSize();
  const { height, width } = size;
  const valueSize = height < width ? height : width;

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2 className={styles.h2}>
            <Image src={Logo} width={"30%"} height={"30%"} alt="logo" /> Sinergi Merah Putih
          </h2>
        </div>

        <div className={styles.row}>
          <div className={styles.form_container}>
            <form
              // action="forms/contact.php"
              method="post"
              role="form"
              className={styles.form}
            >
              <h2 className={styles.form_title}>Login to Your Account</h2>

              <div className={styles.form_group}>
                <label className={styles.label} htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </div>
              
              <div className={styles.form_group}>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className={styles.input}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              
              <div className={styles.form_button_container}>
                <div className={styles.form_button}>
                  {/* <Link href="/dashboard" className={styles.link} passHref>
                    <Button text="Send Message" />
                  </Link> */}
                  <Button text="Login" link={"/dashboard"}/>
                </div>
              </div>

              <span>Don't have account? <a href={"/register"}><strong>Create an account</strong></a></span>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
