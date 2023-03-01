import "./Frases.css";

const Frases = ({ phrase, randomPhrase }) => {
  return (
    <section className="yeii">
     
      <h2 className="frase_letter">{phrase.quote}</h2>
      <p className="frase_autor">{phrase.author}</p>

      <div className="frase_btn">
        <button onClick={randomPhrase}>Tsugi</button>
      </div>
    </section>
  );
};

export default Frases;
