import Slider from "react-slick";
import { partnerSliderOne } from "../sliderProps";
const Partner = () => {
  return (
    <section className="partners-section dark-black-bg pt-60 pb-60">
      <div className="container">
        {/*=== Partner Slider ===*/}
        <Slider {...partnerSliderOne} className="partner-slider-one">
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/inta.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/aripo.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/aippi.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/eals.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/tls.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/zls.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Partner;
