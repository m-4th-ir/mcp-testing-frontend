const API_BASE_URL = window.__API_BASE_URL__ || "https://REPLACE_WITH_BACKEND_DOMAIN/api/v1";

async function getEntries() {
  const response = await fetch(`${API_BASE_URL}/entries`);
  if (!response.ok) throw new Error(`HTTP error ${response.status}`);
  return response.json();
}
