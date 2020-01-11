// Two scripts example continues here
console.log(dejan) // We can see that dejan variable exists here bacuse we defined it in the first script, check the HTML


let wrappers = document.getElementsByClassName("wrapper") // Selecting an element with vanilla JS
wrappers[0]

let wrappersJQuery = $("#firstTitle") // Selecting an element with JQuery
wrappersJQuery.val() // Gets the value from the selected element

// let eventExampleDivNode = document.getElementById("eventExampleDiv")
// let eventExampleBtnNode = document.getElementById("eventExampleBtn")

// eventExampleBtnNode.addEventListener("click", function(e) {
//   eventExampleDivNode.textContent = "this is text from vanilla JS"
// })


let eDivNode = $("#eventExampleDiv")
let eButtonNode = $("#eventExampleBtn")

eButtonNode.click(function(e) {
  let text = eButtonNode.text()
  eDivNode.text(text + " This is a text from JQuery")
  eDivNode.slideToggle()
})

let likId = 2

let fetchBtn = $("#fetchBtn") // Selecting some button
fetchBtn.click(e => { // Setting an event on the button
  // fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-03-basicjs/master/g3/Class%2010%20-%20Ajax%20%26%20JQuery/students.json")
    // // .then(function(response) {
    // //   return response.json()
    // // })
    // .then(res => res.json())
    // .then(data => console.log(data.students[0]))

    fetch(`https://swapi.co/api/planets/${likId}`) // With this function our app requests "data" from some other computer(server), that server is located on this address/location(https://swapi.co/api/planets/2)
      .then(res => res.json()) // When we get a response(the data) we must extract it to use it
      .then(data => { // On this then() we have the extracted data and we can use it however we want
        console.log(data)
        eDivNode.text(`Planet Name: ${data.name}, Films: `)
        
        for (const film of data.films) {
          fetch(film) // Here we make few more ajax calls based on how many films we have in the films array, the proccess is the same
            .then(res => res.json())
            .then(filmData => {
              let str = eDivNode.text()
              eDivNode.text(`${str} ${filmData.title}, `)
            })
        }
      })
      .catch(err => console.log(err)) // If there is an error, for example the server is not available or it doesn't want to give us that data we can handle it however we want in this then()
})
