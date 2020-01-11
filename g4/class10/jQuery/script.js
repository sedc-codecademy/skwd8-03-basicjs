$(document).ready(function() {

    //selectors

    let allElements = $("*");
    let elementByID = $("#firstTitle");
    let elementsByClass = $(".innerWrapper");
    let elementsByTagName = $("p");
    // let elementsByTagNameJS = document.getElementsByTagName("p")
    let firstParagraph = $("p:first");
    let lastParagraph = $("p:last");

    let firstChild = $(".innerWrapper:first-child");
    let lastChild = $(".innerWrapper:last-child");
    let nthChild = $("p:nth-child(3)");

    elementsByTagName.first();
    elementsByTagName.last();

    //allElements.find(".wrapper").find("p").first().hide();

    // elementsByTagName[0].innerText = "changed text";
    // elementsByTagName.get(0).innerText = "changed text 2";

    elementsByTagName.first().next()
    elementsByTagName.first().prev().hide()

    //methods for manipulation

    let input = $("input").first().val()
    console.log(input);

    // console.log(elementsByClass.first().html())
    // elementsByClass.first().html(`
    //     <p>new paragraph</p>
    //     <p>another paragraph</p>
    // `)

    //elementsByTagName.first().text("<p>new paragraph</p>")

    elementsByTagName.first().css("color", "red");

    elementsByTagName.first().after("<p>paragraph after hello</p>")
    elementsByTagName.first().before("<p>paragraph before hello</p>")

    $(".wrapper").first().append("<p>paragraph at top</p>");

    let button = $("button").first();

    //button.click(function() { alert("hello")})
    button.on("click", function() { alert("hello")})










})