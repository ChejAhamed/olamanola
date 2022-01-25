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
      <div className="home__jobexample">
        <div className="home_jobexampleLeft">
            <div className="home__jobexampleLeft-one">
              <img src={img1} alt="img_one" />
            </div>
            <div className="home__jobexampleLeft-two">
              <img src={img2} alt="img__two" />
            </div>
        </div>
          
        <div className="home_jobexampleRight">
            <div className="home__jobexampleRight-one">
              <img src={img3} alt="img_one" />
            </div>
            <div className="home__jobexampleRight-two">
              <img src={img1} alt="img__two" />
            </div>
        </div>

      </div>
      <section className="home__productsQuality">
        <h3>Top Quality Products</h3>
        <p>The GelBottle Inc was born with high quality and innovation in mind, offering an incredible array of over 360 unique colours to satisfy everyone’s taste. We develop cutting edge products like Builder In A Bottle™ and GelPot, two revolutionary builder gel systems for both natural nails and extensions. With our different approach we have rapidly grown into an international brand recognised worldwide and are quickly making our way to the forefront of the Industry. We’ve learned that the way forward is to set trends, not to follow them.</p>
      </section>
      <div className="home__beautiful">
        <div className="home__beautiful-left">
          <img src={img1} alt="beu1" />
        </div>
        <div className="home__beautiful-right">
        <img src={img2} alt="beu2" />
        </div>
      </div>
      <section className="home__productsQuality__bottom">
        <h3>Top Quality Products</h3>
        <p>The GelBottle Inc was born with high quality and innovation in mind, offering an incredible array of over 360 unique colours to satisfy everyone’s taste. We develop cutting edge products like Builder In A Bottle™ and GelPot, two revolutionary builder gel systems for both natural nails and extensions. With our different approach we have rapidly grown into an international brand recognised worldwide and are quickly making our way to the forefront of the Industry. We’ve learned that the way forward is to set trends, not to follow them.</p>
      </section>
    </div>
    </main>
  );
};

export default Home;
