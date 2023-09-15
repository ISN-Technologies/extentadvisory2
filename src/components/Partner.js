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
                  src="assets/images/partners/logo-1.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-2.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-3.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-4.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-5.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-6.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/logo-3.png"
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
