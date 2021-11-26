import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../images/p1.jpg';
import img2 from '../../images/p2.jpg';
import img3 from '../../images/p3.jpg';
import './Home.scss'
const Home = function () {
  return (
  
  <main>
    <div className="home">
      <div className="home__carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                <img src={img1} alt="Carousel2"/>
                </div>
                <div>
                    <img src={img2} alt="Carousel2"/>
                </div>
                <div>
                    <img src={img3} alt="Carousel3"/>
                </div>
          </Carousel>

      </div>
      <section className="home__offers">
        <p>our amazing offers</p>
      </section>
      <div className="jobExamples">
          <div className="jobEx1">
            <img src="" alt="jobEx1" />
          </div>
          <div className="jobEx2">
            <img src="" alt="jobEx2" />
          </div>
          <div className="jobEx3">
            <img src="" alt="jobEx3" />
          </div>
          <div className="jobEx4">
            <img src="" alt="jobEx4" />
          </div>

      </div>
      <section className="productsQuality">
        The best product in te market
      </section>
    </div>
    </main>
  );
};

export default Home;
