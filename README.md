Vibe Check
License: MIT PRs Welcome Made with Vanilla JS Deployed on Vercel v0 Compatible Claude Compatible Cursor Compatible

I built this because I got tired of typing "make me a cool dashboard" into Cursor and getting garbage back. Vibe Check takes whatever half-baked prompt you throw at it and turns into something an AI coding tool can actually work with.

Paste a prompt, hit enhance, get something useful. That's the whole idea.

What it does
Paste a prompt like "make a dashboard" or "fix the login bug" into the textarea. Vibe Check:

Enhances it -- rewrites your vague idea into structured, specific instructions that AI tools actually understand
Scores it -- gives you a /100 score across 5 categories and tells you exactly what's wrong
Checks token efficiency -- shows you how many of your tokens are wasted on filler words
Gives stack-aware tips -- knows what v0, Bolt, Cursor, ChatGPT, Claude, and 10+ other tools expect
All of this runs locally in your browser. No signup, no tracking, no account needed.

Features
Prompt Enhancement

Takes your rough idea and rewrites it with proper structure: tech stack context, requirements, constraints. Works with rule-based logic out of the box. If you want AI-powered enhancement, plug in your own API key in settings.

5-Category Scoring Engine

Clarity, Specificity, Completeness, Structure, Effectiveness -- each category gets a point value and specific feedback. Not "your prompt could be better" but "add the tech stack and you get +12 points."

Token Efficiency Checker

Detects filler phrases, hedging language, politeness overhead, and redundant words. Shows your efficiency percentage. One click to strip the filler. If you're paying per token, this pays for itself.

Stack-Aware Tips

Knows the quirks of 15+ AI coding tools:

Tool	Tool	Tool
v0	Bolt	Lovable
Cursor	Replit	Claude
ChatGPT	Gemini	Perplexity
DeepSeek	Windsurf	GitHub Copilot
CodeSandbox	StackBlitz	Phind
Each platform gets its own prompt tips. What works in Cursor doesn't always work in ChatGPT.

Before/After Diff View

Side-by-side view showing exactly what changed between your original and enhanced prompt. You can see why each edit was made.

15+ Templates

Pre-built prompt templates for UI components, full apps, bug fixes, API endpoints, and database schemas. Pick one, fill in the blanks, enhance.

History

Every enhanced prompt gets saved with its score, timestamp, and target stack. Search through old ones, favorite the good ones, export everything.

Engineer Tab

Quality checklist, technique combos, variant generation (3 versions per prompt), version history, and a Credit Saver mode that translates English to Chinese for roughly 60% token savings on any provider.

Settings

Configure your AI endpoint, toggle features on/off, export and import your data. No cloud, no database, everything stays in your browser.

Quick Start
Open https://enhance-prompts.vercel.app/
Type a prompt into the textarea
Pick your stack from the dropdown
Hit Enhance
That's it. Nothing to install, nothing to configure.

Tech Stack
Vanilla JS / HTML / CSS -- no frameworks, no build step, no node_modules
Vercel -- serverless API for the enhancement endpoint
CSS Custom Properties -- dark glass theme, pure black backgrounds
Why I built this
I'm 17. I use AI coding tools every day -- Cursor, Claude, v0, Bolt. The biggest bottleneck isn't the tools themselves, it's writing prompts good enough for them to work with. I kept rewriting the same structured prompts by hand and figured there had to be a better way.

Vibe Check started as a weekend project for the Stardance QOL Mission. Now it helps me write better prompts across every AI tool I use.

Contributing
PRs are welcome. If you find a bug, open an issue. If you want to add support for a new AI tool, the stack-detector module is pretty straightforward to extend.

License
MIT -- do whatever you want with it.

Built by a 17-year-old who got tired of rewriting prompts.

GitHub: https://github.com/tallurisai9346-beep/Enhance-Prompts

Live Demo: https://enhance-prompts.vercel.app/
