<h3 align="center">NextAuth.js Storybook Addon</h3>
<p align="center">
  <strong>Use <a href="https://next-auth.js.org/">NextAuth.js</a>  in your Storybook stories.</strong>
</p>
<br>

## Getting Started

Install this library by adding it to your devDependencies:

yarn:
```bash
yarn install --dev storybook-addon-next-auth
```

npm:
```bash
npm install --save-dev storybook-addon-next-auth
```

pnpm:
```bash
pnpm add --save-dev storybook-addon-next-auth
```


## Storybook


### Add to your storybook preview

Update `.storybook/main.js` and append to your list of addons:

```js
// .storybook/main.js
module.exports = {
  addons: ['storybook-addon-next-auth']
}
```


### Use toolbar menu

After restarting your storybook, an additional icon will appear in the toolbar. It allows you to select the current session state:

![ToolBar menu example](/docs/images/toolbar-menu.png)


You may now control and test your component state of `useSession()` by the toolbar items:

![Session control example](/docs/gifs/session-control.gif)

<br>

## Access current session data in stories

If you need to change your stories code while using session values, you may access those by the `useSession` hook.

```jsx
import { useSession } from 'next-auth/react';

export const MyStory = (props) => {
  // get access to current session data
  const session = useSession();

  ...
```

## Customize session auth states

This component brings a default set of auth states: `unknown`, `loading`, `unauthenticated` and `authenticated`.

⏱ Coming Soon

## Contributing

⏱ Coming Soon

## Author & Credits

Author: [Emilio Schaedler Heinzmann](https://github.com/emiliosheinz)

Special thanks for [Tom Freudenberg](https://github.com/TomFreudenberg/), the creator of [next-auth-mock](https://github.com/TomFreudenberg/next-auth-mock), where I've based my work for this library.
