import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Login from './components/auth/Login';

// Placeholder Pages
const Dashboard = () => <div className="p-8 text-white text-center"><h1>Dashboard Page</h1></div>;
const Services = () => <div className="p-8 text-white text-center"><h1>Services Page</h1></div>;
const Account = () => <div className="p-8 text-white text-center"><h1>Account Page</h1></div>;

export default function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-[#0b0e11]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
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
