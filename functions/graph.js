let canvas = document.querySelector('canvas')
canvas.width = 400
canvas.height = 250


let xGrid = 10
let yGrid = 10
let cells = 10

let budget ={
    basic: 5500,
    covid: 2500,
}

let expenses = {}

if (localStorage['expenses']){
    expenses = JSON.parse() 
}

let conV=canvas.getContext('2d') 



const entries = Object.entries(budget)

function drawGrids(){
    conV.beginPath()
    while(xGrid < canvas.height){
        conV.moveTo(0,xGrid)
        conV.lineTo(canvas.width, xGrid)
        xGrid+=cells
    }

    while(yGrid < canvas.width){
        conV.moveTo(yGrid,0)
        conV.lineTo(yGrid, canvas.height)
        yGrid+= cells
    }
    conV.strokeStyle = "rgb(249, 250, 250)" 
    conV.stroke()
}

function blocks(count){
    return count*10
}

function drawAxis(){
    let yCod = 23
    let pop = 0

    conV.beginPath()
    conV.strokeStyle = 'black'
    conV.moveTo(blocks(5),blocks(1))
    conV.lineTo(blocks(5),blocks(23))
    conV.lineTo(blocks(40),blocks(23))

    conV.moveTo(blocks(5),blocks(23))
    
    for(var i = 1; i<= 10; i++){
        conV.strokeText(pop,blocks(2),blocks(yCod))
        yCod -= 5
        pop += 2500
    }

    conV.stroke()
}

function drawLineGraph(){
     conV.beginPath()
     conV.strokeStyle ="black"
     conV.moveTo(blocks(5),blocks(4))

    var xCod = 10

    for( const [expense, spent] of entries){
         var spentMoney = spent/500
         conV.lineTo(blocks(xCod),blocks(4 + spentMoney))
         xCod += 5
    }

    conV.stroke()
}

drawGrids()
drawAxis()
drawLineGraph()