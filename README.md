
# Passaroo - Password Generator Chrome Extension

Passaroo is a secure and customizable password generator Chrome extension. It allows users to generate strong passwords based on various parameters, including length, inclusion of uppercase letters, numbers, and symbols.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React** - The core framework for building the user interface.
- **Tailwind CSS** - For styling and layout.
- **Clipboard API** - For copying generated passwords to clipboard.
- **Chrome Extension API** - For integrating the application with Chrome as a browser extension.

## Features

- **Customizable Password Length**: Choose a password length between 6 and 50 characters.
- **Character Set Options**: Choose whether to include uppercase letters, numbers, and symbols in the generated password.
- **Copy to Clipboard**: Copy the generated password to the clipboard with a single click.
- **Elegant and Simple UI**: Modern and responsive design, with a user-friendly interface.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Gunduz-Medya/passaroo.git
   cd passaroo
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Install **Tailwind CSS**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

4. Configure **Tailwind** by adding the following lines to **`tailwind.config.js`**:

   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. Update **`src/index.css`** to include the Tailwind CSS directives:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Build the project for production:

   ```bash
   npm run build
   ```

7. Load the extension in Chrome:

   - Go to **chrome://extensions/** in your browser.
   - Enable **Developer mode**.
   - Click on **"Load unpacked"** and select the **`build/`** directory.

8. Your **Passaroo** extension should now be ready to use.

## Usage

Once the extension is loaded, you can click on the **Passaroo** icon in the Chrome toolbar to open the popup. From there, you can:

1. Select the password length.
2. Choose to include uppercase letters, numbers, and symbols.
3. Click **"Generate Password"** to generate a secure password.
4. Click **"Copy to Clipboard"** to copy the password to your clipboard.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
