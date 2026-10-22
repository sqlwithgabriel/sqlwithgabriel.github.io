import { defineAstroPaperConfig } from "./src/types/config";

/*
 * ============================================================
 *  EDIT ME: everything personal about the site lives here.
 *  Replace every value marked TODO before publishing.
 * ============================================================
 */
export default defineAstroPaperConfig({
  site: {
    // TODO: https://<your-github-user>.github.io/ (or your own domain)
    url: "https://sqlwithgabriel.github.io/",
    // TODO: blog name shown in the header and browser tab
    title: "sqlwithgabriel",
    description:
      "Deep dives into SQL Server, PostgreSQL, cloud databases and data engineering.",
    // TODO: your name as it should appear on posts
    author: "Gabriel da Silva",
    // TODO: link opened when someone clicks your name (LinkedIn is a good choice)
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
  // TODO: your links (remove the ones you don't want)
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
