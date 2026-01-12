// Topic 4: Programming Basics
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 4,
        title: "Programming Basics",
        desc: "Variables, data types, and operators",
        icon: "🔢",
        objectives: [
            "Declare and use variables",
            "Know the five main data types",
            "Use arithmetic and comparison operators"
        ],
        content: `
            <div class="content-block">
                <h3>Variables</h3>
                <p>A variable is a <strong>named container that stores data</strong>. Think of it like a labelled LEGO storage box!</p>
                
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Variables</span></div>
                    <pre><code>player_name = <span class="str">"Mario"</span>
lives = <span class="num-code">3</span>
coins = <span class="num-code">99.5</span>
has_star = <span class="kw">True</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Data Types</h3>
                <p>Every piece of data has a type — like different types of LEGO bricks!</p>
                
                <table>
                    <tr><th>Type</th><th>Stores</th><th>Example</th></tr>
                    <tr><td><strong>Integer (int)</strong></td><td>Whole numbers</td><td><code>42</code>, <code>-7</code>, <code>0</code></td></tr>
                    <tr><td><strong>Float</strong></td><td>Decimal numbers</td><td><code>3.14</code>, <code>-0.5</code></td></tr>
                    <tr><td><strong>String (str)</strong></td><td>Text</td><td><code>"Hello"</code>, <code>'Mario'</code></td></tr>
                    <tr><td><strong>Boolean (bool)</strong></td><td>True or False</td><td><code>True</code>, <code>False</code></td></tr>
                    <tr><td><strong>Character</strong></td><td>Single letter</td><td><code>'A'</code>, <code>'7'</code></td></tr>
                </table>

                <div class="concept-box important">
                    <div class="concept-label">⚠️ Common Mistake</div>
                    <p><code>"42"</code> is a <strong>string</strong> (text) because of the quotes. <code>42</code> without quotes is an <strong>integer</strong> (number).</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Operators</h3>
                
                <h4 style="margin: 16px 0 10px;">Arithmetic (for maths)</h4>
                <table>
                    <tr><th>Op</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
                    <tr><td><code>+</code></td><td>Add</td><td><code>5 + 3</code></td><td><code>8</code></td></tr>
                    <tr><td><code>-</code></td><td>Subtract</td><td><code>5 - 3</code></td><td><code>2</code></td></tr>
                    <tr><td><code>*</code></td><td>Multiply</td><td><code>5 * 3</code></td><td><code>15</code></td></tr>
                    <tr><td><code>/</code></td><td>Divide</td><td><code>5 / 2</code></td><td><code>2.5</code></td></tr>
                    <tr><td><code>//</code></td><td>Integer divide</td><td><code>5 // 2</code></td><td><code>2</code></td></tr>
                    <tr><td><code>%</code></td><td>Remainder</td><td><code>5 % 2</code></td><td><code>1</code></td></tr>
                </table>

                <h4 style="margin: 20px 0 10px;">Comparison (for conditions)</h4>
                <table>
                    <tr><th>Op</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
                    <tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>!=</code></td><td>Not equal</td><td><code>5 != 3</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>5 &gt; 3</code></td><td><code>True</code></td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "Mario has 17 coins and buys a mushroom for 5 coins. What is 17 % 5? (The REMAINDER!)",
            options: [
                "3 (17 ÷ 5 = 3.4 rounded)",
                "2 (the remainder when dividing)",
                "3.4 (the actual division)"
            ],
            correct: 1
        }
    });
