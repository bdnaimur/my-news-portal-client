import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { postId } = useParams();
    const [details, setDetails] =useState({})
    const[dataReceive, setDatareceive] = useState(false)
    console.log(postId,details);
    useEffect(() => {
        const url = "https://intense-fjord-22962.herokuapp.com/posts";
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDatareceive(true)
                console.log(data);
                const clickedPost = data.filter(dt => dt._id == postId);
                setDetails(clickedPost[0]);
            })
    }, [postId, dataReceive])
    return (

        <div id="main-content">
        <div class="container">
            <div class="row">
                <div class="offset-md-2 col-md-8">
                  {/* <!-- post-container --> */}
                    <div class="post-container">
                        <div class="post-content single-post">
                            <h3>{details.title}</h3>
                            <div class="post-information">
                                <span>
                                    <i class="fa fa-tags" aria-hidden="true"></i>
                                    {details.category}
                                </span>
                                {/* <span>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <a href='author.php'>Admin</a>
                                </span> */}
                                <span>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    01 Nov, 2021
                                </span>
                            </div>
                            <img class="single-feature-image" src={details.imgUrl} alt=""/>
                            <p class="description">
                                {details.description}
                            </p>
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

export default PostDetails;