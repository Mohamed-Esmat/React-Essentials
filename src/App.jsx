import { Fragment } from 'react';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples.jsx';

function App() {
  // let tabContent = 'Please select a tab to see examples';
  // selectedTopic will be the current data snapshot for this component execution cycle
  // const [selectedTopic, setSelectedTopic] = useState();

  // function handleSelect(selectedButton) {
  // tabContent = selectedButton;

  // setSelectedTopic will trigger a re-render of the component
  // setSelectedTopic(selectedButton);
  // When we call this state update function React will schedules [this state update] a re-render of the component so the updated value will only be available in the next render cycle [After this App component function executed again].
  // console.log(selectedButton);
  // }

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
