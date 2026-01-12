// Topic 20: IDE Features
// Edit this file to update the topic content

window.topicsData = window.topicsData || [];
window.topicsData.push({
        id: 20,
        title: "IDE Features",
        desc: "Tools that help you write code",
        icon: "🛠️",
        objectives: [
            "Know what an IDE is",
            "Describe common IDE features",
            "Explain how each feature helps programmers"
        ],
        content: `
            <div class="content-block">
                <h3>What is an IDE?</h3>
                <p>An <strong>IDE (Integrated Development Environment)</strong> is a program that helps you write, test, and debug code. It's like a complete LEGO workstation with all the tools you need!</p>

                <div class="concept-box">
                    <div class="concept-label">🧱 Examples of IDEs</div>
                    <p>IDLE (Python), Visual Studio Code, PyCharm, Thonny</p>
                </div>
            </div>

            <div class="content-block">
                <h3>IDE Features (Learn These!)</h3>

                <table class="operations-table">
                    <tr><th>Feature</th><th>What it does</th><th>How it helps</th></tr>
                    <tr>
                        <td><strong>Syntax Highlighting</strong></td>
                        <td>Shows different parts of code in different colours</td>
                        <td>Easy to spot keywords, strings, numbers</td>
                    </tr>
                    <tr>
                        <td><strong>Auto-complete</strong></td>
                        <td>Suggests code as you type</td>
                        <td>Faster typing, fewer spelling mistakes</td>
                    </tr>
                    <tr>
                        <td><strong>Error Detection</strong></td>
                        <td>Underlines mistakes (like spell-check)</td>
                        <td>Find errors before running the program</td>
                    </tr>
                    <tr>
                        <td><strong>Bracket Matching</strong></td>
                        <td>Highlights matching brackets ()</td>
                        <td>Never miss a closing bracket</td>
                    </tr>
                    <tr>
                        <td><strong>Line Numbers</strong></td>
                        <td>Numbers each line of code</td>
                        <td>Easy to find errors ("error on line 42")</td>
                    </tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Debugging Features</h3>
                <p>Debugging means <strong>finding and fixing errors</strong>. IDEs have special tools to help:</p>

                <table class="operations-table">
                    <tr><th>Feature</th><th>What it does</th><th>How it helps</th></tr>
                    <tr>
                        <td><strong>Breakpoints</strong></td>
                        <td>Pause the program at a specific line</td>
                        <td>Check what's happening at that moment</td>
                    </tr>
                    <tr>
                        <td><strong>Step Through</strong></td>
                        <td>Run code one line at a time</td>
                        <td>Watch exactly what each line does</td>
                    </tr>
                    <tr>
                        <td><strong>Variable Watch</strong></td>
                        <td>Shows current value of variables</td>
                        <td>See how values change as code runs</td>
                    </tr>
                    <tr>
                        <td><strong>Error Messages</strong></td>
                        <td>Explains what went wrong</td>
                        <td>Tells you the type and location of error</td>
                    </tr>
                </table>
            </div>

            <div class="content-block">
                <h3>Other Useful Features</h3>

                <div class="concept-box">
                    <div class="concept-label">📋 More IDE Features</div>
                    <ul style="padding-left: 20px; margin-top: 10px;">
                        <li><strong>Run Button:</strong> Execute your program with one click</li>
                        <li><strong>Auto-indent:</strong> Automatically adds correct spacing</li>
                        <li><strong>Find and Replace:</strong> Search for text and change it</li>
                        <li><strong>Code Folding:</strong> Collapse sections to see the big picture</li>
                        <li><strong>Output Window:</strong> Shows what your program prints</li>
                    </ul>
                </div>
            </div>

            <div class="concept-box important">
                <div class="concept-label">🎯 Exam Tip</div>
                <p>When asked about IDE features, always explain:</p>
                <ol style="padding-left: 20px; margin-top: 10px;">
                    <li><strong>What</strong> the feature is</li>
                    <li><strong>How</strong> it helps the programmer</li>
                </ol>
            </div>
        `,
        quiz: {
            question: "Which IDE feature colours different parts of the code?",
            options: ["Auto-complete", "Syntax highlighting", "Breakpoints"],
            correct: 1
        }
    });
