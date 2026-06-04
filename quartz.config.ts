import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ATEM — Glosario",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian", "_redirects"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfaf3",          // papel casi blanco — contraste alto
          lightgray: "#c8b89e",      // sombra de papel saturada
          gray: "#7a6a52",           // sepia medio fuerte
          darkgray: "#1f1610",       // tinta café muy oscura
          dark: "#080503",           // tinta casi negra absoluta — máximo contraste
          secondary: "#7a3f0f",      // cuero oscuro saturado — wikilinks
          tertiary: "#a06a30",       // bronce más cálido
          highlight: "rgba(122, 63, 15, 0.15)",   // cuero sutil
          textHighlight: "#d4a05066",             // subrayado oro más visible
        },
        darkMode: {
          light: "#0c0907",          // fondo tinta nocturna profunda
          lightgray: "#2b2218",      // sombra noche con tono café
          gray: "#7a6852",           // gris caliente
          darkgray: "#e8dcc4",       // sepia claro alto
          dark: "#fdfaf3",           // papel casi blanco como texto — máximo contraste
          secondary: "#e8b878",      // oro luminoso saturado para wikilinks
          tertiary: "#a06a30",       // bronce
          highlight: "rgba(232, 184, 120, 0.18)", // oro más visible
          textHighlight: "#e8b87866",             // subrayado oro
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      // Plugin.AliasRedirects(),  // disabled: aliases with special chars cause ENOENT on Windows
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
