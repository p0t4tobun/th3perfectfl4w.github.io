function underlineNav() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 125 + 68 + 91;
   var text_padding = (nav_width - text_length_total) / 8;

   var location = window.location.pathname;
   var underline = document.getElementById("nav-underline");

   if (location == "/") {
      underline.style.marginLeft = text_padding + "px";
      underline.style.width = "91px";
      underline.style.background = "#ea3379";
   } else if (location == "/portfolio/") {
      underline.style.marginLeft = (text_padding * 3 + 91) + "px";
      underline.style.width = "125px";
      underline.style.background = "#66aaff";
   } else if (location == "/blog/") {
      underline.style.marginLeft = (text_padding * 5 + 91 + 125) + "px";
      underline.style.width = "68px";
      underline.style.background = "#32ffa6";
   } else if (location == "/about/") {
      underline.style.marginLeft = (text_padding * 7 + 91 + 125 + 68) + "px";
      underline.style.width = "91px";
      underline.style.background = "tomato";
   }
};

underlineNav();

function underlineHome() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 125 + 68 + 91;
   var text_padding = (nav_width - text_length_total) / 8;
   var underline = document.getElementById("nav-underline");
   
   underline.style.marginLeft = text_padding + "px";
   underline.style.width = "91px";
   underline.style.background = "#ea3379";
}

function underlinePortfolio() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 125 + 68 + 91;
   var text_padding = (nav_width - text_length_total) / 8;
   var underline = document.getElementById("nav-underline");

   underline.style.marginLeft = (text_padding * 3 + 91) + "px";
   underline.style.width = "125px";
   underline.style.background = "#66aaff";
}

function underlineBlog() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 125 + 68 + 91;
   var text_padding = (nav_width - text_length_total) / 8;
   var underline = document.getElementById("nav-underline");

   underline.style.marginLeft = (text_padding * 5 + 91 + 125) + "px";
   underline.style.width = "68px";
   underline.style.background = "#32ffa6";
}

function underlineAbout() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 125 + 68 + 91;
   var text_padding = (nav_width - text_length_total) / 8;
   var underline = document.getElementById("nav-underline");

   underline.style.marginLeft = (text_padding * 7 + 91 + 125 + 68) + "px";
   underline.style.width = "91px";
   underline.style.background = "tomato";
}