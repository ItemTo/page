export async function onRequest(context) {
  // Hier ist der Text, der angezeigt werden soll
  const text = `loadstring(game:HttpGet("https://raw.githubusercontent.com/ItemTo/VortexV2/refs/heads/main/EH"))()`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain", // sorgt dafür, dass der Browser den Text anzeigt
    },
  });
}
