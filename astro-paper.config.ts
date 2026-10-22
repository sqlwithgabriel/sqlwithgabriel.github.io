import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://sqlwithgabriel.github.io/",
    title: "sqlwithgabriel",
    description:
      "Deep dives into SQL Server, PostgreSQL, cloud databases and data engineering.",
    author: "Gabriel da Silva",
    profile: "https://www.linkedin.com/in/gabrieldba/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/gabrieldba/" },
    { name: "github", url: "https://github.com/gbrl-exe" },
  ],
  shareLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
      linkTitle: "Share this post on LinkedIn",
    },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
