async function loadEntries() {
  const container = document.getElementById("entries-list");
  const statusEl = document.getElementById("status");

  container.classList.add("loading");
  statusEl.textContent = "Loading sample data...";

  try {
    const entries = await getEntries();

    if (!Array.isArray(entries) || entries.length === 0) {
      container.innerHTML = "<p>No entries yet.</p>";
      statusEl.textContent = "";
      return;
    }

    container.innerHTML = entries
      .map(
        (entry) => `<div class="entry">
          <strong>${entry.title || "Untitled"}</strong>
          <div>${entry.description || "No description"}</div>
        </div>`
      )
      .join("");

    statusEl.textContent = "Loaded sample data from backend.";
    statusEl.classList.remove("error");
    statusEl.classList.add("success");
  } catch (err) {
    container.innerHTML = "";
    statusEl.textContent = `Failed to load data: ${err.message}`;
    statusEl.classList.remove("success");
    statusEl.classList.add("error");
  } finally {
    container.classList.remove("loading");
  }
}

document.addEventListener("DOMContentLoaded", loadEntries);
