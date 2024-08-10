

const key = "35d01ef2d460181f374cdd890be77660"

const nub = "https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const sky = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const clearsky = "https://images.pexels.com/photos/695657/pexels-photo-695657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const rain = "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const nevoa = "https://images.pexels.com/photos/45222/forest-fog-nature-winter-45222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function backgroudimg(dados){
    console.log(dados);
    const backgroud = document.getElementById('background');
    switch (dados.weather[0].description){
        case "nublado":
            backgroud.style.backgroundImage = `url(${nub})`;
            break;
        case "céu limpo":
            backgroud.style.backgroundImage = `url(${clearsky})`;
            backgroud.style.transition = "0.6s"
            break;
        case "névoa":
            backgroud.style.backgroundImage = `url(${nevoa})`
            break
        case "algumas nuvens":
            backgroud.style.backgroundImage = `url(${sky})`
            break
        case "chuva leve":
            backgroud.style.backgroundImage = `url(${rain})`
            break
        default: 
    }     

}
function dadosinscreen(dados){
    console.log(dados);
    

    /*
        VA NO INSPENCIONAR > CONSOLE
        PRIMEIRO : NAME
        SEGUNDO: MAIN>TEMP
        TERCEIRO: WEATHER[0]>DESCRIPTION
        QUARTO: MAIN>HUMIDITY
        QUINTO: 
        NO SITE DO OPENWEATHER TEM OS ICONES REFERENTE AO CLIMA
        OCON= '1CN' POR EXEMPLO
     */
        document.querySelector(".city").innerHTML = "Cidade não encontrada";
        document.querySelector(".temp").innerHTML = ""
        document.querySelector(".forecast-text").innerHTML = ""
        document.querySelector(".humidity").innerHTML  = ""

        document.querySelector(".city").innerHTML = `Tempo em ${dados.name}`
        document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
        document.querySelector(".forecast-text").innerHTML = dados.weather[0].description.toUpperCase([0])
        document.querySelector(".humidity").innerHTML  = `Umidade: ${dados.main.humidity}%`;
        document.querySelector('.forecast-img').src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


//função assincrona para acessar servidores
async function searchCity(city){

    /*  awit = ESPERAR SEVIDOR RESPONDER e EXECUTAR O CODIGO
        fetch = ACESSAR O SERVIDOR API

        COPIAR A 'API' DO SITE, COLOCA-LA ENTRE CRASES E MUDAR O PARA O PLACEHORER ${} COM A VARIAVEL CITY E A KEY

        No FINAL COLOQUE O .then (então) e passe ( => ) a RESPOSTA DO SERVIDOR PARA 'json'
    
    */
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dadosinscreen(dados);
    backgroudimg(dados);

    
}

function pressbutton(){ //observe as tres versoes todas funcionam
    //const input = document.querySelector(".input-city").value
    //const input = document.getElementsByClassName("input-city")[0].value
    const city = document.getElementById("input-cityid").value
    
    //console.log(city); testar no console

    //chamar a função buscar-cidade
    searchCity(city)

    
}