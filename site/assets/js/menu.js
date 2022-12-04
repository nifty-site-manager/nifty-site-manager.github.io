const menu    = document.getElementById("menu-page");
const content = document.getElementById("content");

function close_menu() {
  menu.style.visibility    = "hidden";
  content.style.visibility = "visible";
  content.style.display    = "block";
}

function show_menu() {
  menu.style.visibility    = "visible";
  content.style.visibility = "hidden";
  content.style.display    = "none";
}

function toggle_submenu(i) {
  if(!window.event.ctrlKey) {
    item = document.getElementsByClassName('has-submenu')[i];
    item_link = document.getElementsByClassName('submenu-link')[i];
    item_link_icon = document.getElementsByClassName('submenu-link-icon')[i];
    submenu = document.getElementsByClassName('submenu')[i];
    if(item.classList.contains("submenu-active")) {
      item.classList.remove("submenu-active");
      item_link.classList.remove("submenu-link-active");
      item_link_icon.classList.remove("fa-angle-up-png");
      item_link_icon.classList.add("fa-angle-down-png");
      submenu.style.display = "none";
    } 
    else {
      item.classList.add("submenu-active");
      item_link.classList.add("submenu-link-active");
      item_link_icon.classList.add("fa-angle-up-png");
      item_link_icon.classList.remove("fa-angle-down-png");
      submenu.style.display = "flex";
    }
  }
}