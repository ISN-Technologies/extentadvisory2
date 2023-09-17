import { Component, Fragment } from "react";
import Slider from "react-slick";
import { partnerSliderTwo } from "../sliderProps";

export default class PartnerSlider2 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        {/*=== Partner Arrows ===*/}
        <div className="partner-arrows mb-60">
          <div className="prev slick-arrow" onClick={this.previous}>
            <i className="far fa-angle-left" />
          </div>
          <div className="next slick-arrow" onClick={this.next}>
            <i className="far fa-angle-right" />
          </div>
        </div>

        {/*=== Partner Slider ===*/}
        <Slider
          {...partnerSliderTwo}
          ref={(c) => (this.slider = c)}
          className="partner-slider-two"
        >
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
      </Fragment>
    );
  }
}
