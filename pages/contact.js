import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Information Image Box ===*/}
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/contact/img-1.jpg"
                  alt="Contact Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Information Content Box ===*/}
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Ready to Work Together! Join With Fintex</h2>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Location</h3>
                    <p>
                      {" "}
                      7th Floor Tanzanite Park, Victoria Area, New Bagamoyo
                      Road, Dar es Salaam
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Email Us</h3>
                    <p>
                      <a href="mailto:support@extentadvisory.co.tz">
                        support@extentadvisory.co.tz
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Phone Number</h3>
                    <p>
                      <a href="tel:+255766000000">+255 766 000 000</a> |
                      &nbsp;
                      <a href="tel:+25522000000">+255 22 000 000</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information Section ======*/}

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Contact Content Box ===*/}
              <div className="contact-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left                                                                                                    ">
                  <span className="sub-title">Contact Us</span>
                  <h2>Have any Question On Mind! Say Hi</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium totam rem aperiames abillo
                  inventore veritatis quasi architecto beatae
                </p>
                <div className="social-box">
                  <h3 className="title">Follow Us</h3>
                  <ul className="social-link">
                    <li>
                      <a href="https://linkedin.com/company/extent-corporate-advisory/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/advisoryextent">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li>
                      <a href="https://instagram.com/extentcorporate">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== Contact Form Box ===*/}
              <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone"
                          name="phone"
                          required=""
                        />
                        <i className="far fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="wide">
                          <option data-display="Subject">Subject</option>
                          <option value={1}>Customer Support</option>
                          <option value={2}>Customer Support</option>
                        </select>
                        <i className="far fa-question" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          name="message"
                          placeholder="Write your Message"
                          defaultValue={""}
                        />
                        <i className="far fa-pencil" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_checkbox">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFor="check1">
                          <span>
                            I agree that my data is collected and stored.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default Contact;
