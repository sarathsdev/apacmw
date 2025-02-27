import {React} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';



export default function Home() {
    const products = [
        { name: 'Nginx', logo: '/images/nginx-logo.png', link: 'https://nginx.org/' },
        { name: 'Apache HTTP Server', logo: '/images/apache-logo.png', link: 'https://httpd.apache.org/' },
        { name: 'Tomcat', logo: '/images/tomcat-logo.png', link: 'https://tomcat.apache.org/' },
        { name: 'IBM HTTP Server', logo: '/images/ibm-logo.png', link: 'https://www.ibm.com/products/http-server' },
        { name: 'WebSphere ND', logo: '/images/websphere-logo.png', link: 'https://www.ibm.com/products/websphere-nd' },
        { name: 'Oracle HTTP Server', logo: '/images/oracle-logo.png', link: 'https://www.oracle.com/middleware/technologies/http-server.html' },
        { name: 'WebLogic', logo: '/images/weblogic-logo.png', link: 'https://www.oracle.com/middleware/technologies/weblogic.html' }
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="home-container">
            
            {/* Header Section */}
            <header className="welcome-section">
                <h1>Welcome to the APAC Middleware Team </h1>
                <p>
                    We ensures the seamless deployment, maintenance, and optimization
                    of enterprise middleware solutions. We specialize in web servers, application servers,
                    and integration platforms, providing robust and scalable solutions to drive business success.
                </p>
                <p>
                    Explore our suite of industry-leading middleware products below and learn more about
                    the technology powering our infrastructure.
                </p>
                <a href="#carousel" className="cta-button">Explore Our Solutions</a>
            </header>

            {/* Carousel Section */}
            <main id="carousel" className="carousel-container">
                <h2>Our Middleware Solutions</h2>
                <Carousel responsive={responsive} infinite autoPlay  arrows={false} autoPlaySpeed={3000}>
                    {products.map((product, index) => (
                        <div className="carousel-card" key={index}>
                            <div className="logo-container">
                                <img src={product.logo} alt={`${product.name} logo`} className="product-logo" />
                            </div>
                            <h3>{product.name}</h3>
                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">
                                Learn More
                            </a>
                        </div>
                    ))}
                </Carousel>
            </main>
           
        </div>
    );
}