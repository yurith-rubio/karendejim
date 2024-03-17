import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          500: "#611f69",
        },
        'crema': {
          500: "#fcbd8a",
        },
        'rosa': {
          500: "#e77899",
        }
      }
    }
  },
  plugins: [],
});

export default config;
