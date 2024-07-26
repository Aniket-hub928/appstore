function Home(){

  return (
      <>
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div  className="carousel-item active">
  <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
    <div  className="carousel-caption d-none d-md-block">
      <h3>GAMING WORLD</h3>
    </div>
  </div>
  <div  className="carousel-item">
  <img src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
    <div  className="carousel-caption d-none d-md-block">
      <h3>FASHION STYLE</h3>
     
    </div>
  </div>
  <div  className="carousel-item">
  <img src="https://images.pexels.com/photos/204686/pexels-photo-204686.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
    <div  className="carousel-caption d-none d-md-block">
      <h3></h3>
  
    </div>
  </div>
</div>
<button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span  className="visually-hidden">Previous</span>
</button>
<button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span  className="carousel-control-next-icon" aria-hidden="true"></span>
  <span  className="visually-hidden">Next</span>
</button>
</div>

<div class="h-100 p-5 text-bg-secondary">
  <div className="row flex-lg-row align-items g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600"  className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  height="500"  loading="lazy"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
      <p className="lead">Automobiles, commonly known as cars, are vehicles designed primarily for the transportation of passengers and goods. They are one of the most significant inventions of the modern era, revolutionizing transportation and significantly impacting daily life, economies, and urban development. </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        
      </div>
    </div>
  </div>
  </div>


      
      </>
  )
}
export default Home;