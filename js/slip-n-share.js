/**
 * Created by SABAREESH on 06-Oct-16.
 */

var isVisible=false;
var pageX,pageY;
var content;

var shareToolId="shareTool";
var uListId="toolUList";
var listId_twitter="list_twitter";
var inputId_twitter="input_twitter";

//Resources
var twitterIcon = chrome.extension.getURL("images/twitter.png");

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

function popUp(url,title){

	return window.open(url, title);

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
				popUp("https://twitter.com/intent/tweet?text=" + decodeURI(content), "Share on twitter");
           
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
//Listeners for left-mouse buttons
document.addEventListener("mousedown", function(event) {
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
}, true);


