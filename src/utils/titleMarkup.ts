const STRIKE = /~~(.+?)~~/g;

/** Strip ~~strike~~ markers for plain-text contexts (<title>, RSS). */
export const plainTitle = (title: string): string =>
  title.replace(STRIKE, "$1");

/** Strike ~~text~~ with U+0336 for plain-text share previews (og:title). */
export const strikeTitle = (title: string): string =>
  title.replace(STRIKE, (_, s: string) =>
    [...s].map(c => c + "̶").join("")
  );

/** Split a title into words, flagging the ones inside ~~strike~~ markers. */
export const titleWords = (
  title: string
): { text: string; strike: boolean }[] =>
  title
    .split(/(~~.+?~~)/)
    .flatMap(part => {
      const strike = /^~~.+~~$/.test(part);
      const text = strike ? part.slice(2, -2) : part;
      return text
        .split(/\s+/)
        .filter(Boolean)
        .map(word => ({ text: word, strike }));
    });

/** Escape a title and render ~~strike~~ markers as <del>. */
export const titleHtml = (title: string): string =>
  title
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(STRIKE, "<del>$1</del>");
