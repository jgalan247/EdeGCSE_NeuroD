// Topic 21: 2D Arrays
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 21,
        title: "2D Arrays",
        desc: "Working with rows and columns of data",
        icon: "📊",
        objectives: [
            "Understand what a 2D array is",
            "Access elements using row and column indices",
            "Traverse a 2D array with nested loops"
        ],
        content: `
            <div class="content-block">
                <h3>What is a 2D Array?</h3>
                <p>A 2D array is a <strong>grid of data</strong> with rows and columns. Like a LEGO baseplate — you can place bricks at specific positions!</p>

                <div class="concept-box">
                    <div class="concept-label">🧱 Think of it as...</div>
                    <p>A spreadsheet, a seating plan, a game board, or a pixel grid!</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Creating a 2D Array</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — 2D Array (List of Lists)</span></div>
                    <pre><code><span class="cmt"># A 3x3 grid (3 rows, 3 columns)</span>
grid = [
    [<span class="num-code">1</span>, <span class="num-code">2</span>, <span class="num-code">3</span>],   <span class="cmt"># Row 0</span>
    [<span class="num-code">4</span>, <span class="num-code">5</span>, <span class="num-code">6</span>],   <span class="cmt"># Row 1</span>
    [<span class="num-code">7</span>, <span class="num-code">8</span>, <span class="num-code">9</span>]    <span class="cmt"># Row 2</span>
]</code></pre>
                </div>

                <table class="operations-table">
                    <tr><th></th><th>Col 0</th><th>Col 1</th><th>Col 2</th></tr>
                    <tr><td><strong>Row 0</strong></td><td>1</td><td>2</td><td>3</td></tr>
                    <tr><td><strong>Row 1</strong></td><td>4</td><td>5</td><td>6</td></tr>
                    <tr><td><strong>Row 2</strong></td><td>7</td><td>8</td><td>9</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Accessing Elements</h3>
                <p>Use TWO indices: <code>array[row][column]</code></p>

                <div class="concept-box important">
                    <div class="concept-label">🔑 Remember: Row FIRST, Column SECOND!</div>
                    <p>Like reading a map: go DOWN to the row, then ACROSS to the column.</p>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Accessing Elements</span></div>
                    <pre><code>grid = [
    [<span class="num-code">1</span>, <span class="num-code">2</span>, <span class="num-code">3</span>],
    [<span class="num-code">4</span>, <span class="num-code">5</span>, <span class="num-code">6</span>],
    [<span class="num-code">7</span>, <span class="num-code">8</span>, <span class="num-code">9</span>]
]

<span class="cmt"># Get element at row 0, column 2</span>
<span class="fn">print</span>(grid[<span class="num-code">0</span>][<span class="num-code">2</span>])  <span class="cmt"># Output: 3</span>

<span class="cmt"># Get element at row 1, column 1</span>
<span class="fn">print</span>(grid[<span class="num-code">1</span>][<span class="num-code">1</span>])  <span class="cmt"># Output: 5</span>

<span class="cmt"># Get element at row 2, column 0</span>
<span class="fn">print</span>(grid[<span class="num-code">2</span>][<span class="num-code">0</span>])  <span class="cmt"># Output: 7</span>

<span class="cmt"># Change an element</span>
grid[<span class="num-code">1</span>][<span class="num-code">1</span>] = <span class="num-code">99</span>  <span class="cmt"># Middle cell is now 99</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Looping Through a 2D Array</h3>
                <p>Use <strong>nested loops</strong> — one loop for rows, one for columns.</p>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Nested Loops</span></div>
                    <pre><code>grid = [
    [<span class="num-code">1</span>, <span class="num-code">2</span>, <span class="num-code">3</span>],
    [<span class="num-code">4</span>, <span class="num-code">5</span>, <span class="num-code">6</span>],
    [<span class="num-code">7</span>, <span class="num-code">8</span>, <span class="num-code">9</span>]
]

<span class="cmt"># Print every element</span>
<span class="kw">for</span> row <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">3</span>):         <span class="cmt"># For each row (0, 1, 2)</span>
    <span class="kw">for</span> col <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">3</span>):     <span class="cmt"># For each column (0, 1, 2)</span>
        <span class="fn">print</span>(grid[row][col])

<span class="cmt"># Calculate total of all elements</span>
total = <span class="num-code">0</span>
<span class="kw">for</span> row <span class="kw">in</span> grid:
    <span class="kw">for</span> item <span class="kw">in</span> row:
        total = total + item
<span class="fn">print</span>(<span class="str">"Total:"</span>, total)  <span class="cmt"># Output: 45</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Real-World Examples</h3>
                <table class="operations-table">
                    <tr><th>Use Case</th><th>Rows</th><th>Columns</th></tr>
                    <tr><td>Noughts & Crosses</td><td>3 rows</td><td>3 columns</td></tr>
                    <tr><td>Chess board</td><td>8 rows</td><td>8 columns</td></tr>
                    <tr><td>Seating plan</td><td>Row numbers</td><td>Seat letters</td></tr>
                    <tr><td>Spreadsheet</td><td>Row numbers</td><td>Column letters</td></tr>
                </table>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Tip</div>
                <p>Always remember: <code>array[ROW][COLUMN]</code></p>
                <p>Both indices start at <strong>0</strong>!</p>
            </div>
        `,
        quiz: {
            question: "grid = [[1,2,3],[4,5,6],[7,8,9]]<br>What is grid[2][0]?",
            options: ["3", "7", "1"],
            correct: 1
        }
    });
