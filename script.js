async function loadPosts() {
  try {
    const res = await fetch("posts.txt");
    const text = await res.text();

    const blocks = text.split("-----").map(b => b.trim()).filter(b => b.length > 0);

    renderPosts(blocks);

  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

function renderPosts(blocks) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  blocks.forEach(block => {
    const div = document.createElement("div");
    div.className = "post";

    // Extract Date line if exists
    let lines = block.split("\n");
    let dateLineIndex = lines.findIndex(l => l.toLowerCase().startsWith("date:"));

    let date = "";
    if (dateLineIndex !== -1) {
      date = lines[dateLineIndex].replace("Date:", "").trim();
      lines.splice(dateLineIndex, 1); // remove date line
    }

    let dateHTML = "";
    if (date !== "") {
      dateHTML = `<div class="post-date">Date: ${date}</div>`;
    }

    // Join remaining lines exactly as they are
    const bodyText = lines.join("\n");

    div.innerHTML = `
      ${dateHTML}
      <pre class="post-text">${bodyText}</pre>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  document.getElementById("year").textContent = new Date().getFullYear();
});
