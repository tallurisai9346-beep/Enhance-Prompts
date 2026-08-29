Vibe Check

Stop typing “make me a cool dashboard” and hoping for the best.

Vibe Check is a lightweigh prompt engineering tool that transforms vague ideas into prompts fit for dev-assist coding tools.

The workflow is simple:

Write → Enhance → Score → Review → Copy → Build

No complex setup, no account login: prompt history and settings can be saved in your browser.

What It Does

With Vibe Check, you can paste a prompt such as:

make a dashboard

or:

fix the login bug

and turn it into something far more useful for your coding assistant.

✨ Prompt Enhancement

Takes a rough, vague idea and turns it into a prompt with structure and specificity.

Adds things like:

Clear goals

Specific requirements

Technical context

Constraints

Responsive behavior

Accessibility considerations

Loading, empty, validation, and error states

Acceptance criteria

By default, this runs on rule-based logic; an external AI endpoint can be used for AI-enhanced prompting, if desired.

📊 5-Category Prompt Scoring

Vibe Check evaluates prompts across 5 categories:

Category

Description

Clarity

Is the prompt's request understandable?

Specificity

Does the prompt contain enough detail?

Completeness

Are there any missing requirements or states?

Structure

Is the prompt organized in a way that's easy to follow?

Effectiveness

Would the prompt likely lead to a successful result?

Note that this is only a guideline; a prompt with a high score is not necessarily a correct prompt.

⚡ Token Efficiency

Detects and highlights redundant phrasing that can be removed to make the prompt more token-efficient.

Examples:

I want you to...

Can you please...

Could you kindly...

In order to...

Basically...

Really...

Just...

It also lets you remove these phrases with the touch of a button.

If you're working with token-limited AI APIs, this can help you get more out of each request.

🧠 Stack-Aware Tips

Let's you know what technologies or dev platforms were mentioned in your prompt.

Includes tips for working with various tools, such as:

v0

Bolt

Lovable

Cursor

Replit

Claude

ChatGPT

Gemini

Perplexity

DeepSeek

Windsurf

GitHub Copilot

CodeSandbox

StackBlitz

Phind

The purpose is to give your prompt the context it needs to work with the tool of your choice.

Features

Prompt Enhancement

Paste your own rough prompt, click "Enhance Prompt," and review the results.

You can see:

The original prompt

The enhanced prompt

The prompt score

Scores for each category

Notes about what's changed

A comparison of the two prompts side-by-side

Token efficiency stats

Detected technologies

Before / After View

Want to see what's changed? Switch to this view to see a side-by-side comparison of your original and enhanced prompts.

BEFORE

make a dashboard

AFTER

Build a responsive task-management dashboard.

Requirements:

- Responsive on mobile, tablet, and desktop

- Accessible keyboard interactions

- Loading, empty, validation, and error states

- Clean and maintainable component structure

Acceptance criteria:

- The dashboard works end-to-end

- Existing functionality is preserved

- The UI is responsive and accessible

This makes it easier to understand what's changed in your enhanced prompt, and why.

Templates

Want to start from a prompt template, rather than from scratch? There are several categories to choose from, including:

UI Components

Apps (Full)

Fixes

APIs & Backend Development

AI & Code Prompts

Some examples of UI Component prompts include:

Responsive dashboards

Landing pages

Data tables

Modals

SaaS applications

Task managers

Admin panels

REST APIs

Authentication

Code reviews

Debugging

Refactoring

Pick one, customize it, then enhance it.

Engineer

The "Engineer" tab contains tools for taking your prompt further.

It contains things like:

Quality checklist

Prompt techniques

Combinations

Prompt variants

Version history

Credit Saver

Some of the available techniques include:

Role definition

Constraints

Step-by-step instructions

Acceptance criteria

Edge cases

Output format

You can combine different techniques to build a better prompt.

Prompt Variants

Need multiple versions of the same prompt? This lets you generate several variations so that you can pick the one you like best.

