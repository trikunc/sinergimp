import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkedIn } from '@mui/icons-material';

import styles from './ContactUs.module.css';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

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

const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setNameSender] = useState('');
  const [email, setEmailSender] = useState('');
  const [text, setTextSender] = useState('');
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();
  const { height, width } = size;
  const valueSize = height < width ? height : width;

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(`http://localhost:3000/api/reset/smp`, {
        name,
        email,
        text,
      });
      console.log('Sending email', name, email, text);

      // setEmailChecked(true);
    } catch (error) {
      // setErrorMsg(catchErrors(error));
      console.error(error);
    }
    setLoading(false);
    setNameSender('');
    setEmailSender('');
    setTextSender('');
  };

  const Styles = {
    contentHeader: {
      fontSize: valueSize > 425 ? valueSize * 0.03 : valueSize * 0.05,
      color: '#545557',
      lineHeight: '200%',
    },
    contentText: {
      fontSize: valueSize > 425 ? valueSize * 0.023 : valueSize * 0.035,
      color: 'white',
    },
    icon: { fontSize: valueSize * 0.04, color: 'white' },
    contactContent: {
      paddingLeft: '3vw',
      paddingRight: '3vw',
      height: '100%',
      overflow: 'hidden',
      height: '94vh',
      width: '35vw',
    },
  };

  return (
    <div className={styles.contactUs}>
      <div
        className={styles.borderBottom}
        style={{
          height: '6vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        // className={[styles.contactUs_header, styles.borderBottom]}
      ></div>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        backColor={true}
        valueSize={valueSize}
        defaultBack="black"
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div className={styles.contactUs_content}>
        <div
          style={{ height: '94vh', width: '20vw' }}
          className={styles.borderRight}
        ></div>
        <div className={styles.borderRight} style={Styles.contactContent}>
          <div>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={
                  valueSize > 700
                    ? {
                        marginTop: valueSize * 0.32,
                        fontSize: valueSize * 0.027,
                        color: 'white',
                      }
                    : {
                        marginTop: valueSize * 0.3,
                        fontSize: valueSize * 0.035,
                        color: 'white',
                      }
                }
              >
                feel free to contact us and we will get back to you as soon as
                we can
              </p>
              <input
                className={styles.contactInput}
                type="text"
                placeholder="name"
                style={Styles.contentText}
                onChange={(e) => setNameSender(e.target.value)}
                value={name}
                required
              />
              <input
                className={styles.contactInput}
                type="text"
                placeholder="email address"
                style={Styles.contentText}
                onChange={(e) => setEmailSender(e.target.value)}
                value={email}
                required
              />
              <input
                className={styles.contactInput}
                type="text"
                placeholder="tell us about it"
                style={Styles.contentText}
                onChange={(e) => setTextSender(e.target.value)}
                value={text}
                required
              />
              <button
                disabled={
                  name.length === 0 ||
                  email.length === 0 ||
                  text.length === 0 ||
                  loading
                }
                className={styles.contactButton}
                onClick={sendEmail}
                style={Styles.contentText}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div
          className={styles.borderRight}
          style={{ height: '94vh', width: '10vw' }}
        ></div>
        <div
          // className={styles.contactContent}
          style={Styles.contactContent}
        >
          <div style={{ marginTop: valueSize * 0.12 }}>
            <h4 style={Styles.contentHeader}>opening hours</h4>
            <p style={Styles.contentText}>Monday - Friday</p>
            <p style={Styles.contentText}>9am - 5pm</p>
            <p style={Styles.contentText}>Weekend</p>
            <p style={Styles.contentText}>Closed</p>
          </div>

          <div style={{ marginTop: valueSize * 0.04 }}>
            <h4 style={Styles.contentHeader}>address</h4>
            <p style={Styles.contentText}>
              Jl. Gatot Subroto Kav. 32-34, Kelurahan Kuningan Timur, Kecamatan
              Setia Budi, Jakarta Selatan , 12950 Gedung Patra Jasa Office
              Tower, Lantai 17 Ruang 1702-1704
            </p>
          </div>

          <div style={{ marginTop: valueSize * 0.04 }}>
            <h4 style={Styles.contentHeader}>support</h4>
            <p style={Styles.contentText}>corporates@sinergimp.co.id</p>
            <p style={Styles.contentText}>+62 21 52900252</p>
          </div>
        </div>
      </div>

      <div className={styles.lineAbsolute}></div>

      <div className={styles.textAbsolute}>
        <p style={Styles.contentText}>say hi to the team</p>
        <h1
          className={styles.h1}
          style={{
            fontSize: valueSize > 768 ? valueSize * 0.12 : valueSize * 0.07,
            color: 'white',
          }}
        >
          Contact Us
        </h1>
      </div>

      <div className={styles.sosmedAbsolute}>
        <a
          href="https://id.linkedin.com/company/sinergimp"
          style={{ marginRight: valueSize * 0.025 }}
        >
          <LinkedIn style={Styles.icon} />
          <h2 style={{ fontSize: valueSize * 0.025 }}>Linkedin</h2>
        </a>
        {/* <a href="https://google.com">
          <WhatsApp style={Styles.icon} />
          <h2 style={{ fontSize: valueSize * 0.025 }}>Whatsapp</h2>
        </a> */}
      </div>
    </div>
  );
};

export default ContactUs;
