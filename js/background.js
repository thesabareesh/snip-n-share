
// A generic onclick callback function.
function shareOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  contextClick(info,tab);
}

function annotateOnClick(){

}


// ContextMenu creation
 var contexts = ["selection"];
 var pageContext=["page"];
var title = "Snip n Share";
var title_search="Search Google for ";
var title_twitter="Share on Twitter";
var title_gplus="Share the page on Google+";
var title_annotate="Highlight snippet";


//Page contextmenus
chrome.contextMenus.create({
                  "title": title, 
                  "contexts":pageContext,
                  "id":"parent_page",
            });


chrome.contextMenus.create({
                  "title": title_gplus, 
                  "contexts":pageContext,
                  "onclick": shareOnClick,
                  "parentId":"parent_page",
                  "id":"child_gplus",
            });


//Selection contextmenus
chrome.contextMenus.create({
                  "title": title, 
                  "contexts":contexts,
                  "id":"parent_selection",
            });

chrome.contextMenus.create({
                  "title": title_search+'"%s"', 
                  "contexts":contexts,
                  "onclick": shareOnClick,
                  "parentId":"parent_selection",
                  "id":"child_search",
            });

chrome.contextMenus.create({
                  "title": title_twitter, 
                  "contexts":contexts,
                  "onclick": shareOnClick,
                  "parentId":"parent_selection",
                  "id":"child_twitter",
            });


chrome.contextMenus.create({
                  "title": title_annotate, 
                  "contexts":contexts,
                  "onclick": annotateOnClick,
                  "parentId":"parent_selection",
                  "id":"child_annotate",
            });






