import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-bold text-red-600">KISS N TELL</h1>
      <p className="mt-4 text-lg">Break hearts. Not codes. Welcome to the void.</p>
      <Link to="/shop" className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">Enter the Shop</Link>
    </div>
  );
}

function Shop() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      <h2 className="text-4xl font-semibold mb-6">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-zinc-800 p-4 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="h-64 bg-zinc-700 mb-4 rounded-xl"></div>
            <h3 className="text-xl font-bold">Product {item}</h3>
            <p className="text-sm text-zinc-400">$99</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
      <p className="max-w-2xl text-zinc-400">Born in chaos, forged in love and leather. KISS N TELL is more than fabric — it's a rebellion stitched in blood-red thread. Inspired by Rick Owens, Amiri, and heartbreak alleyways.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <p className="text-zinc-400">DM us on IG @kissntell or drop us a line below.</p>
      <form className="mt-6 max-w-md">
        <input className="w-full p-3 rounded-xl mb-4 bg-zinc-800 text-white" placeholder="Your email" />
        <textarea className="w-full p-3 rounded-xl mb-4 bg-zinc-800 text-white" rows="4" placeholder="Your message" />
        <button className="px-6 py-3 bg-red-600 rounded-xl hover:bg-red-700 transition">Send</button>
      </form>
    </div>
  );
}

function Nav() {
  return (
    <nav className="bg-black p-4 flex justify-between text-white">
      <Link to="/" className="text-red-600 font-bold text-2xl">KNT</Link>
      <div className="space-x-4">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}