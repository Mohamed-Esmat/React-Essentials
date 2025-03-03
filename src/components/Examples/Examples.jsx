import { useState } from 'react';
import { EXAMPLES } from '../../data';
import Section from '../Section';
import TabButton from '../TabButton';
import './Examples.css';
import Tabs from '../Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          {!selectedTopic ? (
            <p>Please select a tab to see examples</p>
          ) : (
            <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </>
          )}
        </div>
      </Tabs>
    </Section>
  );
}
