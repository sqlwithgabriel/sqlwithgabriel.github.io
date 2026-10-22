/**
 * Deterministic 32-bit FNV-1a hash, returned as 8 hex chars.
 * Used to version generated asset URLs (e.g. OG images) so caches that key
 * on the URL, like LinkedIn's, pick up changes.
 */
export const shortHash = (str: string): string => {
  let hash = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(str)) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};
