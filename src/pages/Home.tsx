import "../styles/home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "A Passionate, creative web developer who loves building elegant and interactive web experiences. Passionate about front end development and design, I blend functionalty with aestheticts to bring ideas to life!";
  const typingSpeed = 25;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home">
      <div className="content">
        <h1 className="fade-in">
          Hi, I'm <span className="name">Fiona</span> 
        </h1>
        <p className="typing-text">{text}</p>
        <div className="buttons fade-in delay-2">
        <button onClick={scrollToProjects} className="btn">View Projects</button>
        <a href="#contact" className="btn">Contact Me</a>
          
        </div>
      </div>
    </section>
    
  );
};

export default Home;
