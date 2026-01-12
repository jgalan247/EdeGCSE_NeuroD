// Topic 1: Algorithms Basics
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 1,
        title: "Algorithms Basics",
        desc: "What algorithms are and how to represent them",
        icon: "🧱",
        objectives: [
            "Define what an algorithm is",
            "Recognise three ways to represent algorithms"
        ],
        content: `
            <div class="content-block">
                <h3>What is an Algorithm?</h3>
                <p>An algorithm is a <strong>set of step-by-step instructions</strong> to solve a problem or complete a task.</p>
                <p>Think of it like LEGO instructions — each step must be followed in order to build something!</p>
                
                <div class="concept-box important">
                    <div class="concept-label">🔑 Key Definition</div>
                    <p><strong>Algorithm:</strong> A finite sequence of well-defined instructions to solve a specific problem.</p>
                </div>
            </div>
            
            <div class="content-block">
                <h3>Three Ways to Represent Algorithms</h3>
                
                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">1</span>
                        Pseudocode
                    </div>
                    <div class="pattern-body">
                        <p>Written in structured English. Like the text on LEGO instruction booklets!</p>
                        <div class="code-container">
                            <div class="code-header"><span class="code-language">Pseudocode</span></div>
                            <pre><code><span class="kw">SET</span> total <span class="kw">TO</span> <span class="num-code">0</span>
<span class="kw">FOR EACH</span> brick <span class="kw">IN</span> box
    <span class="kw">ADD</span> brick <span class="kw">TO</span> tower
<span class="kw">END FOR</span>
<span class="kw">OUTPUT</span> tower</code></pre>
                        </div>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">2</span>
                        Flowcharts
                    </div>
                    <div class="pattern-body">
                        <p>Visual diagrams using shapes — like a Mario level map!</p>
                        <ul style="margin: 12px 0 0 24px;">
                            <li><strong>Oval</strong> = Start / End (like Start and Finish flags)</li>
                            <li><strong>Rectangle</strong> = Process (doing something)</li>
                            <li><strong>Diamond</strong> = Decision (like choosing a pipe to go down)</li>
                            <li><strong>Parallelogram</strong> = Input / Output</li>
                        </ul>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">3</span>
                        Program Code
                    </div>
                    <div class="pattern-body">
                        <p>Real code that computers can run — the actual game code!</p>
                        <div class="code-container">
                            <div class="code-header"><span class="code-language">Python</span></div>
                            <pre><code>total = <span class="num-code">0</span>
<span class="kw">for</span> brick <span class="kw">in</span> box:
    total = total + <span class="num-code">1</span>
<span class="fn">print</span>(total)</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            question: "Which shape represents a DECISION in a flowchart? (Like Mario choosing which pipe to enter!)",
            options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
            correct: 2
        }
    });
