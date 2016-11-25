/**
 * Created by SABAREESH on 06-Oct-16.
 */

//Hover tool Resources
var isVisible=false;
var pageX,pageY;
var content;
var shareToolId="shareTool";
var uListId="toolUList";
var listId_twitter="list_twitter";
var inputId_twitter="input_twitter";
var twitterIcon = chrome.extension.getURL("images/twitter.png");


//ContextMenuResources
var window_width="100";
var window_height="100";
var twitterIcon = chrome.extension.getURL("images/twitter.png");
var url_twitter="https://twitter.com/intent/tweet?text=";
var title_window_twitter="Share on twitter";
var url_gplus="https://plus.google.com/share?url=";
var title_window_gplus="Share on Google +";
var url_google="https://www.google.co.in/search?q=";
var title_window_google="Google search";

function getSelectedContent(){
  var content = '';
  if (window.getSelection) {
        content = window.getSelection();
    } else if (document.getSelection) {
        contentt = document.getSelection();
    } else if (document.selection) {
        content = document.selection.createRange().text;
    }
  return encodeURIComponent(content.toString());
}

function addTwitter(){

  /*twitter section*/
  $('<li/>', {
      id: listId_twitter
  }).appendTo("#"+uListId);
  $('<input/>', {
      id: inputId_twitter,
    src:twitterIcon,

  }).appendTo("#"+listId_twitter);

  $("#"+inputId_twitter).attr("type","image");

  $("#"+inputId_twitter).on("click", function() {
        var content = getSelectedContent();
        if (content != '') {
        popUp("https://twitter.com/intent/tweet?text=" + decodeURI(content), "Share on twitter",200,100);
           
    }

    });
}

function showShareTool(){

  $('<div/>', {
      id: shareToolId,
  }).appendTo('body');

  $('<ul/>', {
      id: uListId,
  }).appendTo("#"+shareToolId);

  addTwitter();


  //Show tool
  $("#"+shareToolId).css({"left": pageX + 'px', "top": pageY + 'px'});
  $("#"+shareToolId).fadeIn("slow");
  isVisible=true;
}

function popUp(url,title,width,height){
  var win = window.open(url, title,width='+width+', height='+height+');

  if (!win) 
    alert('Please allow popups for this website');
}


//Listeners for left-mouse buttons
/*document.addEventListener("mousedown", function(event) {
    if (event.button == 0) {
      
       if(isVisible){
        $("#"+shareToolId).fadeOut('fast', function() {
          $(this).remove();
    });
    isVisible = false;
       }
   }
}, true);
document.addEventListener("mouseup", function(event) {
    if (event.button == 0) {
       
        pageX = event.pageX+15;
        pageY = event.pageY;
       
         content=getSelectedContent();
        if(content!=""){
          showShareTool();

        }

    }
}, true);*/


function contextClick(info,tab){
  
  switch(info.menuItemId) {
    case "child_search":
        window.open(url_google+info.selectionText,'_blank');
        break;
    case "child_twitter":
        popUp(url_twitter+info.selectionText+" - "+tab.url,title_window_twitter,window_width,window_height);
        break;
    case "child_gplus":
         popUp(url_gplus+tab.url,title_window_gplus,window_width,window_height);
        break;

    default:
      break;
  }
}   
        

    



