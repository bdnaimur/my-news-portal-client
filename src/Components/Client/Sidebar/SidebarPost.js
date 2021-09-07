import React from 'react';

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
                    01 Nov, 2021
                </span>
                <a class="read-more" href="single.php">read more</a>
            </div>
        </div>
    );
};

export default SidebarPost;