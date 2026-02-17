async function loadPosts() {
  try {
    const res = await fetch("posts.txt");
    const text = await res.text();

    // Split posts by separator -----
    const blocks = text.split("-----");

    const container = document.getElementById("postsContainer");
    container.innerHTML = "";

    blocks.forEach(block => {
      const cleanBlock = block.trim();

      if (cleanBlock.length === 0) return;

      const div = document.createElement("div");
      div.className = "post";

      // EXACT TEXT DISPLAY (NO MODIFICATION)
      div.innerHTML = `<pre class="post-text">${cleanBlock}</pre>`;

      container.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  document.getElementById("year").textContent = new Date().getFullYear();
});
