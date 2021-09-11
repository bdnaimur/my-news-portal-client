import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
    const description = post.description;
    const descriptionLength = description.substring(0,100);

    return (
        <div class="post-content">
                <div class="row">
                  <div class="col-md-4">
                  <Link class="post-img" to={`/postDetails/${post._id}`}>
                      <img src={post.imgUrl} alt="" />
                    </Link>
                  </div>
                  <div class="col-md-8">
                    <div class="inner-content clearfix">
                      <h3>
                      <Link to={`/postDetails/${post._id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <div class="post-information">
                        <span>
                          <i class="fa fa-tags" aria-hidden="true"></i>
                          <a href="category.php">{post.category}</a>
                        </span>
                        <span>
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                         {post.date}
                        </span>
                      </div>
                      <p class="description">
                        {descriptionLength} ...
                      </p>
                      <Link to={`/postDetails/${post._id}`}>
                          <button class="read-more pull-right" >
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