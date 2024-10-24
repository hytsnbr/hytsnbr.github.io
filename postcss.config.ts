import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import cssDeclarationSorter from "css-declaration-sorter";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssSortMediaQueries(),
    cssDeclarationSorter({
      order: "smacss",
    }),
  ],
};
