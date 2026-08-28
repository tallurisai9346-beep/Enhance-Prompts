# Vibe Check

Vibe Check is a lightweight browser-based prompt engineering tool focused on helping developers to turn vague ideas into more structured prompts.

The intended workflow is simple: rough draft a prompt, improve and review it, then copy it into your preferred coding tool.

The application has four sections:

Enhance — improve a prompt and see the changes

Templates — start with a prompt template

Engineer — see a quality checklist and apply techniques

History — view previous enhanced prompts

The application also has settings to tweak the additional analysis performed by the tool.

## Overview of features

Prompt Enhancer

Prompt can be pasted or typed into the application and improved by clicking Enhance Prompt button. The enhanced prompt along with the score, feedback, before/after comparison, and detected filler words are shown on the screen. The original prompt is also saved for easy comparison.

Prompt score

The application scores the prompt for quality based on several factors. The final score is displayed as a percentage.

The score helps to quickly identify whether the prompt may be missing some details.

Technology Detection

The application detects the technologies mentioned in the prompt.

The detected technologies include React, Next.js, Vue, Tailwind CSS, Firebase, Python, and others. The relevant guidance is shown when these technologies are used in the prompt.

Templates

The application comes with several built-in prompt templates arranged by category. The available categories are:

UI Components

Full Apps

Fixes

API

Code Prompts

Each category contains several prompts for developing responsive navigation, landing pages, dashboards, task managers, fixing common issues, creating REST API backend, integrating with Firebase, and others. The templates can be added to the prompt editor by clicking the relevant button.

Engineer

The Engineer section is used to work on a prompt in greater detail. The quality checklist appears on the left side, and the currently selected techniques appear on the right. The techniques can be applied to the prompt manually or by clicking the Apply Techniques button.

Prompt Variants

The Engineer section is used to generate three variants of the prompt:

Balanced structural version

Shorter directive version

Version focused on production and testing

These variations allow to quickly select the most appropriate version for the current task.

Version History

While working on a prompt, the application allows to save it as a different version. The saved versions can be reviewed, copied, or deleted.

History

Previously enhanced prompts can be viewed in the History section. The prompts can be searched, or the history can be cleared.

Undo/Redo

The prompt editor has an undo/redo functionality that allows to revert or re-apply changes made to the prompt.

Filler Detection

The application detects and scores the use of various fillers in the prompt, such as:

"I want you to"

"Can you please"

"Could you kindly"

"In order to"

"As soon as possible", and others.

The fillers can be removed to make the prompt more concise.

Settings

The settings section contains several options, including:

Turn on/off automatic technology detection

Display token efficiency

Show before/after comparison.

The application also has options to export the data and clear the local storage.

## Prompt workflow

1. Write prompts

Write a rough draft of a prompt describing what you want. For example:

build a dashboard for managing tasks

The draft does not need to be perfect. It can be as simple as the example above.

2. Enhance prompts

Click Enhance Prompt button and review the suggestions. Instead of immediately copying the generated prompt, review the structure and the score. You can always go back and make changes later.

3. Check prompts

Review the Before/After section and make sure that the generated prompt reflects your requirements. The prompt score is another useful indicator that helps to review the quality of the generated prompt.

4. Edit prompts

If needed, edit the prompt using the Engineer section to define project-specific requirements, constraints, and other variables.

5. Copy prompts

Copy the prompt and use it in your favorite coding tool.

## Data

The application has built-in data-management functionality, including:

Export Data JSON

Reset Local Storage

Clear History

Clear Versions

The application also uses browser-based storage to save history and versions of the prompts.

The landing page lists the supported coding tools, including:

v0

Bolt

Lovable

Cursor

Replit

StackBlitz

GitHub Copilot

Windsurf

Cody

The enhanced text can be copied into any of these coding tools and used as a starting point for development.

The application is focused on assisting developers without providing an integrated coding environment. The suggested workflow is as follows:

Rough idea

Prompt editor

Enhancement / Engineering

Score + checks

Review

Copy

Coding workflow

The website is currently hosted on Vercel .

To run the project locally, place the files in an appropriate web project folder and open index.html in a browser. If the project is created as a single HTML file, no additional setup is required.

## Notes

Vibe Check is primarily a productivity tool that helps to prepare prompts for development tasks. A higher score does not necessarily mean that the prompt is correct. Always make sure to review the final prompt and ensure that all requirements, constraints, and expected results are captured in the prompt.

## License

Please add your license information here before deploying the code.

## Author

Created as a lightweight prompt engineering utility.
