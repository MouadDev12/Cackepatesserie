const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="footer-logo">SweetCake</div>
        <div className="small">Créations sucrées — artisanat & goût</div>
      </div>
      <div className="footer-links">
        <h4>Liens rapides</h4>
        <a href="#home">Accueil</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h4>Suivez-nous</h4>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="small">© {year} SweetCake</div>
    </footer>
  );
};

export default Footer;
