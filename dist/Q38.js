"use strict";
function cityName(city, country = `default`) {
    console.log(` ${city} is in ${country}`);
}
cityName(`Karachi`, `pakistan`);
cityName(`Tokyo`, `Japan`);
cityName(`Paris`);
