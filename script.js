const sidebarNav = document.getElementById('sidebarNav')
const cover = document.getElementById('cover')
function showMenu() {
  sidebarNav.style.right = "0";
  cover.classList.add('cover');
  document.body.classList.add('stopScroll');
}
function hideMenu() {
  sidebarNav.style.right = "-250px";
  cover.classList.remove('cover');
  document.body.classList.remove('stopScroll');
}