Some common types of variants include:

Balanced structural version

Shorter directive version

Production/testing-focused version

Version History

This lets you save different versions of the prompt as you engineer it.

Some things you can do with it include:

Save versions

Reuse versions

Review versions

Clear versions

This is useful if you're experimenting with different prompt variations.

History

Enhanced prompts can be saved in browser history for later reference.

Some things you can do with it include:

Search

Prompt scores

Favorites

Copy enhanced prompts

Clear history

Note that this does not save your enhanced prompt data in the cloud.

Undo / Redo

The prompt editor contains undo and redo controls so that you can easily go back to a previous version of your prompt.

Credit Saver

The "Engineer" tab also contains a "Credit Saver" mode that lets you convert English prompts to Chinese.

The idea is to experiment with shorter token lengths for providers that charge per token.

Note that token savings will vary depending on the model, language, tokenizer, and prompt.

The commonly-quoted "60% savings" is only an approximation and should be treated as such.

Quick Start

There are two ways to try out Vibe Check: the deployed website and the local version.

Option 1: Deployed Website

Go to the deployed website:

https://enhance-prompts.vercel.app/

Then:

Type in a rough prompt.

Review the detected technology/platform.

Click "Enhance Prompt."

Review the prompt score.

Copy the enhanced prompt to your clipboard.

Use it in your favorite dev-assist coding tool.

Option 2: Local Version

This tool is designed to be a lightweigh browser app.

To set up the local version:

Clone the repo:

git clone https: //github.com/tallurisai9346-beep/Enhance-Prompts.git

cd Enhance-Prompts

Then open the file:

index.html

in your browser.

If your version uses a serverless enhancement endpoint, configure it as needed.

Example

Before

make me a cool dashboard

After

Build a modern responsive admin dashboard for managing tasks.

Requirements:

- Desktop, tablet, and mobile responsive layout

- Sidebar navigation

- Dashboard overview cards

- Task list with status and priority

- Search and filtering

- Loading, empty, and error states

- Accessible keyboard navigation

- Clean reusable components

- Maintainable project structure

Acceptance criteria:

- All dashboard interactions work

- The layout remains usable on small screens

- Components are reusable and easy to maintain

- Existing functionality is not changed unless explicitly requested

Note that the specific output will vary depending on the prompt and the enhancement settings used.

Supported AI Coding Tools

Vibe Check is designed to prepare prompts for a variety of dev-assist coding tools, including:

Tool

Tool

Tool

Tool

Tool

Tool

v0

Bolt

Lovable

Cursor

Replit

Claude

Tool

Tool

Tool

Tool

Tool

ChatGPT

Gemini

Perplexity

DeepSeek

Windsurf

GitHub Copilot

CodeSandbox

StackBlitz

Phind

The enhanced prompt is then copied into whichever tool you want to use.

Privacy & Data

Vibe Check favors browser-based storage for user data.

Depending on your deployment/configuration, this can include things like:

Prompt history

Saved versions

Settings

Data export

Clearing prompt history or versions is also possible.

If you're using an external enhancement endpoint, data sent to it is subject to the receiving server's privacy policy.

Settings

The settings panel lets you configure things like:

Automatic technology detection

Token efficiency analysis

Before/after comparison

Data export

Clearing history/data

External enhancement endpoints, if available

Tech Stack

Vibe Check is deliberately lightweight when it comes to the tech stack.

HTML

CSS

Vanilla JavaScript

CSS Custom Properties

Browser Local Storage

Serverless API / Vercel (if using an external enhancement endpoint)

There is no need for a heavier front-end framework or node_modules just to run a simple browser app.

Project Structure

A basic project structure could look like this:

Enhance-Prompts/

├── index.html

├── README.md

└── ...

Depending on your needs, additional JS modules, assets, or API files can be added.

Why I Built This

I got tired of typing in prompts such as:

make me a cool dashboard

