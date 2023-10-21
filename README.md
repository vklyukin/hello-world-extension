# Hello World Chrome Extension

A simple Chrome extension built with React and Headless UI. When activated, the extension displays a button that, when clicked, outputs the message "Hello, world!".

## Features

- Built with React for a responsive UI.
- Uses Headless UI for a modern and clean design.
- Simple interaction to display a greeting message.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Steps

1. Clone the repository:

```bash
git clone https://github.com/vklyukin/hello-world-extension.git
cd hello-world-extension
```

2. Install the dependencies:

```bash
npm install
```

3. Build the extension:

```bash
npm run build
```

4. Load the extension into Chrome:

- Open Chrome and navigate to `chrome://extensions/`.
- Enable "Developer mode".
- Click on "Load unpacked" and select the `dist` directory from this project.

## Usage

Click on the extension icon in the Chrome toolbar to activate the popup. Click the button to display the "Hello, world!" message.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](https://choosealicense.com/licenses/isc/)
