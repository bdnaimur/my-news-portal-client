import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
    const description = post.description;
    const descriptionLength = description.substring(0,100);
    const handleDisplayDetails = (id) =>{
      
    }
    return (
        <div class="post-content">
                <div class="row">
                  <div class="col-md-4">
                    <a class="post-img" href="">
                      <img src={post.imgUrl} alt="" />
                    </a>
                  </div>
                  <div class="col-md-8">
                    <div class="inner-content clearfix">
                      <h3>
                        <a href="">
                          {post.title}
                        </a>
                      </h3>
                      <div class="post-information">
                        <span>
                          <i class="fa fa-tags" aria-hidden="true"></i>
                          <a href="category.php">{post.category}</a>
                        </span>
                        <span>
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          01 Nov, 2021
                        </span>
                      </div>
                      <p class="description">
                        {descriptionLength} ...
                      </p>
                      <Link to="/postDetails">
                          <button  onClick={(e)=>handleDisplayDetails(post._id)} class="read-more pull-right" >
                            read more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default PostItem;