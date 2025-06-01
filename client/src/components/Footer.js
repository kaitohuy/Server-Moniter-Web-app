export default function Footer() {
  return (
    <footer className="footer bg-cream-50 text-gray-700 p-4 text-center shadow-inner">
      <p>© 2025 kaitohuy. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="/about" className="text-blue-600 hover:text-blue-800 transition duration-200">About</a>
        <a href="/contact" className="text-blue-600 hover:text-blue-800 transition duration-200">Contact</a>
        <a href="/privacy" className="text-blue-600 hover:text-blue-800 transition duration-200">Privacy Policy</a>
      </div>
      <p className="mt-2 text-sm text-gray-500">Version 1.0.0 | Last updated: May 29, 2025</p>
    </footer>
  );
}