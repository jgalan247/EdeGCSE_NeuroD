// Topic 10: File Handling
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 10,
        title: "File Handling",
        desc: "Reading and writing to files",
        icon: "📁",
        objectives: [
            "Open files for reading and writing",
            "Read data from text files",
            "Write and append data to files"
        ],
        content: `
            <div class="content-block">
                <h3>Why Use Files?</h3>
                <p>Files let programs <strong>save data permanently</strong>. Without files, all data is lost when the program ends — like losing your LEGO build instructions!</p>
            </div>

            <div class="content-block">
                <h3>Opening Files</h3>
                <p>Use <code>open()</code> with a mode:</p>

                <table class="operations-table">
                    <tr><th>Mode</th><th>Meaning</th><th>What it does</th></tr>
                    <tr><td><code>"r"</code></td><td>Read</td><td>Read from file (file must exist)</td></tr>
                    <tr><td><code>"w"</code></td><td>Write</td><td>Write to file (creates new / overwrites)</td></tr>
                    <tr><td><code>"a"</code></td><td>Append</td><td>Add to end of file</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Reading from Files</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Reading Files</span></div>
                    <pre><code><span class="cmt"># Method 1: Read entire file</span>
file = <span class="fn">open</span>(<span class="str">"scores.txt"</span>, <span class="str">"r"</span>)
content = file.<span class="fn">read</span>()
file.<span class="fn">close</span>()

<span class="cmt"># Method 2: Read line by line</span>
file = <span class="fn">open</span>(<span class="str">"scores.txt"</span>, <span class="str">"r"</span>)
<span class="kw">for</span> line <span class="kw">in</span> file:
    <span class="fn">print</span>(line)
file.<span class="fn">close</span>()

<span class="cmt"># Method 3: Using 'with' (BEST - auto closes!)</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"scores.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> file:
    content = file.<span class="fn">read</span>()
<span class="cmt"># File automatically closed here</span></code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Writing to Files</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — Writing Files</span></div>
                    <pre><code><span class="cmt"># Write (overwrites existing content!)</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"highscore.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> file:
    file.<span class="fn">write</span>(<span class="str">"Mario: 1000\\n"</span>)
    file.<span class="fn">write</span>(<span class="str">"Luigi: 850\\n"</span>)

<span class="cmt"># Append (adds to end)</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"highscore.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> file:
    file.<span class="fn">write</span>(<span class="str">"Peach: 920\\n"</span>)</code></pre>
                </div>

                <div class="concept-box important">
                    <div class="concept-label">⚠️ Important Difference</div>
                    <p><code>"w"</code> mode <strong>deletes everything</strong> in the file first!</p>
                    <p><code>"a"</code> mode <strong>keeps existing content</strong> and adds to the end.</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Reading into a List</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Python — readlines()</span></div>
                    <pre><code><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"names.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> file:
    lines = file.<span class="fn">readlines</span>()
    <span class="cmt"># lines is now a list like ["Mario\\n", "Luigi\\n"]</span>

<span class="cmt"># Remove \\n from each line</span>
<span class="kw">for</span> line <span class="kw">in</span> lines:
    <span class="fn">print</span>(line.<span class="fn">strip</span>())  <span class="cmt"># strip() removes whitespace</span></code></pre>
                </div>
            </div>
        `,
        quiz: {
            question: "Which mode would you use to add a new high score without deleting existing scores?",
            options: ['"r" - read', '"w" - write', '"a" - append'],
            correct: 2
        }
    });
