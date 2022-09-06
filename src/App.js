import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((item, i) => {
    console.log(item, "object")
    return (
      <Card
        key={i + 1}
        {...item} />
    )
  })
  return (
    <div className="app">
      <header className="app--header">
        <Header />
      </header>
      <main className="app--main">
        {cards}
      </main>
    </div>
  );
}

export default App;
