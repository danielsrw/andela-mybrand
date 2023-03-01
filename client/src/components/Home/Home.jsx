import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer, NavBar } from '../'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/user/posts`)
        .then((res) => {
            setBlogs(res.data.blogs);
            setInterval(() => {
            setLoading(false);
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
            setInterval(() => {
            setLoading(false);
            }, 1000);
        });
    }, []);

    const handlePost = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div>
            <NavBar />
            <div className="wrapper">
                <section className="hero">
                    <div className="jumbotron jumbotron-fluid mb-0">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-md-10 col-lg-6">
                                    <h1 className="display-5">Hello World, This is my Brand</h1>

                                    <p className="lead">
                                        You can find world trending news here...
                                    </p>

                                    <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="/blog" role="button">See my posts</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec-about" className="sec-about pt-5 pb-5">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-10 col-lg-8">
                                <h1 className="h4">About us</h1>
                                <p className="mt-4 mb-4">Co-working spaces are brilliant for smaller companies of up to 4 people who want a regular workspace. Cost effective, flexible and full of a vibrant energy that comes from hundreds of like-minded people going it alone.</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-4">
                                <h4>350</h4>
                                <hr />
                                <h5>members</h5>
                            </div>
                            <div className="col-sm-4">
                                <h4>60</h4>
                                <hr />
                                <h5>co-working spaces </h5>
                            </div>
                            <div className="col-sm-4">
                                <h4>3</h4>
                                <hr />
                                <h5>members' bars</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sec-pricing" className="sec-pricing">
                    <div className="container">
                        <h1 className="h4 mb-5 text-center">Trending Blogs</h1>
                        <div className="row justify-content-center">
                        {blogs.length > 0 ? (
                            blogs.reverse().map((blog) => {
                                return (
                                    <div
                                        className="col-md-4 px-5"
                                        key={blog._id}
                                        onClick={() => {
                                            handlePost(blog._id);
                                        }}
                                    >
                                        <div className="card text-center p-2">
                                            <div className="card-block">
                                            {blog.cloudinaryId ? (
                                                <img src={blog.image} className='w-100' alt="" />
                                            ) : null}
                                                <h4 className="card-title h5">{blog.title}</h4>
                                                <p className="card-text"></p>
                                                <a href="#" className="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            ) : (
                            <>
                                <h1>No Blogs Avaliable</h1>
                                <p>Write Your own Blog !!</p>
                            </>
                        )}
                        </div>
                    </div>
                </section>

                <section id="sec-contact" className="sec-contact pt-5 pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-7">
                                <h1 className="h4">Have a question? Get in touch with us!</h1>
                                <form action="" method="">
                                    <fieldset className="form-group">
                                        <label for="formName">Your Name:</label>
                                        <input id="formName" className="form-control" type="text" placeholder="Your Name" required />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label for="formEmail1">Email address:</label>
                                        <input id="formEmail1" className="form-control" type="email" placeholder="Enter email" required />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label for="formMessage">Your Message:</label>
                                        <textarea id="formMessage" className="form-control" rows="3" placeholder="Your message" required></textarea>
                                    </fieldset>
                                    
                                    <fieldset className="form-group text-center">
                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home