into Cursor and getting a dashboard that's technically cool, but nowhere near what I actually asked for.

The issue is rarely the coding assistant; it's the prompt.

I had to spend hours rewriting prompts myself:

Add in the tech stack.

State out requirements.

Specify responsive behavior.

Mention edge cases.

Add acceptance criteria.

Tell the assistant what not to change.

Eventually, I got frustrated and asked myself:

Why am I doing this every single time?

That's when I decided to build Vibe Check.

The goal with this tool is not to replace dev-assist coding tools.

The point is to improve the prompts we give them.

Recommended Workflow

Rough Idea

│

▼

┌─────────────┐

│ Vibe Check │

│ Prompt Edit │

└──────┬──────┘

│

▼

Enhancement

│

▼

Score + Checks

│

▼

Review / Edit

│

▼

Copy

│

▼

AI Coding Tool

An example workflow might look like this:

Idea

↓

"make a task app"

↓

Enhance

↓

Add requirements + constraints + states

↓

Review score

↓

Engineer if needed

↓

Copy

↓

Cursor / Claude / v0 / Bolt / etc.

Contributing

Contributions are welcome.

If you find a bug:

Open an issue.

Describe what happened.

Include the prompt or the steps needed to reproduce the issue.

Include a screenshot/console log, if available.

Want to contribute something bigger, like adding support for another AI coding platform?

The stack detection and platform tips can be extended. Feel free to open a pull request.

Ideas for Future Versions

Some ideas for future versions include:

More AI platform profiles

More prompt templates

More prompt comparison options

More advanced scoring system

Custom scoring rules

Improved import/export

More enhancement strategies

More token analysis

Custom platform profiles

Shareable prompt presets

License

MIT License.

The code can be freely used, modified, and distributed per the terms of the license.

Author

This tool was created to help developers, students, designers, and creators improve their results when using AI.

Links

Repository: https://github.com/tallurisai9346-beep/Enhance-Prompts

Live Demo: https://enhance-prompts.vercel.app/

Stop typing “make me a cool dashboard” and hoping for the best.

Vibe Check is a lightweigh prompt engineering tool that transforms vague ideas into prompts fit for dev-assist coding tools.

The workflow is simple:

Write → Enhance → Score → Review → Copy → Build

No complex setup, no account login: prompt history and settings can be saved in your browser.

What It Does

With Vibe Check, you can paste a prompt such as:

make a dashboard

or:

fix the login bug

and turn it into something far more useful for your coding assistant.

✨ Prompt Enhancement

Takes a rough, vague idea and turns it into a prompt with structure and specificity.

Adds things like:

Clear goals

Specific requirements

Technical context

Constraints

Responsive behavior

Accessibility considerations

Loading, empty, validation, and error states

Acceptance criteria

By default, this runs on rule-based logic; an external AI endpoint can be used for AI-enhanced prompting, if desired.

📊 5-Category Prompt Scoring

Vibe Check evaluates prompts across 5 categories:

Category

Description

Clarity

Is the prompt's request understandable?

Specificity

Does the prompt contain enough detail?

Completeness

Are there any missing requirements or states?

Structure

Is the prompt organized in a way that's easy to follow?

Effectiveness

Would the prompt likely lead to a successful result?

Note that this is only a guideline; a prompt with a high score is not necessarily a correct prompt.

⚡ Token Efficiency

Detects and highlights redundant phrasing that can be removed to make the prompt more token-efficient.

Examples:

I want you to...

Can you please...

Could you kindly...

In order to...

Basically...

Really...

Just...

It also lets you remove these phrases with the touch of a button.

If you're working with token-limited AI APIs, this can help you get more out of each request.

🧠 Stack-Aware Tips

Let's you know what technologies or dev platforms were mentioned in your prompt.

Includes tips for working with various tools, such as:

v0

Bolt

Lovable

Cursor

Replit

Claude

ChatGPT

Gemini

