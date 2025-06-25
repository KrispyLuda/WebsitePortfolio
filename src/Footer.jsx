import { FaLinkedin, FaEnvelope, FaBehance, FaGlobe, FaGithub, } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-auto bg-black text-white py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
      
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Chris Doss</h3>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm text-gray-400">This Project was contructed using React.js & Tailwind.css</p>
        </div>

        <div className="flex gap-6 text-xl">
          <a href="https://www.linkedin.com/in/chrisdoss-jr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="mailto:Christdoss2003@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-red-400 transition" />
          </a>
          <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <FaBehance className="hover:text-blue-400 transition" />
          </a>
          <a href="https://chrisdoss.myportfolio.com/work" target="_blank" rel="noopener noreferrer" aria-label="Portfolio Website">
            <FaGlobe className="hover:text-green-400 transition" />
          </a>
          <a href="https://github.com/KrispyLuda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
