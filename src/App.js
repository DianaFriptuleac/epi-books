import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <header>
    <MyNav/>
      </header>
   
    <main>
    <h1 className='text-center'> Epicode Books</h1>
    <Welcome className='small-alert'/>
    <div>
      <AllTheBooks/>
    </div>
    </main>
    <footer>
    <MyFooter/>
    </footer>
    </>
  );
}

export default App;
