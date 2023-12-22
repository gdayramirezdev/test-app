# Vite - Template with ReactJs, TypeScript, Tailwind CSS

## Structure

This is the directory structure of the application

```txt
  ├── .husky     -> Husky hooks
  ├── __tests__  -> Unit tests
  ├── public     -> Public files
  ├── src        -> Source code
  │   ├── main.tsx     -> Main file of the application
  │   ├── App.tsx       -> App file of the application
  │   ├── index.css    -> Global styles
  │   ├── assets       -> Assets
```

## Prerequisites

- Install Node.js from [here](http://nodejs.org) >= 18.12.1
- Install PNPM from [here](https://pnpm.io/es/installation) **(Optional)** can you use npm or yarn
- Install Git from [here](https://git-scm.com/downloads)
- Have shell or command line (If you use Mac and Linux, you have a terminal pre-installed, if you are using windows you can use [git bash](https://git-scm.com/downloads))

## Local

1. Clone the repo:
   - `git clone https://github.com/beenjii14/vite-front-template.git`
2. Install dependencies:
   - `pnpm install`
3. Execute the command to activate the husky hooks:
   - `pnpm prepare`
4. Run the app
   - `pnpm dev`

## Development

1. Clone the repo:
   - `git clone https://github.com/beenjii14/vite-front-template.git`
2. Install dependencies:
   - `npm install`
3. Run the app
   - `npm run dev`

## Production

1. Clone the repo:
   - `git clone https://github.com/beenjii14/vite-front-template.git`
2. Install dependencies:
   - `npm install`
3. Build the app
   - `npm run build`
4. Run the app
   - `npm run start`

## Configured packages

- [ReactJs](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/)
- [Lint Staged](https://www.npmjs.com/package/lint-staged)
  
## Extra commands

```bash
# Run the unit tests with coverage
pnpm test

# Run the unit tests watch mode
pnpm test:watch

# Run the unit tests with coverage
pnpm lint
```

## [License MIT](LICENSE)
