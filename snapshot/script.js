/* script.js */
const mods = [
  {
    id: "Caught in the Rain Pack",
    title: "Caught in the Rain Pack",
    image: "prev/Snapshot_BonusPack_CaughtintheRain.png",
    path: "content/Snapshot_BonusPack_CaughtintheRain/",
  },
  {
    id: "mod2",
    title: "Cool Mod 2",
    image: "content/mod2/preview.png",
    path: "content/mod2/",
  },
];

const container = document.getElementById("mods-container");
const selectedMods = new Set();

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

// Helper: fetch all files from folder (requires listing manually or JSON)
async function addFolderToZip(zip, folderPath, folderName) {
  const files = await fetch(folderPath + "files.json").then((r) => r.json());

  const folder = zip.folder(folderName);

  for (let file of files) {
    const content = await fetch(folderPath + file).then((r) => r.blob());
    folder.file(file, content);
  }
}

// Download button

document.getElementById("downloadBtn").onclick = async () => {
  if (selectedMods.size === 0) {
    alert("Select at least one mod!");
    return;
  }

  const zip = new JSZip();

  for (let mod of selectedMods) {
    await addFolderToZip(zip, mod.path, mod.id);
  }

  const content = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "mods.zip";
  a.click();
};

/* Example structure:
content/
  mod1/
    preview.png
    files.json
    file1.txt
    file2.txt
  mod2/
    preview.png
    files.json
    fileA.txt

files.json example:
[
  "file1.txt",
  "file2.txt"
]
*/
