import { useEffect, useState } from 'react';
import styles from './newContact.module.css';
import Button from '../../components/Button';

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

const NewContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setNameSender] = useState('');
  const [email, setEmailSender] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setTextSender] = useState('');
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();
  const { height, width } = size;
  const valueSize = height < width ? height : width;

  return (
    <div className={styles.contact}>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        valueSize={valueSize}
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2 className={styles.h2}>Contact</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}
        </div>

        <div className={styles.row}>
          <div className={styles.info_container}>
            <div className={styles.info}>
              <div>
                <i className={styles.icon}></i>
                <h4 className={styles.info_h4}>Location:</h4>
                <p className={styles.info_p}>
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>

              <div>
                <i className={styles.icon}></i>
                <h4 className={styles.info_h4}>Email:</h4>
                <p className={styles.info_p}>info@example.com</p>
              </div>

              <div className="phone">
                <i className={styles.icon}></i>
                <h4 className={styles.info_h4}>Call:</h4>
                <p className={styles.info_p}>+1 5589 55488 55s</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: 290 }}
                // style="border:0; width: 100%; height: 290px;"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.form_container}>
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className={styles.form}
            >
              <div className={styles.form_row}>
                <div className={styles.form_group}>
                  <label className={styles.label} htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={styles.input}
                    onChange={(e) => setNameSender(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.label} htmlFor="name">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className={styles.input}
                    name="email"
                    onChange={(e) => setEmailSender(e.target.value)}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className={styles.form_group}>
                <label className={styles.label} htmlFor="name">
                  Subject
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  required
                />
              </div>
              <div className={styles.form_group}>
                <label className={styles.label} htmlFor="name">
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  rows="10"
                  onChange={(e) => setTextSender(e.target.value)}
                  value={text}
                  required
                ></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
              <div className={styles.form_button_container}>
                <div className={styles.form_button}>
                  <Button text="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
