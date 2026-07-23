import './EndPageBanner.css';

export default function EndPageBanner({
  projectHref = 'mailto:hello@pixelpals.studio',
  platformHref = '#ai-platform',
}) {
  return (
    <section
      id="start-project"
      className="end-page-banner"
      aria-labelledby="end-page-banner-heading"
      data-node-id="15:324"
    >
      <div className="end-page-banner__container">
        <div className="end-page-banner__panel" data-node-id="15:325">
          <h2 id="end-page-banner-heading">
            Let&apos;s build something intelligent together.
          </h2>

          <p className="end-page-banner__description">
            Start with a focused project, explore the AI Platform, or build a
            custom digital product that helps your business grow.
          </p>

          <div className="end-page-banner__actions">
            <a
              className="end-page-banner__button pp-button pp-button--secondary"
              href={projectHref}
            >
              <span>Start Your Project</span>
              <span className="end-page-banner__arrow" aria-hidden="true">
                →
              </span>
            </a>

            <a
              className="end-page-banner__button pp-button pp-button--primary"
              href={platformHref}
            >
              <span>Explore the AI Platform</span>
              <span className="end-page-banner__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
