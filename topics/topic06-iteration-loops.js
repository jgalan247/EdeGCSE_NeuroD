// Topic 6: Iteration (Loops)
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 6,
        title: "Iteration (Loops)",
        desc: "FOR and WHILE loops",
        icon: "🔄",
        objectives: [
            "Use FOR loops to repeat a set number of times",
            "Use WHILE loops to repeat until a condition changes",
            "Choose the right loop"
        ],
        content: `
            <div class="content-block">
                <h3>What is Iteration?</h3>
                <p>Iteration means <strong>repeating code</strong>. Like Mario collecting coins in a row — you don't write separate code for each coin!</p>
            </div>

            <div class="content-block">
                <h3>FOR Loop</h3>
                <p>Use when you <strong>know how many times</strong> to repeat.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code><span class="cmt"># Collect 5 coins (0, 1, 2, 3, 4)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">5</span>):
    <span class="fn">print</span>(<span class="str">"Got coin!"</span>, i)

<span class="cmt"># Loop through a list of power-ups</span>
items = [<span class="str">"mushroom"</span>, <span class="str">"star"</span>, <span class="str">"flower"</span>]
<span class="kw">for</span> item <span class="kw">in</span> items:
    <span class="fn">print</span>(<span class="str">"Collected:"</span>, item)</code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">📋 Understanding range()</div>
                    <p><code>range(5)</code> → 0, 1, 2, 3, 4 (starts at 0, stops BEFORE 5)</p>
                    <p><code>range(1, 6)</code> → 1, 2, 3, 4, 5 (starts at 1, stops BEFORE 6)</p>
                </div>
            </div>

            <div class="content-block">
                <h3>WHILE Loop</h3>
                <p>Use when you <strong>don't know how many times</strong> — keep going until a condition becomes false.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code><span class="cmt"># Keep playing until game over</span>
lives = <span class="num-code">3</span>
<span class="kw">while</span> lives > <span class="num-code">0</span>:
    <span class="fn">print</span>(<span class="str">"Lives:"</span>, lives)
    lives = lives - <span class="num-code">1</span>
<span class="fn">print</span>(<span class="str">"Game Over!"</span>)</code></pre>
                </div>

                <div class="concept-box important">
                    <div class="concept-label">⚠️ Infinite Loops</div>
                    <p>If the condition NEVER becomes False, the loop runs forever! Always make sure something will eventually stop it.</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Which Loop?</h3>
                <table>
                    <tr><th>Situation</th><th>Best Loop</th></tr>
                    <tr><td>Repeat exactly 10 times</td><td>FOR</td></tr>
                    <tr><td>Go through each item in a list</td><td>FOR</td></tr>
                    <tr><td>Keep asking until correct answer</td><td>WHILE</td></tr>
                    <tr><td>Play until game over</td><td>WHILE</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "How many times does this print 'Jump'?<br><code>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Jump')</code>",
            options: ["2 times", "3 times", "4 times"],
            correct: 1
        }
    });
