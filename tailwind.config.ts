/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 対象ファイル or 拡張子
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // plugins
  ],
};
