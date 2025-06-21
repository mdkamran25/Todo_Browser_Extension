# Quick Todo Chrome Extension

A simple and lightweight Chrome extension to manage your tasks quickly from any tab. Add, view, and remove todos with ease. A floating badge shows your current task count on every website.

## Features

- Add and remove tasks from a popup window
- Tasks are synced across Chrome browsers using Chrome Sync
- Floating badge displays the number of tasks on every page
- Persistent storage using Chrome's storage API
- Minimal and clean UI

## Installation (Development)

To run and test the extension locally during development:

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle at the top right).
4. Click **Load unpacked**.
5. Select your project folder (`Todo_Browser_Extension-main`).
6. The extension will appear in your browser and you can test it immediately.
7. Whenever you make changes, click the **Reload** button on your extension in the extensions page to apply updates.

## Usage

- Click the extension icon to open the popup.
- Add a new task using the input and "Add" button.
- Remove a task by clicking the "X" next to it.
- The floating badge at the bottom right of every page shows your current task count.

## Deployment (Publishing to Chrome Web Store)

1. Make sure all files are ready and tested.
2. Go to [Google Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
3. Click **New Item**.
4. Upload the entire project folder as a ZIP file (include all files: `manifest.json`, `popup.html`, `popup.js`, `popup.css`, `background.js`, `content.js`, `icon.png`).
5. Fill in the required details (description, screenshots, etc.).
6. Submit for review.

For more details, see the [official Chrome extension publishing guide](https://developer.chrome.com/docs/webstore/publish/).

## File Structure

- `manifest.json` – Extension manifest file
- `popup.html`, `popup.js`, `popup.css` – Popup UI and logic
- `background.js` – Background tasks (e.g., periodic logging)
- `content.js` – Injects the floating badge into web pages
- `icon.png` – Extension icon

## Permissions

- `storage` – To save your tasks
- `tabs` – To communicate with content scripts
- `alarms` – For periodic background tasks
- `host_permissions: <all_urls>` – To inject badge on all sites

## License

MIT License
