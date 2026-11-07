# Contributing

Thanks for taking an interest in Magan.

The project is deliberately straightforward. Contributions should preserve that quality: useful improvements, clear code and a restrained interface.

## Before you start

- Check existing issues before opening a new one.
- For larger changes, open an issue first to discuss the approach.
- Keep pull requests focused. One coherent improvement is easier to review than a bundle of unrelated changes.

## Local setup

```bash
git clone https://github.com/Shushirolsh-Dev/Magan.git
cd Magan
npm install
npm run dev
```

## Development checks

Before submitting a pull request, run:

```bash
npm run check
npm run build
node scripts/check-links.mjs
```

If you change the optional Go service, also run:

```bash
cd go-api
gofmt -w main.go
go test ./...
```

## Contribution guidelines

- Use TypeScript for React application code.
- Keep content data separate from presentation where practical.
- Prefer semantic HTML and native browser capabilities.
- Make interactive controls keyboard accessible.
- Respect reduced-motion preferences.
- Test at mobile and desktop widths.
- Do not add dependencies for functionality that can be handled cleanly with the platform.
- Update the README when setup, scripts or behaviour changes.

## Pull requests

Include a short description of the problem, the approach taken and how you tested the change. Add screenshots for visual changes, including a mobile view when relevant.

By contributing, you agree that your contributions may be distributed under the project's MIT License.