"use client"

// export default function ProductListPage() {
//     const [productList, setProductList] = useState<any[]>([]);
//     useEffect(() => {
//         getProducts().then(productList => {
//             if (!productList) return;
//             setProductList(productList);
//         })
//     }, []);
//     return <>
//         <div>
//             Product
//             {
//                 productList.map(product => <ProductCard product={product} />)p
//             }
//         </div>
//     </>
// }


import React from 'react';
import { FaShippingFast, FaLock, FaUndo, FaHeadset } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const products = [
    { id: 1, name: 'Smart Watch Series 7, White', price: 449, rating: 4, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'VR01 Virtual Reality Glasses', price: 340.99, rating: 4.5, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Wireless Bluetooth Headphones Sony', price: 357, rating: 3.5, image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Laptop Apple MacBook Pro 13 M2', price: 1200, rating: 4.8, image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Tablet Apple iPad Air M1', price: 540, rating: 4, image: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Headphones Apple AirPods 2 Pro', price: 209.99, rating: 4.5, image: 'https://via.placeholder.com/50' },
    { id: 7, name: 'Power Bank PB 10000 mAh Black', price: 49.99, rating: 4, image: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Apple iPhone 14 128GB White', price: 899, rating: 4.5, image: 'https://via.placeholder.com/50' },
];

const ProductListPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img src="https://via.placeholder.com/300" alt="MacBook" className="w-full h-48 object-cover rounded" />
                        <h2 className="text-xl font-bold mt-4">MacBook Pro</h2>
                        <p className="text-gray-600">Be Pro Anywhere</p>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">From $199</button>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
                        <ul className="space-y-4">
                            {products.slice(0, 5).map((product) => (
                                <li key={product.id} className="flex items-center space-x-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <h3 className="text-lg font-bold">{product.name}</h3>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((star, index) => (
                                                <span key={index}>
                                                    {index < Math.floor(product.rating) ? <AiFillStar className="text-yellow-500" /> : <AiOutlineStar className="text-yellow-500" />}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-200 p-4 rounded-lg">
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
                                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                                <div className="flex items-center">
                                    {[...Array(5)].map((star, index) => (
                                        <span key={index}>
                                            {index < Math.floor(product.rating) ? <AiFillStar className="text-yellow-500" /> : <AiOutlineStar className="text-yellow-500" />}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaShippingFast className="text-blue-500" />
                        <span>Free Shipping & Returns</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaLock className="text-blue-500" />
                        <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaUndo className="text-blue-500" />
                        <span>Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaHeadset className="text-blue-500" />
                        <span>24/7 Customer Support</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductListPage;

