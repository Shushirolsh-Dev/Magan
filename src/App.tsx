import { useMemo, useState } from "react";
import { experience, filters, projects } from "./data";

export default function App() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter),
    [activeFilter],
  );

  async function copyEmail() {
    const email = "hello@example.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex Morgan, home">am<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><i aria-hidden="true">{menuOpen ? "−" : "+"}</i>
        </button>
        <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>03</span></a>
        </nav>
        <div className="availability"><span className="availability-dot" /> Available for select projects</div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow"><span>Independent practice</span><span>Based somewhere, working everywhere</span></div>
          <h1>Thoughtful work<br />for a <em>changing</em> world<span className="period">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I'm Alex — a designer and developer partnering with good people to make useful things for the real world.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
            <p className="hero-index">Design / Direction / Development<br />Independent since 2019</p>
          </div>
          <div className="hero-rule"><span>Selected work</span><span>2023 — 2025</span></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div><span className="section-kicker">01 / A few good things</span><h2>Selected <em>work</em></h2></div>
            <p>A small selection of collaborations, experiments and things brought into the world.</p>
          </div>
          <div className="filter-row" aria-label="Filter projects">
            <span className="filter-label">Filter by</span>
            {filters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
                {filter}
              </button>
            ))}
            <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} projects</span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.tone}`} aria-label={`${project.title} visual placeholder`}>
                  <span className="art-index">{project.number} / {project.type}</span>
                  <span className="art-mark">{project.label}</span>
                  <span className="art-caption">A study in making<br />things matter.</span>
                </div>
                <div className="project-meta">
                  <div><span className="project-year">{project.year} · {project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">These are sample projects. Replace the content in <code>src/data.ts</code> with your own work.</p>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-heading">
            <div><span className="section-kicker">02 / A little context</span><h2>Good work,<br /><em>good people.</em></h2></div>
            <p className="about-lead">The best work happens when curiosity meets care. I bring both to every brief, from the first conversation to the final detail.</p>
          </div>
          <div className="about-columns">
            <div className="about-copy">
              <p>I work across identity, digital experiences and the spaces in between. Sometimes that means shaping a brand from the ground up. Other times it means making an existing product easier to understand and use.</p>
              <p>My approach is collaborative and considered. I like clear thinking, honest conversations, useful details and work that still feels right long after launch.</p>
              <a className="text-link" href="#contact">A bit more about working together <span>↗</span></a>
            </div>
            <div className="experience">
              <span className="small-label">A few chapters</span>
              {experience.map((item) => (
                <div className="experience-row" key={item.period}>
                  <span>{item.period}</span><div><strong>{item.role}</strong><small>{item.place}</small></div>
                </div>
              ))}
            </div>
          </div>
          <div className="principles">
            <span className="small-label">What I believe in</span>
            <p>Clarity over noise. <em>Purpose over polish.</em> People over process.</p>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-kicker">03 / Your turn</div>
          <h2>Have something<br />good in <em>mind?</em></h2>
          <div className="contact-bottom">
            <p>Have a project, a question, or just want to say hello? My inbox is open.</p>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
              <button className="copy-button" type="button" onClick={copyEmail}>{copied ? "Copied to clipboard ✓" : "Copy email +"}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top">am<span>.</span></a>
        <span>© {new Date().getFullYear()} Alex Morgan. Made with care.</span>
        <div><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:hello@example.com">Email ↗</a></div>
        <a className="back-top" href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}