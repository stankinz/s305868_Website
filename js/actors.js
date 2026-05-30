console.log("Hello World!");

const searchNews = (event) => {
    event.preventDefault();
    const keyword = document.querySelector("#keywords").value;
    const url = 'https://api.tvmaze.com/search/people?q=' + keyword;
    const resultList = document.querySelector('#results');
    resultList.innerHTML = "";

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function (value) {
            console.log(value);
            const articleElement = `<div><div class="bg-white rounded shadow border-2 p-4 mb-4">
<h5 class="text-lg font-semibold mb-2">${value.person.name}</h5>
<p class="text-gray-600 mb-3">${value.person.country ? value.person.country.name : "Unknown"}</p>
<a target="_blank" href="${value.person.url}" class="inline-block bg-blue-500
text-white
px-4 py-2 rounded hover:bg-blue-600">
View Article
</a>
</div></div> `;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        })
    });
}

window.addEventListener("load", () => {
    const url = "https://api.tvmaze.com/people";
    const resultList = document.querySelector('#results');
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.slice(0, 12).forEach(function(person) {
            const articleElement = `
                <div class="bg-white rounded shadow border-2 p-4 mb-4">
                    <h5 class="text-lg font-semibold mb-2">
                        ${person.name}
                    </h5>
                    <p class="text-gray-600 mb-3">
                        ${person.country.name}
                    </p>
                    <a target="_blank"
                       href="${person.url}"
                       class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        View Person
                    </a>

                </div>
            `;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
});