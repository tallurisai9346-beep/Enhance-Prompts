# Vibe Check

Vibe Check is a small tool which I made because I got sick of writing "make me a cool dashboard" in Cursor and getting some other thing which I didn't want.

The idea is fairly simple:

**Give the tool a rough prompt → improve it → get a better prompt for your AI coding tool.**

Live demo: https://enhance-prompts.vercel.app/

GitHub: https://github.com/tallurisai9346-beep/Enhance-Prompts

## What is Vibe Check?

Vibe Check takes a vague/rough prompt and tries to make it a little bit better for the AI coding tools.

Like:

```text
make me a dashboard
```

It's not really clear what you're trying to achieve.

Vibe Check tries to make this prompt clearer by adding:

* The tech stack
* What needs to be built
* UI requirements
* Features
* Constraints
* Responsiveness and other important information which is easy to overlook

The goal is **not to make prompts too big**, but **to make them clear enough for the AI to understand what you need**.

## Features

### Prompt Enhancement

Paste your rough prompt into Vibe Check and let it rewrite it.

By default, the prompt will be enhanced with the rule-based approach, but you can also connect your API if you want to get AI-powered enhancements.

### Prompt Scoring

Each prompt gets a score between 0 and 100.

It tests the following five criteria:

* Clarity
* Specificity
* Completeness
* Structure
* Effectiveness

And provides some feedback on how to improve it instead of providing a random number.

### Token Efficiency

Vibe Check detects unnecessary words in your prompt.

The unnecessary words include:

* Filler words
* Repeated instructions
* Politeness
* Hedging
* Redundancies

There's also an option to remove all of this.

This is especially handy if you use an API which charges you for the tokens.

### AI Coding Tool Tips

There are certain differences in how prompts should look depending on the AI tool you're working with.

There are currently 15+ tips for the following tools:

* v0
* Bolt
* Lovable
* Cursor
* Replit
* Claude
* ChatGPT
* Gemini
* Perplexity
* DeepSeek
* Windsurf
* GitHub Copilot
* CodeSandbox
* StackBlitz
* Phind

### Before / After

Vibe Check allows you to see the original prompt and the enhanced one.

This is helpful since I didn't want the tool to rewrite everything without showing you what it really did.

###
