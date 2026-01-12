// Topic 5: Selection (IF)
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 5,
        title: "Selection (IF)",
        desc: "Making decisions with IF statements",
        icon: "🔀",
        objectives: [
            "Write IF statements to make decisions",
            "Use IF-ELSE for two outcomes",
            "Use IF-ELIF-ELSE for multiple options"
        ],
        content: `
            <div class="content-block">
                <h3>What is Selection?</h3>
                <p>Selection means the program <strong>chooses what to do</strong> based on a condition. Like Mario deciding which pipe to enter!</p>
            </div>

            <div class="content-block">
                <h3>Simple IF</h3>
                <p>Do something only if a condition is true.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code>coins = <span class="num-code">100</span>
<span class="kw">if</span> coins >= <span class="num-code">100</span>:
    <span class="fn">print</span>(<span class="str">"Extra life!"</span>)</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>IF-ELSE</h3>
                <p>Do one thing if true, another thing if false.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code>has_star = <span class="kw">False</span>
<span class="kw">if</span> has_star:
    <span class="fn">print</span>(<span class="str">"Invincible!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Be careful!"</span>)</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>IF-ELIF-ELSE</h3>
                <p>Check multiple conditions in order.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code>power_up = <span class="str">"mushroom"</span>

<span class="kw">if</span> power_up == <span class="str">"star"</span>:
    <span class="fn">print</span>(<span class="str">"Invincible!"</span>)
<span class="kw">elif</span> power_up == <span class="str">"mushroom"</span>:
    <span class="fn">print</span>(<span class="str">"Super Mario!"</span>)
<span class="kw">elif</span> power_up == <span class="str">"flower"</span>:
    <span class="fn">print</span>(<span class="str">"Fire power!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Small Mario"</span>)</code></pre>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">⚠️ Watch the Colons!</div>
                <p>Every <code>if</code>, <code>elif</code>, and <code>else</code> must end with a colon <code>:</code></p>
                <p>The code inside must be <strong>indented</strong> (4 spaces).</p>
            </div>
        `,
        quiz: {
            question: "x = 15. What prints?<br><code>if x > 20: print('Big')<br>elif x > 10: print('Medium')<br>else: print('Small')</code>",
            options: ["Big", "Medium", "Small"],
            correct: 1
        }
    });
