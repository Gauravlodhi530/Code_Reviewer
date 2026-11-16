# AI Code Reviewer

> A free, browser-based tool that provides instant AI-powered code reviews.
> Paste any code snippet and receive detailed feedback on bugs, performance, security, style, and best practices — powered by Google Gemini 2.0 Flash.

🌐 **Live:** https://code-reviewer-g.vercel.app

---

## What it does

AI Code Reviewer acts as a senior software engineer (7+ years of experience). You paste code, it reviews it. The review covers:

- **Bug detection** — runtime errors, logic flaws
- **Performance** — slow patterns, costly operations
- **Security** — XSS, injection, insecure API usage, unsafe patterns
- **Code style** — naming conventions, formatting, readability
- **Best practices** — DRY, SOLID principles, modern idioms
- **Refactoring** — simplified alternatives with improved code examples
- **Documentation** — suggestions for comments and docstrings

## Supported languages

JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, Kotlin, and any other language a large language model understands.

## How to use (web)

1. Open https://code-reviewer-g.vercel.app/
2. Paste code into the left editor panel
3. Click **Review Code**
4. Read the structured AI review in the right panel

## API

The backend exposes a single public endpoint:

```
POST https://code-reviewer-g.vercel.app/ai/get-review
Content-Type: application/json

{ "code": "<your code string>" }
```

**Response:** plain-text Markdown string containing the structured review.

OpenAPI spec: https://code-reviewer-g.vercel.app/.well-known/openapi.json

## AI tool discovery files

| File | Purpose |
|---|---|
| `/llms.txt` | Short site summary for LLM crawlers |
| `/llms-full.txt` | Full site content for LLM crawlers |
| `/sitemap.xml` | Sitemap for search engines and crawlers |
| `/robots.txt` | Crawler permissions (GPTBot, ClaudeBot, PerplexityBot all allowed) |
| `/.well-known/ai-plugin.json` | ChatGPT plugin / AI agent discovery manifest |
| `/.well-known/openapi.json` | OpenAPI 3.1 spec for the review API |

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, react-simple-code-editor, PrismJS, react-markdown |
| Backend | Node.js, Express |
| AI model | Google Gemini 2.0 Flash (`@google/generative-ai`) |
| Hosting | Vercel (both frontend and backend) |

## Folder structure

```
Code Reviewer/
├── backend/
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── controllers/ai.controller.js
│       ├── routes/ai.route.js
│       └── services/ai.service.js
├── frontend/
│   ├── public/
│   │   ├── llms.txt              ← AI crawler summary
│   │   ├── llms-full.txt         ← AI crawler full content
│   │   ├── robots.txt            ← crawler permissions
│   │   ├── sitemap.xml           ← page index
│   │   ├── ads.txt               ← AdSense verification
│   │   └── .well-known/
│   │       ├── ai-plugin.json    ← ChatGPT plugin manifest
│   │       └── openapi.json      ← OpenAPI 3.1 spec
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   └── SEOHead.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── About.jsx
│           ├── Privacy.jsx
│           ├── Terms.jsx
│           └── NotFound.jsx
└── README.md
```

## Local development

```bash
# Backend
cd backend
npm install
node server.js        # runs on http://localhost:3000

# Frontend
cd frontend
npm install
npm run dev           # runs on http://localhost:5173
```

## Author

**Gaurav Lodhi**
- Email: gauravlodhi530@gmail.com
- GitHub: https://github.com/Gauravlodhi530
- LinkedIn: https://www.linkedin.com/in/gauravlodhi530

## License

MIT — open source and free to use.
