/*!
 *  JavaScript
 * Copyright 2018-2019 Nawaf Alamssour
 */

 /* js the news-tabs content */

   function openCity(evt, news) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(news).style.display = "block";
     evt.currentTarget.className += " active";

 }
    // Get the element with id="defaultOpen" and click on it
   document.getElementById("defaultOpen").click();
