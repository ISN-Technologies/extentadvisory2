import Link from "next/link";

const TeamOverview = () => {
  return (
    <section className="team-section pt-125 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*=== Common Heading ===*/}
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Meet Our Team</span>
              {/* <h2>Experienced Team Members</h2> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Single Team Item ===*/}
            <div
              className="single-team-item mb-40 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="img-holder">
                <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                <svg
                  className="team-shape"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="213px"
                  height="80px"
                >
                  <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                </svg>
                <span className="share-btn">
                  <i className="far fa-share-alt" />
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/team-details">
                    <a>Neema Ayoub Magimba</a>
                  </Link>
                </h3>
                <p className="position">Managing Partner</p>
                <p className="mail">
                  <i className="far fa-envelope" />
                  <a href="mailto:neema.magimba@extentcorporate.co.tz">
                    neema.magimba@extentcorporate.co.tz
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Single Team Item ===*/}
            <div
              className="single-team-item mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img-holder">
                <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                <svg
                  className="team-shape"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="213px"
                  height="80px"
                >
                  <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                </svg>
                <span className="share-btn">
                  <i className="far fa-share-alt" />
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/team-details">
                    <a>Nabiry Juma Jumanne</a>
                  </Link>
                </h3>
                <p className="position">Partner</p>
                <p className="mail">
                  <i className="far fa-envelope" />
                  <a href="mailto:nabiry.juma@extentcorporate.co.tz">
                    nabiry.juma@extentcorporate.co.tz
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Single Team Item ===*/}
            <div
              className="single-team-item mb-40 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="img-holder">
                <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                <svg
                  className="team-shape"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="213px"
                  height="80px"
                >
                  <path d="M212.734,79.031 L132.079,12.251 L57.530,49.433 L-0.001,0.042 L-0.001,79.031 L212.734,79.031 Z" />
                </svg>
                <span className="share-btn">
                  <i className="far fa-share-alt" />
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text text-center">
                <h3 className="title">
                  <Link legacyBehavior href="/team-details">
                    <a>Jeremiah Caleb Odinga</a>
                  </Link>
                </h3>
                <p className="position">Managing Partner</p>
                <p className="mail">
                  <i className="far fa-envelope" />
                  <a href="mailto:jeremiah.caleb@extentcorporate.co.tz">
                    jeremiah.caleb@extentcorporate.co.tz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamOverview;
