ibe Check

I created Vibe Check to solve my frustration of writing prompts like "make me a cool dashboard" in Cursor and spending more time fixing the result than actually building the project.

The purpose of Vibe Check is simple: you give it the rough prompt in your head and it helps convert it to one fit for an AI coding tool.

You don't have to write a great prompt before it even runs.

What is Vibe Check?

Vibe Check is a lightweight browser-based prompt engineering tool for developers using AI coding tools.

You can paste in prompts as simple as:

make a dashboard

and let Vibe Check help you enhance them.

It can improve the prompt, score it, find out what is missing, remove unneeded words, and track what was changed.

The goal is to make prompting simple and to get a helpful response from the AI tools that you are already using.

What it does

Prompt Enhancement

This is the core functionality.

You write your rough idea in your own words and Vibe Check adds appropriate structure where needed.

For example, it can turn a prompt like:

make a login page

into something closer to:

Build a responsive login page for a web application.

Requirements:

- Email and password fields

- Form validation

- Clear error messages

- Loading state while submitting

- Responsive layout for mobile and desktop

- Accessible keyboard navigation

- Clean and reusable component structure

Acceptance criteria:

- Users can submit the form successfully

- Invalid input shows useful feedback

- The layout works on mobile and desktop

You can then copy the prompt and past it right into Cursor, Claude, v0, Bolt, ChatGPT, or whatever tool you are using.

The basic enhancement is run locally using rule-based logic. A configured AI enhancement endpoint can be used if one is set up.

Prompt Scoring

Sometimes it is hard to tell how good a prompt is.

Vibe Check gives the prompt a score out of 100 and breaks it down into different areas.

The scoring system tracks things like:

Clarity — Was what you asked for clear?

Specificity — Did you give the needed detail?

Completeness — Were the requirements and states covered?

Structure — Did the prompt have good formatting?

Effectiveness — Does the prompt have a good chance to get you what you want?

Instead of saying "this prompt is bad", Vibe Check tries to explain what it could add or change.

Scoring is meant to be a general guide and should not be seen as a measurement of whether an AI response will be good.

Token Efficiency

Long prompts are not always good.

Vibe Check looks for words and phrases that do not add a lot of value, including filler, repeated words, and unneeded politeness.

For example:

Can you please just basically make a really nice dashboard for me?

can be made more efficient as:

Build a modern dashboard.

The Token Efficiency section shows what it found and gives the option to take out some of the unneeded words with the click of a button.

This is especially helpful for working with APIs or models where tokens are important.

Stack-Aware Tips

Sometimes different AI coding tools can need a little help.

A good prompt in Cursor isn't necessarily written the same way I would do it for v0 or Bolt.

Vibe Check can recognize common technologies and AI development platforms in a prompt and provide tips that are related.

Some of the platforms covered are:

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

The goal is not to force you to use a specific format, but instead to give you a better starting point.

Before and After

One thing that I wanted was a place to see what changes were actually made.

After enhancing a prompt, Vibe Check can show the original and enhanced versions of the prompt side-by-side.

You can see:

What was added

What was more specific

What requirements were added

What constraints were added

What the final prompt looks like

This makes it easier to learn how better prompts are written instead of just copying an answer and moving on.

Templates

If you don't want to type into an empty textarea, there are templates you can use.

Templates are grouped into categories:

UI Components

Full Apps

Fixes

API / Backend

AI Prompts

Some examples of templates are:

Responsive dashboards

Landing pages

Modals

Data tables

SaaS starters

Task managers

Admin panels

REST APIs

Authentication

Code reviews

Debugging

Refactoring

Pick a template, customize it for your project, and then apply it to the enhancer.

Engineer Tab

The Engineer tab is for when you want to go a little deeper than a basic enhancement.

It includes a checklist for common elements that an AI coding tool may need to know.

You can also apply different prompt techniques, such as:

Defining a role

Adding constraints

Breaking the work into steps

Adding acceptance criteria

Calling out edge cases

Defining an output format

You can select multiple techniques and apply them to the same prompt.

There is also a variant generator that creates three different versions of a prompt, allowing you to compare and use whichever fits your task best.

Version History

When working on a prompt, you may try a few different versions before finding one you like.

The Engineer tab allows you to save versions of your prompt and load them at a later time.

It is stored locally in the browser, so no account is required to keep your prompt versions.

History

Enhanced prompts are saved in local browser storage in the project.

The history page allows you to:

Search previous prompts

See their scores

Favorite prompts

Copy enhanced prompts

Clear your history

There is an export option in settings for you to keep a copy of your local data.

Credit Saver

