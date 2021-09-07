import React from 'react';
import SidebarPost from './SidebarPost';

const Sidebar = ({postData}) => {
    const latestPostData = postData.slice(0,5);
    console.log(latestPostData);
    return (
        <div id="sidebar" class="col-md-4">
    {/* <!-- search box --> */}
    <div class="search-box-container">
        <h4>Search</h4>
        <form class="search-post" action="search.php" method ="GET">
            <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="Search ....."/>
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-danger">Search</button>
                </span>
            </div>
        </form>
    </div>
    {/* <!-- /search box --> */}
    {/* <!-- recent posts box --> */}
    <div class="recent-post-container">
        <h4>Recent Posts</h4>
        {latestPostData.map(post=><SidebarPost post={post}></SidebarPost>)}
    </div>
    {/* <!-- /recent posts box --> */}
</div>
    );
};

export default Sidebar;