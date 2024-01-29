import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import '../styles/index.css';

// Custom viewports definition. Extends the MINIMAL_VIEWPORTS
const customViewports = {
  iphone7: {
    name: "iPhone 7",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  samsungGalaxyS21Ultra: {
    name: "Samsung Galaxy S21 Ultra",
    styles: {
      width: "384px",
      height: "854px",
    },
  },
  superLarge: {
    name: "Super Large",
    styles: {
      width: "3000px",
      height: "854px",
    },
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    }
  },
};

export default preview;
