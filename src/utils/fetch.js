export async function get(url) {
  const response = await fetch(url);

  let body;

  try {
    body = await response.json();
  } catch (error) {
    throw new Error("Can't parse response");
  }

  return body;
}
