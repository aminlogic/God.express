async function loadPosts() {
  try {
    const res = await fetch("posts.txt");
    const text = await res.text();

    const blocks = text.split("-----").map(b => b.trim()).filter(b => b.length > 0);

    const posts = blocks.map(block => {
      const lines = block.split("\n").map(l => l.trim()).filter(l => l.length > 0);

      let dateLine = lines.find(l => l.toLowerCase().startsWith("date:"));
      let date = dateLine ? dateLine.replace("Date:", "").trim() : "";

      let bodyLines = lines.filter(l => !l.toLowerCase().startsWith("date:"));

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

    div.innerHTML = `
      ${dateHTML}
      <div class="post-body">
        ${post.body.map(line => `<p>${line}</p>`).join("")}
      </div>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  document.getElementById("year").textContent = new Date().getFullYear();
});
