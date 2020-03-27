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

  elements = document.getElementsByTagName("a");
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

  if(document.getElementById("zeit-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("zeit-logo").src = "../images/zeit.png";
    else
      document.getElementById("zeit-logo").src = "../images/zeit-dark.png";
  }

  if(document.getElementById("gh-logo"))
  {
    if(dark_mode == 1)
      document.getElementById("gh-logo").src = "../images/github-icon.png";
    else
      document.getElementById("gh-logo").src = "../images/github-icon.svg";
  }
}

if(localStorage.getItem('dark-mode') && localStorage.getItem('dark-mode') === "1") 
{
  toggle_light_dark();
  document.getElementById("light_dark_LHS").innerHTML = "dark";
  document.getElementById("light_dark_RHS").innerHTML = "light";
}