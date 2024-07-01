const accessKey = "sRQ-0DsqCFCdGKvKUWRMkQGGUqKp1_sGUHt-Vk75--8";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let pge = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${pge}&query=${keyword}&client_id=${accessKey}&per_page=15`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    // console.log(url);
    if(pge==1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    pge = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    pge++;
    searchImages();
})