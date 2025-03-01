import { useState } from 'react';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data.js';

function App() {
  // let tabContent = 'Please select a tab to see examples';
  // selectedTopic will be the current data snapshot for this component execution cycle
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // tabContent = selectedButton;

    // setSelectedTopic will trigger a re-render of the component
    setSelectedTopic(selectedButton);
    // When we call this state update function React will schedules [this state update] a re-render of the component so the updated value will only be available in the next render cycle [After this App component function executed again].
    // console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
