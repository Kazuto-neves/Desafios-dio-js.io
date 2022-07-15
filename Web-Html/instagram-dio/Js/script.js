var theme = 0;

$(function Muda() 
{
  $(".instagram-login").hover
  (
    function () 
    {
      $("#username").css("color", "#0095f6");
      $("#username").css("transition", ".6s");
    },
    function () 
    {
      $("#username").css("color", "transparent");
      $("#username").css("transition", ".6s");
    }
  );
});

$(function dark() 
{
  $("#logo").hover
  (
    function () 
    {
      if (theme == 1) 
      {
        $("#icon").css("color", "black");
      } 
      else if (theme == 0) 
      {
        $("#icon").css("color", "white");
      }
    },
    function () 
    {
      if (theme == 1) 
      {
        $("#icon").css("color", "white");
      }
      else if (theme == 0)
      {
        $("#icon").css("color", "black");
      }
    }
  );
});

function Theme()
{
  //class
  const cGroup = document.querySelectorAll(".group");
  const cApp_Download = document.querySelectorAll(".app-download");
  const cGet_app = document.querySelectorAll(".get-app");

  //id
  let iText_logo = document.getElementById("text-logo");
  let iIcon = document.getElementById("icon");

  if (theme == 0)
  {
    theme = 1;
    document.body.style.cssText = "background-color: rgb(12, 12, 12);";

    for (let i = 0; i < cGroup.length; i++) 
    {
      cGroup[i].style.cssText = "background-color: #000000;" + "border: 1px solid #2c2c2c;";
    }

    iText_logo.style.cssText = "color: #dde0df;";
    iIcon.style.cssText = "color: white;";

    cApp_Download[0].style.cssText = "background-image: url('./img/app-store-icon-white.png');";
    cApp_Download[1].style.cssText = "background-image: url('./img/play-store-white.png');";
    cGet_app[0].style.cssText = "color: white;";

  }
  else if (theme == 1)
  {
    theme = 0;
    document.body.style.cssText = "background-color: rgb(243, 243, 243);";

    for (let i = 0; i < cGroup.length; i++)
    {
      cGroup[i].style = "background-color: #ffffff;" + "border: 1px solid lightgray;";
    }
    
    iText_logo.style.cssText = "color: #231f20;";
    iIcon.style.cssText = "color: black;";

    cApp_Download[0].style.cssText = "background-image: url('./img/app-store-icon-dark.png');";
    cApp_Download[1].style.cssText = "background-image: url('./img/play-store-dark.png');";
    cGet_app[0].style.cssText = "color: black;";
  }
}
