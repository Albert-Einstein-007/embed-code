function generator(){
var link1 = document.getElementById("link").value;

let height =  document.getElementById("hei").value + "px";

let width = document.getElementById("wed").value + "px";


              var link = link1.split('https://youtu.be/')[1]

var fstpart = '<iframe height="'+height+'" width="'+width+'" src="https://www.youtube.com/embed/'


var lstpart = '"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                				 
                				 
                				 
               

if(link1.indexOf("https://youtu.be/") != -1){
document.getElementById("linkco").innerHTML= fstpart+link+lstpart; 
document.getElementById("iframe").innerHTML= fstpart+link+lstpart; 

document.getElementById("copy").style.display = "block";
document.getElementById("linkco").style.display = "block";
document.getElementById("h1").style.display = "none";
document.getElementById("generator").style.display = "none";
document.getElementById("nxt").style.display = "block";
    }else{


document.getElementById("h1").innerHTML = "Enter A Valid YouTube Video URL";
    }

				 				 
 
                
                
				}
				
				function copy() {

  var copyText = document.getElementById("linkco");


  copyText.select();
  document.execCommand("copy");

}

function next() {
				location.reload()
}
				
				
