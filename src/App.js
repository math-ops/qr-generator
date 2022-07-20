import './App.css';
import './script';

function App() {

  return (
    <body>
      <div className='wrapper'>
        <header>
          <h1>QR Code Generator</h1>
          <small>Insira texto ou url para gerar um Código QR</small>
        </header>

        <div className='form'>
          <input type='text' placeholder='Insira o texto ou url' />
          <button>Gerar QR Code</button>
        </div>
        <div className='qr-code'>
          <img src='' alt='qr-code'/>
        </div>
      </div>
      <script src="./script.js"></script>
    </body>

  );
}

export default App;
