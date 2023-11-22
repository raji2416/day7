var URL = new XMLHttpRequest();
URL.open("GET"," https://restcountries.com/v3.1/all ");
URL.send();
URL.onload=function(){
    var URL=JSON.parse(URL.response);
    var pop = URL.filter((element)=>{
        return element.population<200000 ;

    })
    console.log(pop);
}