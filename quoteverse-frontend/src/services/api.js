// services layer - keeps API call logic separate from components
// If backend URL changes, only this file needs updating

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function fetchRandomQuote() {
  const response = await fetch(`${BASE_URL}/api/quote/random`);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  const data = await response.json();
  return data.quote;
}
