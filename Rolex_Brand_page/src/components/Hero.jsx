const Hero = () => {

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>TIME IS LUXURY <span>WELL</span><span className="span-2">SPENT</span></h1>
                <p> Explore the latest collections, cutting-edge designs, and exclusive collaborations
                </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn ">Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
            </div>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
                
            </div>
            </div>
            <div className="hero-image">
                <img src="/images/r1.png" alt="hero-img"  height="530px" width="680px"/>
            </div>
        </main>

    );
};

export default Hero;