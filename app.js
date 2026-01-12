/* =============================================
   EDEXCEL PAPER 2 GUIDE - GAME LOGIC
   Lego & Mario themed learning experience
   ============================================= */

// ============================================
// TOPIC DATA
// Topics are loaded from separate files in /topics folder
// Edit individual topic files to update content
// ============================================

const topics = window.topicsData || [];

// ============================================
// GAME STATE
// ============================================

let currentLevel = 1;
let completedLevels = new Set();
let coins = 0;

// Load saved progress
function loadProgress() {
    const savedCompleted = localStorage.getItem('paper2-completed');
    const savedCoins = localStorage.getItem('paper2-coins');

    if (savedCompleted) {
        completedLevels = new Set(JSON.parse(savedCompleted));
    }
    if (savedCoins) {
        coins = parseInt(savedCoins);
    }
}

// Save progress
function saveProgress() {
    localStorage.setItem('paper2-completed', JSON.stringify([...completedLevels]));
    localStorage.setItem('paper2-coins', coins.toString());
}

// ============================================
// UI UPDATES
// ============================================

const TOTAL_LEVELS = 22;

function updateStats() {
    document.getElementById('coin-count').textContent = coins;
    document.getElementById('star-count').textContent = completedLevels.size;
    document.getElementById('pipe-fill').style.width = `${(completedLevels.size / TOTAL_LEVELS) * 100}%`;
}

function renderLevelList() {
    const list = document.getElementById('level-list');
    list.innerHTML = topics.map(t => `
        <li class="level-item">
            <button class="level-btn ${t.id === currentLevel ? 'active' : ''} ${completedLevels.has(t.id) ? 'completed' : ''}"
                    data-level="${t.id}">
                <span class="level-num">${t.id}</span>
                <span class="level-name">${t.icon} ${t.title}</span>
                <span class="level-star">⭐</span>
            </button>
        </li>
    `).join('');

    // Add click handlers
    list.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            goToLevel(parseInt(btn.dataset.level));
        });
    });
}

