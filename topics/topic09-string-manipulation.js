// Topic 9: String Manipulation
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 9,
        title: "String Manipulation",
        desc: "Working with text and characters",
        icon: "✂️",
        objectives: [
            "Use string methods to manipulate text",
            "Access individual characters using indexing",
            "Concatenate and slice strings"
        ],
        content: `
            <div class="content-block">
                <h3>What are Strings?</h3>
                <p>A string is <strong>text data</strong> — any sequence of characters inside quotes. Like the text on LEGO instruction boxes!</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Creating Strings</span></div>
                    <pre><code>name = <span class="str">"Mario"</span>
game = <span class="str">'Super Mario Bros'</span>
message = <span class="str">"Hello, World!"</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>String Indexing</h3>
                <p>Each character has a position (index), starting from <strong>0</strong>!</p>

                <div class="concept-box important">
                    <div class="concept-label">🔑 Remember: Index starts at 0!</div>
                    <div class="code-container" style="margin-top: 10px;">
                        <div class="code-header"><span class="code-language">Python</span></div>
                        <pre><code>name = <span class="str">"MARIO"</span>
<span class="cmt">#        01234  (positions)</span>

<span class="fn">print</span>(name[<span class="num-code">0</span>])  <span class="cmt"># M</span>
<span class="fn">print</span>(name[<span class="num-code">4</span>])  <span class="cmt"># O</span>
<span class="fn">print</span>(name[-<span class="num-code">1</span>]) <span class="cmt"># O (last character)</span></code></pre>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <h3>String Operations</h3>
                <table class="operations-table">
                    <tr><th>Operation</th><th>Code</th><th>Result</th></tr>
                    <tr><td><strong>Length</strong></td><td><code>len("Mario")</code></td><td><code>5</code></td></tr>
                    <tr><td><strong>Uppercase</strong></td><td><code>"mario".upper()</code></td><td><code>"MARIO"</code></td></tr>
                    <tr><td><strong>Lowercase</strong></td><td><code>"MARIO".lower()</code></td><td><code>"mario"</code></td></tr>
                    <tr><td><strong>Concatenate</strong></td><td><code>"Super" + " Mario"</code></td><td><code>"Super Mario"</code></td></tr>
                    <tr><td><strong>Slice</strong></td><td><code>"Mario"[0:3]</code></td><td><code>"Mar"</code></td></tr>
                </table>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — String Methods</span></div>
                    <pre><code>text = <span class="str">"hello world"</span>

<span class="cmt"># Useful methods</span>
<span class="fn">print</span>(text.<span class="fn">upper</span>())      <span class="cmt"># HELLO WORLD</span>
<span class="fn">print</span>(text.<span class="fn">lower</span>())      <span class="cmt"># hello world</span>
<span class="fn">print</span>(text.<span class="fn">capitalize</span>()) <span class="cmt"># Hello world</span>
<span class="fn">print</span>(text.<span class="fn">title</span>())      <span class="cmt"># Hello World</span>
<span class="fn">print</span>(<span class="fn">len</span>(text))         <span class="cmt"># 11</span>

<span class="cmt"># Slicing [start:end] - end NOT included!</span>
<span class="fn">print</span>(text[<span class="num-code">0</span>:<span class="num-code">5</span>])   <span class="cmt"># hello</span>
<span class="fn">print</span>(text[<span class="num-code">6</span>:])    <span class="cmt"># world (from index 6 to end)</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>ASCII Values</h3>
                <p>Every character has a number code (ASCII). Useful for comparisons!</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — ASCII</span></div>
                    <pre><code><span class="cmt"># Get ASCII value of a character</span>
<span class="fn">print</span>(<span class="fn">ord</span>(<span class="str">"A"</span>))  <span class="cmt"># 65</span>
<span class="fn">print</span>(<span class="fn">ord</span>(<span class="str">"a"</span>))  <span class="cmt"># 97</span>
<span class="fn">print</span>(<span class="fn">ord</span>(<span class="str">"0"</span>))  <span class="cmt"># 48</span>

<span class="cmt"># Get character from ASCII value</span>
<span class="fn">print</span>(<span class="fn">chr</span>(<span class="num-code">65</span>))   <span class="cmt"># A</span>
<span class="fn">print</span>(<span class="fn">chr</span>(<span class="num-code">97</span>))   <span class="cmt"># a</span></code></pre>
                </div>
            </div>
        `,
        quiz: {
            question: 'word = "PYTHON"<br>What is word[2:5]?',
            options: ["PYT", "THO", "THON"],
            correct: 1
        }
    });
