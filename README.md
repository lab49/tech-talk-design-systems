# Tech Talk: Design Systems

This is a companion repository to the tech talk titled: "Creating, using, and maintaining a design system".

The purpose of this codebase is to illustrate what's possible when using Storybook to maintain a living style guide.

There are a handful of React components that are in the `src/components` directory, and all of those components have Stories co-located with them. There are also other stories in the `stories` directory, that do not map 1:1 with components. These stories are style guide stories, and demonstrate globally available styles.

Most components have Sass files co-located with them as well, but there are more global styles including mixins and variables in the `src/styles` directory.

## Getting started

1. Clone this repository
2. `npm install`
3. `npm start`

The start script will start up Storybook locally.

## Development

### Scripts

| Name | Purpose |
| --- | --- |
| `ci` | Run all tasks for a CI pipeline |
| `lint` | Run eslint |
| `start` | Start up Storybook |
| `storybook` | Also starts up Storybook |
| `stylelint` | Run Stylelint |
| `test` | Runs tests |
| `types` | Run Typescript, but don't emit any files |
