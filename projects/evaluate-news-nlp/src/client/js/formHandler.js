/*const apiUrl = https://api.aylien.com/api/v1
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    })*/

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    client.checkForName(formText)

    console.log("::: Form Submitted :::")
     await  postData('http://localhost:8081/analyseText', {data : formText }).then(function(res) {
            document.getElementById('results').innerHTML = res.message
            console.log(message)
        })
}


const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}
export { handleSubmit }
