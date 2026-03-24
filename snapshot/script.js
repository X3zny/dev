const mods = [
  {
    title: "Latex Pack (Snapshot Community Pack)",
    author: "bejak",
    image:
      "https://img.itch.zone/aW1nLzI2Mjg5NjQ5LnBuZw==/315x250%23c/lTSJ0o.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "Realistic Graphics Overhaul",
    author: "GraphicsMaster",
    image:
      "https://img.itch.zone/aW1nLzI2MjExMTg2LnBuZw==/315x250%23c/4rMJyc.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "New Vehicles Collection",
    author: "VehicleGuy",
    image:
      "https://img.itch.zone/aW1nLzI2MTU5Nzg1LnBuZw==/315x250%23c/kB%2BDmt.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "Huge Map Expansion",
    author: "WorldBuilder",
    image:
      "https://img.itch.zone/aW1nLzI2MDg0ODYxLnBuZw==/315x250%23c/HigF24.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "Character Customization Pro",
    author: "SkinMaster",
    image:
      "https://img.itch.zone/aW1nLzI2MDEzNzc2LmpwZw==/315x250%23c/tFq8D%2F.jpg",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "Survival Mode Overhaul",
    author: "HardcoreDev",
    image:
      "https://img.itch.zone/aW1nLzI1ODI3NTgxLnBuZw==/315x250%23c/DjwVX3.png",
    downloadLink: "https://mod.pl/download",
  },
];

const grid = document.getElementById("mods-grid");

mods.forEach((mod) => {
  const cardHTML = `
        <div class="mod-card">
            <img src="${mod.image}" alt="${mod.title}" class="mod-image">
            <div class="mod-info">
                <h3 class="mod-title">${mod.title}</h3>
                <p class="mod-author">${mod.author}</p>
                <a href="${mod.downloadLink}" target="_blank" class="mod-download">Download Mod</a>
            </div>
        </div>
    `;
  grid.innerHTML += cardHTML;
});

const popup = document.getElementById("age-popup");
const enterBtn = document.getElementById("enter-btn");
const leaveBtn = document.getElementById("leave-btn");

// Enter
enterBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Leave
leaveBtn.addEventListener("click", () => {
  window.location.href = "https://google.com";
});
