## Start of the project

```
npm install - install dependency
npm run start:dev or npm run start:dev:vite - project interface + storybook in dev mode
```

----

## Scripts

- `npm run start` - Start the frontend of the project on the webpack development server
- `npm run start:vite` - Start project frontend on vite
- `npm run start:dev` - Start project frontend on webpack development server + storybook
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run build:analyzed` - Build in dev mode with the analyzer
- `npm run build:prod` - Build in prod mode
- `npm run eslint` - Check ts files with linter
- `npm run eslint:fix` - Fix ts files with linter
- `npm run lint:scss` - Checking scss file styles with linter
- `npm run lint:scss:fix` - Fixing scss file styles with linter
- `npm run test:unit` - Start unit tests with jest
- `npm run test:ui` - Start screenshot tests from loki
- `npm run test:ui:approve` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:json` - Generate json's report for screenshot tests
- `npm run test:ui:html` - Generate HTML's report for screenshot tests
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run storybook` - run Storybook
- `npm run fix:absolute:imports` - Adding alias to absolute imports
- `npm run postinstall` - Removes .cache's directory from node_modules every time we install some package

----

## Project architecture

The project is written in accordance with the methodology Sliced design features

Documentation link - [sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are found in public/locales.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Usual jest unit tests - `npm run test:unit`
2) Component tests with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`

----

## Linting

The project uses eslint to check typescript code and stylelint to check files with styles.

Also for strict control of major architectural chapters
own eslint plugin *eslint-plugin-ulbi-tv-plugin* is used,
which contains 3 rules
1) path-checker - prohibit using of absolute imports within the same module
2) layer-import - detection of layer consumption adjustments in terms of FSD
     (for example, widgets cannot be used in functions and objects)
3) public-api-imports - allows imports from other modules only from the public API. Has auto-correction

##### Run linters
- `npm run eslint` - Check ts files with linter
- `npm run eslint:fix` - Fix ts files with linter
- `npm run lint:scss` - Checking scss file styles with linter
- `npm run lint:scss:fix` - Fixing scss file styles with linter

----
## Storybook

In the project, case stories are compiled for everyone.
Server requests are mocked using storybook-addon-mock.

The soricase file is created next to the component with the extension .stories.tsx

You can start history with the command:
- `npm run storybook`

Example:

```typescript jsx
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Button, ButtonSize, ButtonTheme} from './Button';
import { Theme } from '@/shared/const/theme';

export default {
      title: 'general/button',
      Component: Button,
      argument types: {
          backgroundColor: {control: 'color'},
      },
} as ComponentMeta<typeofButton>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
primary.arguments = {
      children: "Text"
};

export constant Clear = Template.bind({});
Clear.args = {
      children: "Text"
      theme:ButtonTheme.CLEAR,
};
```

----

## Project configuration

For project development, there are 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors have been adapted to the main features of the application.

All found in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment setup
- /config/storybook - storybook settings

The `scripts` folder contains various scripts for refactoring\simplification of writing code\report generation, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
In ci, all types of tests, project and storybook assembly, linting are run.

In precommit hooks, we check the project with linters, the config is in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
Whenever possible, reusable entities should be normalized using the EntityAdapter

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle), use
[DynamicModuleLoader](/src/shared/lib/components/LazyReducerLoader/LazyReducerLoader.tsx)

----


## Entities

- `Article`
- `Comment`
- `AddNewComment`
- `Country`
- `Currency`
- `Notification`
- `Profile`
- `Rating`
- `User`

## Features

- `ArticleComments`
- `ArticleRating`
- `ArticleRecommendationsList`
- `ArticlesSortSelector`
- `AuthByUsername`
- `AvatarDropdown`
- `EditableProfileCard`
- `LanguageToggler`
- `MobileNotificationDrawer`
- `NotificationPopup`
- `ThemeToggler`
- `ViewToggler`