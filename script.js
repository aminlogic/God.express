/* GOD.EXPRESS — static renderer (search + sort + theme) */

const POSTS = [
  {
    date: "2023-04-22",
    title: "GOD of REAL-TIME DNA",
    lines: [
      "Drear Human beings",
      "GOD is the GOD of REAL-TIME DNA",
      "GOD does the actions on the REAL-TIME DNA; and the whole creation does the reactions on the GOD’s REAL-TIME DNA",
      "The positive and negative effects of LIFE on the GOD’s REAL-TIME DNA depends on the one and only GOD,",
      "and that’s the main difference between the creator and the creatures; based on the SCALE OF AFFECTIONS",
      "GOD is controlling your lives invisibly, and the sudden soul-detachments are the results of the GOD’s actions on the REAL-TIME DNA",
      "The human beings are part of the GOD’s project, and even the word ‘’clever’’ on the human’s mind is created by the one and only GOD",
    ],
  },
  {
    date: "2023-04-18",
    title: "GOD of the HOLY FACE",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of the HOLY FACE",
      "The HOLY FACE of the HOLY SPIRIT differs from the UNHOLY FACE of the UNHOLY SPIRIT",
      "The UNHOLY FACE of the UNHOLY SPIRIT differs from the HOLY FACE of the HOLY SPIRIT",
      "GOD as the creator of the winter; always handled it the way he wanted and will always handle it the way he will want it, the creatures of GOD may live the GOD’s seasons while no creature has the power to claim the GOD’s winter, because the creatures are just a part of the creation of the HOLY SPIRIT",
    ],
  },
  {
    date: "2023-03-20",
    title: "GOD of MEANING • Equation Watchers",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of MEANING",
      "The MEANING of the ONE is explained in the infinity and the MEANING of the INFINITY is explained in the one",
      "GOD is the ONE and INFINITY",
      "GOD is the GOD of Equation Watchers",
      "The equations which have good consequences and the equations which have evil consequences; are the hidden calculations",
      "that always occur among the GOD’s creatures as they are part of creation",
      "These calculations have the power to watch the equations, and affect the actions of any creature who has",
      "an equation in different directions",
      "The quantity of them is usually higher among the chosen ones like prophets,",
      "and majority of them are beside the one and only GOD",
    ],
  },
  {
    date: "2022-11-20",
    title: "GOD of Soul Watchers",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of Soul Watchers",
      "The angels who have good spirits and the demons who have evil spirits; are the hidden entities that",
      "always live among the GOD’s creatures as they are part of creation",
      "These entities have the power to watch the souls, and affect the actions of any creature who has a soul in different directions",
      "The quantity of them is usually higher among the chosen ones like prophets, and majority of them are beside the one and only GOD",
    ],
  },
  {
    date: "2022-07-25",
    title: "GOD of ENHANCED ACTIONS",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of ENHANCED ACTIONS",
      "The physical bodies and the souls of creatures have been given to them for a limited-time due to the natural laws of GOD",
      "The one and only observer who is known as GOD, always wants his being to be used in life responsively, but when GOD observes any deception in the life that manages, starts to act accordingly",
      "Never ever forget that GOD is the GOD of ENHANCED ACTIONS",
    ],
  },
  {
    date: "2022-07-08",
    title: "GOD of EARTH-EXECUTIVES",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of EARTH-EXECUTIVES",
      "The earth executives have got their roles from their GOD in order to establish the GOD’s laws and orders on earth",
      "At the time that all administrations become a failure, GOD will take control of affairs and all mankind will get on their knees in front of the absolute administrator of all times, who is known as the one and only GOD",
      "By the time, the earth will experience a huge bliss",
    ],
  },
  {
    date: "2022-06-15",
    title: "GOD of uniqueness",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of uniqueness",
      "The creatures who ever believe that a better GOD, other than the unique one and only GOD exists, collide with their own lives, not the GOD’s",
      "The blessing of any life belongs to GOD even though they don’t know who the GOD is",
    ],
  },
  {
    date: "2022-06-13",
    title: "GOD is the food handler",
    lines: [
      "Dear Human beings",
      "GOD is the food handler",
      "The food cycle in nature, is always in the hands of GOD and there’s no doubt that it is being balanced by the GOD’s creatures in a way that GOD decides",
      "If a vegetable eater kind, consume more vegetable than what they must, it would be harmful and beneficial to different creatures",
      "If a meat eater kind, consume more meat than what they must, it would be harmful and beneficial to different creatures",
      "At the end of the day, being radical on any side is as dark as the opposite",
    ],
  },
  {
    date: "2022-06-08",
    title: "GOD of choosers and chosen ones",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of choosers and chosen ones",
      "Any creature may become a chooser or a chosen one based on the abilities they’ve got from the one and only GOD and what they’ve done to those abilities, but GOD as the never-ending of all times, is always the GOD of all choosers and all chosen ones",
    ],
  },
  {
    date: "2022-06-05",
    title: "GOD of Soil and Birth",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of Soil and Birth",
      "As long as GOD creates the soil, creates the birth",
      "As long as GOD creates the birth, creates the soil",
      "At the end of the day, the perfect soul of any creature is not under the effect of Soil and Birth, as it is the belonging to GOD",
    ],
  },
  {
    date: "2021-12-31",
    title: "GOD of plans, angels and daemons",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of plans, angels and daemons",
      "There’s no doubt that GOD as the creator, likes creating, not destroying, but without an extreme happiness, no one can understand the meaning of sadness and without a horrific sadness, no one can understand the meaning of happiness",
      "Whenever the GOD comes up with a plan, all angels and daemons act as the arms of GOD and GOD is the one who chooses which arm to use",
    ],
  },
  {
    date: "2021-12-05",
    title: "GOD of fire and water",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of fire and water",
      "The combination and competition of these two created life",
      "GOD is the GOD of all",
    ],
  },
  {
    date: "2021-12-01",
    title: "Earth is the GOD’s property",
    lines: [
      "Dear Human beings",
      "Earth is the GOD’s property",
      "GOD is the only one who knows what to do with his own property",
      "Never ever forget that you are living on the GOD’s earth",
    ],
  },
  {
    date: "2021-11-29",
    title: "GOD of honors",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of honors",
      "It is such an honor to have a powerful GOD like the one and only GOD",
    ],
  },
  {
    date: "2021-11-22",
    title: "GOD is the leader",
    lines: [
      "Dear Human beings",
      "GOD is the leader and you are just another team",
      "A team without the leader doesn’t make sense while the leader without a team makes sense",
      "Because a team without the leader cannot lead itself and the result is chaos while the leader, who is the one and only GOD; always leads himself",
      "GOD is the leader of the life that he created for everyone",
    ],
  },
  {
    date: "2021-11-16",
    title: "GOD handles the life",
    lines: [
      "Dear Human beings",
      "GOD is the most important subject of life and GOD is the only one who handles the life",
    ],
  },
  {
    date: "2021-11-06",
    title: "GOD of solutions and problems",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of solutions and problems",
      "No solution happens to any problem and no problem happens to any solution unless the one and only GOD wants",
      "GOD is the only one who knows the real meanings of solutions and problems",
    ],
  },
  {
    date: "2021-11-04",
    title: "GOD is the director",
    lines: [
      "Dear Human beings",
      "GOD is the director and you are the directed",
      "From north to south, from south to north, from east to west, from west to east",
      "All directions are directed to the one and only GOD",
    ],
  },
  {
    date: "2021-11-02",
    title: "GOD of forgiveness and unforgiveness",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of forgiveness and unforgiveness",
      "The only one who knows who you are, is the one and only GOD",
      "Because sometimes the sinner is in an innocent's clothing by mistake and sometimes the innocent is in a sinner's clothing by mistake",
    ],
  },
  {
    date: "2021-10-30",
    title: "GOD of lions and trees",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of lions and trees",
      "Being radical on any side is as dark as the opposite",
      "Do lions eat meat on earth?",
      "Can anything survive without the trees on earth?",
      "Don’t pretend to be a good creature by being on the sides",
      "You are not the deciders, GOD is the only decider on earth",
    ],
  },
  {
    date: "2021-10-25",
    title: "GOD is the absolute Judge",
    lines: [
      "Dear Human beings",
      "GOD is the absolute Judge",
      "Any action against the GOD's will, will lead to win of the antimatter against the matter",
    ],
  },
  {
    date: "2021-10-23",
    title: "GOD is invisibly visible",
    lines: [
      "Dear Human beings",
      "GOD is invisibly visible",
      "The only way to understand the amount of GOD's power is to look at the nature",
      "GOD is talking",
    ],
  },
  {
    date: "2021-10-19",
    title: "GOD of prophets",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of prophets",
      "All of your prophets were correct, because all of them were talking about the one and only GOD",
    ],
  },
  {
    date: "2021-10-17",
    title: "GOD of influence",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of influence",
      "The scale of GOD’s influence on life is as much as the existence and non-existence, while the scale of your influence on life is as less as the environment around you",
      "GOD knows",
    ],
  },
  {
    date: "2021-10-11",
    title: "GOD is the complete Master",
    lines: [
      "Dear Human beings",
      "GOD is the complete Master",
      "GOD treats you the way you treat your lives",
    ],
  },
  {
    date: "2021-10-08",
    title: "Constructive & destructive power",
    lines: [
      "Dear Human beings",
      "The destructive power of GOD is equal to the constructive power of GOD",
      "GOD balances the existence and non-existence",
    ],
  },
  {
    date: "2021-10-06",
    title: "GOD is the creator and you are a creature",
    lines: [
      "Dear Human beings",
      "GOD is the creator and you are a creature",
      "The interaction of GOD with one nation, affects all nations",
      "Because the one and only GOD doesn't consider you as nations, GOD considers you as one creature",
    ],
  },
  {
    date: "2021-09-30",
    title: "Only GOD knows GOD",
    lines: [
      "Dear Human beings",
      "The only one who knows who the GOD is, is the one and only GOD",
      "GOD is acting by the nature",
    ],
  },
  {
    date: "2021-09-28",
    title: "GOD of life",
    lines: [
      "Dear Human beings",
      "GOD is the GOD of life",
      "Never ever forget that you are living on the GOD's planet",
      "Whatever GOD wants, Happens",
    ],
  },
  {
    date: "2021-09-23",
    title: "Prostrate",
    lines: [
      "Dear Human beings",
      "Prostrate in front of the one and only GOD",
    ],
  },
  {
    date: "2021-09-11",
    title: "History is repeating",
    lines: [
      "Dear Human beings",
      "History doesn't repeat itself, GOD is repeating the history",
      "GOD is the GOD of mercy, Unless...",
    ],
  },
  {
    date: "2021-09-04",
    title: "Owner of existence & non-existence",
    lines: [
      "Dear Human beings",
      "GOD is the owner of existence and non-existence",
      "Just because of the GOD’s satisfaction you gained something, unless that doesn’t mean you can keep them forever",
      "Whenever GOD decides you’ll lose them all, even though it’s your lives",
      "GOD is the GOD of all religions, not just one of them",
    ],
  },
  {
    date: "2021-08-21",
    title: "When mercy stops",
    lines: [
      "Dear Human beings",
      "The acts of GOD affect the earth",
      "Whenever GOD stops the mercy, The Devil takes the earth",
      "GOD is aware of his power",
    ],
  },
  {
    date: "2021-08-13",
    title: "Direction decider",
    lines: [
      "Dear Human beings",
      "GOD is the direction decider of the earth",
      "Whatever direction GOD decides, The whole existence follows",
    ],
  },
  {
    date: "2021-08-05",
    title: "Touched",
    lines: [
      "Dear Human beings",
      "You touched the GOD and the GOD touched the earth",
      "You touched the earth and the earth touched the GOD",
    ],
  },
  {
    date: "2021-07-23",
    title: "Political chaos",
    lines: [
      "Dear Human beings",
      "The political chaos on earth has a reason",
      "The systematic disarray on human thoughts and body has the same reason",
      "The only superpower that can cause all of these in this mass scale, Is the one and only GOD",
    ],
  },
  {
    date: "2021-06-25",
    title: "The game was already over",
    lines: [
      "Dear Human beings",
      "A message to whoever is born and whoever will born:",
      "Respect to the one and only GOD, The game was already over before it was started",
      "Even your face is included in the face of GOD",
    ],
  },
  {
    date: "2021-06-17",
    title: "One leader",
    lines: [
      "Dear Human beings",
      "This planet has one leader and the leader is GOD",
      "GOD is the creator of the game of life",
    ],
  },
];

