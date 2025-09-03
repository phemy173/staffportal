import React from "react";
import styles from "./Footer.css"
function Footer() {
    
    return (
        <footer class="footer bg-success text-white">
            <div className="row p-5">
                <div className="col-sm-4 flex">
                        <li className="nav-item" ><a  className="" href="#">Home</a></li>
                        <li><a href="#">Departments</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Support</a></li>
                </div>
                <div className="col-sm-4">
                    <h5>Contact Information</h5>
                    <p>HR: +234 812 345 6789</p>
                    <p>IT: +234 900 800 7000</p>
                </div>
                <div className="col-sm-4">
                    <img src="../images/gsl-logo.png" alt="gsl-logo" className="img-fluid" style={{width:"3rem"}} />
                    <p>2025 Greensprings School. <br/>All rights reserved.</p>
                </div>
            </div>
            <p>&copy; GSL IT Dept.</p>
        </footer>
    )
}
export default Footer;