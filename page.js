let person = prompt("svp entrez votre nom ", "soukayna oucharrou");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
}

T=["img1.PNG","img11.PNG","img111.PNG"]
i=0
function alterner(){
    document.images[0].src=T[i]
if(i==2) i=0
else i++
}
setInterval(alterner,1000)
 