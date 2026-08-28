const channelId = "UC-ocye9qtKSPZvnwHlYrESA";

async function loadYouTubeStats() {
    try {

        const url =
            "https://pulse.walls.sh/profile?url=" +
            encodeURIComponent(
                "https://www.youtube.com/channel/" + channelId
            );

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API fout: " + response.status);
        }

        const data = await response.json();

        console.log("YouTube data:", data);

        // =========================
        // ABONNEES
        // =========================

        document.getElementById("subscribers").textContent =
            formatNumber(data.followers);


        // =========================
        // AANTAL VIDEO'S
        // =========================

        document.getElementById("totalViews").textContent =
            formatNumber(data.posts);


        // =========================
        // MEEST BEKEKEN VIDEO
        // =========================

        document.getElementById("mostViewedTitle").textContent =
            "Nog geen gegevens";


        document.getElementById("mostViewedViews").textContent =
            "";


        document.getElementById("mostViewedLink").href =
            "https://www.youtube.com/channel/" + channelId;


        // =========================
        // AFBEELDING
        // =========================

        document.getElementById("mostViewedImage").src =
            data.avatar || "";


    } catch (error) {

        console.error("YouTube fout:", error);


        document.getElementById("subscribers").textContent =
            "Niet beschikbaar";


        document.getElementById("totalViews").textContent =
            "Niet beschikbaar";


        document.getElementById("mostViewedTitle").textContent =
            "Kan gegevens niet laden";


        document.getElementById("mostViewedViews").textContent =
            "";


        document.getElementById("mostViewedLink").href =
            "https://www.youtube.com/channel/" + channelId;

    }
}


// =========================
// NUMMERS OPMAKEN
// =========================

function formatNumber(number) {

    if (number === undefined || number === null) {
        return "Onbekend";
    }

    return new Intl.NumberFormat("nl-NL").format(number);
}


// =========================
// START
// =========================

loadYouTubeStats();

function formatNumber(number) {
    if (number === undefined || number === null) {
        return "Onbekend";
    }

    return new Intl.NumberFormat("nl-NL").format(number);
}

loadYouTubeStats();