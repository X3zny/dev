const tools = [
  {
    title: "MelonLoader",
    author: "Official",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://melonwiki.com/#download",
  },
  {
    title: "BepInEx",
    author: "BepInEx Team",
    image: "https://example.com/bepinex-icon.png",
    downloadLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
  },
  {
    title: "DnSpyEx",
    author: "Community",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://github.com/DerPopo/UABE/releases",
  },
];

const toolsGrid = document.getElementById("tools-grid");

tools.forEach((tool) => {
  const cardHTML = `
    <div class="mod-card">
        <img src="${tool.image}" alt="${tool.title}" class="mod-image">
        <div class="mod-info">
            <h3 class="mod-title">${tool.title}</h3>
            <p class="mod-author">${tool.author}</p>
            <a href="${tool.downloadLink}" target="_blank" class="mod-download">Download</a>
        </div>
    </div>
  `;
  toolsGrid.innerHTML += cardHTML;
});

const mods = [
  {
    title: "test1",
    author: "author",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "test2",
    author: "author",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "test3",
    author: "author",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "asddsadas  ",
    author: "asdsdasad",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "sda sda sda",
    author: "asfdsfsd",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
    downloadLink: "https://mod.pl/download",
  },
  {
    title: "jytjytjyt",
    author: "sdfdfghhgf",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/960px-Example_image.svg.png",
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

const titles = [
  "@",
  "@x",
  "@x3",
  "@x3z",
  "@x3zn",
  "@x3zny",
  "@x3zny ",
  "@x3zny m",
  "@x3zny mo",
  "@x3zny mod",
  "@x3zny mods",
  "@x3zny mod",
  "@x3zny mo",
  "@x3zny m",
  "@x3zny ",
  "@x3zny",
  "@x3zn",
  "@x3z",
  "@x3",
  "@x",
];
let titleIndex = 0;

function changeTitle() {
  document.title = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(changeTitle, 500);
