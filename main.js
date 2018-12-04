$.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (file) {
    console.log(file);
var htmld= "  <div  class='carousel-inner row w-100 mx-auto' role='listbox'>";
var html;
var active ="active";
    for (var i = 0; i < file.data.length; i++) {
      if(i>0) 
        active =" ";
        htmld+=
        `<div class="carousel-item col-md-4 ${active} ">
        <div class="card" style="width: 22rem;" >
          <img class="card-img-top" src="http://${file.data[i].imagePath}" >
         
     
      <div class="card-body">
    <h5 class="card-title">${file.data[i].label}</h5>
    <p class="card-text">${file.data[i].description}</p>
    <p class="card-text">${file.data[i].Services[i].id_service}</p>

  </div>
       </div> </div>`;
      document.getElementById("car").innerHTML=htmld;
      
  
    }
  
    

  
})