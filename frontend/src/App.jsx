import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { FaRobot } from "react-icons/fa6";

import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);
  async function reviewCode() {
    if (code.trim() === "") {
      return setReview("Please enter the code...");
    }
    try {
      const response = await axios.post(`https://code-reviewer-g.vercel.app/ai/get-review`, {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("Something went wrong while getting the review.");
    }
  }

  return (
    <>
      <main>
        <h1>
          <FaRobot className="robot-icon" />
          AI Code Reviewer
        </h1>
        <section id="boxs">
          <div className="left">
            <div id="code" className="code">
              <Editor
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) =>
                  prism.highlight(
                    code,
                    prism.languages.javascript,
                    "javascript"
                  )
                }
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  height: "80vh",
                  width: "100%",
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                }}
              />
            </div>
            <div onClick={reviewCode} className="review">
              Review
            </div>
          </div>
          <div className="right">
            
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
