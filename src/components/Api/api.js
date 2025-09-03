export async function askAI(message) {
  await new Promise((res) => setTimeout(res, 1000));

  return `🤖 Dummy AI says: "${message}"`;
}
