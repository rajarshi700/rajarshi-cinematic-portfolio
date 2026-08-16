"use client";

import { FormEvent, useEffect, useState } from "react";
import HeroMedia from "./HeroMedia";
import VideoModal from "./VideoModal";
import {
  education,
  experience,
  projects,
  site,
  skillGroups,
  otherProjects,
  type Project,
} from "@/data/site";
import Image from "next/image";
const navItems = ["Home", "About", "Education", "Experience", "Projects", "Skills", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span>R</span>
          <strong>{site.name}</strong>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy reveal is-visible">
            <div className="status-pill">
              <span />
              {site.availability}
            </div>

            <p className="eyebrow">Hello, I&apos;m {site.name}</p>
            <h1>{site.heroTitle}</h1>
            <p className="hero-description">{site.heroText}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href={`mailto:${site.email}`}>
                Let&apos;s talk
              </a>
            </div>

            <div className="hero-proof" aria-label="Portfolio highlights">
              <div>
                <strong>Full Stack</strong>
                <span>From first decision to production</span>
              </div>
              <div>
                <strong>Product Minded</strong>
                <span>Solving the right problems</span>
              </div>
              <div>
                <strong>Applied AI</strong>
                <span>Modern intelligent workflows</span>
              </div>
            </div>
          </div>

          <div className="reveal is-visible hero-media-column">
            <HeroMedia />
          </div>
        </section>

        <section className="section-shell" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>

            <h2>
              Engineering scalable systems from interface to infrastructure.
            </h2>
          </div>

          <div className="about-grid">
            <article className="about-story reveal">
              <span className="about-card-label">
                FULL-STACK × AI × DISTRIBUTED SYSTEMS
              </span>

              <div className="about-story-content">
                <p>
                  Good engineering, to me is less about adding complexity and more
                  about making the right trade-offs.

                </p>

                <p>
                  My approach combines curiosity, ownership and collaboration to turn
                  complexity into solutions that feel purposeful and well considered.
                </p>
              </div>
            </article>

            <div className="principles">
              <article className="principle-card reveal">
                <span className="principle-number">01</span>

                <div className="principle-keyword">
                  Idea → Impact
                </div>

                <h3>Product-minded engineering</h3>

                <p>
                  I translate complex requirements into intuitive experiences and cohesive systems, balancing usability, performance, and delivery at every stage.
                </p>
              </article>

              <article className="principle-card reveal">
                <span className="principle-number">02</span>

                <div className="principle-keyword">
                  Built to Evolve
                </div>

                <h3>Maintainable by design</h3>

                <p>
                  I create clean, testable software with clear boundaries and pragmatic patterns, enabling teams to extend it confidently as requirements change.
                </p>
              </article>

              <article className="principle-card reveal">
                <span className="principle-number">03</span>

                <div className="principle-keyword">
                  RAG + Agents
                </div>

                <h3>AI that creates value</h3>

                <p>
                  I use RAG, intelligent agents and automation to solve genuine problems instead of adding AI without a clear purpose.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section-shell education-layout"
          id="education"
        >
          {/* Left side: college photo with heading */}
          <div className="education-visual reveal">
            <Image
              src="/education/college-photo-2.png"
              alt="Rajarshi during his college days"
              fill
              priority={false}
              sizes="(max-width: 980px) 100vw, 40vw"
              className="education-visual-image"
            />

            <div
              className="education-visual-overlay"
              aria-hidden="true"
            />

            <div className="education-visual-content">
              <p className="eyebrow">Education</p>

              <h2>
                
              </h2>
            </div>
          </div>

          {/* Right side: education details */}
          <div className="education-grid">
            {education.map((item) => (
              <article
                className="education-card reveal"
                key={`${item.degree}-${item.school}`}
              >
                <p>{item.period}</p>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </section>


        <section className="section-shell experience-layout" id="experience">
          {/* Left side: workplace photo with heading */}
          <div className="experience-visual reveal">
            <Image
              src="/experience/experience-photo.png"
              alt="Rajarshi at his workplace"
              fill
              priority={false}
              sizes="(max-width: 980px) 100vw, 40vw"
              className="experience-visual-image"
            />

            <div
              className="experience-visual-overlay"
              aria-hidden="true"
            />

            <div className="experience-visual-content">
              <p className="eyebrow">Experience</p>

              <h2>
                
              </h2>
            </div>
          </div>

          {/* Right side: experience timeline */}
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={`${item.role}-${item.period}`}>
                <div className="timeline-marker" />
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-card">
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>


        <section className="section-shell" id="projects">
          <div className="section-heading section-heading-row reveal">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Real workflows, explained through short demos.</h2>
            </div>
            <p>
              Each card opens a dedicated demo video.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-visual">
                  <img src={project.image} alt="" />
                  <div className="project-number">0{index + 1}</div>
                  <button type="button" className="demo-button" onClick={() => setActiveProject(project)}>
                    <span className="play-icon" aria-hidden="true">▶</span>
                    Watch demo
                  </button>
                </div>

                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>{project.impact}</strong>

                  <div className="tag-list">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.liveUrl}>Live preview ↗</a>
                    <a href={project.codeUrl}>Source code ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
            
        <section className="section-shell other-projects-section" id="other-projects">
          <div className="section-heading section-heading-row reveal">
            <div>
              <p className="eyebrow">Other projects</p>
              <h2>More things I’ve built along the way.</h2>
            </div>

            <p>
              Building practical software for real problems and curious ideas.
            </p>
          </div>

          <div className="other-project-grid">
            {otherProjects.map((project, index) => (
              <article className="other-project-card reveal" key={project.title}>
                <div className="other-project-top">
                  <span className="other-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="other-project-arrow">↗</span>
                </div>

                <div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="tag-list">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live preview ↗
                    </a>
                  )}

                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Source code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">The stack I use to build and ship complete products.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-cloud">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Building something ambitious? Let’s talk.</h2>
              <p>
                Send me a message, email, or give me a call — I’d be happy to discuss opportunities, projects, or ideas. You can also connect with me on LinkedIn or check out my work on GitHub.
              </p>

              <div className="contact-links">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
                <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <form className="contact-form" action="https://formspree.io/f/xwleqyvj" method="POST">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="Tell me about the opportunity or project..." required />
              </label>
              <button className="button button-primary" type="submit">
                Send message
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}