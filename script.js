
  var searchIcon=document.querySelector(".search");
  console.log(searchIcon);
  var barIcon=document.querySelector(".bar");
  console.log(barIcon);
  var headerForm=document.querySelector("header form");
  console.log(headerForm);
  searchIcon.addEventListener("click",function(){
    headerForm.classList.toggle("active");

  });
  var menu=document.querySelector(".menu");
  console.log(menu);
  var crossIcon=document.querySelector(".cross");
  console.log(crossIcon);
   var navmenu=document.querySelector("nav");
   console.log(navmenu);
   barIcon.addEventListener("click",function(){
    navmenu.classList.add("active");

  });
  crossIcon.addEventListener("click",function(){
    navmenu.classList.remove("active");

  });