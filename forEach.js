
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all " );
request.send();

request.onload=function(){
    var result=json.parse(request.response);
    result.forEach(element => {
            console.log(element.name);
        console.log(element.capital);
    console.log(element.flag) ;

    });
}