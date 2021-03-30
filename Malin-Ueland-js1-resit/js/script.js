const jokesUrl = "https://official-joke-api.appspot.com/random_joke";


async function getJoke() {
    try{
        const response = await fetch(jokesUrl);
        const results = await response.json(); 
        //console.log(results);
        
        const jokeType = results.type;
        const setUp = results.setup;
        const punchLine = results.punchline;

        const header= document.querySelector("h2");
        header.innerHTML = jokeType + " Joke";

        const setupContainer = document.querySelector(".setup");
        setupContainer.innerHTML = setUp;

        const punchlineContainer = document.querySelector(".punchline");
        punchlineContainer.innerHTML = punchLine;

        const titleUpdate = document.querySelector("title");
        titleUpdate.innerHTML = setUp;

    } catch(error) {
        console.log(error);

        const header= document.querySelector("h2");
        header.innerHTML = "an error occurred";
        
        const setupContainer = document.querySelector(".setup");
        setupContainer.innerHTML = "";

        const punchlineContainer = document.querySelector(".punchline");
        punchlineContainer.innerHTML = "";
    }
}




getJoke();