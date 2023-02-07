<img src="./assets/icon.png" alt="the icon of the extension" height="160">

# GitHub Custom Dashboard Intro

An browser extension which allows you to change the intro on your GitHub dashboard. Just a joke, have fun! 😉

![A preview screenshot of the extension](./screenshots/extension-preview.png)

Get the extension from [releases](https://github.com/MrWillCom/github-custom-dashboard-intro/releases).

If you want a Safari version of this, you may need to convert it on your own, check out [docs](https://docs.plasmo.com/framework/workflows/faq#what-are-the-officially-supported-browser-targets).

## Why I Made This

Recently, Github added some text to the top of the dashboard:

![The intro text at the top of the dashboard](./screenshots/intro-original.png)

Then [@aeilot](https://github.com/aeilot), a friend of mine, sent me a joke:

![The intro text, but edited](./screenshots/intro-joke.png)

This inspired me to make this extension, allowing users to change the intro, and save the state.

## Building

```sh
pnpm install
pnpm build
```

Or, build for specific target, e.g. `firefox-mv2`:

```sh
pnpm build --target=firefox-mv2
```

## Development

```sh
pnpm dev
```

Then add the extension in `build/chrome-mv3-dev` to your Chrome browser.
