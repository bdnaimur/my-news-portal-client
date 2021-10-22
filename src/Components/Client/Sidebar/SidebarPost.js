import React from 'react';
import { Link } from 'react-router-dom';

const SidebarPost = ({post}) => {
    return (
        <div class="recent-post">
            <a class="post-img" href="">
                <img src={post.imgUrl} alt=""/>
            </a>
            <div class="post-content">
                <h5><a href="single.php">{post.title}</a></h5>
                <span>
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <a href='category.php'>{post.category}</a>
                </span>
                <span>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    {post.date}
                </span>
                <Link to={`/postDetails/${post._id}`}>
                <a class="read-more bg-warning" href="">read more</a>
                </Link>
            </div>
        </div>
    );
};

export default SidebarPost;