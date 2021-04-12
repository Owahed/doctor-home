import React from 'react';

const BlogDetails = ({ blog }) => {
    return (
        <section  className="col-md-4 ">
            <div style={{padding:"35px"}} className="container">
                <div className="d-flex justify-content-center">
                    <div style={{ marginRight: "20px"}}>
                        <img style={{height:"50px"}} src={blog.img} alt="" />
                    </div>
                    <div >
                        <h6>{blog.name}</h6>
                        {blog.date}
                    </div>
                </div>
            
            <div className="mt-5">
                <h5>{blog.header}</h5>
                <p className="text-secondary">{blog.details}</p>
            </div>
            </div>
        </section>
    );
};

export default BlogDetails;