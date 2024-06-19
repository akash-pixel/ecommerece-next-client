
import ProductContainer from "@/components/product-container/product-container.component";
import "./globals.css"
import "./style.css"
import Footer from "@/components/footer/footer";
import ImageSwiper from "@/components/image-swiper/image-swiper";

function App() {

    const url = "https://media.istockphoto.com/id/1467126728/photo/modern-scandinavian-and-japandi-style-bedroom-interior-design-with-bed-white-color-wooden.jpg?s=2048x2048&w=is&k=20&c=rH-g41fAFCZgBzStL9TayRqcxhkovnYEMb3yHXEIlvU="

    const products = [
        { Name: "Name 1", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Stylish sofa", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
        { Name: "Grifo", Description: "Small Mug", Price: 100, Image: url },
    ];

    return (
        <div>
            <div className="banner">
                <div className="banner-content">
                    <h2 className="banner-subtitle">New Arrival</h2>
                    <h1 className="banner-title">Discover Our New Collection</h1>
                    <p className="banner-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="banner-button">BUY NOW</button>
                </div>
            </div>

            <div className="browse-range">
                <h2 className="section-title">Browse The Range</h2>
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="categories">
                    <div className="category-card">
                        <img src="https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.jpg?s=1024x1024&w=is&k=20&c=llPbp8xlpfeqd1-hTre0zYbQMi-0-RGaPCaElbFxFxU=" alt="Dining" className="category-image" /> {/* Replace with actual image path */}
                        <p className="category-title">Dining</p>
                    </div>
                    <div className="category-card">
                        <img src="https://media.istockphoto.com/id/1333060261/photo/modern-living-room-interior-design.jpg?s=2048x2048&w=is&k=20&c=kd9D4Czh0ldEr1kC_Dj2sz5qUgWwrWLnpUqZOUks6hg=" alt="Living" className="category-image" /> {/* Replace with actual image path */}
                        <p className="category-title">Living</p>
                    </div>
                    <div className="category-card">
                        <img src="https://media.istockphoto.com/id/1467126728/photo/modern-scandinavian-and-japandi-style-bedroom-interior-design-with-bed-white-color-wooden.jpg?s=2048x2048&w=is&k=20&c=rH-g41fAFCZgBzStL9TayRqcxhkovnYEMb3yHXEIlvU=" alt="Bedroom" className="category-image" /> {/* Replace with actual image path */}
                        <p className="category-title">Bedroom</p>
                    </div>
                </div>
            </div>

            <div className="browse-product">
                <h2 className="section-title">Our Products</h2>
                <ProductContainer products={products} />
            </div>
            <ImageSwiper />

            <Footer />
        </div>
    );
}



export default App;