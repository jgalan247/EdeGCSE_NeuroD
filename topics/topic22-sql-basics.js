// Topic 22: SQL Basics
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 22,
        title: "SQL Basics",
        desc: "Searching and sorting databases",
        icon: "🗄️",
        objectives: [
            "Write SELECT queries to retrieve data",
            "Use WHERE to filter results",
            "Use ORDER BY to sort results"
        ],
        content: `
            <div class="content-block">
                <h3>What is SQL?</h3>
                <p>SQL (Structured Query Language) is used to <strong>get data from databases</strong>. Think of a database as a HUGE spreadsheet, and SQL as the way to ask questions about it!</p>

                <div class="concept-box">
                    <div class="concept-label">🧱 Database Example</div>
                    <p>A table called <strong>Players</strong>:</p>
                    <table class="operations-table">
                        <tr><th>PlayerID</th><th>Name</th><th>Score</th><th>Level</th></tr>
                        <tr><td>1</td><td>Mario</td><td>1500</td><td>8</td></tr>
                        <tr><td>2</td><td>Luigi</td><td>1200</td><td>6</td></tr>
                        <tr><td>3</td><td>Peach</td><td>1800</td><td>10</td></tr>
                        <tr><td>4</td><td>Toad</td><td>900</td><td>4</td></tr>
                    </table>
                </div>
            </div>

            <div class="content-block">
                <h3>SELECT — Get Data</h3>
                <p>The <code>SELECT</code> command retrieves data from a table.</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">SQL — SELECT</span></div>
                    <pre><code><span class="cmt">-- Get ALL columns from Players table</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players

<span class="cmt">-- Get only Name and Score columns</span>
<span class="kw">SELECT</span> Name, Score <span class="kw">FROM</span> Players</code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">📋 SELECT Rules</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li><code>*</code> means "all columns"</li>
                        <li>List specific columns separated by commas</li>
                        <li><code>FROM</code> tells SQL which table to use</li>
                    </ul>
                </div>
            </div>

            <div class="content-block">
                <h3>WHERE — Filter Results</h3>
                <p>The <code>WHERE</code> command filters which rows are returned.</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">SQL — WHERE</span></div>
                    <pre><code><span class="cmt">-- Players with Score over 1000</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players
<span class="kw">WHERE</span> Score > <span class="num-code">1000</span>

<span class="cmt">-- Find Mario specifically</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players
<span class="kw">WHERE</span> Name = <span class="str">'Mario'</span>

<span class="cmt">-- Players on Level 6 or higher</span>
<span class="kw">SELECT</span> Name, Level <span class="kw">FROM</span> Players
<span class="kw">WHERE</span> Level >= <span class="num-code">6</span></code></pre>
                </div>

                <table class="operations-table">
                    <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
                    <tr><td><code>=</code></td><td>Equal to</td><td><code>WHERE Name = 'Mario'</code></td></tr>
                    <tr><td><code>></code></td><td>Greater than</td><td><code>WHERE Score > 1000</code></td></tr>
                    <tr><td><code><</code></td><td>Less than</td><td><code>WHERE Level < 5</code></td></tr>
                    <tr><td><code>>=</code></td><td>Greater or equal</td><td><code>WHERE Score >= 1500</code></td></tr>
                    <tr><td><code><=</code></td><td>Less or equal</td><td><code>WHERE Level <= 8</code></td></tr>
                    <tr><td><code><></code> or <code>!=</code></td><td>Not equal</td><td><code>WHERE Name <> 'Toad'</code></td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>ORDER BY — Sort Results</h3>
                <p>The <code>ORDER BY</code> command sorts the results.</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">SQL — ORDER BY</span></div>
                    <pre><code><span class="cmt">-- Sort by Score (lowest first - default)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players
<span class="kw">ORDER BY</span> Score

<span class="cmt">-- Sort by Score (highest first)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players
<span class="kw">ORDER BY</span> Score <span class="kw">DESC</span>

<span class="cmt">-- Sort alphabetically by Name</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> Players
<span class="kw">ORDER BY</span> Name <span class="kw">ASC</span></code></pre>
                </div>

                <div class="concept-box important">
                    <div class="concept-label">🔑 ASC vs DESC</div>
                    <p><strong>ASC</strong> = Ascending (A→Z, 0→9) — smallest/A first — DEFAULT</p>
                    <p><strong>DESC</strong> = Descending (Z→A, 9→0) — largest/Z first</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Combining Everything</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">SQL — Complete Query</span></div>
                    <pre><code><span class="cmt">-- Top players with Score > 1000, sorted by Score</span>
<span class="kw">SELECT</span> Name, Score
<span class="kw">FROM</span> Players
<span class="kw">WHERE</span> Score > <span class="num-code">1000</span>
<span class="kw">ORDER BY</span> Score <span class="kw">DESC</span></code></pre>
                </div>

                <div class="concept-box">
                    <div class="concept-label">📋 Query Order</div>
                    <p>Always write SQL in this order:</p>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li><code>SELECT</code> — what columns?</li>
                        <li><code>FROM</code> — which table?</li>
                        <li><code>WHERE</code> — which rows? (optional)</li>
                        <li><code>ORDER BY</code> — what order? (optional)</li>
                    </ol>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Tips</div>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    <li>Text values need quotes: <code>'Mario'</code></li>
                    <li>Numbers don't need quotes: <code>1500</code></li>
                    <li>SQL keywords are usually UPPERCASE (but not required)</li>
                    <li>Each query ends with a semicolon <code>;</code> (sometimes optional)</li>
                </ul>
            </div>
        `,
        quiz: {
            question: "Which SQL keyword sorts results from highest to lowest?",
            options: ["ASC", "DESC", "WHERE"],
            correct: 1
        }
    });
