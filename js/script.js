/*put your javascript here */

// function myFunction() {
//     var list_item = prompt("Please enter your item");
    
//     if (list_item != null) {
//         document.getElementById("list").innerHTML =
//         "<li>" + list_item + "</li>";
//     }
// }
function myFunction() {
	var list_item = prompt("Please enter your item");
    var node = document.createElement("li");
    var textnode = document.createTextNode(list_item);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
document.getElementsByTagName("li").addEventListener("click", function() {
     var list_change = prompt("Please enter your item");    
		if (list_change != null) {
         document.getElementsByTagName("li").innerHTML =
        "Edited" + list_item + "Edited";
     }
 }