const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

const  MOBILE = 0,
       TABLET = 1,
      DESKTOP = 2;

function setType()
{
  if(window.innerWidth > 960)
    type = DESKTOP;
  else if(window.innerWidth > 600)
    type = TABLET;
  else
    type = MOBILE;
}
setType();
window.addEventListener("resize", setType);

function closeMenu(e)
{
  let isClickInside = menu.contains(e.target);

  if(!isClickInside && menu.classList.contains("active"))
  {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars fa-2x'></i>";
    menu.style.background = "transparent";
    document.removeEventListener("click", closeMenu, true);
    window.removeEventListener("resize", closeMenuFromResize);
    closeActiveSubmenus();
  }
}

function closeMenuFromResize()
{
  if(menu.classList.contains("active"))
  {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars fa-2x'></i>";
    menu.style.background = "transparent";
    document.removeEventListener("click", closeMenu, true);
    window.removeEventListener("resize", closeMenuFromResize);
  }

  closeActiveSubmenus();
  setType();
}

function closeSubmenu(e)
{
  if(menu.querySelector(".submenu-active"))
  {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if(!isClickInside && menu.querySelector(".submenu-active"))
    {
      if(type == DESKTOP)
      {
        menu.style.background = "transparent";
        menu.querySelector(".submenu-active").style.background = "transparent";
        document.removeEventListener("click", closeSubmenu, true);
        window.removeEventListener("resize", closeMenuFromResize);
      }

      menu.querySelector(".submenu-active").classList.remove("submenu-active");

    }
  }
}

function closeActiveSubmenus()
{
  let items = document.getElementsByClassName("submenu-active");

  //done in reverse order as items array updates as we remove submenu-active class
  for(let i=items.length-1; i>=0; --i)
  {
    //needs all widths to handle window resizing
    document.removeEventListener("click", closeSubmenu, true);
    window.removeEventListener("resize", closeMenuFromResize);
    menu.style.background = "transparent";
    items[i].style.background = "transparent";
    items[i].classList.remove("submenu-active");
  }
}


/* Toggle mobile menu */
function toggleMenu() 
{
  if(menu.classList.contains("active"))
  {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars fa-2x'></i>";
    menu.style.background = "transparent";
    document.removeEventListener("click", closeMenu, true);
    window.removeEventListener("resize", closeMenuFromResize);
    closeActiveSubmenus();
  }
  else 
  {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times fa-2x'></i>";
    menu.style.background = "rgba(31, 32, 33, 1)";
    document.addEventListener("click", closeMenu, true);
    window.addEventListener("resize", closeMenuFromResize);
  }
}

/* Activate Submenu */
function toggleItem(i) 
{
  if(!window.event.ctrlKey)
  {
    item = document.getElementsByClassName('has-submenu')[i];
    if (item.classList.contains("submenu-active")) 
    {
      item.classList.remove("submenu-active");

      if(type == DESKTOP)
      {
        menu.style.background = "transparent";
        item.style.background = "transparent";
        document.removeEventListener("click", closeSubmenu, true);
        window.removeEventListener("resize", closeMenuFromResize);
      }
    } 
    else
    {
      //if (menu.querySelector(".submenu-active")) 
        //menu.querySelector(".submenu-active").classList.remove("submenu-active");

      item.classList.add("submenu-active");

      if(type == DESKTOP)
      {
        menu.style.background = "rgba(31, 32, 33, .95)";
        item.style.background = "#435e47";
        document.addEventListener("click", closeSubmenu, true);
        window.addEventListener("resize", closeMenuFromResize);
      }
    }
  }
}

/**
 *  modified from https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535
 */