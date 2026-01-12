// Topic 12: Validation & Authentication
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 12,
        title: "Validation & Authentication",
        desc: "Checking data and verifying users",
        icon: "🔐",
        objectives: [
            "Implement different types of validation",
            "Understand authentication vs verification",
            "Write code to validate user input"
        ],
        content: `
            <div class="content-block">
                <h3>What is Validation?</h3>
                <p>Validation checks if data is <strong>reasonable and sensible</strong> before accepting it. Like checking LEGO pieces fit before clicking them together!</p>

                <div class="concept-box important">
                    <div class="concept-label">🔑 Key Point</div>
                    <p>Validation checks data is <strong>sensible</strong>, NOT that it's correct!</p>
                    <p>Example: Age = 25 is valid (sensible), but might not be the true age.</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Types of Validation</h3>
                <table class="operations-table">
                    <tr><th>Type</th><th>What it checks</th><th>Example</th></tr>
                    <tr><td><strong>Range check</strong></td><td>Value within limits</td><td>Age between 0 and 120</td></tr>
                    <tr><td><strong>Type check</strong></td><td>Correct data type</td><td>Age is a number, not text</td></tr>
                    <tr><td><strong>Length check</strong></td><td>Correct number of characters</td><td>Password at least 8 characters</td></tr>
                    <tr><td><strong>Presence check</strong></td><td>Data has been entered</td><td>Name field not empty</td></tr>
                    <tr><td><strong>Format check</strong></td><td>Correct format/pattern</td><td>Email contains @ symbol</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Validation Examples</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Validation</span></div>
                    <pre><code><span class="cmt"># Range check</span>
<span class="kw">def</span> <span class="fn">validate_age</span>(age):
    <span class="kw">if</span> age >= <span class="num-code">0</span> <span class="kw">and</span> age <= <span class="num-code">120</span>:
        <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cmt"># Length check</span>
<span class="kw">def</span> <span class="fn">validate_password</span>(password):
    <span class="kw">if</span> <span class="fn">len</span>(password) >= <span class="num-code">8</span>:
        <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cmt"># Presence check</span>
<span class="kw">def</span> <span class="fn">validate_name</span>(name):
    <span class="kw">if</span> name != <span class="str">""</span>:
        <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cmt"># Format check</span>
<span class="kw">def</span> <span class="fn">validate_email</span>(email):
    <span class="kw">if</span> <span class="str">"@"</span> <span class="kw">in</span> email <span class="kw">and</span> <span class="str">"."</span> <span class="kw">in</span> email:
        <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Input Validation Loop</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Keep asking until valid</span></div>
                    <pre><code><span class="cmt"># Keep asking until valid input</span>
valid = <span class="kw">False</span>
<span class="kw">while</span> valid == <span class="kw">False</span>:
    age = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter your age: "</span>))
    <span class="kw">if</span> age >= <span class="num-code">0</span> <span class="kw">and</span> age <= <span class="num-code">120</span>:
        valid = <span class="kw">True</span>
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"Invalid age! Try again."</span>)

<span class="fn">print</span>(<span class="str">"Age accepted:"</span>, age)</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Authentication</h3>
                <p>Authentication confirms <strong>who you are</strong> — like showing ID to enter a Mario Kart tournament!</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Simple Authentication</span></div>
                    <pre><code>stored_username = <span class="str">"mario"</span>
stored_password = <span class="str">"mushroom123"</span>

username = <span class="fn">input</span>(<span class="str">"Username: "</span>)
password = <span class="fn">input</span>(<span class="str">"Password: "</span>)

<span class="kw">if</span> username == stored_username <span class="kw">and</span> password == stored_password:
    <span class="fn">print</span>(<span class="str">"Login successful!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Invalid credentials!"</span>)</code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">📋 Authentication vs Verification</div>
                    <p><strong>Authentication:</strong> Proving who you are (username + password)</p>
                    <p><strong>Verification:</strong> Checking data is accurate (e.g., "Did you mean to type 15?")</p>
                </div>
            </div>
        `,
        quiz: {
            question: "Which type of validation checks that a phone number is exactly 11 digits?",
            options: ["Range check", "Type check", "Length check", "Format check"],
            correct: 2
        }
    });
