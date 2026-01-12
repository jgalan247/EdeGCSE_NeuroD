// Topic 14: Algorithm Efficiency
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 14,
        title: "Algorithm Efficiency",
        desc: "Big O notation and comparing algorithms",
        icon: "⚡",
        objectives: [
            "Understand what algorithm efficiency means",
            "Compare time complexity of algorithms",
            "Know basic Big O notation"
        ],
        content: `
            <div class="content-block">
                <h3>What is Efficiency?</h3>
                <p>Efficiency measures <strong>how fast an algorithm runs</strong> and <strong>how much memory it uses</strong> as the data gets bigger. Like comparing how long it takes to find one LEGO brick in 10 pieces vs 10,000 pieces!</p>
            </div>

            <div class="content-block">
                <h3>Big O Notation</h3>
                <p>Big O describes how an algorithm's time grows as data size (n) increases.</p>

                <table class="operations-table">
                    <tr><th>Notation</th><th>Name</th><th>Example</th><th>Speed</th></tr>
                    <tr><td><code>O(1)</code></td><td>Constant</td><td>Access array[0]</td><td>🚀 Fastest</td></tr>
                    <tr><td><code>O(log n)</code></td><td>Logarithmic</td><td>Binary search</td><td>🏎️ Very fast</td></tr>
                    <tr><td><code>O(n)</code></td><td>Linear</td><td>Linear search</td><td>🚗 Fast</td></tr>
                    <tr><td><code>O(n²)</code></td><td>Quadratic</td><td>Bubble sort</td><td>🐢 Slow</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Comparing with Real Numbers</h3>
                <p>How many operations for n = 1000 items?</p>

                <table class="operations-table">
                    <tr><th>Algorithm</th><th>Big O</th><th>Operations</th></tr>
                    <tr><td>Direct access</td><td>O(1)</td><td>1</td></tr>
                    <tr><td>Binary search</td><td>O(log n)</td><td>~10</td></tr>
                    <tr><td>Linear search</td><td>O(n)</td><td>1,000</td></tr>
                    <tr><td>Bubble sort</td><td>O(n²)</td><td>1,000,000</td></tr>
                </table>

                <div class="concept-box important">
                    <div class="concept-label">💡 Key Insight</div>
                    <p>Binary search on 1000 items: ~10 steps</p>
                    <p>Linear search on 1000 items: up to 1000 steps</p>
                    <p>Binary search is <strong>100x faster</strong>! (but needs sorted data)</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Searching Algorithm Comparison</h3>
                <table class="operations-table">
                    <tr><th>Algorithm</th><th>Time Complexity</th><th>Requirement</th></tr>
                    <tr><td>Linear Search</td><td>O(n) - Linear</td><td>None</td></tr>
                    <tr><td>Binary Search</td><td>O(log n) - Logarithmic</td><td>Sorted data</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Sorting Algorithm Comparison</h3>
                <table class="operations-table">
                    <tr><th>Algorithm</th><th>Time Complexity</th><th>Space</th></tr>
                    <tr><td>Bubble Sort</td><td>O(n²) - Quadratic</td><td>O(1) - Low</td></tr>
                    <tr><td>Merge Sort</td><td>O(n log n) - Linearithmic</td><td>O(n) - High</td></tr>
                </table>

                <div class="concept-box">
                    <div class="concept-label">📋 Trade-offs</div>
                    <p><strong>Bubble Sort:</strong> Simple but slow. Good for small lists or nearly sorted data.</p>
                    <p><strong>Merge Sort:</strong> Faster but uses more memory. Good for large lists.</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Space Complexity</h3>
                <p>Space complexity measures <strong>how much extra memory</strong> an algorithm needs.</p>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    <li><strong>Bubble sort:</strong> O(1) — sorts "in place" using almost no extra memory</li>
                    <li><strong>Merge sort:</strong> O(n) — needs extra space to store temporary lists</li>
                </ul>
            </div>
        `,
        quiz: {
            question: "If an algorithm takes 1 second for 100 items and 4 seconds for 200 items, what's likely its Big O?",
            options: ["O(1) - Constant", "O(n) - Linear", "O(n²) - Quadratic"],
            correct: 2
        }
    });
