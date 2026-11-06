import { ArrowIcon } from '@/components/arrow-icon';
import { Toolkit } from '@/components/toolkit';
import { ProjectCard } from '@/components/project-card';
import { siteConfig } from '@/data/site';
import { featuredProjects } from '@/data/projects';
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero hero-compact shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" />
            {siteConfig.name.toUpperCase()} · {siteConfig.role.toUpperCase()}
          </p>
          <h1>
            Understand people.
            <span>Design with intention.</span>
          </h1>
          <p className="hero-deck">
            I connect research questions and evidence with accessible
            interfaces, purposeful visual systems, and high-fidelity prototypes.
          </p>
          <div className="hero-actions">
            <a href="#selected-work" className="button button-primary">
              View my work{' '}
              <span aria-hidden="true">
                <ArrowIcon down />
              </span>
            </a>
            <a href="/about" className="text-link">
              A little about me{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
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
            <p className="eyebrow">
              Selected work / 01—
              {String(featuredProjects.length).padStart(2, '0')}
            </p>
            <h2 id="selected-title">Selected work.</h2>
          </div>
          <div>
            <p className="content-note">
              Explore product decisions, accessibility evaluations, and client
              work.
            </p>
          </div>
        </div>
        <div className="featured-work">
          {featuredProjects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} featured={index === 0} />
          ))}
        </div>
      </section>
      <section
        className="section shell research-highlights"
        aria-labelledby="research-title"
      >
        <h2 id="research-title">Research &amp; Evaluation</h2>
        <div>
          <article>
            <h3>Planning a user study</h3>
            <p>
              UXR Forge uses a headset and its companion app to explore method
              selection, neutral moderator prompts, behavioral observation, and
              synthesis. The exercises use fictional practice data.
            </p>
            <a className="text-link" href="/work/uxr-forge">
              Explore UXR Forge <ArrowIcon />
            </a>
          </article>
          <article>
            <h3>Evaluating accessibility</h3>
            <p>
              For DowntownSF Partnership, I combined VoiceOver and keyboard
              testing with WAVE scans and a usability heuristic review. I
              presented findings and remediation priorities to the nonprofit’s
              stakeholders.
            </p>
            <a
              className="text-link"
              href="/work/downtownsf-accessibility-audit"
            >
              Read the DowntownSF evaluation <ArrowIcon />
            </a>
          </article>
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
            I’m De’Andre, a UX Designer. My work connects research planning,
            accessible interaction, and visual design.
          </p>
          <a href="/about" className="text-link">
            My approach & background{' '}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
