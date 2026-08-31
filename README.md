# Vibe Check

**Vibe Check** is a simple tool that helps you turn basic coding ideas into better, clearer prompts.

Sometimes you know what you want to build, but your prompt is too short or vague. Vibe Check takes your query, improves it, and gives you a more useful prompt that you can paste directly into tools like Cursor, ChatGPT, Claude, v0, Bolt, or other AI coding assistants.

## ✨ What can it do?

* Improve simple coding prompts
* Check the quality of your prompt
* Compare your original prompt with the improved version
* Use ready-made prompt templates
* Generate different prompt variations
* Keep track of your prompt history
* Detect common technology stacks
* Remove unnecessary words
* Save prompts using browser Local Storage
* Export your prompts
* Use an optional API for prompt enhancement
* Fall back to a local enhancement method if the API is unavailable

## 🛠️ Built With

Vibe Check is intentionally kept simple.

* HTML
* CSS
* JavaScript
* Local Storage
* Optional API

There is no frontend framework or complicated setup. Everything is kept in a single HTML file to make the project easy to understand and run.

## 🚀 Run It Locally

Clone the repository:

```bash
git clone https://github.com/tallurisai9346-beep/Enhance-Prompts.git
```

Go into the project folder:

```bash
cd Enhance-Prompts
```

Start a local server:

```bash
npx serve .
```

Then open the local URL shown in your terminal.

### Another option

Since the project is just HTML, CSS, and JavaScript, you can also open the HTML file directly in your browser.

## 📡 API

The app can optionally use an API to enhance prompts.

The main API endpoint is:

```http
POST /api/enhance
```

If the app cannot connect to the API, it automatically uses a local prompt-enhancement method instead.

This means the basic functionality can still work without the API.

## 📁 Project Structure

The project is intentionally small:

```text
Enhance-Prompts/
└── vibe-check-rewitten.html
```

Most of the application is contained inside this one file.

The goal was to keep things simple rather than split a small project into lots of files.

## 🌐 Links

**Live Demo:**
https://enhance-prompts.vercel.app/

**GitHub:**
https://github.com/tallurisai9346-beep/Enhance-Prompts

## ⚠️ Note About Token Savings

The number of tokens shown as "saved" is only an estimate.

Actual token usage can be different depending on the AI model, tokenizer, and the tool you use to run the prompt.

## 🔮 Future Plans

There are a few things I'd like to add in the future:

* More prompt templates
* Better prompt scoring
* User accounts
* Cloud storage
* More AI providers
* More prompt customization options
* Improved prompt history and management

## 💡 Why I Built This

AI coding tools are really useful, but the quality of the result often depends on how clearly you explain what you want.

Vibe Check is meant to make that first step easier.

Instead of spending time trying to figure out the "perfect" prompt, write what you're thinking, improve it with Vibe Check, and then use the result in your favorite coding tool.

**Write your query. Make it better. Get coding.**
