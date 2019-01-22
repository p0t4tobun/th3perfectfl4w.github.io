function underlineNav() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 120 + 91;
   var text_padding = (nav_width - text_length_total) / 6;

   var location = window.location.pathname;
   var underline = document.getElementById("nav-underline");

   if (location == "/") {
      underline.style.marginLeft = text_padding + "px";
      underline.style.width = "91px";
      underline.style.background = "#ea3379";
   } else if (location == "/portfolio/") {
      underline.style.marginLeft = (text_padding * 3 + 91) + "px";
      underline.style.width = "120px";
      underline.style.background = "#66aaff";
   } else if (location == "/about/") {
      underline.style.marginLeft = (text_padding * 5 + 91 + 120) + "px";
      underline.style.width = "91px";
      underline.style.background = "#32ffa6";
   }
};

underlineNav();

function underlineHome() {
   var nav_width = document.getElementById("main-nav").offsetWidth;

   var text_length_total = 91 + 120 + 91;
   var text_padding = (nav_width - text_length_total) / 6;
   var underline = document.getElementById("nav-underline");
   
   underline.style.marginLeft = text_padding + "px";
   underline.style.width = "91px";
   underline.style.background = "#ea3379";
}

function underlinePortfolio() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 120 + 91;
   var text_padding = (nav_width - text_length_total) / 6;
   var underline = document.getElementById("nav-underline");

   underline.style.marginLeft = (text_padding * 3 + 91) + "px";
   underline.style.width = "120px";
   underline.style.background = "#66aaff";
}

function underlineAbout() {
   var nav_width = document.getElementById("main-nav").offsetWidth;
   var text_length_total = 91 + 120 + 91;
   var text_padding = (nav_width - text_length_total) / 6;
   var underline = document.getElementById("nav-underline");

   underline.style.marginLeft = (text_padding * 5 + 91 + 120) + "px";
   underline.style.width = "91px";
   underline.style.background = "#32ffa6";
}
