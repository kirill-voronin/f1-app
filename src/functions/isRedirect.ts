function isRedirectWiki(text: string): boolean {
  return text.startsWith("#REDIRECT");
}

export function getCorrectPilotWikiId(pilotId: string, text: string): string {
  if (isRedirectWiki(text)) {
    return text.substring(text.indexOf("[") + 2, text.lastIndexOf("]") - 1);
  }

  return pilotId;
}
