import { Building2, Globe, Briefcase, Trophy } from "lucide-react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__brand-section">
          <div className="footer__brand">
            <div className="footer__logo-icon">
              <Building2 className="icon-primary" size={20} />
            </div>
            <span className="footer__logo-text">NOVABUILD</span>
          </div>

          <p className="footer__tagline">
            Engineered to endure. Delivering structural certainty across
            industrial and commercial sectors since 1998.
          </p>

          <div className="footer__socials">
            {[Globe, Briefcase, Trophy].map((Icon, i) => (
              <div key={i} className="footer__social-icon">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links-section">
          <h5 className="footer__heading">
            Quick Links
          </h5>

          <ul className="footer__links">
            <li className="footer__link">
              Master Planning
            </li>
            <li className="footer__link">
              Structural Audit
            </li>
            <li className="footer__link">
              Project Tender
            </li>
            <li className="footer__link">
              Safety Record
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="footer__address-section">
          <h5 className="footer__heading">
            Global HQ
          </h5>

          <div className="footer__address-content">
            <p className="footer__address">
              1200 Industrial Avenue, <br />
              Manhattan, NY 10001, USA
            </p>
            <p className="footer__phone">+1 (800) 555-NOVA</p>
            <p className="footer__office-code">
              NY-D7-4402 Office
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} NOVABUILD ENG GROUP. ALL RIGHTS
          RESERVED.
        </p>

        <div className="footer__legal">
          <span className="footer__legal-link">Security</span>
          <span className="footer__legal-link">Privacy</span>
          <span className="footer__legal-link">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
