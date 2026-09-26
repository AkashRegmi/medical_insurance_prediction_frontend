# Insurance Prediction Frontend

This project is a React application for predicting insurance costs based on user input. It utilizes Tailwind CSS for styling and Vite as the build tool.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd insurance-prediction-frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal). You will see the insurance prediction form where you can input your data.

## Project Structure

```
insurance-prediction-frontend
├── src
│   ├── components
│   │   └── InsuranceForm.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

- **src/components/InsuranceForm.tsx**: Contains the `InsuranceForm` component for handling user input.
- **src/App.tsx**: Main application component that renders the `InsuranceForm`.
- **src/index.css**: Global styles and Tailwind CSS imports.
- **src/main.tsx**: Entry point of the application.
- **index.html**: Main HTML file for the React application.
- **package.json**: Project dependencies and scripts.
- **postcss.config.js**: Configuration for PostCSS.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.
- **vite.config.ts**: Vite configuration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.