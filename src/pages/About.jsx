import Dock from "../components/Dock";
import { FaInstagram, FaDiscord, FaFacebookF, FaBehance, FaLinkedin, FaHandshake, FaRegHandshake } from "react-icons/fa";




import React from 'react';
import { FaI, FaIndustry } from "react-icons/fa6";


 {/* <p className="text-lg text-gray-700 max-w-2xl text-center">
        I am a passionate developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.
      </p> */}
      {/* <div className="mt-8">
        <img src="/images/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full shadow-lg" />
      </div> */}
export default function About() {
  return (
    <>
  {/* Mashead or whatever it's called */}
  <div className="relative flex flex-col items-center justify-center h-[800px] bg-gray-100 overflow-hidden">
    {/* Overlay Image */}
    <img 
      src="/images/blurparty.webp" 
      alt="Overlay" 
      className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
    />

    {/* Text Content */}
    <h1 className="text-4xl font-bold mb-70 relative z-10">About Me</h1>
  </div>

  {/* Separator */}
  <div className="min-w-full h-[120px] bg-black border-cyan-500 border-b-4 border-t-4 flex justify-center items-center" />

  <div className="bg-white w-screen flex flex-col items-center gap-4 mb-10 justify-between min-h-screen">
    <div className="flex flex-col items-center gap-3 h-auto mb-10">
      <div className="w-full mx-auto my-0 max-w-[90.5rem] mt-14 h-auto border-white rounded-sm flex">
        <div className="ml-auto w-[50%] max-h-full">
          <img
            src="/images/Sward.webp"
            alt="Mock"
            className="w-auto max-h-[40.5rem] object-cover rounded-sm"
          />
        </div>
        <div className="w-full p-3 ml--3 flex flex-col text-black">
          <h1 className="text-2xl font-bold">About <b className="text-yellow-300">Chris...</b></h1>
          <h2 className='text-3xl font-bold'>Bachelor of Science in Computer Science</h2>
          <h2 className='text-3xl font-bold'>Minor in Graphic Design</h2>

          <h3 className="text-xl">University of Mississippi</h3>
          <h3 className="text-l text-cyan">May 14, 2025</h3>

          <p className="text-m mt-8">
            <b>B</b>orn and raised in Lansing, Michigan, I’ve always had a passion for both design and technology. When starting my undergraduate career at the University of Mississippi, I chose to advance my skills primarily in Computer Science. The extra credits in my schedule enabled me to pursue a minor in Graphic Design. 
          </p>

          <p className="mt-4">As a recent graduate from the University, the skills I gained will be used to pursue a career in Website Development, Software Development, or UX/UI Design.</p>
          <p className="mt-4"><b>Fun Fact:</b> I am slightly addicted to Butter Chicken.</p>
        </div>
      </div>
    </div>

    {/* Separator */}
    <div className="min-w-full h-[2px] bg-black border-cyan-500 border-b-1 border-t-1 flex justify-center items-center" />

    {/* Hobbies & Interests */}
    <div className="flex flex-col items-center gap-6 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">My Hobbies & Interests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* 3D Printing */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3D Printing</h2>
          <p className="text-gray-700">
            I enjoy designing and printing functional prototypes from websites like <a href="https://www.thingiverse.com/" className="text-cyan-500">Thingiverse</a> and <a href="https://cults3d.com/" className="text-cyan-500">Cults.3d</a>. Around last year, I invested in an FDM 3D printer, which has allowed me to bring creative designs made by myself or others to fruition.
          </p>
        </div>

        {/* Streaming */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Streaming</h2>
          <p className="text-gray-700">
            I stream rarely on Twitch. My work experience with OME and ECAC Esports made me more adept in the world of streaming. Albeit I am not serious about doing it full-time, I do enjoy sharing my gameplay with friends, viewers, and others interested in watching. 
          </p>
        </div>

        {/* Cooking */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Cooking</h2>
          <p className="text-gray-700">
            Cooking is a small outlet for me. I love experimenting with new recipes, flavors, and techniques in the kitchen. I’m always looking for new ways to improve my skills and try new cuisines.
          </p>
        </div>

        {/* Esports */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Collegiate Esports</h2>
          <p className="text-gray-700">
            I'm actively involved in collegiate-level esports, both as a player and as a supporter of the community. Most of my work has involved some form of esports, whether it’s coming up with a new design for a graphic or helping out with casting. I've experienced most, if not every, corner of collegiate esports.
          </p>
        </div>
      </div>
    </div>

    {/* Separator */}
    <div className="min-w-full h-[2px] bg-black border-cyan-500 border-b-1 border-t-1 flex justify-center items-center" />

    {/* Affiliations */}
    <div className="flex flex-col items-center gap-3 h-full pb-10">
      <div className="w-full mx-auto my-0 max-w-[90.5rem] mt-8 h-auto border-white rounded-sm flex">
        <div className="w-full p-4 flex flex-col text-white">
          <h1 className="text-2xl font-bold mb-2 text-center text-black">Affiliations</h1>
          <p className="text-m mt-2 text-black text-center">
            During my years as an undergraduate at the University, I joined various clubs and involved myself in different organizations.
          </p>
          <ul className="flex-col pl-5 mt-4">
            <li className="text-xl hover:border-white hover:scale-105 transition-transform duration-300 p-5 font-bold bg-black border-black border-1 rounded-lg mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
              Ole Miss Esports (OME) — 4 Years
              <p className="mt-2 text-sm font-light">Since my freshman year at Ole Miss, I’ve been connected with its esports scene—frequently attending weekly tournaments and participating on their Rocket League & Overwatch 2 teams.</p>
            </li>
            <li className="text-xl hover:border-white hover:scale-105 transition-transform duration-300 p-5 font-bold bg-black border-black border-1 rounded-lg mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
              I.M.A.G.E. (Increasing Minority Access to Graduate Education) — 5 Years
              <p className="mt-2 text-sm font-light">I.M.A.G.E. is another organization that I have been a member of since enrolling in college—in fact, it’s more accurate to say I’ve been a member since before my freshman year. This program helps minorities excel in undergraduate studies by providing kinship and resources that may not have been available prior to college.</p>
            </li>
            <li className="text-xl hover:border-white hover:scale-105 transition-transform duration-300 p-5 font-bold bg-black border-black border-1 rounded-lg mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
              Association of Computing Machinery (ACM) — 1 Year
              <p className="mt-2 text-sm font-light">I became involved in ACM during my senior year at the University. The organization not only helped me find confidants, but also gave me experience in social media management as Head of PR.</p>
            </li>
            <li className="text-xl hover:border-white hover:scale-105 transition-transform duration-300 p-5 font-bold bg-black border-black border-1 rounded-lg mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
              ECAC Esports (Eastern College Athletic Conference) — 1 Year
              <p className="mt-2 text-sm font-light">Even though I worked as a media team intern here, I still consider this organization one I connected deeply with. The community is very similar to OME, and the people I've met have positions all throughout the esports industry. Because of them, I’ve gained insight on new ways to cultivate my skills.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Socials */}
    <div className="min-h-[200px] h-auto text-black w-full flex flex-col items-center gap-3 mb-10">
      <h2 className="text-lg text-cyan-500 font-bold">Socials</h2>
      <footer className="w-[10.5rem] border-t-2 border-gray-500"></footer>

      {/* Links to Socials */}
      <a href="https://www.linkedin.com/in/chrisdoss-jr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
        <FaLinkedin size={20} /> LinkedIn
      </a>
      <a href="https://discordapp.com/users/ludakrispy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
        <FaDiscord size={20} /> Discord
      </a>
      <a href="https://www.behance.net/chrisdossjr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
        <FaBehance size={20} /> Behance
      </a>
      <a href="https://www.instagram.com/ludakrispy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
        <FaInstagram size={20} /> Instagram
      </a>
    </div>
  </div>
</>

  );
}