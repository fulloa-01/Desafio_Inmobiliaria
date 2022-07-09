window.onload = function(){
  
  let seccionProductos, cuarto, templateAnuncio = ""
  seccionProductos = document.querySelector(".propiedades")
  for ( cuarto of propiedadesJSON){
    templateAnuncio += `
          
          <div class="propiedad">
              <div class="img" style="background-image: url('${cuarto.src}')"></div>
              <section>
                  <h5>${cuarto.name}</h5>
                  <div class="d-flex justify-content-between">
                      <p>Cuartos: ${cuarto.rooms}</p>
                      <p>Metros: ${cuarto.m}</p>
                  </div>
                  <p class="my-3 ">${cuarto.description}</p>
                  <button class="btn btn-info ">Ver más</button>
              </section>
          </div>
          
          
    `
  }

   
  seccionProductos.innerHTML = templateAnuncio

  console.log()
}


let cCuartos, mcDesde, mcHasta

let propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

function dibujarAnuncios(){
 
  let seccionAnuncios = document.querySelector(".propiedades")
  let totalSelected = document.querySelector(".py-3")
  let templateFinal = ""
  let i = 0


   cCuartos = document.getElementById("cCuartos").value
   mcDesde = document.getElementById("mcDesde").value
   mcHasta = document.getElementById("mcHasta").value
    if (cCuartos  >=1){
     if (mcDesde >= 6 && mcDesde <= 500 && mcHasta >= 6 && mcHasta <= 500){
      for (let anuncio of propiedadesJSON){
        if ( anuncio.rooms >= cCuartos && anuncio.m >= mcDesde && anuncio.m <= mcHasta){
          i = i+1
        templateFinal += dibujarAnuncio(anuncio)
        

      }}

      
      let templateSelected = `
      <h4 class="py-3">Total: <span>${i}</span></h4>

      `

      // console.log(i)
      seccionAnuncios.innerHTML = templateFinal
      totalSelected.innerHTML = templateSelected


      

     }
     else {
      alert("No existen esos metros")
      
     }
    
   }
   else {
     alert("Faltan campos por llenar")
     
   }

}

function dibujarAnuncio(anuncio){

let templateAnuncio = `
      
        <div class="propiedad">
            <div class="img" style="background-image: url('${anuncio.src}')"></div>
            <section>
                <h5>${anuncio.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${anuncio.rooms}</p>
                    <p>Metros: ${anuncio.m}</p>
                </div>
                <p class="my-3 ">${anuncio.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
      

`
return templateAnuncio;  //retorna el template fuera de la funcion

}