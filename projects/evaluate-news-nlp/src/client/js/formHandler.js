/*const apiUrl = https://api.aylien.com/api/v1
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    })*/

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test/?' + $.param({"text":formText}))
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
        console.log(message)

    })
}

export { handleSubmit }
