import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src", // ソースディレクトリ
  base: "/", // 本番環境デプロイ用
  build: {
    outDir: "../dist", // ビルドファイル出力先
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/index.html",
      //ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          // Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = "fonts";
          }
          // 画像ファイルの振り分け
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          // CSSファイルの名前設定
          if (extType === "css") {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
      },
    },
  },
  optimizeDeps: {
    include: ["vue"],
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "~~": `${__dirname}/`,
      "~~/": `${__dirname}/`,
      "@@": `${__dirname}/`,
      "@@/": `${__dirname}/`,
      "~": `${__dirname}/src/`,
      "~/": `${__dirname}/src/`,
      "@": `${__dirname}/src/`,
      "@/": `${__dirname}/src/`,
      assets: `${__dirname}/src/assets/`,
      "assets/": `${__dirname}/src/assets/`,
    },
  },
});
