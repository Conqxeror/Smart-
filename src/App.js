import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Find from './components/Find';
import Account from './components/Account';
import Check from './components/Check';
import Select from './components/Select';
import PageNotFound from './components/PageNotFound';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/find" element={<Find/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/check" element={<Check/>} />
        <Route path="/select/2" element={<Select/>} />
        <Route exact path="/select/1" element={<PageNotFound/>} />
        <Route path="/select/3" element={<PageNotFound/>} />
        <Route path="/select/4" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
