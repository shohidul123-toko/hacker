// Video list (Later you can fetch from Firebase or API)

const videos = [

    {

        title: "Sample Video 1",

        url: "https://www.w3schools.com/html/mov_bbb.mp4"

    },

    {

        title: "Sample Video 2",

        url: "https://www.w3schools.com/html/movie.mp4"

    }

];

// Load videos on website

function loadVideos() {

    const section = document.getElementById("videoSection");

    section.innerHTML = "";

    videos.forEach(video => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <video controls>

                <source src="${video.url}" type="video/mp4">

            </video>

            <h3>${video.title}</h3>

        `;

        section.appendChild(card);

    });

}

loadVideos();