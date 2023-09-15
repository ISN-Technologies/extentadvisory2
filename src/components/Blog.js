import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog-section pt-120 pb-90 p-r z-1">
      <svg
        className="shape shape-one"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="770px"
        height="287px"
      >
        <path
          fillRule="evenodd"
          opacity="0.039"
          fill="#ffbf00"
          d="M769.184,286.494 L477.558,45.033 L208.005,179.475 L-0.013,0.888 L-0.013,286.494 L769.184,286.494 Z"
        />
      </svg>
      <div className="shape shape-two">
        <span />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            {/*=== Common Heading ===*/}
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Articles &amp; News</span>
              <h2>Learn &amp; get updated</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div
              className="blog-post-item-one mb-40 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="post-thumbnail">
                <img src="assets/images/blog/img-1.jpg" alt="Blog Image" />
                <span className="post-date">
                  <a href="#">
                    16<span>Jul</span>
                  </a>
                </span>
              </div>
              <div className="entry-content">
                <div className="post-meta">
                  <ul>
                    <li>
                      <span>
                        <a href="#">Business</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="#">Comments (05)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 className="title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Foreign Exchange Regulations Amended</a>
                  </Link>
                </h3>
                <p>
                  Some restrictions on dealings in foreign currency eased,
                  penalties and fines reviewed , non registration of foreign
                  loan penalty raised.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="btn-link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div
              className="blog-post-item-one mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="post-thumbnail">
                <img src="assets/images/blog/img-2.jpg" alt="Blog Image" />
                <span className="post-date">
                  <a href="#">
                    25<span>Mar</span>
                  </a>
                </span>
              </div>
              <div className="entry-content">
                <div className="post-meta">
                  <ul>
                    <li>
                      <span>
                        <a href="#">Business</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="#">Comments (05)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 className="title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Foreign Exchange Regulations Amended</a>
                  </Link>
                </h3>
                <p>
                  Some restrictions on dealings in foreign currency eased,
                  penalties and fines reviewed , non registration of foreign
                  loan penalty raised.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="btn-link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div
              className="blog-post-item-one mb-40 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="post-thumbnail">
                <img src="assets/images/blog/img-3.jpg" alt="Blog Image" />
                <span className="post-date">
                  <a href="#">
                    25<span>Mar</span>
                  </a>
                </span>
              </div>
              <div className="entry-content">
                <div className="post-meta">
                  <ul>
                    <li>
                      <span>
                        <a href="#">Business</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="#">Comments (05)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 className="title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Foreign Exchange Regulations Amended</a>
                  </Link>
                </h3>
                <p>
                  Some restrictions on dealings in foreign currency eased,
                  penalties and fines reviewed , non registration of foreign
                  loan penalty raised.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="btn-link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
