import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      className="cta-section bg_cover p-r z-1 pt-70 pb-50"
      style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/*=== Common Heading ===*/}
            <div className="section-title text-white mb-30 wow fadeInLeft">
              <h2>Get Free Consultations! We’re Here to Help </h2>
            </div>
          </div>
          <div className="col-lg-5">
            {/*=== CTA Button ===*/}
            <div className="cta-button float-lg-right mb-30 wow fadeInRight">
              <Link legacyBehavior href="/team">
                <a className="main-btn btn-white">Get Free Consultations</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