function renderLevel() {
    const topic = topics.find(t => t.id === currentLevel);
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <section class="level-section active">
            <div class="level-header">
                <div class="level-number">World ${topic.id} of ${TOTAL_LEVELS}</div>
                <h2 class="level-title">${topic.icon} ${topic.title}</h2>
                <p class="level-desc">${topic.desc}</p>
            </div>

            <div class="objectives-box">
                <div class="objectives-title">Mission Objectives</div>
                <ul class="objectives-list">
                    ${topic.objectives.map(o => `<li>${o}</li>`).join('')}
                </ul>
            </div>

            ${topic.content}

            <div class="exercise-box">
                <div class="exercise-header">
                    <div class="exercise-icon">❓</div>
                    <span class="exercise-title">Boss Challenge!</span>
                </div>
                <div class="exercise-body">
                    <div class="exercise-question">
                        <strong>Question:</strong> ${topic.quiz.question}
                    </div>
                    <div class="quiz-options" id="quiz-options">
                        ${topic.quiz.options.map((opt, i) => `
                            <label>
                                <input type="radio" name="quiz" value="${i}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary" onclick="checkAnswer(${topic.quiz.correct})">
                        ⚡ Check Answer
                    </button>
                    <div class="feedback" id="feedback"></div>
                </div>
            </div>

            <div class="section-nav">
                ${currentLevel > 1 ?
                    `<button class="btn btn-secondary" onclick="goToLevel(${currentLevel - 1})">← Previous World</button>` :
                    '<div></div>'}
                ${currentLevel < TOTAL_LEVELS ?
                    `<button class="btn btn-primary" onclick="goToLevel(${currentLevel + 1})">Next World →</button>` :
                    `<button class="btn btn-success" onclick="completeAll()">🏆 Complete Game!</button>`}
            </div>
        </section>
    `;

    // Add quiz option click handlers
    document.querySelectorAll('.quiz-options label').forEach(label => {
        label.addEventListener('click', () => {
            document.querySelectorAll('.quiz-options label').forEach(l => l.classList.remove('selected'));
            label.classList.add('selected');
            label.querySelector('input').checked = true;
        });
    });
}

// ============================================
// NAVIGATION
// ============================================

function goToLevel(levelId) {
    currentLevel = levelId;
    renderLevelList();
    renderLevel();
    window.scrollTo(0, 0);
}

// ============================================
// QUIZ & REWARDS
// ============================================

function checkAnswer(correctIndex) {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    const options = document.querySelectorAll('.quiz-options label');

    if (!selected) {
        feedback.textContent = '👆 Select an answer first!';
        feedback.className = 'feedback show error';
        return;
    }

    const selectedIndex = parseInt(selected.value);

    // Reset styles
    options.forEach(opt => opt.classList.remove('correct', 'incorrect', 'selected'));

    if (selectedIndex === correctIndex) {
        // Correct!
        options[selectedIndex].classList.add('correct');
        feedback.innerHTML = '🎉 <strong>CORRECT!</strong> You got it!';
        feedback.className = 'feedback show success';

        // Award coins if not already completed
        if (!completedLevels.has(currentLevel)) {
            completedLevels.add(currentLevel);
            coins += 10;
            saveProgress();
            updateStats();
            renderLevelList();
            showPowerUp();
        }
    } else {
        // Incorrect
        options[selectedIndex].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
        feedback.innerHTML = '❌ Not quite! The correct answer is highlighted.';
        feedback.className = 'feedback show error';
    }
}

function showPowerUp() {
    const popup = document.getElementById('powerup-popup');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

function completeAll() {
    for (let i = 1; i <= TOTAL_LEVELS; i++) {
        if (!completedLevels.has(i)) {
            completedLevels.add(i);
            coins += 10;
        }
    }
    saveProgress();
    updateStats();
    renderLevelList();
    alert('🏆 CONGRATULATIONS! You completed all worlds! Total coins: ' + coins);
}

// ============================================
// ALGORITHM VISUALIZERS
// ============================================

let linearRunning = false;
let bubbleRunning = false;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Linear Search
async function runLinearSearch() {
    if (linearRunning) return;
    linearRunning = true;

    const items = document.querySelectorAll('#linear-array .array-item');
    const status = document.getElementById('linear-status');
    const target = 7;

    // Reset
    items.forEach(item => item.classList.remove('comparing', 'found', 'sorted'));

    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('comparing');
        status.textContent = `Checking block ${i}: Is ${items[i].textContent} the coin (${target})?`;

        await sleep(700);

        if (parseInt(items[i].textContent) === target) {
            items[i].classList.remove('comparing');
            items[i].classList.add('found');
            status.textContent = `🪙 FOUND! The coin was at position ${i}!`;
            linearRunning = false;

            // Bonus coins for watching!
            if (!completedLevels.has(2)) {
                coins += 2;
                saveProgress();
                updateStats();
            }
            return;
        }

        items[i].classList.remove('comparing');
        await sleep(200);
    }

    status.textContent = 'Not found!';
    linearRunning = false;
}

function resetLinearSearch() {
    const items = document.querySelectorAll('#linear-array .array-item');
    items.forEach(item => item.classList.remove('comparing', 'found', 'sorted'));
    document.getElementById('linear-status').textContent = 'Press START to begin the search!';
    linearRunning = false;
}

// Bubble Sort
async function runBubbleSort() {
    if (bubbleRunning) return;
    bubbleRunning = true;

    const container = document.getElementById('bubble-array');
    const status = document.getElementById('bubble-status');
    let items = Array.from(container.querySelectorAll('.array-item'));
    let values = items.map(item => parseInt(item.textContent));
    const n = values.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            items[j].classList.add('comparing');
            items[j + 1].classList.add('comparing');
            status.textContent = `Comparing ${values[j]} and ${values[j + 1]}...`;

            await sleep(500);

            if (values[j] > values[j + 1]) {
                status.textContent = `${values[j]} > ${values[j + 1]} - Swapping!`;
                await sleep(300);

                // Swap
                [values[j], values[j + 1]] = [values[j + 1], values[j]];
                items[j].textContent = values[j];
                items[j + 1].textContent = values[j + 1];
            }

            items[j].classList.remove('comparing');
            items[j + 1].classList.remove('comparing');
        }
        items[n - i - 1].classList.add('sorted');
    }

    items[0].classList.add('sorted');
    status.textContent = '✅ Sorted! All bricks in order!';
    bubbleRunning = false;

    // Bonus coins!
    if (!completedLevels.has(3)) {
        coins += 2;
        saveProgress();
        updateStats();
    }
}

function resetBubbleSort() {
    const container = document.getElementById('bubble-array');
    const originalValues = [64, 34, 25, 12, 22];
    container.innerHTML = originalValues.map(v => `<div class="array-item">${v}</div>`).join('');
    document.getElementById('bubble-status').textContent = 'Press START to sort!';
    bubbleRunning = false;
}

// ============================================
// PDF EXPORT
// ============================================

