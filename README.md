# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Will you buy me a coffee?](#will-you-buy-me-a-coffee)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](desktop-design.jpg)

![](mobile-design.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/ip-address-tracker-with-javascript-hX_vbjkxcP](https://www.frontendmentor.io/solutions/ip-address-tracker-with-javascript-hX_vbjkxcP)
- Live Site URL: [https://js-ip-address-tracker.vercel.app/](https://js-ip-address-tracker.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [ipify.org](https://www.ipify.org/) - Ip api
- [leafletjs](https://leafletjs.com/) - Map

### What I learned

I learned to use ipify api with javascript and manage it with jquery ajax. And I wrote an example below for you to see.

```js
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
```

this is how i learned to get the ip address of the user :))

```js
fetch("https://api.ipify.org?format=json")
  .then((results) => results.json())
  .then((data) => {
    searchInput.value = data.ip;
    ipAdddressQuery();
  });
```

### Useful resources

- [Resource 1](https://geo.ipify.org/) - This helped me for geo.ipify.org reason. I really liked this pattern and will use it going forward.

## Author

- Website - [keremgns.com](https://www.keremgns.com)
- Frontend Mentor - [@keremgunes27](https://www.frontendmentor.io/profile/keremgunes27)
- Twitter - [@keremmgns](https://twitter.com/keremmgns)

## Will you buy me a coffee?

[Patreon](https://www.patreon.com/keremgunes)
