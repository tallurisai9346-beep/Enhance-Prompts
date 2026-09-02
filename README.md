#  Vibe Check

> A tool for turning ideas into prompts for AI coding assistants

Vibe Check is a web application that helps users refine prompts

before submitting them to an AI coding assistant
You can input a simple prompt such as:
```text
make a login page
```
and receive a much more descriptive prompt that provides the AI coding assistant with a better understanding of the task at hand
## Features
Improve vague prompts
Analyze prompts
Compare old vs new prompts
Copy prompts
Use prompts templates
Generate multiple prompt variations
Identify common technologies
Remove unneeded words

Saves prompt history in the browser
Exports prompt history
Optional API integration
Local fallback for the API
##  Why Vibe Check?
Working with AI coding assistants often requires well-crafted prompts in order to perform well
Sometimes you may have an idea in your head but struggle to translate that into a prompt that the AI assistant can understand.
Instead of stressing over the "perfect" prompt, Vibe Check allows you to generate a prompt with the assistance of a prompt enhancement API and focus on the task at hand
Fast, simple, and straight to the point
### The Vibe Check workflow
```text
Your idea
↓
Vibe Check
↓
Prompt analysis
↓
Improved prompt
↓
Copy and use it with your AI tool
```
Here's an example of a prompt before and after being processed by Vibe Check:
Before:
```text
make a modern todo app
```
After:
```text
Build a modern, responsive todo application.
Requirements:
- Add, edit, complete, and delete tasks
- Filter tasks by all, active, and completed
- Save tasks in local storage
- Use a clean and simple interface
- Make it responsive on mobile and desktop
```
The ultimate goal of Vibe Check is not to bloat prompts with unneeded words, but to help clarify and organize thoughts in order to get the best results from AI coding assistants
## 🛠️ Technologies used
HTML
CSS
JavaScript
Local Storage
Optional API integration
Vibe Check is a lightweight application made with common technologies so it can be easily understood and modified
##  Project structure
```text
Enhance-Prompts/
│
├── vibe-check-rewitten.html
└── README.md
```
Vibe Check is a lightweight application hosted in a single HTML file for easy deployment
##  Run locally
Clone this repository:
```bash
git clone https://github.com/tallurisai9346-beep/Enhance-Prompts.git
```
Change directory:
```bash
cd Enhance-Prompts
```
You can either open the file in a browser or alternatively install Node.js and run:
```bash
npx serve .
```
## 🌐 Vibe Check demo
Vibe Check:
https://enhance-prompts.vercel.app/
##  Data
Vibe Check stores prompt history and saved prompts using your browser's Local Storage
No account is needed to save data
##  API
Vibe Check can optionally use an enhancement API.
The following endpoint is used:
```http
POST /api/enhance
```
If the above API cannot be reached, the local enhancement algorithm will be used instead
##  Future work
Here are some possible future features for Vibe Check:
More prompt templates
Better prompt scoring
More prompt customization
More AI tool support
Better prompt analytics
Prompt history cloud storage
Better API support
This is not an exhaustive list, and future work may be decided upon depending on circumstances
##  Contributing
Did you find a bug or have an idea for Vibe Check?
I'm always open to contributions, suggestions, and proposals
You can open a bug report or feature request
Or, if you're feeling extra nice, you can submit a pull request.
## 📄 License
See the repository for license information.
---
