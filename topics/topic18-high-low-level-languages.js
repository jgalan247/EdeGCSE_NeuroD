// Topic 18: High & Low Level Languages
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 18,
        title: "High & Low Level Languages",
        desc: "Types of programming languages",
        icon: "📝",
        objectives: [
            "Explain the difference between high and low level languages",
            "Give examples of each type",
            "Describe advantages and disadvantages"
        ],
        content: `
            <div class="content-block">
                <h3>Two Types of Languages</h3>
                <p>Programming languages are either <strong>high-level</strong> (easy for humans) or <strong>low-level</strong> (easy for computers).</p>

                <div class="concept-box">
                    <div class="concept-label">🧱 LEGO Analogy</div>
                    <p><strong>High-level:</strong> Like following LEGO instructions with pictures — easy to understand!</p>
                    <p><strong>Low-level:</strong> Like reading the exact measurements of each brick in millimetres — precise but hard!</p>
                </div>
            </div>

            <div class="content-block">
                <h3>High-Level Languages</h3>
                <p>Written in a way that's <strong>easy for humans to read and write</strong>.</p>

                <table class="operations-table">
                    <tr><th>Feature</th><th>Details</th></tr>
                    <tr><td><strong>Examples</strong></td><td>Python, Java, C#, JavaScript</td></tr>
                    <tr><td><strong>Looks like</strong></td><td>English words: <code>print</code>, <code>if</code>, <code>while</code></td></tr>
                    <tr><td><strong>Portable?</strong></td><td>Yes — runs on different computers</td></tr>
                    <tr><td><strong>Needs translation?</strong></td><td>Yes — must be compiled or interpreted</td></tr>
                </table>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python (High-Level)</span></div>
                    <pre><code><span class="kw">if</span> score > <span class="num-code">100</span>:
    <span class="fn">print</span>(<span class="str">"You win!"</span>)</code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">✅ Advantages</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li>Easy to learn and use</li>
                        <li>Faster to write programs</li>
                        <li>Easier to find and fix errors</li>
                        <li>Works on different computers (portable)</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <div class="concept-label">❌ Disadvantages</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li>Needs a translator (compiler/interpreter)</li>
                        <li>Runs slower than low-level code</li>
                        <li>Less control over hardware</li>
                    </ul>
                </div>
            </div>

            <div class="content-block">
                <h3>Low-Level Languages</h3>
                <p>Written in a way that's <strong>closer to what the computer understands</strong>.</p>

                <table class="operations-table">
                    <tr><th>Type</th><th>What it looks like</th></tr>
                    <tr><td><strong>Machine Code</strong></td><td>Binary: <code>10110000 01100001</code></td></tr>
                    <tr><td><strong>Assembly Language</strong></td><td>Codes: <code>MOV AL, 61h</code></td></tr>
                </table>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Assembly (Low-Level)</span></div>
                    <pre><code>MOV AX, 5      <span class="cmt">; Put 5 in register AX</span>
ADD AX, 3      <span class="cmt">; Add 3 to AX</span>
MOV result, AX <span class="cmt">; Store result</span></code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">✅ Advantages</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li>Runs very fast</li>
                        <li>Direct control over hardware</li>
                        <li>Uses less memory</li>
                        <li>Good for embedded systems (washing machines, cars)</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <div class="concept-label">❌ Disadvantages</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li>Hard to learn and write</li>
                        <li>Easy to make mistakes</li>
                        <li>Not portable — written for ONE type of CPU</li>
                        <li>Takes longer to write programs</li>
                    </ul>
                </div>
            </div>

            <div class="content-block">
                <h3>Quick Comparison</h3>
                <table class="operations-table">
                    <tr><th>Feature</th><th>High-Level</th><th>Low-Level</th></tr>
                    <tr><td>Easy to read?</td><td>Yes ✓</td><td>No ✗</td></tr>
                    <tr><td>Fast to run?</td><td>Slower</td><td>Very fast ✓</td></tr>
                    <tr><td>Portable?</td><td>Yes ✓</td><td>No ✗</td></tr>
                    <tr><td>Hardware control?</td><td>Limited</td><td>Full ✓</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "Which type of language is Python?",
            options: ["Low-level language", "High-level language", "Machine code"],
            correct: 1
        }
    });
