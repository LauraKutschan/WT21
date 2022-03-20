
function loadImg() {
    console.log('aufgerufen');
    const keyword = document.getElementById("keyword").value;
    const url = "https://api.unsplash.com/search/photos?client_id=ublY9l38LFZQ0a29vQewThxnfBJDz9pUewoAv6bEKag";
    const imageDiv = document.querySelector('.image');
    const query = url + '&query=' + keyword;

    imageDiv.innerHTML = '';

    fetch(query)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i <= data.results.length; i++) {
                let imageElement = document.createElement('img');
                imageElement.src = data.results[i].urls.thumb;
                imageDiv.append(imageElement);
            }

        });
}