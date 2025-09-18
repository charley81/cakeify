# Project: Cakeify

## Project Overview

This is a [Next.js](https://nextjs.org/) project using [Sanity](https://www.sanity.io/) as a headless CMS. The project is set up to use [Turbopack](https://turbo.build/pack) for development and builds. The frontend is built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/), and the styling is done with [Tailwind CSS](https://tailwindcss.com/).

The Sanity Studio is embedded in the Next.js application and is available at `/studio`. The content models are defined in the `src/sanity/schemaTypes` directory and include `post`, `author`, `category`, and `blockContent`.

## Building and Running

To get the project up and running, you will need to have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed.

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Next.js development server with Turbopack. The application will be available at `http://localhost:3000`.

3.  **Build the project:**

    ```bash
    npm run build
    ```

    This will create a production build of the Next.js application.

4.  **Start the production server:**

    ```bash
    npm run start
    ```

    This will start the Next.js production server.

5.  **Lint the project:**

    ```bash
    npm run lint
    ```

    This will run the ESLint linter to check for any code quality issues.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.ts` and the global styles are in `src/app/globals.css`.
*   **Linting:** The project uses ESLint for linting. The configuration is in `eslint.config.mjs`.
*   **Sanity Schema:** The Sanity schema is defined in the `src/sanity/schemaTypes` directory. Each schema type is in its own file and they are combined in `src/sanity/schemaTypes/index.ts`.
*   **Sanity Studio:** The Sanity Studio is configured in `sanity.config.ts` and is available at `/studio` in the Next.js application.
