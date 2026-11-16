import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 – Page Not Found – AI Code Reviewer" path="/404" />
      <main className={styles.page}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.msg}>This page doesn't exist.</p>
        <Link to="/" className={styles.btn}>← Back to Home</Link>
      </main>
    </>
  )
}
