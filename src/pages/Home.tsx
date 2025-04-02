import "../styles/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h1>Hi, I'm <span>Fiona</span> 👋</h1>
        <p>I'm a passionate developer building amazing web experiences.</p>
        <div className="buttons">
          <a href="/projects" className="btn">View Projects</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
