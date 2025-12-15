import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        tags: [
          {
            injectTo: "head",
            tag: "script",
            attrs: {
              async: true,
              src: "https://www.googletagmanager.com/gtag/js?id=G-DEXYWPY93E",
            },
          },
          {
            injectTo: "head",
            tag: "script",
            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DEXYWPY93E');
            `,
          },
        ],
      },
    }),
  ],
  base: "/", // Custom domain: bacsithuy.io.vn
});
