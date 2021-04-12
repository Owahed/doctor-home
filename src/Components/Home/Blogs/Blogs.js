import React from 'react';
import cadui from '../../../images/Ellipse 1.png'
import aliza from '../../../images/Ellipse 3.png'
import BlogDetails from '../BlogDetails/BlogDetails';



const blogs =[
    {
        name:'Rashed Kabir',
        date:'22 Aug 2018',
        header:"Check at least a doctor in a year for your teeth ",
        details:'_____________________________________',
        img:''
    },
    {
        name:'Dr. Cadui',
        date:'03 April 2020',
        header:"2 times of brush in day can keep you healthy ",
        details:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus commodi iste eius perspiciatis odio quaerat corrupti illum obcaecati, aliquid ipsam.',
        img:cadui
    },
    {
        name:'Dr. Aliza  Harry',
        date:'07 April 2020',
        header:"The tooth cancer is taking a challenge",
        details:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus commodi iste eius perspiciatis odio quaerat corrupti illum obcaecati, aliquid ipsam.',
        img:aliza
    }
]

const Blogs = () => {
    return (
        <section>
            <div className="text-center">
                <h5>Our Blogs</h5>
                <h1>From Our Blogs News</h1>
               
            </div>
            <div className="row mt-5 pt-5">
                {
                    blogs.map(blog=><BlogDetails blog={blog}></BlogDetails>)
                }
            </div>
        </section>
    );
};

export default Blogs;