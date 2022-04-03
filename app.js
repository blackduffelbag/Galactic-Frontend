
const name = 'jeppa'

console.log(name)



//window.open("https://galactic-groups-backend.herokuapp.com/actuator/health")




let oReq = new XMLHttpRequest();

//app.use(function (req, res, next){
  //  res.header("Access-Control-Allow-Origin",'*');
  //  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  //  next();
//});

//https://cors-anywhere.herokuapp.com/

oReq.open("GET","https://galactic-groups-backend.herokuapp.com/actuator/health");


oReq.onload = () => {
    document.body.classList.add('loaded');
    console.log(oReq.response)
}

oReq.onerror = () => {
    console.log(oReq.response)
}

oReq.send();

/*oReq.onload = function (){
    document.body.classList.add('loaded_hiding');
    oReq.setTimeout(function () {
       document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 5);
}*/