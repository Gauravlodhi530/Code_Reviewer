import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import styles from './StaticPage.module.css'

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service – AI Code Reviewer"
        description="Terms of Service for AI Code Reviewer. Free to use. AI reviews are informational only. Read before using the service."
        path="/terms"
      />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Effective date: 1 November 2026 · Last updated: 16 November 2026</p>

          <section className={styles.section}>
            <h2>1. Acceptance of terms</h2>
            <p>
              By accessing or using AI Code Reviewer ("the Service"), you agree to be bound
              by these Terms of Service and our{' '}
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>. If you do
              not agree to both, you may not use the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Description of service</h2>
            <p>
              The Service provides AI-generated code review feedback. You submit a code
              snippet through the web interface; our backend forwards it to the Google Gemini
              AI API and returns a Markdown-formatted review. The Service is provided free of
              charge, with no registration required.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Acceptable use</h2>
            <p>You may use the Service for personal or commercial code review. You agree not to:</p>
            <ul className={styles.list}>
              <li>Submit code that contains passwords, API keys, private keys, or credentials of any kind.</li>
              <li>Use the Service to generate, assist with, or review harmful, illegal, or malicious code.</li>
              <li>Attempt to abuse, reverse-engineer, probe, or overload the Service or its infrastructure.</li>
              <li>Use automated bots or scripts to send bulk requests without prior written permission.</li>
              <li>Resell or repackage the Service's output as a competing product without attribution.</li>
              <li>Use the Service in any way that violates applicable laws or regulations.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Advertising</h2>
            <p>
              The Service displays advertisements through Google AdSense to help fund
              operating costs. Advertisements are clearly labelled "Advertisement" and are
              visually separated from the Service's functional content. By using the Service
              you acknowledge that:
            </p>
            <ul className={styles.list}>
              <li>Ads are served by Google and are subject to Google's advertising policies.</li>
              <li>
                You will not click on ads artificially or encourage others to do so.
                Doing so violates{' '}
                <a
                  href="https://support.google.com/adsense/answer/48182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Google AdSense programme policies
                </a>
                {' '}and may result in the Service being suspended.
              </li>
              <li>
                You can opt out of personalised ads at{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  google.com/settings/ads
                </a>
                .
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Intellectual property</h2>
            <p>
              You retain full ownership of the code you submit. We claim no intellectual
              property rights over your code or the AI-generated review output. The review
              output is provided to you for your personal use and you may use it freely.
            </p>
            <p>
              The Service's source code, design, and branding are owned by Gaurav Lodhi
              and are released under the MIT License. You may not reproduce the site's
              branding (name, logo) in a way that implies endorsement or affiliation.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Disclaimer of warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any
              kind, express or implied. We do not warrant that:
            </p>
            <ul className={styles.list}>
              <li>AI-generated reviews are accurate, complete, or free from errors.</li>
              <li>The Service will be uninterrupted, secure, or error-free.</li>
              <li>The Service is suitable for any particular purpose.</li>
            </ul>
            <p>
              AI reviews are informational only. <strong>Do not rely solely on this Service
              for security-critical decisions or production deployments.</strong> Always apply
              your own engineering judgment.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Gaurav Lodhi and
              contributors to the Service shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages — including loss of data, revenue,
              or profits — arising out of or in connection with your use of the Service, even
              if advised of the possibility of such damages.
            </p>
            <p>
              Our total liability for any claim arising out of the use of the Service is
              limited to INR 1,000 (Indian Rupees one thousand only).
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Gaurav Lodhi and any contributors from
              any claim, damage, loss, or expense (including reasonable legal fees) arising
              from your use of the Service, your violation of these Terms, or your violation
              of any third party's rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Third-party services</h2>
            <p>
              The Service integrates with Google Gemini AI and Google AdSense. Your use of
              these integrations is also subject to{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google's Terms of Service
              </a>
              . We are not responsible for the conduct or content of third-party services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Availability and modifications</h2>
            <p>
              We may suspend, modify, or discontinue the Service at any time without prior
              notice. We reserve the right to change these Terms at any time. Changes take
              effect when published at this URL. Continued use after changes are posted
              constitutes acceptance.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Governing law and disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India,
              without regard to conflict-of-law principles. Any dispute arising under or
              in connection with these Terms shall be subject to the exclusive jurisdiction
              of the courts of Madhya Pradesh, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact</h2>
            <p>
              Questions about these Terms may be directed to:{' '}
              <a href="mailto:gauravlodhi530@gmail.com" className={styles.link}>
                gauravlodhi530@gmail.com
              </a>
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
