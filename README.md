## Instructions for working on Build for Black Lives repo: 
- Main branch: production-ready site that gets deployed. Merging should only happen from `dev` to `main`.
- Development branch: branch for developers to merge in their features as they are completed. PR should be made from feature branch to `dev`.

## Shared styles
The `h1, h2, h3, h4, h5 and p` tags match the character styles from ther [XD designs](https://xd.adobe.com/view/cfe9fc7e-8850-42aa-a713-de8009844536-9aba/) and for the most part should be the only ones used without needing additional custom styling.

Use the `logotype` class for site titles that are meant to be in Archivo font.

All `Button`s should use either the `primary-button` or `secondary-button` classNames for the yellow and blue buttons respectively.

When adding CSS rules, make sure that you are adding rules to the specific corresponding file of the component you are editing (ie AboutPage.css for the About page). To ensure that there are no accidental side effects from style rules, please localize your classnames with the prefix for the component you are editing (ie all custom classes in the about page should have the `about-` prefix). This rule does not apply to any universal styling classes that are used, like `primary-button`.
