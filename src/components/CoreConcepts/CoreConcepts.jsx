import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept';
import Section from '../Section';
import './CoreConcepts.css';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => {
          return (
            <CoreConcept
              key={concept.title + index}
              title={concept.title}
              description={concept.description}
              img={concept.image}
            />
          );
        })}
      </ul>
    </Section>
  );
}
