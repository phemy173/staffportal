import React from "react";
function Carousel() {
    return (

        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="images/10.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-success">
        <h5 class="fs-4 text-white bg-success">Secondary Teachers</h5>
        <p class="fs-6 text-white bg-success">This picture contains all the staff member of secondary session.</p>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../images/11.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-success">
        <h5 class="fs-4 text-white bg-success">Mrs Bankole</h5>
        <p class="fs-6 text-white bg-success">Head of School, Ikoyi Campus Felicitates with Director @ 70th Birthday</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../images/12.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-success">
        <h5 class="fs-4 text-white ">Celebration at Lekki Campus</h5>
        <p class="fs-6 text-white">Staff members of Lekki Singing and dancing to celebrate the Director's 70th birthday.</p>
        </div>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Carousel;