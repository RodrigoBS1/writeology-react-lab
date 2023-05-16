// eslint-disable-next-line no-unused-vars
import images from './images/AI.png';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import LatestArticles from './LatestArticles';
import Tips from './Tips';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero /><hr />
      <Tips /><hr />
      <LatestArticles />
    </div>
  );
}

export default App;
