import React from 'react';

const BusinessSingle = ({business}) => {
    return (
        <div id="main-content">
        <div class="container">
          <div class="row">
            <div class="offset-md-2 col-md-8">
              {/* <!-- post-container --> */}
              <div class="post-container">
                <div class="post-content single-post">
                  <h3>{business.title}</h3>
                  <div class="post-information">
                    <span>
                      <i class="fa fa-tags" aria-hidden="true"></i>
                      {business.category}
                    </span>
                    <span>
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <a href="author.php">Admin</a>
                    </span>
                    <span>
                      <i class="fa fa-calendar" aria-hidden="true"></i>
                      01 Nov, 2021
                    </span>
                  </div>
                  <img
                    class="single-feature-image"
                    src={business.imgUrl}
                    alt=""
                  />
                  <p class="description">{business.description}</p>
                </div>
              </div>
              {/* <!-- /post-container --> */}
            </div>
            {/* <?php include 'sidebar.php'; ?> */}
          </div>
        </div>
      </div>
    );
};

export default BusinessSingle;