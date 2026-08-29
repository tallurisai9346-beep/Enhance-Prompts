# Vibe Check

Vibe Check is a simple prompt-writing tool for individuals interacting with AI coding tools.

The concept behind it is simple: write a rough prompt, evaluate its quality, improve upon it, and finally copy the resulting version into tools such as Cursor, ChatGPT, Claude, v0, Bolt or other coding assistants.

## Features

Improve rough prompts

Score prompts based on clarity and detail

See side-by-side view of original and improved prompt

Ready-made prompt templates

Prompt engineering techniques

Prompt variations

History of prompts

Detect common tech stacks

Unnecessary filler words detection

Local prompt version storage

Export your local prompt data

Optional `/api/enhance` endpoint

Local fallback when no API is available

## Tech Stack

This project is deliberately kept lean.

HTML

CSS

JavaScript

Local Storage

Fetch API

Optional backend API

No frontend framework is required for the core application.

## Getting Started

Clone the repository:

```bash

git clone YOUR_GITHUB_REPOSITORY_URL

```

Open the project folder in your browser.

When you're using a local server you can use simple example such as:

```bash

npx serve .

```

The core features don't require a backend server.

## API

The application optionally uses:

```text

POST /api/enhance

```

The request consists of a prompt and a mode.

Example:

```json

{

"prompt": "Build a dashboard for my users",

"mode": "enhance"

}

```

The API must return an enhanced prompt.

When the API call fails, Vibe Check will fallback to its internal prompt enhancement logic.

## GitHub

The application is hosted on GitHub to keep the code and future modifications in a single repository.

GitHub: YOUR_GITHUB_REPOSITORY_URL

You can replace this placeholder with your actual GitHub repository URL.

## Vercel

The application can be deployed on Vercel.

To deploy it, you can:

1. Push to GitHub

2. On Vercel, import the GitHub repository

3. Select the project

4. Deploy

Once your project is deployed, Vercel will provide you with a public link which you can share elsewhere.

Live Demo: YOUR_VERCEL_URL

Replace this placeholder with your actual Vercel deployment link.

## How I use it

I commonly use it by starting with a very basic prompt, for example:

```text

Build me a dashboard for managing customers.

```

And use it to get it improved before sending it to my coding assistant.

This allows me to remember details such as responsive design, accessibility, loading states, error handling or acceptance criteria.

## Data

The Local Storage in your browser is used for:

Prompt history

Saved prompt version

Settings

Last enhanced prompt

The Export Data button can be used to store this information as a JSON file.

## Project Structure

The entire application is contained in a single HTML file:

```text

vibe-check-rewritten.html

```

This approach keeps everything contained within a single document with inline CSS and JavaScript to reduce complexity and allow easy modifications by end-users.

## Deployment

The simplest method for publishing this project is:

```text

GitHub → Vercel → Live website

```

Push your code to GitHub, connect the repository to Vercel and the platform will take care of the rest.

## Important Note

Token-saving figures shown by the application are theoretical figures. The actual amount of tokens which will be saved may vary depending on the AI model and provider.

## Future Ideas

Some potential improvements I'm considering for the future:

More templates

More prompt engineering techniques

Improved prompt scoring

User accounts

Cloud-saved prompts

Greater customization

Analytics

More AI providers

## License

You can optionally insert your preferred license here if you intend for this project to be open sourced.

---
# Vibe Check

Vibe Check is a simple prompt-writing tool for individuals interacting with AI coding tools.

The concept behind it is simple: write a rough prompt, evaluate its quality, improve upon it, and finally copy the resulting version into tools such as Cursor, ChatGPT, Claude, v0, Bolt or other coding assistants.

## Features

Improve rough prompts

Score prompts based on clarity and detail

See side-by-side view of original and improved prompt

Ready-made prompt templates

Prompt engineering techniques

Prompt variations

History of prompts

Detect common tech stacks

Unnecessary filler words detection

Local prompt version storage

Export your local prompt data

Optional `/api/enhance` endpoint

Local fallback when no API is available

## Tech Stack

This project is deliberately kept lean.

HTML

CSS

JavaScript

Local Storage

Fetch API

Optional backend API

No frontend framework is required for the core application.

## Getting Started

Clone the repository:

```bash

git clone YOUR_GITHUB_REPOSITORY_URL

```

Open the project folder in your browser.

When you're using a local server you can use simple example such as:

```bash

npx serve .

```

The core features don't require a backend server.

## API

The application optionally uses:

```text

POST /api/enhance

```

The request consists of a prompt and a mode.

Example:

```json

{

"prompt": "Build a dashboard for my users",

"mode": "enhance"

}

```

The API must return an enhanced prompt.

When the API call fails, Vibe Check will fallback to its internal prompt enhancement logic.

## GitHub

The application is hosted on GitHub to keep the code and future modifications in a single repository.

GitHub: YOUR_GITHUB_REPOSITORY_URL

You can replace this placeholder with your actual GitHub repository URL.

## Vercel

The application can be deployed on Vercel.

To deploy it, you can:

1. Push to GitHub

2. On Vercel, import the GitHub repository

3. Select the project

4. Deploy

Once your project is deployed, Vercel will provide you with a public link which you can share elsewhere.

Live Demo: YOUR_VERCEL_URL

Replace this placeholder with your actual Vercel deployment link.

## How I use it

I commonly use it by starting with a very basic prompt, for example:

```text

Build me a dashboard for managing customers.

```

And use it to get it improved before sending it to my coding assistant.

This allows me to remember details such as responsive design, accessibility, loading states, error handling or acceptance criteria.

## Data

The Local Storage in your browser is used for:

Prompt history

Saved prompt version

Settings

Last enhanced prompt

The Export Data button can be used to store this information as a JSON file.

## Project Structure

The entire application is contained in a single HTML file:

```text

vibe-check-rewritten.html

```

This approach keeps everything contained within a single document with inline CSS and JavaScript to reduce complexity and allow easy modifications by end-users.

## Deployment

The simplest method for publishing this project is:

```text

GitHub → Vercel → Live website

```

Push your code to GitHub, connect the repository to Vercel and the platform will take care of the rest.

## Important Note

Token-saving figures shown by the application are theoretical figures. The actual amount of tokens which will be saved may vary depending on the AI model and provider.

## Future Ideas

Some potential improvements I'm considering for the future:

More templates

More prompt engineering techniques

Improved prompt scoring

User accounts

Cloud-saved prompts

Greater customization

Analytics

More AI providers

## License

You can optionally insert your preferred license here if you intend for this project to be open sourced.

---

**Give the tool a rough prompt → improve it → get a better prompt for your AI coding tool.**

Live demo: https://enhance-prompts.vercel.app/

GitHub: https://github.com/tallurisai9346-beep/Enhance-Prompts
