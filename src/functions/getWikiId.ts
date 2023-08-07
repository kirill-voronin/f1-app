export function getWikiId(uri: string): string {
  const res = uri.split("/");

  return res[res.length - 1];
}
