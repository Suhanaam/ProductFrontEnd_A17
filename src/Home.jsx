import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <div className="container-fluid p-0">
   
    {/* Hero Section */}
    <section className="hero-section bg-light py-5">
        <div className="container d-flex align-items-center">
            <div className="row w-100">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 className="display-4 fw-bold text-primary">
                        Welcome to RayanMart
                    </h1>
                    <p className="lead text-secondary">
                       <h3>Your One-Stop Shop For Everything You Need!</h3> 
                        Discover the latest deals,trending products, and exclusive collections-all in one place...
                    </p>
                    
                </div>
                <div className="col-lg-6 text-center">
                    <img
                        src="/images/shopy.jpg"
                        alt="Shopping"
                        className="img-fluid rounded shadow-lg w-100"
                        style={{ maxHeight: "450px", objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-light text-center py-3">
        <p className="mb-0 text-muted">
            &copy; 2024 RayanMart. All rights reserved.
        </p>
    </footer>
</div>
  )
}

export default Home