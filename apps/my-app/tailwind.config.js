// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: 'hsl(233, 26%, 24%)',
        primaryLimeGreen: 'hsl(136, 65%, 51%)',
        primaryBrightCyan: 'hsl(192, 70%, 51%)',
        neturalGrayishBlue: 'hsl(233, 8%, 62%)',
        neturalLightGrayishBlue: 'hsl(220, 16%, 96%)',
        neturalVeryLightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        fontText: 'Public Sans',
      },
      backgroundImage: {
        heroMobile: "url('./assets/images/bg-intro-mobile.svg')",
        heroDesktop: "url('./assets/images/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
