# A small app to show top Wikipedia articles with the ability to filter by date and country.

## 🪴 Made for Grow Therapy 🪴

## To run locally

From your terminal:

```sh
git clone <url>
cd to repo
yarn install
yarn dev
```

Server will be available at http://localhost:5173/

## Tools used:

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- Prettier & ESLint for code formatting and linting

## Things I considered:

- Accessibility
  - I used [Google Lighthouse](https://developer.chrome.com/docs/lighthouse) to periodically audit my pages.
- Building with component reusability in mind.

## Todo:

- Persist selections in local/session storage
- Better unit tests
- Error/loading UI
- Responsive pagination
- Clean up types
- Implement search button
