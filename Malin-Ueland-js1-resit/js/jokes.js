const jokesUrl = "https://official-joke-api.appspot.com/random_ten";
const jokesContainer = document.querySelector(".row");
const loader = document.querySelector(".loader");


async function getJoke() {
    try{
        const response = await fetch(jokesUrl);
        const results = await response.json(); 
        //console.log(results);

        for (let  i =0; i< results.length; i++) {
            if (i === 5) {
                break;
            }
            loader.classList.remove("loader");
            jokesContainer.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                                            <div class="card">
                                                <div class="joke-detail">
                                                   <h4 class="type"> ${results[i].type} </h4>
                                                   <div class= "setup"> ${results[i].setup} </div>
                                                   <div class= "punchline"> ${results[i].punchline} </div>
                                                </div>
                                            </div>
                                        </div>`;
            
            const titleUpdate = document.querySelector("title");
            titleUpdate.innerHTML = results[2].setup;
        }
        

        
    } catch(error) {
        console.log(error);

        const header = document.querySelector("h1");
        header.innerHTML = header.innerHTML = "An error occurred"; 
        jokesContainer.innerHTML = "";
    }
}

getJoke();