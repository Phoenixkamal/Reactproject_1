import './App.css';
import Nav from './Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section_1 from './Section_1/Section_1';
import Section_2 from './Section_2/Section_2';
import{ DataProvider } from './context/DataContext';
import Section_3 from './Section_3/Section_3';
import Section_5 from './Section_5/Section_5';
import Section_6 from './Section_6/Section_6';
import Footer from './Footer/Footer';


function App() {

  return (
    <div className="App">
      <DataProvider>
        <Nav/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_5/>
        <Section_6/>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
