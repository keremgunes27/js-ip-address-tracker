var map = L.map("map").setView([42.35, -71.08], 10);

var mainMarker = L.icon({
  iconUrl: "assets/img/icon-location.svg",

  iconSize: [46, 55],
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
  maxZoom: 17,
  minZoom: 9,
}).addTo(map);

const searchInput = document.querySelector(".searchbar-input input");
const enterBtn = document.querySelector(".right-btn");
const ipaddressText = document.querySelector(".ip-address");
const locationText = document.querySelector(".location");
const timezoneText = document.querySelector(".timezone");
const ispText = document.querySelector(".isp");

var ip;

enterBtn.addEventListener("click", () => {
  ip = searchInput.value;
  ipAdddressQuery();
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    ip = searchInput.value;
    ipAdddressQuery();
  }
});

fetch("https://api.ipify.org?format=json")
  .then((results) => results.json())
  .then((data) => {
    ip = data.ip;
    searchInput.value = data.ip;
    ipAdddressQuery();
  });

function ipAdddressQuery() {
  var api_key = "at_w1rWoxk40w5gMjdO6hX7u9ayWTSOR";

  if (searchInput.value != "") {
    $(function () {
      $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: ip },
        success: function (data) {
          ipaddressText.innerHTML = ip;
          locationText.innerHTML = data.location.region;
          timezoneText.innerHTML = data.location.timezone;
          ispText.innerHTML = data.isp;

          L.marker([data.location.lat, data.location.lng], {
            icon: mainMarker,
          }).addTo(map);

          map.setView([data.location.lat, data.location.lng], 13);
        },
        error: function (data) {
          alert("please enter a valid ip address");
        },
      });
    });
  } else {
    alert("please enter ip address");
  }
}
