import React from 'react'
import { Helmet } from 'react-helmet'

export default function Footer() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/responsive.css" rel="stylesheet" />
            </Helmet>
            <footer className="footer_section">
                <div className="container">
                    <p>
                        © <span id="displayDateYear" /> All Rights Reserved By
                        <a href="">Free Html Templates</a>
                    </p>
                </div>
            </footer>
            <Helmet>
                <script src="js/jquery-3.4.1.min.js"></script>
                <script src="js/bootstrap.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                </script>
                <script src="js/custom.js"></script>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
            </Helmet>
        </div>

    )
}