// ---------- helpers ----------
function prettyDate(iso){
  // ISO -> dd/mm/yyyy like your site
  const [y,m,d] = iso.split("-").map(Number);
  return `${String(d).padStart(2,"0")}/${String(m).padStart(2,"0")}/${y}`;
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function buildCard(post){
  const body = post.lines.map(line => `<p>${escapeHtml(line)}</p>`).join("");
  return `
    <article class="card">
      <div class="card-head">
        <h3>${escapeHtml(post.title)}</h3>
        <div class="date">Date: ${prettyDate(post.date)}</div>
      </div>
      <div class="body">${body}</div>
    </article>
  `;
}

function render(posts){
  const el = document.getElementById("postsList");
  if (!el) return;
  el.innerHTML = posts.map(buildCard).join("");
  if (!posts.length){
    el.innerHTML = `<div class="notice">No matches. Try another keyword.</div>`;
  }
}

// ---------- init ----------
(function init(){
  document.getElementById("year").textContent = new Date().getFullYear();

  // theme
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const themeText = themeBtn.querySelector(".themeText");

  const saved = localStorage.getItem("theme") || "night";
  root.dataset.theme = saved === "day" ? "day" : "night";
  themeText.textContent = root.dataset.theme === "day" ? "Day" : "Night";

  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "day" ? "night" : "day";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    themeText.textContent = next === "day" ? "Day" : "Night";
  });

  // posts
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const clearBtn = document.getElementById("clearBtn");

  function getFiltered(){
    const q = (searchInput.value || "").trim().toLowerCase();
    let arr = [...POSTS];

    // sort
    arr.sort((a,b) => sortSelect.value === "old"
      ? a.date.localeCompare(b.date)
      : b.date.localeCompare(a.date)
    );

    if (!q) return arr;

    return arr.filter(p => {
      const hay = (p.title + " " + p.lines.join(" ")).toLowerCase();
      return hay.includes(q);
    });
  }

  function update(){
    render(getFiltered());
  }

  searchInput.addEventListener("input", update);
  sortSelect.addEventListener("change", update);
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    sortSelect.value = "new";
    update();
    searchInput.focus();
  });

  update();
})();
