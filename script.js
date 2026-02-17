async function loadPosts() {
  try {
    const res = await fetch("posts.txt");
    const text = await res.text();

    // Split posts by separator line -----
    const blocks = text.split("-----").map(b => b.trim()).filter(b => b.length > 0);

    const posts = blocks.map(block => {
      const rawLines = block.split("\n"); // KEEP empty lines

      let dateLine = rawLines.find(l => l.toLowerCase().startsWith("date:"));
      let date = dateLine ? dateLine.replace("Date:", "").trim() : "";

      // Remove date line but keep all spacing lines
      let bodyLines = rawLines.filter(l => !l.toLowerCase().startsWith("date:"));

      return {
        date: date,
        body: bodyLines
      };
    });

    renderPosts(posts);

  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

function renderPosts(posts) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    let dateHTML = "";
    if (post.date && post.date !== "") {
      dateHTML = `<div class="post-date">Date: ${post.date}</div>`;
    }

    // Keep empty lines as spacing
    const bodyHTML = post.body.map(line => {
      if (line.trim() === "") {
        return `<div class="blank-line"></div>`;
      }
      return `<p>${line}</p>`;
    }).join("");

    div.innerHTML = `
      ${dateHTML}
      <div class="post-body">
        ${bodyHTML}
      </div>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  document.getElementById("year").textContent = new Date().getFullYear();
});
