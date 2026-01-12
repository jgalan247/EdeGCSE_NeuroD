// Topic 13: Testing
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 13,
        title: "Testing",
        desc: "Normal, boundary, and erroneous data",
        icon: "🧪",
        objectives: [
            "Understand why testing is important",
            "Use normal, boundary, and erroneous test data",
            "Create a test plan"
        ],
        content: `
            <div class="content-block">
                <h3>Why Test?</h3>
                <p>Testing finds <strong>bugs before users do</strong>! Like checking LEGO instructions work before printing them for everyone.</p>
            </div>

            <div class="content-block">
                <h3>Types of Test Data</h3>
                <table class="operations-table">
                    <tr><th>Type</th><th>Purpose</th><th>Example (Age 0-17 = Child)</th></tr>
                    <tr><td><strong>Normal</strong></td><td>Typical, expected values</td><td>10, 12, 15</td></tr>
                    <tr><td><strong>Boundary</strong></td><td>Edge cases at limits</td><td>0, 17, 18</td></tr>
                    <tr><td><strong>Erroneous</strong></td><td>Invalid data that should be rejected</td><td>-5, "abc", 200</td></tr>
                </table>

                <div class="concept-box important">
                    <div class="concept-label">🔑 Boundary Testing</div>
                    <p>Always test values <strong>at, just below, and just above</strong> the limits!</p>
                    <p>For range 1-100: test 0, 1, 100, 101</p>
                </div>
            </div>

            <div class="content-block">
                <h3>Example: Testing Age Validation</h3>
                <p>Rule: Only ages 13-99 can create an account</p>

                <table class="operations-table">
                    <tr><th>Test Data</th><th>Type</th><th>Expected Result</th></tr>
                    <tr><td>25</td><td>Normal</td><td>Accepted ✓</td></tr>
                    <tr><td>50</td><td>Normal</td><td>Accepted ✓</td></tr>
                    <tr><td>12</td><td>Boundary (below)</td><td>Rejected ✗</td></tr>
                    <tr><td>13</td><td>Boundary (lower limit)</td><td>Accepted ✓</td></tr>
                    <tr><td>99</td><td>Boundary (upper limit)</td><td>Accepted ✓</td></tr>
                    <tr><td>100</td><td>Boundary (above)</td><td>Rejected ✗</td></tr>
                    <tr><td>-5</td><td>Erroneous</td><td>Rejected ✗</td></tr>
                    <tr><td>"hello"</td><td>Erroneous</td><td>Rejected ✗</td></tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Writing a Test Plan</h3>
                <div class="code-container">
                    <div class="code-header"><span class="code-language">Test Plan Example</span></div>
                    <pre><code><span class="cmt">Program: Password checker (8-20 characters)</span>

Test 1: "password123" (Normal)
   Expected: Valid
   Actual: ____

Test 2: "12345678" (Boundary - exactly 8)
   Expected: Valid
   Actual: ____

Test 3: "1234567" (Boundary - just below)
   Expected: Invalid
   Actual: ____

Test 4: "" (Erroneous - empty)
   Expected: Invalid
   Actual: ____</code></pre>
                </div>
            </div>

            <div class="content-block">
                <h3>Iterative Testing</h3>
                <div class="concept-box">
                    <div class="concept-label">📋 Testing Process</div>
                    <ol style="padding-left: 20px; margin-top: 10px;">
                        <li><strong>Plan:</strong> Create test data and expected results</li>
                        <li><strong>Test:</strong> Run the program with test data</li>
                        <li><strong>Compare:</strong> Check actual vs expected results</li>
                        <li><strong>Fix:</strong> Debug any problems found</li>
                        <li><strong>Repeat:</strong> Test again after fixes</li>
                    </ol>
                </div>
            </div>
        `,
        quiz: {
            question: "For a program accepting marks 0-100, which is a BOUNDARY test value?",
            options: ["50", "100", "-10"],
            correct: 1
        }
    });
