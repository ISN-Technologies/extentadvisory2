import SimpleFaq from "./SimpleFaq";

const FAQOverview = () => {
  return (
    <section className="faq-section mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*=== Faq Content Box ===*/}
            <div className="faq-one_content-box mb-50 wow fadeInLeft">
              <div className="section-title section-title-left">
                <span className="sub-title">Faqs</span>
                <h2>Have Any Questions ? Question &amp; Answer</h2>
              </div>
              <blockquote>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam aperiam
              </blockquote>
              <ul className="check-style-one">
                <li>Reflection 2022 Desktop Wallpapers Edition</li>
                <li>Designing A Better Infinite Scroll</li>
              </ul>
              <div className="faq-button">
                <a href="#" className="main-btn filled-btn">
                  Explore More Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="faq-accordion-one mb-50 wow fadeInRight"
              id="accordionOne"
            >
              <SimpleFaq />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQOverview;
