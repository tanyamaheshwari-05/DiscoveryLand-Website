const arr = [
    {
        temperature: "29 F",
        wind: "17 mph",
        directiondegree: "314",
        name: "The Hamptons, New York",
        name2: "The Hills",
        location: "40.847787° N / -72.589811° W",
        img: "https://www.datocms-assets.com/128889/1745433311-25718_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
    },
    {
        temperature: "34 F",
        wind: "20 mph",
        directiondegree: "316",
        name: "MONCAYO GOLF & OCEAN CLUB",
        name2: "Fajardo, Puerto Rico",
        location: "45.847787° N / -172.589811° W",
        img: "https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=1200&w=1000"
    },
    {
        temperature: "35 F",
        wind: "10 mph",
        directiondegree: "218",
        name: "TERRITORY 1889 GOLF & LAKE CLUB",
        name2: "Flathead Lake, Montana",
        location: "30.847787° N / 62.589811° W",
        img: "https://www.datocms-assets.com/128889/1749834672-binyan_hhc3121_wardvillageblocke_s020_ext_superman_final5000.jpg?fit=max&h=1200&w=1000"
    },
    {
        temperature: "28 F",
        wind: "30 mph",
        directiondegree: "114",
        name: "TENUTA TOSCANA",
        name2: "TUSCANY, ITALY",
        location: "20.847787° N / -12.589811° W",
        img: "https://www.datocms-assets.com/128889/1742426220-horseback.jpg?fit=max&h=1200&w=1000"
    },
    {
        temperature: "38 F",
        wind: "70 mph",
        directiondegree: "144",
        name: "MOHALA",
        name2: "Honolulu, Hawaii",
        location: "40.847787° N / -72.589811° W",
        img: "https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
    }
];

const prevBtn = document.querySelector(".left-arr");
const nextBtn = document.querySelector(".right-arr");
const weatherContents = document.querySelectorAll(".weather-row .content");
const title1 = document.querySelector(".info-left h4");
const title2 = document.querySelector(".info-left h3");
const locationText = document.querySelector(".coordinates1");
const mainImg = document.querySelector(".info-img img");

let i = 0;

function updateUI() {
    const data = arr[i];

    weatherContents[0].textContent = data.temperature;
    weatherContents[1].textContent = data.wind;
    weatherContents[2].textContent = `${data.directiondegree}°`;

    title1.textContent = data.name;
    title2.textContent = data.name2;
    locationText.textContent = data.location;
    mainImg.src = data.img;
}

updateUI();

nextBtn.addEventListener("click", () => {
    i = (i + 1) % arr.length;
    updateUI();
});

prevBtn.addEventListener("click", () => {
    i = (i - 1 + arr.length) % arr.length;
    updateUI();
});