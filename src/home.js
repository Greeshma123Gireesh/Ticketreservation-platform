import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import logo from './images/logo.png'; 
import slide1 from './images/slide1.avif';
import slide2 from './images/slide2.avif';
import './css/home.css'
import genere from './images/genre.jpeg';
import cal from './images/calender.jpeg';
import place from './images/place.jpeg';

const Home = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <a href="#" className="nav-link">Home</a>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div className='title'><div className="container mt-4">
                <h1>      <img src={logo} />
                Your Seamless Solution for exploring Events.</h1>
            </div>
            </div>
            <div className='events'>
            <div class="card" style={{width: '18rem'}}>
  <img src={genere} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Genres</h5>
  
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">
  <a href="/concerets">Concerts</a></li>
    <li class="list-group-item">
    <a href="/sports">Sports</a></li>
    <li class="list-group-item">
    <a href="/theater">Theater</a></li>

  </ul>
  
</div>
<div class="card" style={{width: '18rem'}}>
  <img src={cal}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dates</h5>
  </div>
  <ul class="list-group list-group-flush">
  
    <li class="list-group-item">
    <a href="/thisweek">This week </a></li>
    <li class="list-group-item">
    <a href="/thismonth">This month</a></li>
    <li class="list-group-item">
    <a href="/nextmonth">Next Month</a></li>
  </ul>
  
</div>
<div class="card" style={{width: '18rem'}}>
  <img src={place} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">City</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <a href="/banglore">Bangalore</a></li>
    <li class="list-group-item">
    <a href="/chennai">Chennai</a></li>
    <li class="list-group-item">
    <a href="/kochi">Kochi</a></li>
   

  </ul>
  
</div>
</div>
        </div>
    );
}

export default Home;
