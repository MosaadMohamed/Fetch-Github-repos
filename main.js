let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
let Again = document.querySelector(".again");


Again.onclick = function (){
    location.reload();
}

getButton.onclick = function () {
    getRepos();
};

function getRepos() {

if (theInput.value == "") { 

    reposData.innerHTML = "<span>Please Write Github Username.</span>";

} else {

    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

    reposData.innerHTML = '';

        for(let i =0 ; i<repositories.length; i++)
        {

            let mainDiv = document.createElement("div");

            let repoNameDiv = document.createElement("div");

            repoNameDiv.className ="div"; 

            let repoName = document.createTextNode(repositories[i].name);

            repoNameDiv.appendChild(repoName);
    
            mainDiv.appendChild(repoNameDiv);
    
            let theUrl = document.createElement('a');
    
            theUrl.innerHTML = "visit";
    
            theUrl.href = `https://github.com/${theInput.value}/${repositories[i].name}`;
    
            theUrl.setAttribute('target', '_blank');

            let spans = document.createElement("div");
    
            spans.appendChild(theUrl);
    
            let starsSpan = document.createElement("span");
    
            let starsText = document.createTextNode(`Stars ${repositories[i].stargazers_count}`);
    
            starsSpan.appendChild(starsText);
    
            spans.appendChild(starsSpan);

            spans.className = "divtwo"

            mainDiv.appendChild(spans);
    
            mainDiv.className = 'repo-box';
    
            reposData.appendChild(mainDiv);

        }

    });

}
}