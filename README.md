# Vibe Check

Vibe Check is a small web app that helps you write better prompts for AI coding tools.

If you usually type things like:

```text
make me a cool dashboard
```

and don't get the result you expected, Vibe Check helps turn that short idea into a clearer and more useful prompt.

## What it does

You enter your prompt, choose the AI coding tool you want to use, and enhance it.

Vibe Check can:

* Improve unclear prompts
* Give your prompt a score
* Show what is missing from your prompt
* Remove unnecessary words
* Give suggestions based on the AI tool you selected
* Compare your original prompt with the improved version
* Save your previous prompts
* Use ready-made prompt templates

Everything is designed to work directly in the browser.

## Main Features

### Prompt Enhancement

Write a basic idea and Vibe Check adds more useful details to it.

For example:

```text
make a login page
```

can be changed into a prompt that includes things such as:

* Page layout
* Required fields
* Buttons
* Validation
* Responsive design
* Technology requirements

You can also connect your own API if you want to use AI-powered enhancement.

### Prompt Score

Your prompt is checked using five areas:

* Clarity
* Specificity
* Completeness
* Structure
* Effectiveness

You get a score out of 100 along with suggestions for improving it.

### Token Efficiency

Vibe Check looks for unnecessary words and phrases in your prompt.

It can find things like:

* Repeated words
* Filler text
* Unnecessary politeness
* Hedging phrases
* Extra wording

You can then clean up the prompt before sending it to an AI tool.

### AI Tool Tips

Different AI coding tools work better with different types of prompts.

Vibe Check includes tips for tools such as:

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

Choose a tool and the app gives suggestions that are relevant to it.

### Before and After

You can compare your original prompt with the enhanced prompt.

This makes it easier to understand what was changed instead of simply receiving a new prompt without knowing why it is different.

### Prompt Templates

The app includes templates for common tasks, including:

* UI components
* Full applications
* Bug fixing
* API endpoints
* Database schemas

You can choose a template, add your own information, and then improve the prompt.

### Prompt History

Enhanced prompts can be saved in your browser.

You can go back and check older prompts, their scores, timestamps, and selected AI tools.

You can also search, favorite, and export your saved prompts.

### Engineer Tab

The Engineer section contains some extra tools for working with prompts.

It includes:

* Prompt quality checks
* Different prompting techniques
* Multiple prompt versions
* Version history
* Three prompt variants
* Credit Saver mode

The Credit Saver option can translate prompts into Chinese to reduce the number of tokens used with some AI providers.

### Settings

The settings page lets you control how the application works.

You can:

* Configure an AI endpoint
* Turn features on or off
* Export your data
* Import your data

There is no account system or database required for normal use.

## Quick Start

You don't need to install anything.

1. Open the Vibe Check website.
2. Enter your prompt.
3. Select the AI tool you are using.
4. Click **Enhance**.
5. Review the improved prompt.
6. Copy it and use it in your coding tool.

## Tech Stack

The project is intentionally kept simple.

* HTML
* CSS
* Vanilla JavaScript
* Vercel
* CSS Custom Properties

There is no frontend framework and no complicated build setup.

## Why I Made It

I made Vibe Check because I was spending a lot of time rewriting prompts before giving them to AI coding tools.

A prompt that is too short can leave out important details, while a long prompt can contain a lot of unnecessary text.

I wanted one simple place where I could write an idea, improve it, check its quality, and then copy the result.

That's how Vibe Check started.

## Privacy

The application is designed to work in the browser.

There is no signup required and no account is needed to use the main features.

Saved information can be managed through the settings and export/import options.

## Contributing

If you find a problem or have an idea for improving the project, feel free to open an issue or submit a pull request.

You can also add support for another AI coding tool by extending the stack-related prompt tips.

## License

This project is licensed under the MIT License.

You are free to use, modify, and share the project according to the license.

---

Built as a small project to make working with AI coding tools a little easier.
