var dark_mode = 0;

function toggle_light_dark() 
{
  dark_mode = (dark_mode+1)%2;
  localStorage.setItem('dark-mode', dark_mode);

  if(document.getElementById("main"))
    document.getElementById("main").classList.toggle("dark-mode");

  var elements = document.getElementsByClassName("content");
  if(elements.length)
    elements[0].classList.toggle("dark-mode");

  elements = document.getElementsByClassName("title");
  if(elements.length)
    elements[0].classList.toggle("dark-mode");

  if(document.getElementById("promo-title"))
    document.getElementById("promo-title").classList.toggle("dark-mode");

  if(document.getElementById("details-title"))
    document.getElementById("details-title").classList.toggle("dark-mode");

  elements = document.getElementsByTagName("body");
  for(var i=0; i<elements.length; i++)
  {
    if(dark_mode)
      elements[i].style.setProperty('--selection-background', "#ff1493");
    else
      elements[i].style.setProperty('--selection-background', "#fd3a4a");
  }

  elements = document.getElementsByTagName("h1");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("white");

  elements = document.getElementsByTagName("h2");
  for(var i=0; i<elements.length; i++)
  {
    elements[i].classList.toggle("white");
  }

  elements = document.getElementsByTagName("h3");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("fluro-pink");

  elements = document.getElementsByTagName("h4");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("fluro-pink");

  elements = document.getElementsByTagName("th");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("th-dark");

  elements = document.getElementsByTagName("td");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("td-dark");

  /*elements = document.getElementsByTagName("a");*/
  elements = document.getElementById("main").querySelectorAll("a");
  for(var i=0; i<elements.length; i++)
    if(elements[i].classList != "bb" &&
       elements[i].classList != "gh" &&
       elements[i].classList != "gl" &&
       elements[i].classList != "discord" &&
       elements[i].classList != "reddit")
      elements[i].classList.toggle("a-dark");

  elements = document.getElementsByTagName("mono");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("fluro-purple");

  elements = document.getElementsByClassName("button");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("button-dark");

  elements = document.getElementsByTagName("cpbutton");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("cpbutton-dark");

  elements = document.getElementsByTagName("b");
  for(var i=0; i<elements.length; i++)
    elements[i].classList.toggle("fluro-green");

  if(document.getElementById("cloudflare-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("cloudflare-logo").src = "../images/cloudflare.svg";
    else
      document.getElementById("cloudflare-logo").src = "../images/cloudflare-dark.svg";
  }

  if(document.getElementById("gh-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("gh-logo").src = "../images/github-watercolor.png";
    else
      document.getElementById("gh-logo").src = "../images/github-icon.svg";
  }

  if(document.getElementById("gh-logo-big"))
  {
    if(dark_mode == 1)
    {
      document.getElementById("gh-logo-big").src = "../images/github-watercolor.png";
      document.getElementById("gh-logo-big").width = 250;
    }
    else
    {
      document.getElementById("gh-logo-big").src = "../images/github-icon.svg";
      document.getElementById("gh-logo-big").width = 200;
    }
  }

  if(document.getElementById("linode-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("linode-logo").src = "../images/linode.png";
    else
      document.getElementById("linode-logo").src = "../images/linode-dark.png";
  }

  if(document.getElementById("lua-logo"))
  {
    if(dark_mode == 1)
    {
      document.getElementById("lua-logo").src = "../images/lua-watercolor.png";
      document.getElementById("lua-logo").width = 250;
    }
    else
    {
      document.getElementById("lua-logo").src = "../images/lua.png";
      document.getElementById("lua-logo").width = 128;
    }
  }

  if(document.getElementById("markdown-logo"))
  {
    if(dark_mode == 1)
    {
      document.getElementById("markdown-logo").src = "../images/markdown.png";
      document.getElementById("markdown-logo").width = 250;
    }
    else
    {
      document.getElementById("markdown-logo").src = "../images/markdown.svg";
      document.getElementById("markdown-logo").width = 250;
    }
  }

  if(document.getElementById("vercel-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("vercel-logo").src = "../images/vercel-white.svg";
    else
      document.getElementById("vercel-logo").src = "../images/vercel-black.png";
  }

  if(document.getElementById("vultr-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("vultr-logo").src = "../images/vultr.svg";
    else
      document.getElementById("vultr-logo").src = "../images/vultr-dark.svg";
  }
}

//default is to use os colour mode and dark mode if unavailable
if(localStorage.getItem('dark-mode') == "1") 
{
  toggle_light_dark();
  document.getElementById("light_dark_LHS").innerHTML = "dark";
  document.getElementById("light_dark_RHS").innerHTML = "light";
}
else if(!localStorage.getItem('dark-mode'))
{
  if (window.matchMedia) 
  {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) // Dark
    {
      toggle_light_dark();
      document.getElementById("light_dark_LHS").innerHTML = "dark";
      document.getElementById("light_dark_RHS").innerHTML = "light";
    } 
    else //Light
    {
    }
  } 
  else 
  {
    // Default (when Media-Queries are not supported)
    toggle_light_dark();
    document.getElementById("light_dark_LHS").innerHTML = "dark";
    document.getElementById("light_dark_RHS").innerHTML = "light";
  }
}
