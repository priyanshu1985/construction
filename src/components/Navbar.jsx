import { useEffect, useState } from "react";
import { Building2, Menu, X } from "lucide-react";

const Navbar = ({ onScrollToHome, onScrollToServices, onScrollToContact, onGetQuote }) => {
  // State for mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for detecting scroll to change navbar style
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll listener to change navbar background
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", action: onScrollToHome },
    { name: "Services", action: onScrollToServices },
    { name: "Contact", action: onScrollToContact },
  ];

  return (
    <nav
      className={`navbar ${
        scrolled || isOpen ? "navbar--scrolled" : "navbar--transparent"
      }`}
    >
      <div className="navbar__container">
        <div
          className="navbar__brand"
          onClick={onScrollToHome}
        >
          <div className="navbar__logo-icon">
            <Building2 className="icon-primary" size={20} />
          </div>
          <div>
            <div
              className="navbar__logo-text text-white"
            >
              NOVABUILD
            </div>
            <div className="navbar__logo-sub">
              ENGINEERING
            </div>
          </div>
        </div>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`navbar__link ${
                scrolled ? "text-light" : "text-dark"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={onGetQuote} className="btn btn--primary navbar__cta">
            GET QUOTE
          </button>
        </div>

        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className={scrolled ? "text-white" : "text-primary"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setIsOpen(false);
              }}
              className="navbar__mobile-link"
            >
              {link.name}
            </button>
          ))}
          <button onClick={onGetQuote} className="btn btn--primary navbar__mobile-cta">
            GET QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
