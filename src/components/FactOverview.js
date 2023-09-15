import Counter from "./Counter";
const FactOverview = () => {
  return (
    <section className="fact-section p-r z-2 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-12">
            {/*=== Fact image box ===*/}
            <div className="fact-img_one-box text-right pr-lg-60 mb-50">
              <div className="quote-box-three text-left wow fadeInLeft z-1">
                <h3>
                  We Have 5 Years Of Experience in Legal Consulting Services
                </h3>
                <div className="author-thumb-title d-flex align-items-center">
                  <div className="author-thumb">
                    <img src="assets/images/author-1.jpg" alt="Author Image" />
                  </div>
                  <div className="author-title">
                    <h4 className="title">Neema Ayoub Mgimba</h4>
                    <p className="position">Managing Partner</p>
                  </div>
                </div>
              </div>
              <img
                src="assets/images/gallery/img-1.jpg"
                className="wow fadeInDown"
                alt="Fact image"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-12">
            {/*=== Fact content Box ===*/}
            <div className="fact-one_content-box mb-10">
              <div className="section-title section-title-left wow fadeInDown">
                <span className="sub-title">Who We Are</span>
                <h2>We’re Committed to Creating Change</h2>
              </div>
              <p className="wow fadeInUp">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium totam rem apereaque abillo
                inventore veritatis quasi architecto beatae
              </p>
              <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                <div className="icon">
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
                <div className="text d-flex justify-content-between align-items-center">
                  <h2 className="number">
                    <Counter end={29} />
                  </h2>
                  <h5>Projects Completed in Last 5 Years</h5>
                </div>
              </div>
              <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                <div className="icon">
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
                <div className="text d-flex justify-content-between">
                  <h2 className="number">
                    <Counter end={68} />
                  </h2>
                  <h5>Happy Global Customers Who Trusted Us</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FactOverview;
