import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 対象ファイル or 拡張子
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // plugins
    daisyui,
  ],
  daisyui: {
    logs: false,
    themes: [
      // 使用するテーマ
      "retro",
    ],
    darkTheme: "dark"
  },
};
