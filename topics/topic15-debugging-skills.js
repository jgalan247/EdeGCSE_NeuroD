// Topic 15: Debugging Skills
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 15,
        title: "Debugging Skills",
        desc: "Finding and fixing errors",
        icon: "🐛",
        objectives: [
            "Identify syntax, logic, and runtime errors",
            "Use debugging techniques",
            "Read and understand error messages"
        ],
        content: `
            <div class="content-block">
                <h3>Types of Errors</h3>
                <table class="operations-table">
                    <tr><th>Type</th><th>When it happens</th><th>Example</th></tr>
                    <tr><td><strong>Syntax Error</strong></td><td>Code breaks grammar rules</td><td><code>print("hi"</code> — missing )</td></tr>
                    <tr><td><strong>Logic Error</strong></td><td>Code runs but gives wrong answer</td><td>Using + instead of -</td></tr>
                    <tr><td><strong>Runtime Error</strong></td><td>Code crashes while running</td><td>Dividing by zero</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Syntax Errors</h3>
                <p>The code <strong>won't run at all</strong> because it breaks Python's rules.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Common Syntax Errors</span></div>
                    <pre><code><span class="cmt"># Missing colon</span>
<span class="kw">if</span> x > <span class="num-code">5</span>  <span class="cmt"># ERROR! Should be: if x > 5:</span>

<span class="cmt"># Missing bracket</span>
<span class="fn">print</span>(<span class="str">"Hello"</span>  <span class="cmt"># ERROR! Should be: print("Hello")</span>

<span class="cmt"># Wrong indentation</span>
<span class="kw">if</span> x > <span class="num-code">5</span>:
<span class="fn">print</span>(<span class="str">"Big"</span>)  <span class="cmt"># ERROR! Should be indented</span>

<span class="cmt"># Misspelled keyword</span>
<span class="kw">pritn</span>(<span class="str">"Hi"</span>)  <span class="cmt"># ERROR! Should be: print</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Logic Errors</h3>
                <p>The code runs but gives <strong>wrong results</strong>. Hardest to find!</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Logic Error Examples</span></div>
                    <pre><code><span class="cmt"># Wrong operator</span>
average = total + count  <span class="cmt"># Should be total / count</span>

<span class="cmt"># Wrong comparison</span>
<span class="kw">if</span> age > <span class="num-code">18</span>:  <span class="cmt"># Should be >= 18 to include 18-year-olds</span>

<span class="cmt"># Off-by-one error</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">5</span>):  <span class="cmt"># Gives 0,1,2,3,4 — might want 1,2,3,4,5</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Runtime Errors</h3>
                <p>Code crashes <strong>during execution</strong>.</p>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Runtime Errors</span></div>
                    <pre><code><span class="cmt"># Division by zero</span>
result = <span class="num-code">10</span> / <span class="num-code">0</span>  <span class="cmt"># ZeroDivisionError</span>

<span class="cmt"># Index out of range</span>
items = [<span class="num-code">1</span>, <span class="num-code">2</span>, <span class="num-code">3</span>]
<span class="fn">print</span>(items[<span class="num-code">5</span>])  <span class="cmt"># IndexError (only 0,1,2 exist)</span>

<span class="cmt"># Type error</span>
name = <span class="str">"Mario"</span>
age = name + <span class="num-code">10</span>  <span class="cmt"># TypeError (can't add string + number)</span>

<span class="cmt"># File not found</span>
file = <span class="fn">open</span>(<span class="str">"missing.txt"</span>)  <span class="cmt"># FileNotFoundError</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Debugging Techniques</h3>
                <div class="concept-box">
                    <div class="concept-label">🔧 How to Debug</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li><strong>Read the error message</strong> — it tells you the line and type</li>
                        <li><strong>Print statements</strong> — add print() to see variable values</li>
                        <li><strong>Trace tables</strong> — follow code step by step on paper</li>
                        <li><strong>Comment out code</strong> — isolate the problem area</li>
                        <li><strong>Check brackets and colons</strong> — common syntax issues</li>
                    </ol>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Using Print to Debug</span></div>
                    <pre><code><span class="kw">def</span> <span class="fn">calculate_total</span>(items):
    total = <span class="num-code">0</span>
    <span class="kw">for</span> item <span class="kw">in</span> items:
        <span class="fn">print</span>(<span class="str">"DEBUG: item ="</span>, item)  <span class="cmt"># Add this</span>
        <span class="fn">print</span>(<span class="str">"DEBUG: total before ="</span>, total)
        total = total + item
        <span class="fn">print</span>(<span class="str">"DEBUG: total after ="</span>, total)
    <span class="kw">return</span> total</code></pre>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Tip</div>
                <p>When asked to find errors in code:</p>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    <li>Check for missing colons after if/for/while/def</li>
                    <li>Check indentation</li>
                    <li>Check == vs = (comparison vs assignment)</li>
                    <li>Check brackets match</li>
                    <li>Look for off-by-one errors in loops</li>
                </ul>
            </div>
        `,
        quiz: {
            question: "x = 5<br>if x = 10:<br>&nbsp;&nbsp;print('Ten')<br><br>What type of error is this?",
            options: ["Logic error", "Syntax error", "Runtime error"],
            correct: 1
        }
    });
