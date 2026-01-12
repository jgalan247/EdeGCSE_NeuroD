# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Paper 2 Quest is a static web application for teaching Edexcel GCSE Computer Science Paper 2 topics. It's an autism-friendly, gamified learning platform using Lego and Mario themes to make algorithms and programming concepts engaging. Developed for Haute Vallee School.

## Autism-Friendly Design Principles

The content follows these accessibility guidelines:
- **Clear, explicit language** - no ambiguity or idioms
- **Consistent structure** - same format for every topic
- **Visual supports** - tables, color-coded boxes, step-by-step lists
- **Concrete analogies** - LEGO/Mario themes throughout
- **Chunked information** - small, digestible pieces
- **Predictable layout** - students know what to expect
- **Key terms highlighted** - bold text, concept boxes
- **Step-by-step breakdowns** - numbered processes

## Technology Stack

- **Pure vanilla**: HTML5, CSS3, JavaScript (no frameworks, no build process)
- **Fonts**: Atkinson Hyperlegible (accessibility), JetBrains Mono (code blocks)
- **Storage**: Browser localStorage for progress persistence

## Running the Application

```bash
# Option 1: Direct file open
open index.html

# Option 2: Local server (recommended)
python3 -m http.server 8000
```

No build, compilation, or installation steps required.

## Architecture

**Modular file structure:**
- `index.html` - Semantic HTML shell that loads all topic files and app.js
- `app.js` - Game logic, UI rendering, quiz system, visualizers, PDF export
- `styles.css` - Complete styling with CSS custom properties
- `topics/` - 22 individual topic files (topic01-*.js through topic22-*.js)

**Topic file pattern:**
Each topic file (e.g., `topics/topic01-algorithms-basics.js`) pushes to `window.topicsData`:
```javascript
window.topicsData = window.topicsData || [];
window.topicsData.push({
    id: 1,
    title: "Algorithms Basics",
    desc: "What algorithms are...",
    icon: "🧱",
    objectives: ["Define what an algorithm is", ...],
    content: `<div class="content-block">...</div>`,
    quiz: {
        question: "Which shape...",
        options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
        correct: 2  // 0-indexed
    }
});
```

**app.js organization:**
1. **Topic Loading** - Reads from `window.topicsData` populated by topic files
2. **Game State** - `currentLevel`, `completedLevels` (Set), `coins` with localStorage
3. **UI Updates** - `renderLevelList()`, `renderLevel()`, `updateStats()`
4. **Quiz System** - `checkAnswer()` with coin rewards and progress saving
5. **Algorithm Visualizers** - `runLinearSearch()`, `runBubbleSort()` with async animations
6. **PDF Export** - `generatePDF()` with Haute Vallee branding and score-based feedback

**Data-driven pattern**: To add/modify educational content, edit individual topic files in `/topics`. The app dynamically renders content from the `topics` array.

**localStorage keys:**
- `paper2-completed`: JSON array of completed level IDs
- `paper2-coins`: Integer coin count

## Adding or Modifying Topics

**To edit existing content:** Modify the corresponding file in `/topics/` (e.g., `topic05-selection-if.js`)

**To add a new topic:**
1. Create `topics/topic##-name.js` following the existing pattern
2. Add script tag in `index.html` before `app.js`
3. Update `TOTAL_LEVELS` constant in `app.js` (line 45)
4. Update star count display in `index.html` (line 28: `0/22`)

**Content HTML classes for topic content:**
- `.content-block` - Main content section wrapper
- `.concept-box` / `.concept-box.important` - Highlighted information boxes
- `.pattern-card` with `.pattern-header` and `.pattern-body` - Numbered instruction steps
- `.code-container` with `.code-header` and `<pre><code>` - Code examples
- Syntax highlighting: `.kw` (keyword), `.fn` (function), `.str` (string), `.cmt` (comment), `.num-code` (number)

## Algorithm Visualizers

Two interactive visualizers exist for topics 2 and 3:

**Linear Search** (`runLinearSearch()`, `resetLinearSearch()`):
- HTML element IDs: `#linear-array` (container), `#linear-status` (status text)
- Awards 2 bonus coins on first viewing (if level 2 not completed)

**Bubble Sort** (`runBubbleSort()`, `resetBubbleSort()`):
- HTML element IDs: `#bubble-array` (container), `#bubble-status` (status text)
- Awards 2 bonus coins on first viewing (if level 3 not completed)

Both use CSS classes: `.comparing`, `.sorted`, `.found` for visual states.

## Game Mechanics

- 22 levels unlock progressively (complete one to unlock next)
- 10 coins awarded per level completion via quiz
- 2 bonus coins for watching visualizers (first time only)
- Stars indicate progress (0-22 displayed)
- Quiz at end of each level gates progression
- `TOTAL_LEVELS` constant (app.js:45) controls level count throughout app

## CSS Variables

Theme colors defined in `:root`:
- Lego colors: `--lego-red`, `--lego-yellow`, `--lego-green`, `--lego-blue`, `--lego-orange`
- Mario colors: `--mario-red`, `--mario-blue`, `--mario-yellow`, etc.
- UI colors: `--bg-main`, `--bg-card`, `--text-primary`, `--error`, `--success`

**Table classes:**
- Default tables: Blue header with `--lego-blue`
- `.operations-table`: Orange header for operator/method reference tables

## PDF Export Feature

The `generatePDF()` function creates a printable version:
- **Header**: "Haute Vallee" school name with GCSE Computer Science title
- **Score-based feedback**:
  - Score > 50%: Green header with "Congratulations! You have done well in [Topic]!"
  - Score ≤ 50%: Red header with "Keep going! Review [Topic] and try again."
- Includes topic content, objectives, progress info, and challenge question
