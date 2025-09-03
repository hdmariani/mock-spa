import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">MockSite</h1>
      <div className="space-x-6">
        <Link data-gtm-component= "nav_link" to="/" className="hover:text-amber-400">Home</Link>
        <Link data-gtm-component= "nav_link" to="/about" className="hover:text-amber-400">About</Link>
        <Link data-gtm-component= "nav_link" to="/contact" className="hover:text-amber-400">Contact</Link>
      </div>
    </nav>
  );
}
