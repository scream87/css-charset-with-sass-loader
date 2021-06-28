## Steps

1. Clone the repo
2. Run `npm i` to install dependencies
3. Run `npm run build-dev` command (development mode). Then check `dist/main.css` and you will see a charset rule in this file - `@charset "UTF-8";`
4. Run `npm run build` command (production mode). Then check `dist/main.css` and you will not see charset rule in this file - `@charset "UTF-8";`

### Development Build

```bash
npm run build-dev
```

### Production Build

```bash
npm run build
```
