// Topic 11: Subprograms
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 11,
        title: "Subprograms",
        desc: "Functions and procedures",
        icon: "🔧",
        objectives: [
            "Define and call functions",
            "Use parameters and return values",
            "Understand the difference between functions and procedures"
        ],
        content: `
            <div class="content-block">
                <h3>What are Subprograms?</h3>
                <p>Subprograms are <strong>reusable blocks of code</strong> with a name. Like having a LEGO instruction booklet you can use multiple times!</p>

                <table class="operations-table">
                    <tr><th>Type</th><th>Returns a value?</th><th>Example</th></tr>
                    <tr><td><strong>Function</strong></td><td>Yes ✓</td><td>Calculate total score</td></tr>
                    <tr><td><strong>Procedure</strong></td><td>No ✗</td><td>Display a message</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Defining Functions</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Functions</span></div>
                    <pre><code><span class="cmt"># Function WITH return value</span>
<span class="kw">def</span> <span class="fn">add_coins</span>(current, bonus):
    total = current + bonus
    <span class="kw">return</span> total

<span class="cmt"># Calling the function</span>
coins = <span class="num-code">50</span>
coins = <span class="fn">add_coins</span>(coins, <span class="num-code">10</span>)  <span class="cmt"># coins = 60</span>

<span class="cmt"># Procedure (no return value)</span>
<span class="kw">def</span> <span class="fn">display_score</span>(score):
    <span class="fn">print</span>(<span class="str">"Your score is:"</span>, score)

<span class="fn">display_score</span>(<span class="num-code">100</span>)  <span class="cmt"># Displays message</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Parameters vs Arguments</h3>
                <div class="concept-box">
                    <div class="concept-label">📋 Key Terms</div>
                    <p><strong>Parameter:</strong> Variable in the function definition (placeholder)</p>
                    <p><strong>Argument:</strong> Actual value passed when calling the function</p>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code><span class="cmt"># 'name' is the PARAMETER</span>
<span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="fn">print</span>(<span class="str">"Hello,"</span>, name)

<span class="cmt"># "Mario" is the ARGUMENT</span>
<span class="fn">greet</span>(<span class="str">"Mario"</span>)</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Why Use Subprograms?</h3>
                <div class="concept-box">
                    <div class="concept-label">✅ Benefits</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li><strong>Reusability:</strong> Write once, use many times</li>
                        <li><strong>Readability:</strong> Main code is cleaner and shorter</li>
                        <li><strong>Testing:</strong> Test each function separately</li>
                        <li><strong>Maintenance:</strong> Fix bugs in one place</li>
                    </ul>
                </div>
            </div>

            <div class="content-block">
                <h3>Local vs Global Variables</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Variable Scope</span></div>
                    <pre><code>total = <span class="num-code">100</span>  <span class="cmt"># GLOBAL - can be used anywhere</span>

<span class="kw">def</span> <span class="fn">add_bonus</span>():
    bonus = <span class="num-code">50</span>  <span class="cmt"># LOCAL - only exists inside function</span>
    <span class="kw">return</span> total + bonus

<span class="fn">print</span>(<span class="fn">add_bonus</span>())  <span class="cmt"># 150</span>
<span class="fn">print</span>(bonus)       <span class="cmt"># ERROR! bonus doesn't exist here</span></code></pre>
                </div>

                <div class="concept-box important">
                    <div class="concept-label">💡 Exam Tip</div>
                    <p>Local variables only exist <strong>inside their function</strong>. They are created when the function runs and destroyed when it ends.</p>
                </div>
            </div>
        `,
        quiz: {
            question: "What is the difference between a function and a procedure?",
            options: [
                "Functions are longer than procedures",
                "Functions return a value, procedures don't",
                "Procedures can have parameters, functions can't"
            ],
            correct: 1
        }
    });
