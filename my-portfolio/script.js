const folderImg = document.getElementById("folderImage");
let isOpen = false;

folderImg.addEventListener("click", () => {
  folderImg.style.opacity = 0;

  setTimeout(() => {
    folderImg.src = isOpen ? "images/closed.png" : "images/open.png";
    isOpen = !isOpen;
    folderImg.style.opacity = 1;
  }, 300); // fade duration
});
