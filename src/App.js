import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/footer';

// Placeholder Pages
const Dashboard = () => <div className="p-8"><h1>Dashboard Page</h1></div>;
const Services = () => <div className="p-8"><h1>Services Page</h1></div>;
const Login = () => <div className="p-8"><h1>Login Page</h1></div>;
const Account = () => <div className="p-8"><h1>Account Page</h1></div>;

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
