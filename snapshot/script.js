const container = document.getElementById("mods-container");
const selectedMods = new Set();
let mods = [];

// Load mods.json
async function loadMods() {
  const data = await fetch("mods.json").then((r) => r.json());

  mods = data.map((mod) => ({
    ...mod,
    image: `content/${mod.id}/preview.png`,
    path: `content/${mod.id}/`,
  }));

  renderMods();
}

// Render UI
function renderMods() {
  mods.forEach((mod) => {
    const div = document.createElement("div");
    div.className = "mod-card";

    div.innerHTML = `
      <img src="${mod.image}">
      <h3>${mod.title}</h3>
    `;

    div.onclick = () => {
      if (selectedMods.has(mod)) {
        selectedMods.delete(mod);
        div.classList.remove("selected");
      } else {
        selectedMods.add(mod);
        div.classList.add("selected");
      }
    };

    container.appendChild(div);
  });
}

// Add mod folder to zip
async function addFolderToZip(zip, mod) {
  const folder = zip.folder(mod.id);

  for (let file of mod.files) {
    const response = await fetch(mod.path + file);
    if (!response.ok) {
      alert(`Missing file: ${mod.path + file}`);
      continue;
    }

    const content = await response.blob();
    folder.file(file, content);
  }
}

// Download selected mods
document.getElementById("downloadBtn").onclick = async () => {
  if (selectedMods.size === 0) {
    alert("Select at least one mod!");
    return;
  }

  const zip = new JSZip();

  for (let mod of selectedMods) {
    await addFolderToZip(zip, mod);
  }

  const content = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "mods.zip";
  a.click();
};

// Start
loadMods();
