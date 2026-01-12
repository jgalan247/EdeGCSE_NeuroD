// Topic 16: Boolean Logic
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 16,
        title: "Boolean Logic",
        desc: "AND, OR, NOT operators and truth tables",
        icon: "🔲",
        objectives: [
            "Understand the three main Boolean operators",
            "Read and create truth tables",
            "Combine Boolean operators in expressions"
        ],
        content: `
            <div class="content-block">
                <h3>What is Boolean Logic?</h3>
                <p>Boolean logic uses only <strong>two values: True or False</strong>. Like a LEGO brick — it either fits or it doesn't. No "maybe"!</p>

                <div class="concept-box">
                    <div class="concept-label">🔑 The Rule</div>
                    <p>Every Boolean expression gives exactly ONE answer: <strong>True</strong> or <strong>False</strong></p>
                </div>
            </div>

            <div class="content-block">
                <h3>The Three Main Operators</h3>
                <p>Think of these as rules for combining True/False values:</p>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">1</span>
                        AND — Both must be True
                    </div>
                    <div class="pattern-body">
                        <p><strong>Rule:</strong> Result is True <strong>only if BOTH</strong> inputs are True.</p>
                        <p>🧱 <em>Like LEGO: You need the red brick AND the blue brick to complete the build.</em></p>
                        <table class="operations-table">
                            <tr><th>A</th><th>B</th><th>A AND B</th></tr>
                            <tr><td>False</td><td>False</td><td><strong>False</strong></td></tr>
                            <tr><td>False</td><td>True</td><td><strong>False</strong></td></tr>
                            <tr><td>True</td><td>False</td><td><strong>False</strong></td></tr>
                            <tr><td>True</td><td>True</td><td><strong>True</strong> ✓</td></tr>
                        </table>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">2</span>
                        OR — At least one must be True
                    </div>
                    <div class="pattern-body">
                        <p><strong>Rule:</strong> Result is True <strong>if at least ONE</strong> input is True.</p>
                        <p>🎮 <em>Like Mario: You win if you get a mushroom OR a star (or both!).</em></p>
                        <table class="operations-table">
                            <tr><th>A</th><th>B</th><th>A OR B</th></tr>
                            <tr><td>False</td><td>False</td><td><strong>False</strong></td></tr>
                            <tr><td>False</td><td>True</td><td><strong>True</strong> ✓</td></tr>
                            <tr><td>True</td><td>False</td><td><strong>True</strong> ✓</td></tr>
                            <tr><td>True</td><td>True</td><td><strong>True</strong> ✓</td></tr>
                        </table>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">3</span>
                        NOT — Flips the value
                    </div>
                    <div class="pattern-body">
                        <p><strong>Rule:</strong> Reverses True to False, and False to True.</p>
                        <p>🔄 <em>Like flipping a LEGO brick upside down — it becomes the opposite.</em></p>
                        <table class="operations-table">
                            <tr><th>A</th><th>NOT A</th></tr>
                            <tr><td>False</td><td><strong>True</strong></td></tr>
                            <tr><td>True</td><td><strong>False</strong></td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <h3>Using Boolean in Python</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Boolean Operators</span></div>
                    <pre><code>has_key = <span class="kw">True</span>
door_unlocked = <span class="kw">False</span>

<span class="cmt"># AND — both must be true</span>
<span class="kw">if</span> has_key <span class="kw">and</span> door_unlocked:
    <span class="fn">print</span>(<span class="str">"Enter!"</span>)  <span class="cmt"># Won't print</span>

<span class="cmt"># OR — at least one must be true</span>
<span class="kw">if</span> has_key <span class="kw">or</span> door_unlocked:
    <span class="fn">print</span>(<span class="str">"Can try to enter"</span>)  <span class="cmt"># Will print!</span>

<span class="cmt"># NOT — flip the value</span>
<span class="kw">if</span> <span class="kw">not</span> door_unlocked:
    <span class="fn">print</span>(<span class="str">"Door is locked"</span>)  <span class="cmt"># Will print!</span></code></pre>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">📋 Quick Memory Trick</div>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    <li><strong>AND</strong> = Strict (needs ALL)</li>
                    <li><strong>OR</strong> = Relaxed (needs ANY)</li>
                    <li><strong>NOT</strong> = Opposite (flips it)</li>
                </ul>
            </div>
        `,
        quiz: {
            question: "What is the result of: True AND False?",
            options: ["True", "False", "Error"],
            correct: 1
        }
    });
