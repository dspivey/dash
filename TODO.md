# TODO List

## Priority

- [ ] Add DV logo to app navbar
- [ ] Create a generic skeleton component to use for metric cards and for viz charts
- [ ] Add links/menus as needed to app navbar OR remove hamburger menu and just keep logo
- [ ] Move app state to context hook and replace current props usages (e.g. loading)
- [ ] Change viz component surfaces to a card instead of paper
  - Optionally, just add a better header for current paper component
- [ ] Move viz component "wrapper" into new shared component
- [ ] Continue to update `CardMetric` component to be more generic and customizable
- [ ] Move `CardMetric` icon map to a shared component or util class (same for common colors?)

## Wish List

- [ ] Add `collapses` around viz components and/or grid rows

## Completed

- [X] Get skeleton component working for viz components
- [X] Add more visual distinction for `CardMetric` components
- [X] Fix JSS duplicate class name issue
  - https://material-ui.com/getting-started/faq/#why-arent-my-components-rendering-correctly-in-production-builds