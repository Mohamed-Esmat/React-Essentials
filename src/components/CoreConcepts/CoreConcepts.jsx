import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept';
import './CoreConcepts.css';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
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
        {/* <CoreConcept
        title="Components"
        description="The core UI building block."
        img={componentImg}
      />
      <CoreConcept
        title="JSX"
        description="A syntax extension for JavaScript."
        img={jsxImg}
      />
      <CoreConcept
        title="Props"
        description="A way of passing data into components."
        img={propsImg}
      />
      <CoreConcept
        title="State"
        description="A way of managing data in a component."
        img={stateImg}
      /> */}
      </ul>
    </section>
  );
}