Perplexity

DeepSeek

Windsurf

GitHub Copilot

CodeSandbox

StackBlitz

Phind

The purpose is to give your prompt the context it needs to work with the tool of your choice.

Features

Prompt Enhancement

Paste your own rough prompt, click "Enhance Prompt," and review the results.

You can see:

The original prompt

The enhanced prompt

The prompt score

Scores for each category

Notes about what's changed

A comparison of the two prompts side-by-side

Token efficiency stats

Detected technologies

Before / After View

Want to see what's changed? Switch to this view to see a side-by-side comparison of your original and enhanced prompts.

BEFORE

make a dashboard

AFTER

Build a responsive task-management dashboard.

Requirements:

- Responsive on mobile, tablet, and desktop

- Accessible keyboard interactions

- Loading, empty, validation, and error states

- Clean and maintainable component structure

Acceptance criteria:

- The dashboard works end-to-end

- Existing functionality is preserved

- The UI is responsive and accessible

This makes it easier to understand what's changed in your enhanced prompt, and why.

Templates

Want to start from a prompt template, rather than from scratch? There are several categories to choose from, including:

UI Components

Apps (Full)

Fixes

APIs & Backend Development

AI & Code Prompts

Some examples of UI Component prompts include:

Responsive dashboards

Landing pages

Data tables

Modals

SaaS applications

Task managers

Admin panels

REST APIs

Authentication

Code reviews

Debugging

Refactoring

Pick one, customize it, then enhance it.

Engineer

The "Engineer" tab contains tools for taking your prompt further.

It contains things like:

Quality checklist

Prompt techniques

Combinations

Prompt variants

Version history

Credit Saver

Some of the available techniques include:

Role definition

Constraints

Step-by-step instructions

Acceptance criteria

Edge cases

Output format

You can combine different techniques to build a better prompt.

Prompt Variants

Need multiple versions of the same prompt? This lets you generate several variations so that you can pick the one you like best.

Some common types of variants include:

Balanced structural version

Shorter directive version

Production/testing-focused version

Version History

This lets you save different versions of the prompt as you engineer it.

Some things you can do with it include:

Save versions

Reuse versions

Review versions

Clear versions

This is useful if you're experimenting with different prompt variations.

History

Enhanced prompts can be saved in browser history for later reference.

Some things you can do with it include:

Search

Prompt scores

Favorites

Copy enhanced prompts

Clear history

Note that this does not save your enhanced prompt data in the cloud.

Undo / Redo

The prompt editor contains undo and redo controls so that you can easily go back to a previous version of your prompt.

Credit Saver

The "Engineer" tab also contains a "Credit Saver" mode that lets you convert English prompts to Chinese.

The idea is to experiment with shorter token lengths for providers that charge per token.

Note that token savings will vary depending on the model, language, tokenizer, and prompt.

The commonly-quoted "60% savings" is only an approximation and should be treated as such.

Quick Start

There are two ways to try out Vibe Check: the deployed website and the local version.

Option 1: Deployed Website

Go to the deployed website:

https://enhance-prompts.vercel.app/

Then:

Type in a rough prompt.

Review the detected technology/platform.

Click "Enhance Prompt."

Review the prompt score.

Copy the enhanced prompt to your clipboard.

Use it in your favorite dev-assist coding tool.

Option 2: Local Version

This tool is designed to be a lightweigh browser app.

To set up the local version:

Clone the repo:

git clone https: //github.com/tallurisai9346-beep/Enhance-Prompts.git

cd Enhance-Prompts

Then open the file:

index.html

in your browser.

If your version uses a serverless enhancement endpoint, configure it as needed.

Example

Before

make me a cool dashboard

After

Build a modern responsive admin dashboard for managing tasks.

Requirements:

- Desktop, tablet, and mobile responsive layout

- Sidebar navigation

- Dashboard overview cards

- Task list with status and priority

- Search and filtering

