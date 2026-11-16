import SEOHead from '../components/SEOHead'
import styles from './StaticPage.module.css'

/**
 * Privacy Policy — AdSense program policy compliance notes:
 *
 * Google AdSense requires publishers to:
 * 1. Have a Privacy Policy that discloses the use of cookies by third-party vendors.
 * 2. Explicitly mention Google as a third-party vendor using cookies (DoubleClick cookie).
 * 3. Inform users about personalised advertising and how to opt out.
 * 4. Comply with applicable privacy laws (GDPR, CCPA, IT Act 2000).
 * 5. Provide a clear contact mechanism.
 *
 * All five requirements are met in this policy.
 */

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy – AI Code Reviewer"
        description="Privacy Policy for AI Code Reviewer. We do not store your code. We use Google AdSense which may set cookies for advertising."
        path="/privacy"
      />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Effective date: 1 November 2026 · Last updated: 16 November 2026</p>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              AI Code Reviewer ("we", "our", or "the Service") is operated by Gaurav Lodhi
              and is accessible at{' '}
              <a href="https://code-reviewer-g.vercel.app" className={styles.link}>
                https://code-reviewer-g.vercel.app
              </a>
              . This Privacy Policy explains what data we collect, how we use it, and your
              rights in relation to it. By using the Service you agree to the practices
              described here.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Data we collect</h2>
            <p>We collect the following categories of data:</p>
            <ul className={styles.list}>
              <li>
                <strong>Code snippets:</strong> The code you submit for review. This is
                transmitted to our backend and forwarded to the Google Gemini AI API to
                generate a review response. It is not stored on our servers after the
                response is returned.
              </li>
              <li>
                <strong>Server access logs:</strong> Standard web server logs (IP address,
                browser user-agent, timestamp, HTTP status code) are retained by our hosting
                provider, Vercel, for up to 30 days for security and debugging purposes.
              </li>
              <li>
                <strong>Advertising cookies:</strong> If you are served ads through Google
                AdSense, Google may set cookies on your device (see Section 5 below).
              </li>
            </ul>
            <p>
              We do <strong>not</strong> collect your name, email address, or any account
              information. No registration is required to use the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. How we use your data</h2>
            <ul className={styles.list}>
              <li>
                <strong>Code snippets</strong> are used exclusively to generate an AI code
                review via the Google Gemini API. They are discarded once the response is
                delivered to your browser.
              </li>
              <li>
                <strong>Server logs</strong> are used for security monitoring, rate-limiting,
                and debugging service errors. They are not used for profiling or marketing.
              </li>
              <li>
                <strong>Advertising data</strong> is processed by Google AdSense to serve
                relevant advertisements (see Section 5).
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Legal basis for processing (GDPR)</h2>
            <p>
              If you are located in the European Economic Area, our legal bases for
              processing personal data are:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Legitimate interests</strong> — operating and securing the Service
                (server logging, rate-limiting).
              </li>
              <li>
                <strong>Consent</strong> — where required by applicable law for the use of
                advertising cookies by Google AdSense.
              </li>
              <li>
                <strong>Contract performance</strong> — processing code snippets to deliver
                the review you requested.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies and advertising (Google AdSense)</h2>
            <p>
              We use Google AdSense to display advertisements on this site. Google AdSense
              is a third-party advertising service operated by Google LLC. When you visit
              pages on this site that display ads, Google may:
            </p>
            <ul className={styles.list}>
              <li>
                Set cookies on your device, including the DoubleClick cookie, to serve
                personalised advertisements based on your prior browsing activity.
              </li>
              <li>
                Use web beacons and similar tracking technologies to measure ad performance.
              </li>
            </ul>
            <p>
              We have no access to or control over the cookies that Google sets. Google's use
              of advertising cookies is governed by the{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google Privacy Policy
              </a>
              .
            </p>
            <p>
              <strong>Opt-out:</strong> You can opt out of personalised advertising by
              visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google Ad Settings
              </a>
              {' '}or the{' '}
              <a
                href="https://optout.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                NAI opt-out page
              </a>
              . Opting out does not remove ads — it removes personalisation from them.
            </p>
            <p>
              <strong>Important:</strong> We do not click our own ads, encourage users to
              click ads, or use any method to artificially inflate ad impressions or clicks.
              This complies with{' '}
              <a
                href="https://support.google.com/adsense/answer/48182"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google AdSense programme policies
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Third-party services</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Privacy policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Gemini API</td>
                    <td>AI code review generation</td>
                    <td>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>policies.google.com/privacy</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Google AdSense</td>
                    <td>Display advertising</td>
                    <td>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>policies.google.com/privacy</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Vercel</td>
                    <td>Hosting and infrastructure</td>
                    <td>
                      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>vercel.com/legal/privacy-policy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2>7. Data retention</h2>
            <p>
              Code snippets are not retained after the AI response is delivered. Server access
              logs are retained for up to 30 days. Cookies set by Google are subject to
              Google's own retention policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct,
              delete, or object to the processing of your personal data. Because we do not
              collect identifying personal data (name, email, account), most of these rights
              cannot practically be exercised against us. For data held by Google (AdSense,
              Gemini), please contact Google directly via their privacy controls.
            </p>
            <p>
              If you are a California resident, you have additional rights under the CCPA,
              including the right to know and the right to delete. Contact us at the address
              below to exercise these rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Children's privacy</h2>
            <p>
              The Service is not directed at children under the age of 13 (or 16 in the EEA).
              We do not knowingly collect personal information from children. If you believe
              a child has provided data through the Service, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy at any time. Changes take effect when
              published at this URL. The "Last updated" date at the top of this page always
              reflects the most recent revision. Continued use of the Service after changes
              are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Contact</h2>
            <p>
              For privacy-related questions or requests, contact us at:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:gauravlodhi530@gmail.com" className={styles.link}>
                  gauravlodhi530@gmail.com
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/Gauravlodhi530/Code_Reviewer/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  github.com/Gauravlodhi530/Code_Reviewer/issues
                </a>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </>
  )
}
