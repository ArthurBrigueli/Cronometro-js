const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const milisegundos = document.querySelector('.milisegundos')
const botaoIniciar = document.querySelector('.botaoIniciar')
const botaoParar = document.querySelector('.botaoParar')
const botaoZerar = document.querySelector('.botaoZerar')
const classepisca = document.querySelector('.container-contador')
const limpar = document.querySelector('.botao-limpar')
const container = document.querySelector('.container')

let cron
let seg = 0
let min = 0
let mili = 0




botaoIniciar.addEventListener('click', ()=>{
    iniciar()
})

botaoParar.addEventListener('click', ()=>{
    parar()
})

botaoZerar.addEventListener('click', ()=>{
    zerar()
})

limpar.addEventListener('click', ()=>{
    clear()
})



//function for start a function timer that start the cronometro
function iniciar(){
    parar()
    cron = setInterval(() => { timer(); }, 10);
    classepisca.classList.remove('parado')
    
}


//function for stop the cronometro
function parar(){
    if(mili > 0){
        classepisca.classList.add('parado')
    }else{return}
    clearInterval(cron);
}


//function principal to cronometro
function timer(){

    if(mili < 99){
        mili += 1
        if(mili < 10){
            milisegundos.innerHTML = `0${mili}`
        }else{
            milisegundos.innerHTML = mili
        }
    }else{
        mili = 0
        seg += 1
        if(seg < 10){
            segundos.innerHTML = `0${seg}`
        }else{
            segundos.innerHTML = seg
        }
    }

    if(seg >= 60){
        seg = 0
        min += 1
        if(min < 10){
            minutos.innerHTML = `0${min}`
        }else{
            minutos.innerHTML = min
        }
            
    }



}


const historico = document.querySelector('.container-historico')
const spanhistorico = document.querySelector('.span-historico')


spanhistorico.style.display = 'none'

//hide the empty historic
historico.style.display = "none"


//hide the button from clear empty historic
limpar.style.display = 'none'


//funcion for the cronometro reset and to historic
let i = 0
function zerar(){
    
    historico.style.display = "block"
    limpar.style.display = 'block'
    spanhistorico.style.display = 'block'

    clearInterval(cron);



    if(mili == 0){
        return
    }else{
        container.classList.add('contem')
        let p = document.createElement('p')
        i += 1
        p.appendChild(document.createTextNode(`${i} - ${min}:${seg}:${mili}`))
        historico.appendChild(p)
    }
    


    seg = 0
    min = 0
    mili = 0
    minutos.innerHTML = `00`
    segundos.innerHTML = `00`
    milisegundos.innerHTML = `00`
    classepisca.classList.remove('parado')
}

//function for historic clear
function clear(){ 
    i=0
    spanhistorico.style.display = 'none'
    historico.innerHTML = ''
    limpar.style.display = 'none'
    historico.style.display = "none"
    container.classList.remove('contem')
}
