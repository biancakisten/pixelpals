import './ProcessSection.css';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Clarify goals, audience, and opportunities.',
    active: true,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the premium interface and system.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build fast, scalable, AI-ready products.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Ship, measure, and refine the experience.',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Keep improving with care and insight.',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="process-section"
      aria-labelledby="process-section-heading"
      data-node-id="15:292"
    >
      <div className="process-section__container">
        <header className="process-section__heading">
          <span className="process-section__eyebrow">Process</span>

          <h2 id="process-section-heading">
            From idea to launch without the fog
          </h2>

          <p>
            A clean delivery rhythm that keeps strategy, design, engineering,
            and growth aligned.
          </p>
        </header>

        <div className="process-section__timeline">
          {processSteps.map((step) => (
            <article className="process-section__card" key={step.number}>
              <span
                className={`process-section__number ${
                  step.active ? 'process-section__number--active' : ''
                }`}
              >
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
