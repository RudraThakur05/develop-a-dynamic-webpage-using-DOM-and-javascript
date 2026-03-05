$(document).ready(function(){

let items = ["Apple","Banana","Mango","Orange","Grapes","Pineapple","Watermelon"];

$("#search").keyup(function(){

let query = $(this).val().toLowerCase();
let output = "";

if(query.length > 0){

items.forEach(function(item){

if(item.toLowerCase().includes(query)){
output += "<div>"+item+"</div>";
}

});

$("#suggestions").html(output).show();
}
else{
$("#suggestions").hide();
}

});

});
