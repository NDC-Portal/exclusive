import axios from "axios";
import React, { useEffect, useState } from "react";
function Main() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [flashSaleProducts,setFlashSaleProducts]=useState([])

    useEffect(() => {
        const endDate = new Date('Dec 31, 2024 23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = endDate - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    // fetchFlashSaleProducts
    useEffect(()=>{
        const fetchFlashSaleProducts=async () =>{
            try{
                const response=await axios.get('https://dummyjson.com/products')
                const productsData=response.data.products
                console.log("products",productsData)
                setFlashSaleProducts(productsData)
            }
            catch(error){
                console.log("Error fetching products:",error)
            }
        }
        fetchFlashSaleProducts()
    })
    const ratingPercentage = (flashSaleProducts.rating/ 5) * 100;
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">
                            <ul className="list-group list-group-flush border-end cursor-pointer">
                                <li className="list-group-item">Woman's Fashion <span className="float-end"><i class="fas fa-chevron-right"></i></span></li>
                                <li className="list-group-item">Men's Fashion <span className="float-end"><i class="fas fa-chevron-right"></i></span></li>
                                <li className="list-group-item">Electronics</li>
                                <li className="list-group-item">Home & Lifestyle</li>
                                <li className="list-group-item">Medicine</li>
                                <li className="list-group-item">Sports & Outdoor</li>
                                <li className="list-group-item">Baby's & Toys</li>
                                <li className="list-group-item">Groceries & Pets</li>
                                <li className="list-group-item">Health & Beauty</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner mt-3">
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                                            <div>
                                                <div className="d-flex mb-3">
                                                    <img src={"/images/appleicon.png"} alt="iPhone" className="img-fluid" style={{ maxWidth: "40px" }} />
                                                    <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                                                </div>
                                                <h2>Up to 10% off Voucher</h2>
                                                <button className="btn text-light mt-3"> <span className="text-decoration-underline">Shop Now</span> &rarr;</button>
                                            </div>
                                            <img src={"/images/iphone.jpg"} alt="iPhone" className="img-fluid" style={{ maxWidth: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                                            <div>
                                                <div className="d-flex mb-3">
                                                    <img src={"/images/appleicon.png"} alt="iPhone" className="img-fluid" style={{ maxWidth: "40px" }} />
                                                    <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                                                </div>
                                                <h2>Up to 10% off Voucher</h2>
                                                <button className="btn text-light mt-3"> <span className="text-decoration-underline">Shop Now</span> &rarr;</button>
                                            </div>
                                            <img src={"/images/iphone.jpg"} alt="iPhone" className="img-fluid" style={{ maxWidth: "40%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* flash sale section */}
            <section>
                <div className="container my-5">
                    <div className="today d-flex my-5">
                        <div className="bg-danger" style={{ width: "20px", height: "40px" }}></div>
                        <span className="text-danger fs-5 ms-3">Today’s</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-start">Flash Sales</h2>
                        <div className="d-flex justify-content-start my-5">
                            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                                <div key={index} className="time-box mx-2 text-center p-2 bg-white text-dark">
                                    <small style={{fontSize:"15px"}}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
                                    <span className="d-block display-4 fs-1">{timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <i class="fas fa-arrow-left btn btn-outline-dark me-2"></i>
                            <i class="fas fa-arrow-right btn btn-outline-dark"></i>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                        {flashSaleProducts.map((item, idx) => (
                            <div className="col" key={idx}>
                                <div className="card h-100 position-relative product-card" style={{ cursor: 'pointer' }}>
                                    <div className="position-relative" style={{ height: "250px" }}>
                                        <img src={item.images[0]} className="card-img-top mt-5 ms-3" alt="Product" />
                                        <div className="badge bg-danger position-absolute top-0 start-0">
                                            {item.discountPercentage} %
                                        </div>
                                        <button className="btn btn-dark w-100 add-to-cart-btn">Add To Cart</button>
                                    </div>
                                    <div className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2" style={{ zIndex: 1 }}>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-heart"></i>
                                        </span>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-eye"></i>
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <div>
                                            <span className="text-danger fs-5">{item.price*item.discountPercentage}$</span>
                                            <span className="text-muted text-decoration-line-through ms-2">{item.price}$</span>
                                        </div>
                                        <div className="mt-2">
                                            {[...Array(item.rating)].map((star, index) => (
                                                <span key={index} className="text-warning">&#9733;</span>
                                            ))}
                                            <span className="text-muted ms-2">({ratingPercentage.toFixed(2)})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-danger">View All Products</button>
                    </div>
                </div>
            </section>
            {/* categories section*/}
            <section>
                <div className="categories container my-5">
                    <div className="today d-flex my-5">
                        <div className="bg-danger" style={{ width: "20px", height: "40px" }}></div>
                        <span className="text-danger fs-5 ms-3">Categories</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-start">Browse By Category</h2>
                        <div>
                            <i class="fas fa-arrow-left btn btn-outline-dark me-2"></i>
                            <i class="fas fa-arrow-right btn btn-outline-dark"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4550_382)">
                                        <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25.6665 7H31.1353" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <line x1="15.1665" y1="39.8334" x2="40.8332" y2="39.8334" stroke="black" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4550_382">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h4>Phones</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4899_4299)">
                                        <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.3335 46.6666H39.6668" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M35 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 32H48" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4899_4299">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>



                                <h4>Computers</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4899_2139)">
                                        <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 42V49H35V42" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 14V7H35V14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <line x1="24" y1="23" x2="24" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <line x1="28" y1="28" x2="28" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <line x1="32" y1="26" x2="32" y2="34" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4899_2139">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h4>SmartWatch</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4899_4363)">
                                        <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4899_4363">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h4>Camera</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4899_1920)">
                                        <path d="M16.3335 30.3334H14.0002C11.4228 30.3334 9.3335 32.4227 9.3335 35V42C9.3335 44.5774 11.4228 46.6667 14.0002 46.6667H16.3335C18.9108 46.6667 21.0002 44.5774 21.0002 42V35C21.0002 32.4227 18.9108 30.3334 16.3335 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.3335 35V28C9.3335 23.0493 11.3002 18.3014 14.8008 14.8007C18.3015 11.3 23.0495 9.33337 28.0002 9.33337C32.9509 9.33337 37.6988 11.3 41.1995 14.8007C44.7002 18.3014 46.6668 23.0493 46.6668 28V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4899_1920">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h4>HeadPhones</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="category">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4899_2228)">
                                        <path d="M46.6665 14H9.33317C6.75584 14 4.6665 16.0893 4.6665 18.6667V37.3333C4.6665 39.9107 6.75584 42 9.33317 42H46.6665C49.2438 42 51.3332 39.9107 51.3332 37.3333V18.6667C51.3332 16.0893 49.2438 14 46.6665 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M35 25.6666V25.6908" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42 30.3333V30.3574" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4899_2228">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                <h4>Gaming</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*best selling section*/}
            <section>
                <div className="container my-5">
                    <div className="today d-flex my-5">
                        <div className="bg-danger" style={{ width: "20px", height: "40px" }}></div>
                        <span className="text-danger fs-5 ms-3">This Month</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-start">Best Selling Products</h2>
                        <div>
                            <button className="btn btn-danger">View All</button>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div className="col" key={idx}>
                                <div className="card h-100 position-relative product-card" style={{ cursor: 'pointer' }}>
                                    <div className="position-relative" style={{ height: "250px" }}>
                                        <img src={"images/hand.png"} className="card-img-top mt-5 ms-3" alt="Product" />
                                        <button className="btn btn-dark w-100 add-to-cart-btn">Add To Cart</button>
                                    </div>
                                    <div className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2" style={{ zIndex: 1 }}>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-heart"></i>
                                        </span>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-eye"></i>
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Product Title</h5>
                                        <div>
                                            <span className="text-danger fs-5">$120</span>
                                            <span className="text-muted text-decoration-line-through ms-2">$160</span>
                                        </div>
                                        <div className="mt-2">
                                            {[...Array(5)].map((star, index) => (
                                                <span key={index} className="text-warning">&#9733;</span>
                                            ))}
                                            <span className="text-muted ms-2">(89)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*music timer section*/}
            <section>
                <div className="container my-5" style={{ backgroundColor: '#1b1b1b', padding: '30px' }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-white">
                                <p className="text-success">Categories</p>
                                <h1>Enhance Your Music Experience</h1>
                                <div className="d-flex justify-content-start my-5">
                                    {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                                        <div key={index} className="time-box mx-2 text-center p-2 bg-white text-dark">
                                            <span className="d-block display-4">{timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}</span>
                                            <small>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
                                        </div>
                                    ))}
                                </div>
                                <button className="btn btn-success btn-lg">Buy Now!</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={"/images/music.png"} alt="Speaker" className="product-image" />
                        </div>
                    </div>
                </div>
            </section>
            {/* our oproducts section*/}
            <section>
                <div className="container my-5">
                    <div className="today d-flex my-5">
                        <div className="bg-danger" style={{ width: "20px", height: "40px" }}></div>
                        <span className="text-danger fs-5 ms-3">Our Products</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-start">Explore Our Products</h2>
                        <div>
                            <i class="fas fa-arrow-left btn btn-outline-dark me-2"></i>
                            <i class="fas fa-arrow-right btn btn-outline-dark"></i>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <div className="col" key={idx}>
                                <div className="card h-100 position-relative product-card" style={{ cursor: 'pointer' }}>
                                    <div className="position-relative" style={{ height: "250px" }}>
                                        <img src={"images/hand.png"} className="card-img-top mt-5 ms-3" alt="Product" />
                                        <button className="btn btn-dark w-100 add-to-cart-btn">Add To Cart</button>
                                    </div>
                                    <div className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2" style={{ zIndex: 1 }}>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-heart"></i>
                                        </span>
                                        <span className="text-dark" style={{ cursor: 'pointer' }}>
                                            <i class="far fa-eye"></i>
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Product Title</h5>
                                        <div className="mt-2">
                                            <span className="text-danger fs-5 me-2">$120</span>
                                            {[...Array(5)].map((star, index) => (
                                                <span key={index} className="text-warning">&#9733;</span>
                                            ))}
                                            <span className="text-muted ms-2">(89)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-danger">View All Products</button>
                    </div>
                </div>
            </section>
            {/*new arrival section*/}
            <section>
                <div className="container new-arrival my-5">
                    <div className="today d-flex my-5">
                        <div className="bg-danger" style={{ width: "20px", height: "40px" }}></div>
                        <span className="text-danger fs-5 ms-3">Featured</span>
                    </div>
                    <h2 className="text-start">New Arrival</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-4 position-relative text-white overflow-hidden">
                                <img src={"/images/ps5.png"} className="card-image" alt="PlayStation 5" />
                                <div className="overlay p-3">
                                    <h5 className="card-title">PlayStation 5</h5>
                                    <p className="card-text">Black and White version of the PS5 coming out on sale.</p>
                                    <a className="text-light" style={{ cursor: "pointer" }}>Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    <div className="card position-relative text-white overflow-hidden">
                                        <img src={"/images/woman.png"} className="card-image" alt="Women's Collections" />
                                        <div className="overlay p-3">
                                            <h5 className="card-title">Women's Collections</h5>
                                            <p className="card-text">Featured women collections that give you another vibe.</p>
                                            <a className="text-light" style={{ cursor: "pointer" }}>Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card position-relative text-white overflow-hidden">
                                        <img src={"/images/speaker.png"} className="card-image" alt="Speakers" />
                                        <div className="overlay p-3">
                                            <h5 className="card-title">Speakers</h5>
                                            <p className="card-text">Amazon wireless speakers.</p>
                                            <a className="text-light" style={{ cursor: "pointer" }}>Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card position-relative text-white overflow-hidden">
                                        <img src={"/images/perfum.png"} className="card-image" alt="Perfume" />
                                        <div className="overlay p-3">
                                            <h5 className="card-title">Perfume</h5>
                                            <p className="card-text">GUCCI INTENSE OUD EDP.</p>
                                            <a className="text-light" style={{ cursor: "pointer" }}>Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end section*/}
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div className="icon-div bg-black text-light">
                                <i class="fas fa-truck"></i>
                            </div>
                            <h4 className="my-3">FREE AND FAST DELIVERY</h4>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div className="icon-div bg-black text-light">
                                <i class="fas fa-headphones"></i>
                            </div>
                            <h4 className="my-3">24/7 CUSTOMER SERVICE</h4>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div className="icon-div bg-black text-light">
                                <i class="far fa-check-circle"></i>
                            </div>
                            <h4 className="my-3">MONEY BACK GUARANTEE</h4>
                            <p>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main