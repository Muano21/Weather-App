const rightArrow = document.querySelector(".right-arrow");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".search-page");
const searchBtn = document.querySelector(".search");
const result = document.querySelector(".result");
const search = document.querySelector("#search");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const apiKey = "185fbd7a4db2910e614bba85af93a628";
const newSearch = document.querySelector('.newsearch');


async function weatherSearch(city){

        const response = await fetch(apiUrl + city + "&appid=" + apiKey);
        const data = await response.json();
        console.log(data);
        
    
        let newDiv = document.createElement("div");
        let cityName = document.createElement("p");
        let condition = document.createElement("p");
        let temp = document.createElement("p");
        

        cityName.textContent = data.name;
        condition.textContent = data.weather[0].main;
        temp.textContent = data.main.temp;

        result.appendChild(newDiv);
        newDiv.appendChild(cityName);
        newDiv.appendChild(condition);
        newDiv.appendChild(temp);
        newDiv.classList.add("pop");
    }

 async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();
    console.log(data);
    
}


function pageFunc(){
    rightArrow.addEventListener("click", ()=>{
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    })

    searchBtn.addEventListener("click", ()=>{
        alert("Tapped");
        weatherSearch(search.value);
    })

}
pageFunc();

