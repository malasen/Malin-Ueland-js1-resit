const paragraphContainer = document.querySelector(".about");
const paragraphs = Array.from(paragraphContainer.children);
paragraphs.reverse();

let paragraphNew ="";

for (let  i =0; i< paragraphs.length; i++) {
    paragraphNew += `<p>${paragraphs[i].innerHTML} </p>` ;
    //console.log(paragraphNew);
}

paragraphContainer.innerHTML= paragraphNew;






