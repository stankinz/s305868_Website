console.log("Hello World!");

window.addEventListener("load", () => {
    const url = "https://api.tvmaze.com/schedule";
    const resultList = document.querySelector('#results');

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function (episode) {
            const articleElement = `
                <div class="bg-white rounded shadow border-2 p-4 mb-4">
                    <h5 class="text-lg font-semibold mb-2">
                        ${episode.show.name}
                    </h5>
                    <p class="text-gray-600 mb-3">
                        ${episode.name}
                    </p>
                    <p class="text-gray-600 mb-3">
                        Starts at ${episode.airtime}
                    </p>
                    <a target="_blank"
                       href="${episode.show.url}"
                       class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        View Show
                    </a>
                </div>
            `;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
});
