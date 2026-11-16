import { Link } from 'react-router-dom'
import { FaRobot, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.brandName}>
            <FaRobot className={styles.brandIcon} aria-hidden="true" />
            <span>AI Code Reviewer</span>
          </div>
          <p className={styles.brandDesc}>
            Free, instant AI-powered code review. No sign-up required.
          </p>
          {/* AdSense disclosure — required: users must know ads appear on the site */}
          <p className={styles.adsDisclosure}>
            This site may display advertisements served by{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.disclosureLink}
            >
              Google AdSense
            </a>
            . Ads are clearly labelled and are never placed to mislead navigation.
          </p>
        </div>

        {/* Navigation columns */}
        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colTitle}>Tool</p>
            <ul className={styles.colLinks}>
              <li><Link to="/" className={styles.link}>Code Reviewer</Link></li>
              <li><Link to="/about" className={styles.link}>About</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Legal</p>
            <ul className={styles.colLinks}>
              <li><Link to="/privacy" className={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={styles.link}>Terms of Service</Link></li>
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Opt out of personalised ads
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Author</p>
            <ul className={styles.colLinks}>
              <li>
                <a
                  href="https://github.com/Gauravlodhi530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaGithub className={styles.socialIcon} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gauravlodhi530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaLinkedin className={styles.socialIcon} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} AI Code Reviewer by Gaurav Lodhi. Released under the{' '}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.disclosureLink}
          >
            MIT License
          </a>
          .
        </p>
        <p className={styles.bottomRight}>
          Powered by{' '}
          <a
            href="https://ai.google.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.disclosureLink}
          >
            Google Gemini
          </a>
        </p>
      </div>
    </footer>
  )
}
