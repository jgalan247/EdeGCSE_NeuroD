// Topic 8: Trace Tables
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 8,
        title: "Trace Tables",
        desc: "Following code step by step",
        icon: "📋",
        objectives: [
            "Create trace tables to track variable values",
            "Follow code execution step by step",
            "Use trace tables to debug code"
        ],
        content: `
            <div class="content-block">
                <h3>What is a Trace Table?</h3>
                <p>A trace table helps you <strong>follow code line by line</strong> and track how variable values change. Like reading LEGO instructions step by step!</p>
                
                <div class="concept-box">
                    <div class="concept-label">📋 How to Create a Trace Table</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li>Create a column for each variable</li>
                        <li>Add a column for any output</li>
                        <li>Go through code line by line</li>
                        <li>Write down new values when they change</li>
                    </ol>
                </div>
            </div>

            <div class="content-block">
                <h3>Example</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python</span></div>
                    <pre><code>coins = <span class="num-code">0</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">1</span>, <span class="num-code">4</span>):
    coins = coins + i
<span class="fn">print</span>(coins)</code></pre>
                </div>

                <table style="margin-top: 16px;">
                    <tr><th>Step</th><th>i</th><th>coins</th><th>Output</th></tr>
                    <tr><td>Start</td><td>—</td><td>0</td><td></td></tr>
                    <tr><td>Loop 1</td><td>1</td><td>1</td><td></td></tr>
                    <tr><td>Loop 2</td><td>2</td><td>3</td><td></td></tr>
                    <tr><td>Loop 3</td><td>3</td><td>6</td><td></td></tr>
                    <tr><td>After loop</td><td>—</td><td>6</td><td>6</td></tr>
                </table>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Technique</div>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    <li>Read the WHOLE code first</li>
                    <li>Only write a value when it CHANGES</li>
                    <li>Be careful with loops — track EACH iteration</li>
                    <li>Double-check your arithmetic!</li>
                </ul>
            </div>
        `,
        quiz: {
            question: "x = 5, y = 2<br>x = x + y<br>y = x - y<br><br>What is the final value of y?",
            options: ["2", "5", "7"],
            correct: 1
        }
    });
