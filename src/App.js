import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='lighter'>To use the font for an HTML element, refer to the name of the font (myFirstFont) through the font-family property:</div>
        <div className='normal'>To use the font for an HTML element, refer to the name of the font (myFirstFont) through the font-family property:</div>
        <div className='bold'>To use the font for an HTML element, refer to the name of the font (myFirstFont) through the font-family property:</div>
        <div className='bolder'>To use the font for an HTML element, refer to the name of the font (myFirstFont) through the font-family property:</div>

        <div className='lighter'>Space Grotesk Lighter</div>
        <div className='normal'>Space Grotesk Normal</div>
        <div className='bold'>Space Grotesk Bold</div>
        <div className='bolder'>Space Grotesk Bolder</div>
        <div className='fw-900'>Space Grotesk Bolder</div>


        <div className='fw-100'>Space Grotesk 100</div>
        <div className='fw-200'>Space Grotesk 200</div>
        <div className='fw-300'>Space Grotesk 300</div>
        <div className='fw-400'>Space Grotesk 400</div>
        <div className='fw-500'>Space Grotesk 500</div>
        <div className='fw-600'>Space Grotesk 600</div>
        <div className='fw-700'>Space Grotesk 700</div>
        <div className='fw-800'>Space Grotesk 800</div>
        <div className='fw-900'>Space Grotesk 900</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
