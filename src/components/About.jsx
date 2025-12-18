const About = () => {
  return (
    <section id="apropos" className="apropos">
      <div className="apropos-glass">
        <div className="apropos-text">
          <h3>À propos de SweetCake</h3>
          <p>
            Depuis 2019, SweetCake prépare des créations artisanales faites avec passion :
            gâteaux raffinés, desserts modernes et viennoiseries fraîches chaque matin.
            Nous privilégions des ingrédients de qualité pour offrir un goût unique et authentique.
          </p>
          <div className="apropos-buttons">
            <a href="#menu" className="btn-primary">Voir le menu</a>
            <a href="#contact" className="btn-outline">Nous contacter</a>
          </div>
        </div>
        <div className="apropos-img">
          <img src="/images/Apropos.png" alt="Pâtisserie SweetCake" />
        </div>
      </div>
    </section>
  );
};

export default About;
