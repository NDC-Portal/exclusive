import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const storedUser=JSON.parse(localStorage.getItem('user'))
    const handelMenu=()=>{
        setMenuVisible(!menuVisible)
    }
    return (
        <>
            <div className="bg-dark text-white text-center py-2">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="text-white fw-bold ms-2">ShopNow</a><a href="#" style={{ textDecoration: "none" }} className="text-white ms-5">English <i class="fas fa-chevron-down ms-2"></i></a>
            </div>
            <nav className="navbar navbar-expand-lg bg-white py-3 border border-bottom-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#">Exclusive</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active text-decoration-underline" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ms-lg-3" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active mx-lg-3" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                        <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                        <i className="far fa-heart fs-5 mx-4"></i>
                        <i className="fas fa-cart-plus fs-5"></i>
                        {storedUser?(<div className="user-info position-relative">
                            <i className="fas fa-user ms-4" onClick={handelMenu} ></i>
                            {menuVisible && (
                                <ul className="user-info-details position-absolute py-2">
                                <li className="mb-2"><Link><i className="fas fa-user me-2" ></i>Manage My Account</Link></li>
                                <li className="mb-2"><Link><svg className="me-2" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.29999V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H18C18.2652 20.5 18.5196 20.3946 18.7071 20.2071C18.8946 20.0196 19 19.7652 19 19.5V5.29999H1Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M19 5.3L16.1665 1.5H3.8335L1 5.3M13.7775 8.6C13.7775 10.699 12.0865 12.4 10 12.4C7.9135 12.4 6.222 10.699 6.222 8.6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                    My Order</Link></li>
                                <li className="mb-2"><Link><svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_158_3778)">
                                        <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="12" cy="12" r="11.25" stroke="black" stroke-width="1.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_158_3778">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                    My Cancellations</Link></li>
                                <li className="mb-2"><Link><svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z" stroke="black" stroke-width="1.5" />
                                </svg>
                                    My Reviews</Link></li>
                                <li className="mb-2"><Link><svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                    Logout</Link></li>
                            </ul>
                            )}
                            
                        </div>):""}
                    </div>
                </div>
            </nav>
        </>
    )

}
export default Header