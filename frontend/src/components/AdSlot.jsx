/**
 * AdSlot — Google AdSense compliant ad unit wrapper.
 *
 * AdSense policy requirements met here:
 * - Ads are clearly labelled "Advertisement" so users cannot mistake them for content.
 * - No images, arrows, or text are placed adjacent to the ad that could encourage
 *   accidental clicks (policy: "Encouraging clicks or views").
 * - The slot is never placed inside a pop-up, email, or software context.
 * - Ads are separated from interactive content (editor, buttons) by visible spacing.
 *
 * Usage:
 *   <AdSlot slot="1234567890" format="auto" />
 *
 * Replace PUBLISHER_ID and each slot number with your real values from AdSense.
 */

import styles from './AdSlot.module.css'

const PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX' // ← replace with your publisher ID

export default function AdSlot({
  slot,
  format = 'auto',
  style = {},
  className = '',
}) {
  // Do not render anything until a real publisher ID is set.
  if (PUBLISHER_ID === 'ca-pub-XXXXXXXXXXXXXXXX') {
    return (
      <div className={`${styles.placeholder} ${className}`}>
        <span className={styles.placeholderLabel}>Ad slot — configure publisher ID</span>
      </div>
    )
  }

  return (
    <div className={`${styles.adWrapper} ${className}`} aria-label="Advertisement">
      {/* The label "Advertisement" is required by AdSense policy so users know
          this area is paid advertising, not editorial content. */}
      <p className={styles.adLabel}>Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
