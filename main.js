function changeColor(){
    if(document.getElementById('colorChangeBox').style.background != 'red'){
        document.getElementById('colorChangeBox').style.background = 'red'
    } else {
        document.getElementById('colorChangeBox').style.background = 'pink'
    }
}

function createAlert(){
    alert('WARNINGWARNINGWARNING')
}

function crossOff(){
    let checkbox = document.getElementsByTagName('input')[0]
    if(checkbox.checked){
        document.getElementById('one').style.textDecoration = 'line-through'
    } else {
        document.getElementById('one').style.textDecoration = 'none'
    }
}

function printArray(){
    let arrayToPrint = ['Snake', 'Dog' ,'Scorpion', 'Crocodile', 'Hippopotamus']
    let printOut = arrayToPrint.map(animal =>{
        return (`<li>${animal}</li>`)
    })

    document.getElementById('printOutArray').innerHTML = `<ul>${printOut.join('')}</ul>`
}

let clicks = 0
function recordClicks(){
    clicks++
    console.log(clicks)   
}