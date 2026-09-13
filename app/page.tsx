import { ArrowIcon } from '@/components/arrow-icon';
import { Toolkit } from '@/components/toolkit';
import { ProjectCard } from '@/components/project-card';
import { siteConfig } from '@/data/site';
import { projects } from '@/data/projects';
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero hero-compact shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" />
            DE’ANDRE PERRY · UX DESIGNER
          </p>
          <h1>
            Understand the people.
            <span>Design with intention.</span>
          </h1>
          <p className="hero-deck">
            I create accessible digital experiences grounded in research, purposeful
            visual systems, and high-fidelity prototyping.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="button button-primary">
              View my work <span aria-hidden="true"><ArrowIcon down /></span>
            </a>
            <a href="/about" className="text-link">
              A little about me <span aria-hidden="true"><ArrowIcon /></span>
            </a>
          </div>
        </div>
        <aside
          className="hero-profile"
          aria-label="Design focus and professional links"
        >
          <p className="eyebrow">From understanding to execution</p>
          <ul className="hero-disciplines">
            <li>
              <span>01</span> UX research
            </li>
            <li>
              <span>02</span> Product & interaction
            </li>
            <li>
              <span>03</span> Visual design
            </li>
          </ul>
          <div>
            <a className="text-link" href={siteConfig.resume || '/resume'}>
              Resume <ArrowIcon />
            </a>
            <a
              className="text-link"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowIcon />
            </a>
          </div>
        </aside>
        <div className="hero-baseline">
          <span>Research-led thinking. Detail-driven design.</span>
          <span>
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>
      <section
        className="work-section shell section"
        id="selected-work"
        aria-labelledby="selected-title"
      >
        <div className="section-intro">
          <div>
            <p className="eyebrow">Selected work / 01—04</p>
            <h2 id="selected-title">Selected work.</h2>
          </div>
          <div>
            <p className="content-note">
              Four working products. Four perspectives on research, visual
              systems, and inclusive interaction.
            </p>
          </div>
        </div>
        <div className="featured-work">
          {projects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} featured={index === 0} />
          ))}
        </div>
      </section>
      <section
        className="section shell portfolio-toolkit"
        aria-labelledby="toolkit-title"
      >
        <p className="eyebrow">TOOLS & WORKFLOW</p>
        <h2 id="toolkit-title">From exploration to a working idea.</h2>
        <Toolkit />
      </section>
      <section className="about-teaser section shell">
        <p className="eyebrow">The person behind the process</p>
        <div>
          <h2>
            Curious about the why.
            <br />
            Careful with the how.
          </h2>
          <p>
            I’m De’Andre, a UX Designer with an interest in the space between
            understanding a problem and making something genuinely useful.
          </p>
          <a href="/about" className="text-link">
            My approach & background <span aria-hidden="true"><ArrowIcon /></span>
          </a>
        </div>
      </section>
    </main>
  );
}
