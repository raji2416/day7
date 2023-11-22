
var request = new XMLHttpRequest(URL);

request.open("GET", " https://restcountries.com/v3.1/all ");
request.send();

request.onload=function(){
    var result=json.parse(request.response);
    result.filter((countries)=>{
        return countries.region==="Asia";
})

        console.log(result);
}