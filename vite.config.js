import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// import plugin lain yang sudah ada (misal react) tetap dipertahankan

export default defineConfig({
  base: "/Nihonggo-o-bekyo/",
  plugins: [
    // plugin lama kamu (react(), dll) taruh di sini
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Nihonggo o Bekyo",
        short_name: "Nihonggo",
        description: "Belajar bahasa Jepang",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/Nihonggo-o-bekyo/",
        start_url: "/Nihonggo-o-bekyo/",
        icons: [
          { src: "pwa-192x192.jpeg", sizes: "192x192", type: "image/jpeg" },
          { src: "pwa-512x512.jpeg", sizes: "512x512", type: "image/jpeg" },
          {
            src: "pwa-512x512.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "maskable"
          }
        ]
      }
    })
  ]
});