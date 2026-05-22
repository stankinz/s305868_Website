console.log("Hello World!");

const resultList = document.querySelector("#results");
const url = "https://content.guardianapis.com/search?q=education&api-key=";
const apiKey = "e5befb33-f585-4485-a087-cf2612e60703"
fetch(url + apiKey)
.then((response) => response.json())
.then((data) => {
    //console.log(data)
    data.response.results.forEach(function (value) {
        console.log(value);
        //resultList.insertAdjacentHTML("beforeend", "<li><" + value.webTitle + "></li>");
        //resultList.insertAdjacentHTML('beforeend', `<li><a target="_blank" href="${value.webUrl}">${value.webTitle}</a></li> `);
        //const articleElement = `<div><a target="_blank" href="${value.webUrl}">${value.webTitle}</a></div> `;
        const articleElement = `<div><div class="bg-white rounded shadow border-2 p-4 mb-4">
<h5 class="text-lg font-semibold mb-2">${value.webTitle}</h5>
<p class="text-gray-600 mb-3">${value.sectionName}</p>
<a target="_blank" href="${value.webUrl}" class="inline-block bg-blue-500
text-white
px-4 py-2 rounded hover:bg-blue-600">
View Article
</a>
</div></div> `;
        resultList.insertAdjacentHTML('beforeend', articleElement);
    })
});