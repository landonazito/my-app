export default async function getQuote() {
  const res = await fetch('https://api.quotable.io/random', {
    cache: 'no-store',
  });
  const data = await res.json();
  return {
    quote: data.content,
    author: data.author,
  }
}