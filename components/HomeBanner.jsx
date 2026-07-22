import './HomeBanner.css';

const solutions = [
  {
    title: 'Build',
    description:
      'A future suite of website, web application and Shopify solutions designed to help businesses launch stronger digital experiences.',
    tags: ['Websites', 'Web Applications', 'Shopify'],
    status: 'In development',
    icon: 'build',
  },
  {
    title: 'Automate',
    description:
      'Practical AI assistants, connected workflows and business automation tools designed to reduce repetitive work.',
    tags: ['AI Assistants', 'Workflows', 'Integrations'],
    status: 'Research and development',
    icon: 'automate',
  },
  {
    title: 'Grow',
    description:
      'Future tools for improving visibility, performance, analytics and ongoing digital growth.',
    tags: ['SEO', 'Performance', 'Analytics', 'Support'],
    status: 'Planned',
    icon: 'grow',
  },
];

function SolutionIcon({ type }) {
  return (
    <div className={`home-banner__icon home-banner__icon--${type}`}>
      {type === 'build' && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
          <path d="m4 12 8 4.5 8-4.5" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </svg>
      )}

      {type === 'automate' && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="m4.2 4.2 2.1 2.1" />
          <path d="m17.7 17.7 2.1 2.1" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
          <path d="m4.2 19.8 2.1-2.1" />
          <path d="m17.7 6.3 2.1-2.1" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )}

      {type === 'grow' && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19V9" />
          <path d="M10 19V5" />
          <path d="M15 19v-7" />
          <path d="M20 19V3" />
        </svg>
      )}
    </div>
  );
}

export default function HomeBanner() {
  return (
    <section className="home-banner" aria-labelledby="home-banner-title">
      <div className="home-banner__container">
        <header className="home-banner__heading">
          <span className="home-banner__eyebrow">Solutions</span>

          <h2 id="home-banner-title">
            Digital solutions in development
          </h2>

          <p>
            Pixel Pals is building a suite of modern web, automation and growth
            solutions. These products are currently in development and will be
            released gradually as they become ready.
          </p>
        </header>

        <div className="home-banner__grid">
          {solutions.map((solution) => (
            <article className="home-banner__card" key={solution.title}>
              <SolutionIcon type={solution.icon} />

              <h3>{solution.title}</h3>

              <p className="home-banner__description">
                {solution.description}
              </p>

              <div
                className="home-banner__tags"
                aria-label={`${solution.title} services`}
              >
                {solution.tags.map((tag) => (
                  <span className="home-banner__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="home-banner__status">{solution.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
