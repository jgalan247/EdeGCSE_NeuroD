// Topic 7: Data Structures
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 7,
        title: "Data Structures",
        desc: "Lists for storing multiple items",
        icon: "📦",
        objectives: [
            "Create and use lists",
            "Access items using index numbers",
            "Add, remove, and modify items"
        ],
        content: `
            <div class="content-block">
                <h3>What is a List?</h3>
                <p>A list stores <strong>multiple items in one variable</strong>. Like a LEGO parts list showing all the bricks you need!</p>
                
                <div class="concept-box important">
                    <div class="concept-label">🔑 CRITICAL: Index Starts at 0</div>
                    <p>The FIRST item is at index 0, NOT index 1!</p>
                    <div class="code-container" style="margin-top: 10px;">
                        <div class="code-header"><span class="code-language">Python</span></div>
                        <pre><code>items = [<span class="str">"mushroom"</span>, <span class="str">"star"</span>, <span class="str">"flower"</span>]
<span class="cmt">#         index 0      index 1    index 2</span></code></pre>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <h3>Working with Lists</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — List Operations</span></div>
                    <pre><code><span class="cmt"># Create a list</span>
scores = [<span class="num-code">100</span>, <span class="num-code">250</span>, <span class="num-code">180</span>]

<span class="cmt"># Access an item (index starts at 0!)</span>
first = scores[<span class="num-code">0</span>]  <span class="cmt"># 100</span>

<span class="cmt"># Change an item</span>
scores[<span class="num-code">1</span>] = <span class="num-code">300</span>  <span class="cmt"># Now: [100, 300, 180]</span>

<span class="cmt"># Add an item to the end</span>
scores.<span class="fn">append</span>(<span class="num-code">400</span>)  <span class="cmt"># Now: [100, 300, 180, 400]</span>

<span class="cmt"># Remove an item</span>
scores.<span class="fn">remove</span>(<span class="num-code">180</span>)  <span class="cmt"># Removes first 180</span>

<span class="cmt"># Get the length</span>
count = <span class="fn">len</span>(scores)  <span class="cmt"># How many items</span></code></pre>
                </div>

                <table style="margin-top: 20px;">
                    <tr><th>Operation</th><th>Code</th><th>What it does</th></tr>
                    <tr><td>Get item</td><td><code>list[index]</code></td><td>Returns item at position</td></tr>
                    <tr><td>Set item</td><td><code>list[index] = val</code></td><td>Changes item at position</td></tr>
                    <tr><td>Add to end</td><td><code>list.append(item)</code></td><td>Adds item at the end</td></tr>
                    <tr><td>Remove</td><td><code>list.remove(item)</code></td><td>Removes first matching item</td></tr>
                    <tr><td>Length</td><td><code>len(list)</code></td><td>Returns number of items</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: 'power_ups = ["mushroom", "star", "flower"]<br>What is power_ups[1]?',
            options: ["mushroom", "star", "flower"],
            correct: 1
        }
    });
