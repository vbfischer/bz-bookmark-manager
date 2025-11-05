import type { Preview } from '@storybook/nextjs-vite'
import "../app/globals.css";
import { manrope } from "../app/fonts";
import {withThemeByDataAttribute} from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    // Add Google Fonts link to Storybook's head
    docs: {
      head: () => `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
        <style>
          :root {
            --font-manrope: 'Manrope', sans-serif;
          }
          body {
            font-family: var(--font-manrope) !important;
          }
        </style>
      `
    }
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light'
    }),
    
    (Story) => {
      // Apply the font variable to the document root
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add(manrope.variable);
        // Set the CSS variable directly with the Manrope font family
        document.documentElement.style.setProperty('--font-manrope', 'Manrope, sans-serif');
      }
      
      return (
        <div className="font-manrope">
          <Story/>
        </div>
      );
    }
  ]
};

export default preview;