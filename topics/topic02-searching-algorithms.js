// Topic 2: Searching Algorithms
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 2,
        title: "Searching Algorithms",
        desc: "Linear Search and Binary Search",
        icon: "🔍",
        objectives: [
            "Explain how linear search works",
            "Explain how binary search works",
            "Compare their efficiency"
        ],
        content: `
            <div class="content-block">
                <h3>Linear Search</h3>
                <p>Checks <strong>each item one by one</strong> from the start — like looking through your LEGO box piece by piece!</p>
                
                <div class="concept-box">
                    <div class="concept-label">📋 Steps</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li>Start at the first item</li>
                        <li>Check if it matches what you're looking for</li>
                        <li>If yes → found it! Stop searching</li>
                        <li>If no → move to the next item</li>
                        <li>Repeat until found or reach the end</li>
                    </ol>
                </div>

                <div class="visualizer">
                    <div class="visualizer-title">Linear Search: Find the coin (7)!</div>
                    <div class="array-display" id="linear-array">
                        <div class="array-item">3</div>
                        <div class="array-item">1</div>
                        <div class="array-item">4</div>
                        <div class="array-item">5</div>
                        <div class="array-item">9</div>
                        <div class="array-item">7</div>
                        <div class="array-item">2</div>
                    </div>
                    <div class="visualizer-status" id="linear-status">Press START to begin the search!</div>
                    <div class="visualizer-controls">
                        <button class="btn btn-primary" onclick="runLinearSearch()">▶ Start</button>
                        <button class="btn btn-secondary" onclick="resetLinearSearch()">↺ Reset</button>
                    </div>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Linear Search</span></div>
                    <pre><code><span class="kw">def</span> <span class="fn">linear_search</span>(items, target):
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(items)):
        <span class="kw">if</span> items[i] == target:
            <span class="kw">return</span> i  <span class="cmt"># Found!</span>
    <span class="kw">return</span> -<span class="num-code">1</span>  <span class="cmt"># Not found</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Binary Search</h3>
                <p>Much faster, but <strong>only works on sorted lists</strong>! Like finding a word in a dictionary — you start in the middle.</p>
                
                <div class="concept-box important">
                    <div class="concept-label">⚠️ Important Rule</div>
                    <p>Binary search <strong>ONLY works if the list is already sorted</strong>. Like LEGO pieces organized by number!</p>
                </div>

                <div class="concept-box">
                    <div class="concept-label">📋 Steps</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li>Find the middle item</li>
                        <li>If it matches → found it!</li>
                        <li>If target is smaller → search the LEFT half</li>
                        <li>If target is larger → search the RIGHT half</li>
                        <li>Repeat until found</li>
                    </ol>
                </div>

                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Binary Search</span></div>
                    <pre><code><span class="kw">def</span> <span class="fn">binary_search</span>(items, target):
    low = <span class="num-code">0</span>
    high = <span class="fn">len</span>(items) - <span class="num-code">1</span>
    
    <span class="kw">while</span> low <= high:
        mid = (low + high) // <span class="num-code">2</span>
        <span class="kw">if</span> items[mid] == target:
            <span class="kw">return</span> mid  <span class="cmt"># Found!</span>
        <span class="kw">elif</span> items[mid] < target:
            low = mid + <span class="num-code">1</span>  <span class="cmt"># Search right</span>
        <span class="kw">else</span>:
            high = mid - <span class="num-code">1</span>  <span class="cmt"># Search left</span>
    <span class="kw">return</span> -<span class="num-code">1</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Comparison</h3>
                <table>
                    <tr><th></th><th>Linear Search</th><th>Binary Search</th></tr>
                    <tr><td><strong>Works on</strong></td><td>Any list</td><td>Sorted lists only</td></tr>
                    <tr><td><strong>Speed</strong></td><td>Slower 🐢</td><td>Much faster 🚀</td></tr>
                    <tr><td><strong>Like...</strong></td><td>Searching a messy LEGO box</td><td>Looking up a word in a dictionary</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "A list has 1000 UNSORTED items. Which search must you use?",
            options: [
                "Binary search — it's faster",
                "Linear search — binary needs sorted data",
                "Either one works the same"
            ],
            correct: 1
        }
    });