The Engineer tab also includes a Credit Saver feature that can convert an English prompt into Chinese.

The idea is to experiment with reducing token usage when working with models where token costs matter.

The amount of token reduction will depend on the model and tokenizer, so the approximately 60% figure should be treated as an estimate rather than a promise.

How to use it

Using Vibe Check is simple and only has four steps:

1. Write your idea

Don't worry about making it perfect.

make a task management app

2. Enhance it

Click Enhance Prompt.

3. Check the result

Look at the score, improvements, token efficiency, and before/after view.

4. Copy it

Paste the improved prompt into your AI coding tool.

That's it.

Example

I think a great example of what Vibe Check does is shown below.

Before

make a cool dashboard for my app

After

Build a modern responsive dashboard for a web application.

Requirements:

- Sidebar navigation

- Dashboard summary cards

- Recent activity section

- Search and filtering

- Responsive layout for mobile, tablet, and desktop

- Loading, empty, validation, and error states

- Accessible keyboard interactions

- Reusable and maintainable components

Acceptance criteria:

- The dashboard works end-to-end

- All major interactions have appropriate states

- The layout works across common screen sizes

- Existing functionality should not be changed unless requested

Obviously, the exact output depends on what you put into the tool.

Supported Platforms

Vibe Check is designed to work alongside the tools that people already use:

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

You can copy the final prompt into any of them.

Quick Start

Use the live version

Open the deployed app and start typing:

https://enhance-prompts.vercel.app/

Then:

Enter your prompt.

Select or let the app detect your stack.

Click Enhance Prompt.

Review the result.

Copy it into your AI coding tool.

Run it locally

Clone the repository:

git clone https://github.com/tallurisai9346-beep/Enhance-Prompts.git

Go into the project:

cd Enhance-Prompts

The project is built with plain HTML, CSS, and JavaScript, so the basic app doesn't require you to have a frontend framework or a big build setup.

You can open the HTML file directly in a browser.

If you are using the API enhancement functionality, you will also need to configure the API/serverless endpoint that is used by your version of the project.

Tech Stack

I made sure to keep the project simple.

HTML

CSS

Vanilla JavaScript

CSS Custom Properties

Browser localStorage

Vercel serverless API for optional AI enhancement

There is no React or Next.js frontend. The basic application is a browser app.

Privacy

The goal is to keep the basic app local.

Prompt history, saved versions, and settings can be stored in your browser using localStorage.

There is no account system required for the core features.

If you connect an external AI enhancement API, prompts that are sent to that service will obviously be handled by that service, so be sure to read its privacy policy before using sensitive information.

Why I built it

I am 17, and I use AI coding tools a lot.

I was always running into the same problem: I would have an idea, type a short prompt, and get back something that technically followed my prompt but wasn't what I had in mind.

Then I would have to spend several more prompts explaining things that I could have mentioned in my first.

After doing that a few times, I started noticing that I was writing the same types of instructions:

Explain the goal.

Mention the tech stack.

Describe the UI.

Add responsive behavior.

Include error states.

Don't break the existing code.

Define what "done" means.

That's how I got the idea to create Vibe Check.

I wanted a small tool that could help with that initial request instead of making me re-write it every time.

It is not meant to replace Cursor, Claude, v0, Bolt, or any other AI tool.

It is simply the step before them.

Project Structure

The project is small.

Enhance-Prompts/

├── index.html

├── README.md

└── ...

Additional files may be included depending on the version of the project and if the optional API functionality is being used.

Contributing

If you find a bug or have an idea, feel free to open an issue or submit a pull request.

I would especially appreciate contributions around:

New AI coding platform support

Better stack detection

More useful templates

Better scoring rules

Better prompt enhancement rules

UI improvements

Bug fixes

If you want to add another AI coding tool, the stack detection and tips are designed to be fairly easy to extend.

Things I'd like to add

There are still many things that I want to improve.

Some ideas:

More AI coding tool profiles

More templates

Better prompt scoring

Custom scoring rules

More detailed prompt diffs

Better token analysis

Import/export improvements

Custom platform profiles

More enhancement modes

More useful prompt suggestions

If you have an idea, open an issue. I would rather hear what people actually want than add random features.

License

MIT License.

You can use, modify, and build on this project according to the license.

Links

GitHub:

https://github.com/tallurisai9346-beep/Enhance-Prompts

Live Demo:

https://enhance-prompts.vercel.app/

Final note

Vibe Check started with a simple problem:

I don't want to spend five minutes rewriting a prompt before I can spend five minutes building the thing.

If it saves you from having to write the same explanation over and over, then it is doing what I made it for.

Write the rough idea. Make the prompt better. Get back to building.
