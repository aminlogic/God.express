document.getElementById("year").textContent = new Date().getFullYear();

async function loadPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "<p style='color:gray;'>Loading posts...</p>";

  try {
    const res = await fetch("posts.txt");
    const text = await res.text();

    const rawPosts = text.split("--------------------------------------");

    let posts = rawPosts
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(raw => {
        const lines = raw
          .split("\n")
          .map(l => l.trim())
          .filter(l => l !== "");

        let date = "Unknown Date";

        if (lines.length > 0 && lines[0].toLowerCase().startsWith("date:")) {
          date = lines[0].replace(/date:/i, "").trim();
          lines.shift();
        }

        return { date, lines };
      });

    // Default sort newest first
    posts.sort((a, b) => b.date.localeCompare(a.date));

    function renderPosts(list) {
      container.innerHTML = "";

      list.forEach(post => {
        const article = document.createElement("article");
        article.className = "post";

        const dateDiv = document.createElement("div");
        dateDiv.className = "post-date";
        dateDiv.textContent = "Date: " + post.date;

        const bodyDiv = document.createElement("div");
        bodyDiv.className = "post-body";

        post.lines.forEach(line => {
          const p = document.createElement("p");
          p.textContent = line;
          bodyDiv.appendChild(p);
        });

        article.appendChild(dateDiv);
        article.appendChild(bodyDiv);
        container.appendChild(article);
      });
    }

    function applyFilters() {
      const searchValue = document.getElementById("searchInput").value.toLowerCase();
      const sortValue = document.getElementById("sortSelect").value;

      let filtered = [...posts];

      if (searchValue.trim() !== "") {
        filtered = filtered.filter(p =>
          p.date.toLowerCase().includes(searchValue) ||
          p.lines.join(" ").toLowerCase().includes(searchValue)
        );
      }

      filtered.sort((a, b) => {
        if (sortValue === "newest") return b.date.localeCompare(a.date);
        return a.date.localeCompare(b.date);
      });

      renderPosts(filtered);
    }

    document.getElementById("searchInput").addEventListener("input", applyFilters);
    document.getElementById("sortSelect").addEventListener("change", applyFilters);

    renderPosts(posts);

  } catch (err) {
    container.innerHTML = "<p style='color:red;'>Error loading posts.txt</p>";
  }
}

loadPosts();
