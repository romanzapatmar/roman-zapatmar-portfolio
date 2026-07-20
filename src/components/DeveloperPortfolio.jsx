import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser"; //for emailjs

export default function DeveloperPortfolio() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_wuu2zyc", //service id
        "template_t10hfnz", //template id
        form.current,
        "nzTj04tJ9Bkz3wK1Z" //public key
      )
      .then(
        () => {
          //alert("Message sent successfully!");
          setShowSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };


  const skills = [
    "Python",
    "Flask",
    "Django",
    "FastApi",
    "React",
    "JavaScript",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Git & Github"
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce platform with product browsing, user authentication, shopping cart, order management, and REST API integration using Flask and React.",
      tech: ["React", "Flask", "Python", "REST API", "MySQL"],
      imageSrc: "images/ecom.jpg"
    },
    {
      title: "RestAPI using FastAPI",
      description: "Built a RESTful API using FastAPI with JWT authentication, CRUD operations, SQLAlchemy ORM, request validation using Pydantic, and MySQL database integration.",
      tech: ["FastAPI", "Python", "SQLAlchemy", "MySQL", "JWT"],
      imageSrc: "images/restapi.jpg"
    },
    {
      title: "Portfolio CMS",
      description:
        "A responsive portfolio management platform for developers and agencies.",
      tech: ["React", "Javascript", "EmailJS"],
      imageSrc: "images/websitecms.jpg"
    },
  ];

  const services = [
    {
      title: "Backend Development",
      desc: "Building secure REST APIs, authentication systems, business logic, and scalable server-side applications using Flask and FastAPI.",
    },
    {
      title: "Database Design",
      desc: "Designing efficient database schemas, relationships, indexing strategies, and optimized queries for high-performance applications.",
    },
    {
      title: "API & System Architecture",
      desc: "Developing scalable backend architectures, integrating databases, implementing JWT authentication, and designing maintainable API solutions.",
    },
  ];

  const [darkMode, setDarkMode] = useState(true);

  const typingTexts = [
    "Software Engineer",
    "Backend Developer",
    "Python Developer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === typingTexts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    setText(typingTexts[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div
      className={`${darkMode ? "bg-dark text-light" : "bg-light text-dark"} min-vh-100`}
    >
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode
            ? "navbar-dark bg-black border-secondary"
            : "navbar-light bg-white border-light"
        } border-bottom sticky-top`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">
            &lt;RZ /&gt;
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary rounded-pill px-4" href="#contact">
                  Hire Me
                </a>
              </li>
            <li className="nav-item">
                <button
                  className={`btn ${darkMode ? "btn-light" : "btn-dark"} rounded-pill px-4`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-primary mb-3 px-3 py-2 fs-6">
                {text}
                <span className="typing-cursor">|</span>
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Building Modern & Scalable Digital Experiences
              </h1>

              <p className="lead text-secondary mb-4">
               I am a Python developer specializing in Flask and FastAPI. I build secure REST APIs, design efficient database structures, implement authentication systems, and develop scalable backend solutions for modern web applications.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary btn-lg px-4 rounded-pill">
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 rounded-pill"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div
                className="bg-secondary bg-opacity-25 rounded-5 p-5 shadow-lg border border-secondary"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop"
                  alt="Developer"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={`py-5 ${darkMode ? "bg-black" : "bg-light"}`}
      >
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <img
                src="/images/aboutme.png"
                alt="About"
                className="img-fluid rounded-5 shadow-lg"
              />
            </div>

            <div className="col-lg-7">
              <h2 className="fw-bold display-5 mb-4">About Me</h2>

              <p className="text-secondary fs-5">
                Hi, <b>I'm Roman Zapatmar</b> — a passionate software developer with a strong focus on Python backend development. I specialize in building scalable web applications, RESTful APIs, secure authentication systems, and database-driven solutions using Flask and FastAPI. I have also worked with PHP, WordPress, React, and other web technologies, which has given me experience across both frontend and backend development. While I have successfully delivered projects using PHP and WordPress, my primary interest lies in backend engineering, database design, and developing efficient, maintainable systems with Python. I enjoy solving real-world problems through clean code, optimized architectures, and practical software solutions, while continuously expanding my expertise in modern backend technologies.
              </p>
              <div className="mt-4 text-secondary">
                <p className="mb-2">
                  📧 Email: romanzapatmar123@gmail.com
                </p>
                <p className="mb-0">
                  📱 Phone: +91 7588411763
                </p>
              </div>

              <div className="row mt-4 g-4">
                <div className="col-md-6">
                  <div className="p-4 rounded-4 bg-dark border border-secondary h-100 text-white">
                    <h4 className="fw-bold">3+ Years Experience</h4>
                    <p className="text-secondary mb-0">
                      Working on backend development projects.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 rounded-4 bg-dark border border-secondary h-100 text-white">
                    <h4 className="fw-bold">Production Ready Code</h4>
                    <p className="text-secondary mb-0">
                      Focused on performance, scalability, and maintainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-5">
        <div className="container py-4 text-center">
          <h2 className="display-5 fw-bold mb-5">Skills & Technologies</h2>

          <div className="row g-4 justify-content-center">
            {skills.map((skill, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="card bg-black text-light border border-secondary rounded-4 h-100 shadow-sm hover-card">
                  <div className="card-body py-4">
                    <h5 className="fw-semibold mb-0">{skill}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`py-5 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
            <div>
              <h2 className="display-5 fw-bold">Featured Projects</h2>
              <p className="text-secondary mb-0">
                Some projects built with modern technologies.
              </p>
            </div>

            <a href="#contact" className="btn btn-outline-light rounded-pill px-4">
              Start a Project
            </a>
          </div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card bg-dark text-light border border-secondary rounded-5 overflow-hidden shadow-lg h-100">
                  <img
                    src={project.imageSrc}
                    className="card-img-top"
                    alt={project.title}
                  />

                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="fw-bold">{project.title}</h4>

                    <p className="text-secondary flex-grow-1">
                      {project.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          className="badge bg-primary-subtle border border-primary px-3 py-2 text-dark"
                          key={idx}
                          style={{ color: "#778eb3", borderColor: "#778eb3" }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="btn btn-primary rounded-pill w-100">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Services</h2>
            <p className="text-secondary">
              Solutions tailored for modern businesses and startups.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className="p-5 rounded-5 bg-black border border-secondary shadow-lg h-100 text-white">
                  <h3 className="fw-bold mb-3">{service.title}</h3>
                  <p className="text-secondary mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`py-5 ${darkMode ? "bg-black" : "bg-light"}`}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-5 rounded-5 border border-secondary bg-dark shadow-lg">
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-bold text-white">Let's Work Together</h2>
                  <p className="text-secondary text-white">
                    Have a project idea? Let's build something amazing.
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-black text-light border-secondary py-3 rounded-4"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control bg-black text-light border-secondary py-3 rounded-4"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control bg-black text-light border-secondary rounded-4"
                        placeholder="Tell me about your project"
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999
          }}
        >
          <div className="bg-dark text-white p-4 rounded-4 shadow-lg text-center">
            <h4>✅ Message Sent</h4>
            <p>
              Thank you for contacting me. I'll get back to you soon.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`py-4 border-top ${
          darkMode ? "border-secondary bg-dark" : "border-light bg-white"
        }`}
      >
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
          <p className="mb-0 text-secondary">
           © 2026 Roman Zapatmar. Built with React.🖤 All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="https://github.com/romanzapatmar" className="text-decoration-none text-light">
              GitHub
            </a>
            <a href="https://in.linkedin.com/in/roman-zapatmar-9854b219b" className="text-decoration-none text-light">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Inter, sans-serif;
          transition: all 0.3s ease;
        }

        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-8px);
          border-color: #0d6efd !important;
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #0d6efd;
        }

        .typing-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }

          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
