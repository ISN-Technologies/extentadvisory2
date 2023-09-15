import Link from "next/link";
import Slider from "react-slick";
import { projectsSliderOne } from "../sliderProps";

const ProjectOverview = () => {
  return (
    <section className="project-section pt-75 pb-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            {/*=== Common Heading ===*/}
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Latest Project &amp; Case</span>
              <h2>Let’s Looks Our Global Projects</h2>
            </div>
          </div>
        </div>
        {/*=== Project Slider ===*/}
        <Slider {...projectsSliderOne} className="projects-slider-one">
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-1.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-2.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon d-flex">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-3.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-4.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-5.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Project Item ===*/}
          <div className="project-item wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/project/img-2.jpg" alt="Project Image" />
              <div className="project-hover">
                <div className="hover-content d-flex">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="icon">
                    <i className="flaticon-finance" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Financial Management</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default ProjectOverview;
