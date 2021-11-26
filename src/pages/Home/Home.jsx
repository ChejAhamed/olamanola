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
          <Carousel infiniteLoop useKeyboardArrows showThumbs autoPlay>
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
        <h3>BEAUTY DEAL</h3>
        <p>our amazing offers.our amazing offersour amazing offersour amazing offersour amazing offersour amazing offers</p>
      </section>
      <div className="job__example">
          <div className="job__example-one">
            <img src="" alt="img_one" />
          </div>
          <div className="job__example-two">
            <img src="" alt="img__two" />
          </div>
          <div className="job__example-three">
            <img src="" alt="img_three" />
          </div>
          <div className="job__example-four">
            <img src="" alt="img_four" />
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
