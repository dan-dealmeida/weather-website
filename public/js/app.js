console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document. querySelector('#message-one')
const messageTwo = document. querySelector('#message-two')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ' '

    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
    
            } else{
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
            
        })
    })
})

