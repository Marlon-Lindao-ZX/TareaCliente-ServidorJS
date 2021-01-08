var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://examen-264e.restdb.io/rest/historicopedidos",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "5f5a97d6c5e01c1e033b8ed7",
      "cache-control": "no-cache"
    }
}
                  
$.ajax(settings).done(function (response) {
    console.log(response);
});

let filterResults = (text) => {

    let filtrador = text
    let filter = filtrador
  
    let div = document.getElementById("images").getElementsByTagName("div")
  
    for (i = 0; i < div.length; i++) {
      if (!(filter === 'Mostrar Todos')) {
        let pTags = div[i].getElementsByTagName('p');
        let flag = 0
        for (let p of pTags) {
          let txtValue = p.textContent;
          if (txtValue === filter) {
            flag = 1
          }
          let x = div[i]
        
          if(flag === 0) x.style.display = 'none'
          else x.style.display = ''
        }
        
      }else{
        div[i].style.display = ''
      }
  
    }
  }