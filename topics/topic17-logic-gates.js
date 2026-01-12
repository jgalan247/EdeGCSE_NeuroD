// Topic 17: Logic Gates
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 17,
        title: "Logic Gates",
        desc: "AND, OR, NOT, XOR gates and diagrams",
        icon: "⚡",
        objectives: [
            "Recognise logic gate symbols",
            "Trace inputs through logic circuits",
            "Understand XOR gate"
        ],
        content: `
            <div class="content-block">
                <h3>What are Logic Gates?</h3>
                <p>Logic gates are <strong>electronic switches</strong> that perform Boolean operations. They're the building blocks inside every computer chip — like tiny LEGO pieces that make up a massive build!</p>

                <div class="concept-box">
                    <div class="concept-label">🔑 Key Idea</div>
                    <p>Each gate takes inputs (0 or 1) and produces ONE output (0 or 1).</p>
                    <p><strong>0 = False = Off = No</strong></p>
                    <p><strong>1 = True = On = Yes</strong></p>
                </div>
            </div>

            <div class="content-block">
                <h3>The Four Main Gates</h3>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">1</span>
                        AND Gate
                    </div>
                    <div class="pattern-body">
                        <p><strong>Symbol:</strong> D-shape with flat back</p>
                        <p><strong>Rule:</strong> Output is 1 only when ALL inputs are 1.</p>
                        <div class="gate-visual">A ──┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─[AND]── Q<br>B ──┘</div>
                        <table class="operations-table">
                            <tr><th>A</th><th>B</th><th>Output Q</th></tr>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td><strong>1</strong></td></tr>
                        </table>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">2</span>
                        OR Gate
                    </div>
                    <div class="pattern-body">
                        <p><strong>Symbol:</strong> Curved shield shape</p>
                        <p><strong>Rule:</strong> Output is 1 when ANY input is 1.</p>
                        <div class="gate-visual">A ──┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─[OR]── Q<br>B ──┘</div>
                        <table class="operations-table">
                            <tr><th>A</th><th>B</th><th>Output Q</th></tr>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td><strong>1</strong></td></tr>
                            <tr><td>1</td><td>0</td><td><strong>1</strong></td></tr>
                            <tr><td>1</td><td>1</td><td><strong>1</strong></td></tr>
                        </table>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">3</span>
                        NOT Gate (Inverter)
                    </div>
                    <div class="pattern-body">
                        <p><strong>Symbol:</strong> Triangle with small circle at output</p>
                        <p><strong>Rule:</strong> Flips the input. Only has ONE input.</p>
                        <div class="gate-visual">A ──[NOT]──o── Q</div>
                        <table class="operations-table">
                            <tr><th>A</th><th>Output Q</th></tr>
                            <tr><td>0</td><td><strong>1</strong></td></tr>
                            <tr><td>1</td><td><strong>0</strong></td></tr>
                        </table>
                    </div>
                </div>

                <div class="pattern-card">
                    <div class="pattern-header">
                        <span class="pattern-step">4</span>
                        XOR Gate (Exclusive OR)
                    </div>
                    <div class="pattern-body">
                        <p><strong>Symbol:</strong> OR gate with extra curved line</p>
                        <p><strong>Rule:</strong> Output is 1 when inputs are <strong>DIFFERENT</strong>.</p>
                        <p>🎮 <em>Like choosing: Mario XOR Luigi — you can only pick ONE player!</em></p>
                        <div class="gate-visual">A ──┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─[XOR]── Q<br>B ──┘</div>
                        <table class="operations-table">
                            <tr><th>A</th><th>B</th><th>Output Q</th></tr>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td><strong>1</strong></td></tr>
                            <tr><td>1</td><td>0</td><td><strong>1</strong></td></tr>
                            <tr><td>1</td><td>1</td><td>0</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <h3>How to Trace a Circuit</h3>
                <div class="concept-box">
                    <div class="concept-label">📋 Step-by-Step Method</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li><strong>Start</strong> with the given input values (0 or 1)</li>
                        <li><strong>Work left to right</strong> through each gate</li>
                        <li><strong>Write down</strong> each gate's output</li>
                        <li><strong>Use that output</strong> as input for the next gate</li>
                        <li><strong>Continue</strong> until you reach the final output</li>
                    </ol>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Tip</div>
                <p>The small circle (o) on a gate means NOT/invert!</p>
                <p>NAND = NOT + AND, NOR = NOT + OR</p>
            </div>
        `,
        quiz: {
            question: "What is the output of XOR when both inputs are 1?",
            options: ["1 (True)", "0 (False)", "Error"],
            correct: 1
        }
    });