function generatePDF() {
    const topic = topics.find(t => t.id === currentLevel);
    const isCompleted = completedLevels.has(currentLevel);
    const percentage = Math.round((completedLevels.size / TOTAL_LEVELS) * 100);
    const passed = percentage > 50;

    // Create print window
    const printWindow = window.open('', '_blank');

    const headerBg = passed ? '#43b047' : '#e52521';
    const headerMessage = passed
        ? `Congratulations! You have done well in ${topic.title}!`
        : `Keep going! Review ${topic.title} and try again.`;

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Haute Vallee - ${topic.title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Atkinson Hyperlegible', Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    color: #1a1a2e;
                    font-size: 14px;
                }
                .header {
                    background: ${headerBg};
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .header h1 {
                    font-size: 1.8rem;
                    margin-bottom: 5px;
                }
                .header .school {
                    font-size: 1.2rem;
                    opacity: 0.95;
                }
                .header .message {
                    margin-top: 10px;
                    font-size: 1.1rem;
                    font-weight: 700;
                }
                .topic-header {
                    background: #0055bf;
                    color: white;
                    padding: 15px 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .topic-header h2 {
                    font-size: 1.4rem;
                }
                .progress-info {
                    background: #f0f8ff;
                    border: 2px solid #0055bf;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .progress-info p {
                    margin: 5px 0;
                }
                .content-block {
                    margin-bottom: 20px;
                }
                .content-block h3 {
                    color: #0055bf;
                    border-left: 4px solid #da291c;
                    padding-left: 10px;
                    margin-bottom: 10px;
                }
                .concept-box {
                    background: #f8f8f8;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    padding: 15px;
                    margin: 15px 0;
                }
                .concept-box.important {
                    background: #fff9e6;
                    border-color: #f5d327;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 15px 0;
                    font-size: 0.9rem;
                }
                th {
                    background: #0055bf;
                    color: white;
                    padding: 10px;
                    text-align: left;
                }
                td {
                    padding: 10px;
                    border: 1px solid #ddd;
                }
                tr:nth-child(even) td {
                    background: #f5f5f5;
                }
                code {
                    font-family: 'JetBrains Mono', monospace;
                    background: #f0f0f0;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: 0.9rem;
                }
                pre {
                    background: #2d2d2d;
                    color: #e2e8f0;
                    padding: 15px;
                    border-radius: 8px;
                    overflow-x: auto;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                }
                .kw { color: #ff79c6; }
                .fn { color: #50fa7b; }
                .str { color: #f1fa8c; }
                .cmt { color: #6272a4; }
                .num-code { color: #bd93f9; }
                .quiz-box {
                    background: #e6f3ff;
                    border: 2px solid #049cd8;
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 20px;
                }
                .quiz-box h4 {
                    color: #049cd8;
                    margin-bottom: 10px;
                }
                .footer {
                    margin-top: 30px;
                    text-align: center;
                    color: #666;
                    font-size: 0.85rem;
                    border-top: 2px solid #eee;
                    padding-top: 15px;
                }
                @media print {
                    body { padding: 0; }
                    .header, .topic-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="school">Haute Vallee</div>
                <h1>GCSE Computer Science - Paper 2</h1>
                <div class="message">${headerMessage}</div>
            </div>

            <div class="topic-header">
                <h2>${topic.icon} World ${topic.id}: ${topic.title}</h2>
                <p>${topic.desc}</p>
            </div>

            <div class="progress-info">
                <p><strong>Overall Progress:</strong> ${completedLevels.size} of ${TOTAL_LEVELS} topics completed (${percentage}%)</p>
                <p><strong>This Topic:</strong> ${isCompleted ? '✅ Completed' : '⏳ In Progress'}</p>
                <p><strong>Coins Earned:</strong> ${coins} 🪙</p>
            </div>

            <div class="objectives">
                <h3>Learning Objectives</h3>
                <ul>
                    ${topic.objectives.map(o => `<li>${o}</li>`).join('')}
                </ul>
            </div>

            ${topic.content}

            <div class="quiz-box">
                <h4>🎯 Challenge Question</h4>
                <p><strong>${topic.quiz.question.replace(/<br>/g, ' ')}</strong></p>
                <p><em>Options:</em></p>
                <ol type="A">
                    ${topic.quiz.options.map(opt => `<li>${opt}</li>`).join('')}
                </ol>
            </div>

            <div class="footer">
                <p>Paper 2 Quest - Haute Vallee School</p>
                <p>Generated on ${new Date().toLocaleDateString('en-GB')}</p>
            </div>
        </body>
        </html>
    `);

    printWindow.document.close();

    // Trigger print dialog after content loads
    printWindow.onload = function() {
        printWindow.print();
    };
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateStats();
    renderLevelList();
    renderLevel();
});
