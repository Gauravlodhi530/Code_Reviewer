import { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import SEOHead from '../components/SEOHead'
import AdSlot from '../components/AdSlot'
import styles from './Home.module.css'

const API_URL = import.meta.env.VITE_API_URL || 'https://code-reviewer-g.vercel.app'

const FEATURES = [
  {
    icon: '🐛',
    title: 'Bug Detection',
    desc: 'Identifies runtime errors, off-by-one mistakes, unhandled promise rejections, and other logic flaws before they reach production.',
  },
  {
    icon: '⚡',
    title: 'Performance Analysis',
    desc: 'Spots O(n²) loops, unnecessary re-renders, redundant database calls, and other bottlenecks with concrete faster alternatives.',
  },
  {
    icon: '🔒',
    title: 'Security Review',
    desc: 'Flags XSS, SQL injection, CSRF exposure, insecure direct object references, hardcoded secrets, and unsafe eval usage.',
  },
  {
    icon: '🎨',
    title: 'Code Style',
    desc: 'Checks naming conventions, file structure, consistent formatting, and readability against language-specific style guides.',
  },
  {
    icon: '📐',
    title: 'SOLID & DRY Principles',
    desc: 'Reviews class design, function responsibility, code duplication, and suggests modular refactors aligned with industry norms.',
  },
  {
    icon: '🔁',
    title: 'Refactoring Suggestions',
    desc: 'Provides rewritten versions of complex or unclear blocks, reducing cognitive load while preserving the original behaviour.',
  },
]

const HOW_TO = [
  {
    step: '1',
    title: 'Paste your code',
    desc: 'Type or paste any code snippet into the editor on the left. The editor supports syntax highlighting for JavaScript and TypeScript.',
  },
  {
    step: '2',
    title: 'Click Review Code',
    desc: 'Press the Review Code button. Your snippet is sent over HTTPS to our backend and forwarded to the AI model.',
  },
  {
    step: '3',
    title: 'Read the review',
    desc: 'The AI returns a structured Markdown review — typically within a few seconds — rendered in the right panel.',
  },
  {
    step: '4',
    title: 'Apply the improvements',
    desc: 'Use the suggestions to fix issues, then paste the updated code back in for a follow-up review.',
  },
]

export default function Home() {
  const [code, setCode] = useState(`// Paste your code here and click "Review Code"\nfunction fetchUser(id) {\n  let user = fetch('/api/users/' + id).then(r => r.json())\n  return user\n}`)
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    if (code.trim() === '') {
      return setReview('Please enter some code first.')
    }
    setIsLoading(true)
    setReview('')
    try {
      const response = await axios.post(`${API_URL}/ai/get-review`, { code })
      setReview(response.data)
    } catch (error) {
      console.error('Error reviewing code:', error)
      setReview('Something went wrong while getting the review. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SEOHead
        title="AI Code Reviewer – Free Instant Code Review Powered by AI"
        description="Paste your code and get a detailed AI-powered review covering bugs, security, performance, and best practices. Free, no sign-up required."
        path="/"
      />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Free · No sign-up · Instant results</div>
          <h1 className={styles.heading}>
            AI-Powered Code Review,<br />in Seconds
          </h1>
          <p className={styles.sub}>
            Paste any code snippet and receive a structured review from an AI acting
            as a senior software engineer. It checks for bugs, security vulnerabilities,
            performance issues, and style problems — then shows you exactly how to fix them.
          </p>
        </section>

        {/* ── Editor ───────────────────────────────────────── */}
        <section className={styles.editorSection} aria-label="Code editor and review panel">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelLabel}>Your Code</span>
              <div className={styles.dots} aria-hidden="true">
                <span /><span /><span />
              </div>
            </div>
            <div className={styles.editorWrap}>
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={c =>
                  prism.highlight(c, prism.languages.javascript, 'javascript')
                }
                padding={16}
                style={{
                  fontFamily: '"Fira Code", "Fira Mono", monospace',
                  fontSize: 14,
                  minHeight: '100%',
                  background: 'transparent',
                  color: '#e2e8f0',
                }}
                aria-label="Code input editor"
              />
            </div>
            {/* Button is separated from the editor area with clear visual spacing.
                AdSense policy: interactive elements must not be adjacent to ads. */}
            <div className={styles.reviewBtnRow}>
              <button
                onClick={reviewCode}
                className={styles.reviewBtn}
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Reviewing…
                  </>
                ) : (
                  '▶  Review Code'
                )}
              </button>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelLabel}>AI Review</span>
              {review && !isLoading && (
                <span className={styles.reviewReady}>✓ Ready</span>
              )}
            </div>
            <div className={styles.reviewWrap}>
              {isLoading ? (
                <div className={styles.loader} role="status" aria-live="polite">
                  <span className={styles.spinnerLg} aria-hidden="true" />
                  <div>
                    <p className={styles.loaderTitle}>Analyzing your code…</p>
                    <p className={styles.loaderSub}>This usually takes 3–8 seconds.</p>
                  </div>
                </div>
              ) : review ? (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
              ) : (
                <div className={styles.placeholder}>
                  <p className={styles.placeholderIcon}>💡</p>
                  <p className={styles.placeholderText}>
                    Your review will appear here. Try the example code on the left,
                    or paste your own.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Ad slot — below editor, clearly separated ────── */}
        {/* Policy: not adjacent to interactive elements, clearly labelled */}
        <AdSlot slot="1111111111" format="auto" />

        {/* ── How it works ─────────────────────────────────── */}
        <section className={styles.howTo}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionSub}>
            Four steps from code to actionable feedback.
          </p>
          <ol className={styles.stepList} aria-label="How to use AI Code Reviewer">
            {HOW_TO.map(({ step, title, desc }) => (
              <li key={step} className={styles.stepItem}>
                <div className={styles.stepNum} aria-hidden="true">{step}</div>
                <div>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDesc}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>What the AI reviews</h2>
          <p className={styles.sectionSub}>
            Every review covers six dimensions of code quality.
          </p>
          <div className={styles.featGrid}>
            {FEATURES.map(f => (
              <article key={f.title} className={styles.featCard}>
                <span className={styles.featIcon} aria-hidden="true">{f.icon}</span>
                <h3 className={styles.featName}>{f.title}</h3>
                <p className={styles.featDesc}>{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Second ad slot — below features, before footer ─ */}
        <AdSlot slot="2222222222" format="horizontal" />

        {/* ── Supported languages ───────────────────────────── */}
        <section className={styles.languages}>
          <h2 className={styles.sectionTitle}>Supported languages</h2>
          <p className={styles.sectionSub}>
            The AI understands any language a large language model can read.
            The editor highlights JavaScript/TypeScript; reviews are language-agnostic.
          </p>
          <div className={styles.langGrid}>
            {[
              'JavaScript','TypeScript','Python','Java','C++','C#',
              'Go','Rust','PHP','Ruby','Swift','Kotlin','SQL','Bash',
            ].map(lang => (
              <span key={lang} className={styles.langTag}>{lang}</span>
            ))}
          </div>
        </section>

        {/* ── Disclaimer ───────────────────────────────────── */}
        <aside className={styles.disclaimer} role="note">
          <strong>Disclaimer:</strong> AI-generated reviews are provided for informational
          purposes only. Always apply your own judgment before making changes to
          production code. This tool does not replace a human code review for
          security-critical systems.
        </aside>

      </main>
    </>
  )
}
