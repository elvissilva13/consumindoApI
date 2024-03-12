const temperatura = document.getElementById("p_temp");
const nivel = document.getElementById("p_nivel");
const pressao = document.getElementById("p_press");
const obterDados=()=>{
const endPoint = 'https://dce6450c-f537-4bce-a6d4-4e4f5d2e3825-00-1k19j1zcjm0f3.riker.replit.dev/apicursos'
fetch(endPoint)
.then(res =>res.json())
.then(dados=>{
    console.log(dados)
    temperatura.innerHTML="temperatura: " + dados.temperatura
    nivel.innerHTML="nivel: "+ dados.nivel
    pressao.innerHTML="pressão "+ dados.pressao
})
}

