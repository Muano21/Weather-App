const rightArrow = document.querySelector(".right-arrow");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".search-page");
const thirdPage = document.querySelector(".third-page");
const searchBtn = document.querySelector(".search");
const result = document.querySelector(".result");
const search = document.querySelector("#search");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const apiKey = "185fbd7a4db2910e614bba85af93a628";
const newSearch = document.querySelector('.newsearch');
const weatherImg = document.querySelector(".weather-img");
const tempMain = document.querySelector(".temp");
const headingPage = document.querySelector("h3");
const images = document.querySelector(".weather-img");
const wind = document.querySelector(".windword");
const humidity = document.querySelector(".hum");
const visibility = document.querySelector(".visi");
const uvIndex = document.querySelector(".uv");

const allError = document.querySelector(".allError");
const allPage = document.querySelector(".allPage");
const temps = document.querySelector(".temp");




async function weatherSearch(city){

        const response = await fetch(apiUrl + city + "&appid=" + apiKey);
        const data = await response.json();
        console.log(data);
        
        if(search.value === ' '){
          function displayError(){
            const searchError = document.querySelector(".search-error");
            const display = searchError.style.display = "block";
            alert(display);
            }
            displayError();
        }else{
          let newDiv = document.createElement("div");
          let cityName = document.createElement("p");
          let condition = document.createElement("p");
          let temp = document.createElement("p");
          let weatherImgTwo = document.createElement("img");
          

          cityName.textContent = data.name;
          condition.textContent = data.weather[0].main;
          temp.textContent = Math.round(data.main.temp);

          result.appendChild(newDiv);
          newDiv.appendChild(weatherImgTwo);
          newDiv.appendChild(cityName);
          newDiv.appendChild(condition);
          newDiv.appendChild(temp);
          weatherImgTwo.classList.add("twoImg");
          newDiv.classList.add("pop");
          weatherImgTwo.src = "images/clear"

          if(data.weather[0].main === "Clouds") {
            weatherImgTwo.src = "images/clouds.png";
          } else if (data.weather[0].main === "Clear") {
            weatherImgTwo.src = "images/clear.png";
          } else if (data.weather[0].main === "Drizzle") {
            weatherImgTwo.src = "images/drizzle.png";
          } else if (data.weather[0].main === "Mist") {
            weatherImgTwo.src = "images/mist.png";
          } else if (data.weather[0].main === "Snow") {
            weatherImgTwo.src = "images/snow.png";
          } else if (data.weather[0].main === "Rain") {
            weatherImgTwo.src = "images/rain.png";
          } 
        }

    }

 async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
   try{
    if(response.status == 200){
    const data = await response.json();
    console.log(data);
    headingPage.textContent = data.name;
    wind.textContent = Math.round(data.wind.speed) + " km/h";
    humidity.textContent = data.main.humidity + " %";
    uvIndex.textContent = data.sys.type; 
    visibility.textContent = data.visibility + " km";
    temps.textContent = data.weather[0].main;


    if(data.weather[0].main === "Clouds") {
        images.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        images.src = "images/clear.png";
      } else if (data.weather[0].main === "Drizzle") {
        images.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        images.src = "images/mist.png";
      } else if (data.weather[0].main === "Snow") {
        images.src = "images/snow.png";
      } else if (data.weather[0].main === "Rain") {
        images.src = "images/rain.png";
      } else{
        alert("Enter a valid city");
      }
    }
   }catch(error){
      allError.style.display = "block";
      allPage.style.display = "none";
   }
    
}


function pageFunc(){
    rightArrow.addEventListener("click", ()=>{
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    })

    searchBtn.addEventListener("click", ()=>{
        weatherSearch(search.value);
    })

    newSearch.addEventListener("click", ()=>{
        firstPage.style.display = "none";
        secondPage.style.display = "none";
        thirdPage.classList.add("third");
        thirdPage.style.display = "block";

        checkWeather(search.value);
    })


}
pageFunc();

