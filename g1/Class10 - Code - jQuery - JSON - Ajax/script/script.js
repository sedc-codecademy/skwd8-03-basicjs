// jQuery AJAX call

// $.ajax({
//   url: 'https://api.myjson.com/bins/m3awc',
//   method: 'GET',
//   success: function() {
//     console.log('success!');
//   },
//   error: function() {
//     console.log('error!');
//   }
// }).done(function(response) {
//   console.log(response);
// });

// $.ajax({
// async: true,
// crossDomain: true,
//   url: 'https://restcountries-v1.p.rapidapi.com/all',
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
//     'x-rapidapi-key': '6b4c620edemsheb59d73aca43b77p1084c0jsna8f05818919c'
//   },
//   success: function() {
//     console.log('success!');
//   },
//   error: function() {
//     console.log('error!');
//   }
// }).done(function(response) {
//   console.log(response);
// });

// Ivo info API
// https://api.myjson.com/bins/m3awc

// Free countries API
// https://restcountries-v1.p.rapidapi.com/all
// https://rapidapi.com/apilayernet/api/rest-countries-v1?endpoint=53aa5a08e4b0a705fcc323a6

// jQuery Ajax
// https://api.jquery.com/jquery.ajax/

// .done()
// https://api.jquery.com/deferred.done/

// async
// Setting async to false means that the statement you are calling has to complete before the next statement in your function can be called. If you set async: true then that statement will begin it's execution and the next statement will be called regardless of whether the async statement has completed yet

// crossDomain
// CORS is a mechanism that defines a procedure in which the browser and the web server interact to determine whether to allow a web page to access a resource from different origin. Figure 2. Cross domain ajax request. When you do a cross-origin request, the browser sends Origin header with the current domain value

// JavaScript fetch call without handling error
// fetch('https://api.myjson.com/bins/m3awc123')
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(content) {
//     console.log(JSON.parse(content));
//   });

// JavaScript fetch call with handling error
// fetch('https://api.myjson.com/bins/m3awc123')
//   .then(function(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.text();
//   })
//   .then(function(content) {
//     console.log(JSON.parse(content));
//   })
//   .catch(function(error) {
//     console.log('SE SLUCI ' + error);
//   });
