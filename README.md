# Vibe Check

Vibe Check is a small web application that helps you to write better prompts for AI coding tools.

If you normally type in something like

```text

make me a cool dashboard

```

but never get the prompt you were hoping to receive, then Vibe Check allows you to turn such a short prompt into a much richer and more useful one.

## What it does

Enter your prompt, select an AI coding tool and enhance it.

Vibe Check can:

Enhance unclear prompt

Rate your prompt

Indicate what is missing in your prompt

Remove extra words

Provide suggestions based on the selected AI coding tool

Compare the original and enhanced prompts

Save previous prompts

Use built-in prompt templates

All in your browser.

## Main features

### Prompt enhancement

Write a simple prompt and let Vibe Check add additional meaningful details to it.

For instance,

```text

make a login page

```

can be improved to a rich prompt that defines

the page layout

the required fields

the required buttons

etc.

Besides, you can use a built-in connection to your API (if you want to use it) for prompt enhancement.

### Prompt score

Your prompt is assessed across 5 different domains, with a final score out of 100, along with suggestions for each.

### Token efficiency

Vibe Check detects and highlights extra words and phrases such as

redundant information

extra explanations

unnecessary politeness

hedging language

etc.

you can edit them out before pasting your prompt in an AI coding tool.

### AI tool tips

AI coding tools can have different requirements for the prompts that you send to them.

Vibe Check provides code suggestions for v0, Bolt, Lovable, Cursor, Replit, Claude, ChatGPT, Gemini, Perplexity, DeepSeek, Windsurf, GitHub Copilot, CodeSandbox, StackBlitz, Phind, and many more.

Choose an AI coding tool and Vibe Check will provide code suggestions specific to that tool.

### Before and after

Compare your original prompt to the enhanced prompt side by side, to see what has been changed.

### Prompt templates

There are dozens of prompt templates for

UI components

complete applications

bug fixes

API endpoints

database schema

etc.

that you can use as a starting point for your own prompts.

### Prompt history

Enhanced prompts can be saved in your browser.

You can search, star and export your prompts.

You can also see the score, timestamp, and the selected AI coding tool for previously saved prompts.

### Engineer tab

The engineer tab has some additional features for working with prompts.

It includes

prompt quality checks

various prompting techniques

multiple prompt versions

version history

3 prompt variants

Credit Saver mode

etc.

The Credit Saver mode can be used to switch prompts to Chinese to save on the token count for some prompt APIs.

### Settings

The settings page lets you configure the app, including setting up an API endpoint, toggling features off and on, and exporting and importing your data.

There is no account system or database required to use this application.

## Getting started

There is nothing to install.

Just

open up the Vibe Check website

type in a prompt

select an AI coding tool

click enhance

review the enhanced prompt

copy the enhanced prompt to your clipboard

and start using it in your AI coding tool of choice.

## Tech stack

The stack is intentionally kept simple and only includes

HTML

CSS

Vanilla JS

Vercel

CSS Custom Properties

There is no frontend framework or any other complex infrastructure involved.

## Why I made it

I made Vibe Check because I was frustrated with having to spend too much time editing prompts before sending them to my AI coding tool.

A prompt that is too short may miss out on important details, while a prompt that is too long may contain lots of extra text.

I wanted to have a single place where I could write out a prompt, improve it, score it, and then copy it to my clipboard.

That is how I came up with Vibe Check.

## Privacy

The application is designed to be run in the browser, and does not require you to sign up or create an account to use the main features of the application.

However, if you do sign up, then your information can be managed in your settings, and you can export and import your data as needed.

## Contributing

If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

You can also help out by adding support for another AI coding tool by extending the stack-related prompt tips.

## License

This project is licensed under the MIT License.

You are free to use, modify, and share this project as you see fit.

---

Built as a small project to improve the experience of working with AI Coding tools
