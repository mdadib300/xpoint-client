import ScrollToTop from "../../../Components/ScrollToTop";
import Title from "../../../Components/Title/Title";


const AboutUs = () => {
    return (
        <div className="px-3 md:px-7 bg-white text-black">
            <ScrollToTop></ScrollToTop>
            <Title heading={'About Us'} subheading={'About us and Contact info.'}></Title>
            <h3 className="text-xl md:text-2xl font-semibold my-3">Welcome to XPoint – Redefining Men’s Fashion in Bangladesh</h3>
            <p>At XPoint, we are more than just a clothing brand — we are a destination for men who appreciate quality, elegance, and individuality. Founded in Keraniganj, Dhaka, XPoint was born out of a passion for redefining what modern menswear can be: stylish yet comfortable, premium yet accessible.</p>
            <br />
            <p>XPoint is a premium men's clothing brand that focuses on combining timeless aesthetics with contemporary trends. Our goal is to empower men to look sharp and feel confident — whether they're dressing for work, weekends, or special occasions. We believe your outfit should reflect your ambition, personality, and lifestyle.</p>
            <br />
            <h3 className="text-xl md:text-2xl font-semibold my-3">What Makes Us Different</h3>
            <p><b>Premium Craftsmanship:</b> Every product at XPoint is thoughtfully designed and precisely tailored. We source high-quality fabrics and materials to ensure lasting comfort, durability, and a refined finish.</p><br />
            <p><b>Sophisticated Style:</b> From smart casuals to urban streetwear, from modern formalwear to everyday essentials — our collection caters to the evolving taste of today’s man. Whether you're after structured blazers, tailored pants, luxe cargos, or minimalist tees, we bring a unique edge to every piece.</p><br />
            <p><b>Bangladeshi Roots, Global Inspiration:</b> Inspired by global fashion trends but rooted in local culture, our designs reflect the sophistication of international menswear while understanding the needs and fit preferences of South Asian men.</p><br />
            <p><b>Customer-First Philosophy:</b> At XPoint, our customers are at the center of everything we do. We’re not just here to sell clothes — we’re here to build relationships. Our customer service, fitting support, and shopping experience are designed to help you find exactly what suits you best.</p><br />
            <h3 className="text-xl md:text-2xl font-semibold my-3">What Makes Us Different</h3>
            <p className="mb-5">To become Bangladesh’s most trusted and admired premium menswear brand — where quality, comfort, and confidence meet. We envision a future where XPoint sets the standard for luxury and style in South Asian men’s fashion.</p>
            <h1 className="text-2xl md:text-3xl font-bold text-center my-5">Contact Us</h1>
            <div className="text-center pb-7">
                <p className="mb-2"><b>Email Address: </b>info@xpointbd.com</p>
                <p className="mb-2"><b>Phone Number: </b>+880 1797-430886</p>
                <p className="mb-2"><b>Location: </b>Minnat Plaza, Shop no.: 101, 102, 103, Abdullahpur Bazar, South Keraniganj, Dhaka - 1310</p>
            </div>
        </div>
    );
};

export default AboutUs;