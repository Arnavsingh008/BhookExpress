import React, { useContext, useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
 function Navbar() {
  const [menu, setMenu] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const {getTotalCartAmount,token,setToken,setCartItems,setShowLogin,searchTerm,setSearchTerm}=useContext(StoreContext);
   
  const location = useLocation();
  const ishomePage = location.pathname === "/";
  
  // Scroll to food display when search term is entered
  useEffect(() => {
    if (searchTerm.trim() && ishomePage) {
      setTimeout(() => {
        const foodDisplay = document.querySelector('[id="foodDisplay"]');
        if (foodDisplay) {
          foodDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchTerm, ishomePage]);
     
  const navigate = useNavigate();
  const logout =()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
      setCartItems("")
  }
  return (
    <div className={styles.navbar}>
      <Link to='/'><img src={assets.logo} alt="Logo"  className={styles.logo} /></Link>
     
      {/* Desktop Menu */}
      <ul className={`${styles.navbar_menu} ${styles.desktopMenu}`}>
        <li>
          {ishomePage ? (
            <a href="#tab"
               onClick={() => setMenu('home')}
               className={menu === 'home' ? styles.active : ''}>
              🏠 Home
            </a>
          ) : (
            <a href="/"
               onClick={() => setMenu('home')}
               className={menu === 'home' ? styles.active : ''}>
              🏠 Home
            </a>
          )}
        </li>
        <li>
          {ishomePage ? (
            <a href="#explore-menu"
               onClick={() => setMenu('menu')}
               className={menu === 'menu' ? styles.active : ''}>
              🍽️ Menu
            </a>
          ) : (
            <a href="/"
               onClick={() => setMenu('menu')}
               className={menu === 'menu' ? styles.active : ''}>
              🍽️ Menu
            </a>
          )}
        </li>
        <li>
          {ishomePage ? (
            <a href="#about-us"
               onClick={() => setMenu('about')}
               className={menu === 'about' ? styles.active : ''}>
              ℹ️ About Us
            </a>
          ) : (
            <a href="/"
               onClick={() => setMenu('about')}
               className={menu === 'about' ? styles.active : ''}>
              ℹ️ About Us
            </a>
          )}
        </li>
        <li>
          {ishomePage ? (
            <a href="#footer"
               onClick={() => setMenu('contact-us')}
               className={menu === 'contact-us' ? styles.active : ''}>
              ☎️ Contact Us
            </a>
          ) : (
            <a href="/"
               onClick={() => setMenu('contact-us')}
               className={menu === 'contact-us' ? styles.active : ''}>
              ☎️ Contact Us
            </a>
          )}
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className={styles.mobileMenuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <ul>
          <li onClick={() => { setMenu('home'); setMobileMenuOpen(false); }}>
            {ishomePage ? (
              <a href="#tab">🏠 Home</a>
            ) : (
              <a href="/">🏠 Home</a>
            )}
          </li>
          <li onClick={() => { setMenu('menu'); setMobileMenuOpen(false); }}>
            {ishomePage ? (
              <a href="#explore-menu">🍽️ Menu</a>
            ) : (
              <a href="/">🍽️ Menu</a>
            )}
          </li>
          <li onClick={() => { setMenu('about'); setMobileMenuOpen(false); }}>
            {ishomePage ? (
              <a href="#about-us">ℹ️ About Us</a>
            ) : (
              <a href="/">ℹ️ About Us</a>
            )}
          </li>
          <li onClick={() => { setMenu('contact-us'); setMobileMenuOpen(false); }}>
            {ishomePage ? (
              <a href="#footer">☎️ Contact Us</a>
            ) : (
              <a href="/">☎️ Contact Us</a>
            )}
          </li>
        </ul>
      </div>

      <div className={styles.navbar_right}>
        <div className={styles.searchContainer}>
          <img 
            src={assets.search_icon} 
            alt="Search Icon" 
            className={styles.searchIcon}
            onClick={() => setSearchOpen(!searchOpen)}
          />
          {searchOpen && (
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                placeholder="Search food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                autoFocus
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
              {searchTerm && (
                <button 
                  className={styles.clearSearch}
                  onClick={() => setSearchTerm('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>
        <div className={styles.navbar_basket}>
         <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link> 
         <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
         </div>
        {!token?<button onClick={()=>setShowLogin(true)} >Sign in</button>
            : <div className={styles.navbarProfile}>
                <img src={assets.profile_icon} alt=''></img>
                <ul className={styles.navProfileDropdown}>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>
            }
      </div>
    </div>
  );
}

export default Navbar;