- Loading, empty, and error states

- Accessible keyboard navigation

- Clean reusable components

- Maintainable project structure

Acceptance criteria:

- All dashboard interactions work

- The layout remains usable on small screens

- Components are reusable and easy to maintain

- Existing functionality is not changed unless explicitly requested

Note that the specific output will vary depending on the prompt and the enhancement settings used.

Supported AI Coding Tools

Vibe Check is designed to prepare prompts for a variety of dev-assist coding tools, including:

Tool

Tool

Tool

Tool

Tool

Tool

v0

Bolt

Lovable

Cursor

Replit

Claude

Tool

Tool

Tool

Tool

Tool

ChatGPT

Gemini

Perplexity

DeepSeek

Windsurf

GitHub Copilot

CodeSandbox

StackBlitz

Phind

The enhanced prompt is then copied into whichever tool you want to use.

Privacy & Data

Vibe Check favors browser-based storage for user data.

Depending on your deployment/configuration, this can include things like:

Prompt history

Saved versions

Settings

Data export

Clearing prompt history or versions is also possible.

If you're using an external enhancement endpoint, data sent to it is subject to the receiving server's privacy policy.

Settings

The settings panel lets you configure things like:

Automatic technology detection

Token efficiency analysis

Before/after comparison

Data export

Clearing history/data

External enhancement endpoints, if available

Tech Stack

Vibe Check is deliberately lightweight when it comes to the tech stack.

HTML

CSS

Vanilla JavaScript

CSS Custom Properties

Browser Local Storage

Serverless API / Vercel (if using an external enhancement endpoint)

There is no need for a heavier front-end framework or node_modules just to run a simple browser app.

Project Structure

A basic project structure could look like this:

Enhance-Prompts/

├── index.html

├── README.md

└── ...

Depending on your needs, additional JS modules, assets, or API files can be added.

Why I Built This

I got tired of typing in prompts such as:

make me a cool dashboard

into Cursor and getting a dashboard that's technically cool, but nowhere near what I actually asked for.

The issue is rarely the coding assistant; it's the prompt.

I had to spend hours rewriting prompts myself:

Add in the tech stack.

State out requirements.

Specify responsive behavior.

Mention edge cases.

Add acceptance criteria.

Tell the assistant what not to change.

Eventually, I got frustrated and asked myself:

Why am I doing this every single time?

That's when I decided to build Vibe Check.

The goal with this tool is not to replace dev-assist coding tools.

The point is to improve the prompts we give them.

Recommended Workflow

Rough Idea

│

▼

┌─────────────┐

│ Vibe Check │

│ Prompt Edit │

└──────┬──────┘

│

▼

Enhancement

│

▼

Score + Checks

│

▼

Review / Edit

│

▼

Copy

│

▼

AI Coding Tool

An example workflow might look like this:

Idea

↓

"make a task app"

↓

Enhance

↓

Add requirements + constraints + states

↓

Review score

↓

Engineer if needed

↓

Copy

↓

Cursor / Claude / v0 / Bolt / etc.

Contributing

Contributions are welcome.

If you find a bug:

Open an issue.

Describe what happened.

Include the prompt or the steps needed to reproduce the issue.

Include a screenshot/console log, if available.

Want to contribute something bigger, like adding support for another AI coding platform?

The stack detection and platform tips can be extended. Feel free to open a pull request.

Ideas for Future Versions

Some ideas for future versions include:

More AI platform profiles

More prompt templates

More prompt comparison options

More advanced scoring system

Custom scoring rules

Improved import/export

More enhancement strategies

More token analysis

Custom platform profiles

Shareable prompt presets

License

MIT License.

The code can be freely used, modified, and distributed per the terms of the license.

Author

This tool was created to help developers, students, designers, and creators improve their results when using AI.

Links

Repository: https://github.com/tallurisai9346-beep/Enhance-Prompts

Live Demo: https://enhance-prompts.vercel.app/
