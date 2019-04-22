import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Weather } from "../../interfaces/weather.model";

@Component({
  selector: "app-weather-input",
  templateUrl: "./weather-input.component.html",
  styleUrls: ["./weather-input.component.scss"]
})
export class WeatherInputComponent implements OnInit {
  weatherdata;
  weather: Weather[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.updatedWeatherData.subscribe(data => {
      this.weatherdata = data;
    });
  }

  selectEvent(cityName) {
    this.weather = [];
    this.apiService.getData(cityName, "city").subscribe(data => {
      for (var i = 0; i < data.list.length; i = i + 8) {
        const forecastWeather = new Weather(
          data.city.name,
          data.list[i].dt_txt,
          data.list[i].weather[0].description,
          data.list[i].weather[0].icon,
          data.list[i].main.temp,
          data.list[i].main.temp_max,
          data.list[i].main.temp_min,
          data.list[i].main.humidity,
          data.list[i].wind.speed
        );
        this.weather.push(forecastWeather);
      }
      this.apiService.updateWeatherData(this.weather);
    });
  }

  states = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antartica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Ashmore and Cartier Island",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Clipperton Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic",
    "Congo, Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czeck Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Europa Island",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Antarctic Lands",
    "Gabon",
    "Gambia, The",
    "Gaza Strip",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Glorioso Islands",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island",
    "Holy See (Vatican City)",
    "Honduras",
    "Hong Kong",
    "Howland Island",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Ireland, Northern",
    "Israel",
    "Italy",
    "Jamaica",
    "Jan Mayen",
    "Japan",
    "Jarvis Island",
    "Jersey",
    "Johnston Atoll",
    "Jordan",
    "Juan de Nova Island",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Man, Isle of",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Midway Islands",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcaim Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romainia",
    "Russia",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Scotland",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia",
    "Spain",
    "Spratly Islands",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tobago",
    "Toga",
    "Tokelau",
    "Tonga",
    "Trinidad",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "USA",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands",
    "Wales",
    "Wallis and Futuna",
    "West Bank",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zambia",
    "Zimbabwe"
  ];
}
