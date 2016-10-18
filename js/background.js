
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
var title = "Snip n Share";
var title_search="Search Google for ";
var title_twitter="Share on Twitter";
var title_annotate="Highlight snippet";

chrome.contextMenus.create({
                  "title": title, 
                  "contexts":contexts,
                  "id":"parent",
            });

chrome.contextMenus.create({
                  "title": title_search+'"%s"', 
                  "contexts":contexts,
                  "onclick": shareOnClick,
                  "parentId":"parent",
                  "id":"child_search",
            });

chrome.contextMenus.create({
                  "title": title_twitter, 
                  "contexts":contexts,
                  "onclick": shareOnClick,
                  "parentId":"parent",
                  "id":"child_twitter",
            });

chrome.contextMenus.create({
                  "title": title_annotate, 
                  "contexts":contexts,
                  "onclick": annotateOnClick,
                  "parentId":"parent",
                  "id":"child_annotate",
            });




