export async function checkLinkStatus(url: string): Promise<boolean> {
  if (!url || url === "#") return false;

  try {
    const response = await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
    });
    return response.ok || response.type === "opaque";
 } catch {
  return false;
}
}
