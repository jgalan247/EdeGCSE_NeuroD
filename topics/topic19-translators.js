// Topic 19: Translators
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 19,
        title: "Translators",
        desc: "Compilers, interpreters, and assemblers",
        icon: "🔄",
        objectives: [
            "Explain what a translator does",
            "Compare compilers and interpreters",
            "Understand what an assembler does"
        ],
        content: `
            <div class="content-block">
                <h3>Why Do We Need Translators?</h3>
                <p>Computers only understand <strong>machine code</strong> (binary: 0s and 1s). Translators convert our human-readable code into machine code.</p>

                <div class="concept-box">
                    <div class="concept-label">🧱 LEGO Analogy</div>
                    <p>Imagine LEGO instructions written in Japanese. You need a <strong>translator</strong> to convert them to English before you can build!</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Three Types of Translators</h3>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">1</span>
                        Compiler
                    </div>
                    <div class="pattern-body">
                        <p><strong>What it does:</strong> Translates the WHOLE program at once BEFORE running.</p>
                        <p>🎮 <em>Like burning a game onto a disc — do it once, then play anytime!</em></p>

                        <div class="concept-box">
                            <div class="concept-label">How it works</div>
                            <ol style="padding-left: 20px; margin-top: 10px;">
                                <li>You write the source code</li>
                                <li>Compiler checks ALL the code for errors</li>
                                <li>If no errors → creates an executable file (.exe)</li>
                                <li>You can run the .exe file without the compiler</li>
                            </ol>
                        </div>

                        <table class="operations-table">
                            <tr><th>✅ Advantages</th><th>❌ Disadvantages</th></tr>
                            <tr><td>Runs very fast</td><td>Takes time to compile first</td></tr>
                            <tr><td>Code is protected (can't see source)</td><td>Must recompile after any change</td></tr>
                            <tr><td>Don't need compiler to run</td><td>Errors shown all at once (overwhelming)</td></tr>
                        </table>
                        <p><strong>Examples:</strong> C, C++, Java (partially)</p>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">2</span>
                        Interpreter
                    </div>
                    <div class="pattern-body">
                        <p><strong>What it does:</strong> Translates and runs ONE line at a time.</p>
                        <p>🎮 <em>Like a live translator at a meeting — translates each sentence as it's spoken!</em></p>

                        <div class="concept-box">
                            <div class="concept-label">How it works</div>
                            <ol style="padding-left: 20px; margin-top: 10px;">
                                <li>Read line 1 → translate → run</li>
                                <li>Read line 2 → translate → run</li>
                                <li>If error found → STOP immediately</li>
                                <li>Repeats every time you run the program</li>
                            </ol>
                        </div>

                        <table class="operations-table">
                            <tr><th>✅ Advantages</th><th>❌ Disadvantages</th></tr>
                            <tr><td>Errors shown one at a time (easier to fix)</td><td>Runs slower</td></tr>
                            <tr><td>No waiting to compile</td><td>Need interpreter installed to run</td></tr>
                            <tr><td>Good for testing/debugging</td><td>Source code visible to others</td></tr>
                        </table>
                        <p><strong>Examples:</strong> Python, JavaScript, Ruby</p>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">3</span>
                        Assembler
                    </div>
                    <div class="pattern-body">
                        <p><strong>What it does:</strong> Translates assembly language into machine code.</p>
                        <p>🧱 <em>Like converting LEGO brick codes (2x4, 1x2) into exact millimetre measurements.</em></p>

                        <div class="concept-box">
                            <div class="concept-label">How it works</div>
                            <p>Assembly: <code>MOV AL, 5</code> → Machine code: <code>10110000 00000101</code></p>
                        </div>
                        <p><strong>Used for:</strong> Embedded systems, drivers, games that need maximum speed</p>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <h3>Quick Comparison</h3>
                <table class="operations-table">
                    <tr><th>Feature</th><th>Compiler</th><th>Interpreter</th></tr>
                    <tr><td>Translates</td><td>Whole program at once</td><td>One line at a time</td></tr>
                    <tr><td>Speed</td><td>Fast (after compiling)</td><td>Slower</td></tr>
                    <tr><td>Error reporting</td><td>All errors at once</td><td>One error at a time</td></tr>
                    <tr><td>Creates .exe?</td><td>Yes</td><td>No</td></tr>
                    <tr><td>Good for</td><td>Finished programs</td><td>Testing/debugging</td></tr>
                </table>
            </div>
        `,
        quiz: {
            question: "Python uses which type of translator?",
            options: ["Compiler", "Interpreter", "Assembler"],
            correct: 1
        }
    });
