// Topic 3: Sorting Algorithms
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 3,
        title: "Sorting Algorithms",
        desc: "Bubble Sort and Merge Sort",
        icon: "📊",
        objectives: [
            "Explain how bubble sort works step by step",
            "Explain how merge sort works",
            "Compare their efficiency"
        ],
        content: `
            <div class="content-block">
                <h3>Bubble Sort</h3>
                <p>Compares <strong>pairs of items next to each other</strong> and swaps them if they're in the wrong order. Like organizing LEGO bricks by size!</p>
                
                <div class="concept-box">
                    <div class="concept-label">📋 Steps</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li>Compare the first two items</li>
                        <li>If they're in the wrong order, swap them</li>
                        <li>Move to the next pair</li>
                        <li>Keep going until the end of the list</li>
                        <li>Repeat the whole thing until no swaps are needed</li>
                    </ol>
                </div>

                <div class="visualizer">
                    <div class="visualizer-title">Bubble Sort: Organize the bricks!</div>
                    <div class="array-display" id="bubble-array">
                        <div class="array-item">64</div>
                        <div class="array-item">34</div>
                        <div class="array-item">25</div>
                        <div class="array-item">12</div>
                        <div class="array-item">22</div>
                    </div>
                    <div class="visualizer-status" id="bubble-status">Press START to sort!</div>
                    <div class="visualizer-controls">
                        <button class="btn btn-primary" onclick="runBubbleSort()">▶ Start</button>
                        <button class="btn btn-secondary" onclick="resetBubbleSort()">↺ Reset</button>
                    </div>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Bubble Sort</span></div>
                    <pre><code><span class="kw">def</span> <span class="fn">bubble_sort</span>(items):
    n = <span class="fn">len</span>(items)
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num-code">0</span>, n-i-<span class="num-code">1</span>):
            <span class="kw">if</span> items[j] > items[j+<span class="num-code">1</span>]:
                <span class="cmt"># Swap!</span>
                items[j], items[j+<span class="num-code">1</span>] = items[j+<span class="num-code">1</span>], items[j]
    <span class="kw">return</span> items</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Merge Sort</h3>
                <p>Uses <strong>"divide and conquer"</strong> — splits the list into smaller pieces, sorts them, then merges back together. Like sorting LEGO by splitting into piles!</p>
                
                <div class="concept-box">
                    <div class="concept-label">📋 Steps</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li>Split the list in half</li>
                        <li>Keep splitting until each piece has 1 item</li>
                        <li>Merge pairs back together in sorted order</li>
                        <li>Keep merging until you have one sorted list</li>
                    </ol>
                </div>

                <div class="concept-box important">
                    <div class="concept-label">💡 Exam Tip</div>
                    <p>Merge sort is <strong>faster</strong> than bubble sort for big lists, but uses <strong>more memory</strong> (needs extra space for merging).</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Comparison</h3>
                <table>
                    <tr><th></th><th>Bubble Sort</th><th>Merge Sort</th></tr>
                    <tr><td><strong>Speed</strong></td><td>Slow 🐢</td><td>Fast 🚀</td></tr>
                    <tr><td><strong>Memory</strong></td><td>Low (sorts in place)</td><td>High (creates new lists)</td></tr>
                    <tr><td><strong>Best for</strong></td><td>Small lists</td><td>Large lists</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "After the FIRST complete pass of bubble sort, which item is definitely in the correct position?",
            options: [
                "The first item",
                "The middle item",
                "The last item (the largest value)"
            ],
            correct: 2
        }
    });
