import Squares from '../components/retro';
import GridMotion from '../components/grid';
import Dock from "../components/Dock.jsx";
import StarBorder from '../components/StarBorder'



const items2 = [
  'Item 1',
  <div key='jsx-item-1'>Christopher Trent Doss Jr</div>,
  <img key='img-1' src="/images/Gradutae Resume Adobe.webp" alt="Local Image 1" className="h-auto rounded-lg" />,
  <img key='img-1' src="/images/2025_p.webp" alt="Local Image 1" className="h-auto rounded-lg" />,

  'Item 2',
  <img key='img-2' src="/images/long_social_post.webp" alt="External Image" className="w-40 h-auto rounded-lg" />,
  'Item 3',
    <img key='img-3' src="/images/long_social_post.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,

  <img key='img-3' src="/images/inter.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-4' src="/images/groot.webp" alt="Local Image 2" className=" h-auto rounded-lg" />,
  <img key='img-5' src="/images/2025_b.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-6' src="/images/Book 2-Front-02.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-7' src="/images/Artboard 2 copy.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-8' src="/images/scarlet.webp" alt="Local Image 2" className=" w-auto h-auto rounded-l
  
  
   g" />,
  <img key='img-9' src="/images/2025_p.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-10' src="/images/bk_chess.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-11' src="/images/2025_r.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-12' src="/images/Blackpan.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-13' src="/images/realk.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-14' src="/images/book3.webp" alt="Local Image 2" className=" rounded-lg" />,
  <img key='img-15' src="/images/Sward.webp" alt="Local Image 2" className=" rounded-lg" />,
  <img key='img-16' src="/images/Magik.webp" alt="Local Image 2" className="rounded-lg" />,


  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <img key='img-21' src="/images/Magik.webp" alt="Local Image 2" className="rounded-lg" />,
  <img key='img-22' src="/images/2025_r.webp" alt="Local Image 2" className="rounded-lg" />,
  <img key='img-22' src="/images/bk_chess.webp" alt="Local Image 2" className="rounded-lg" />,
];

//List for Dock items



export default function Exp() {
  return (
    <>
      <div>
        <GridMotion className='fixed h-screen' items={items2} />
      </div>
      <div className="flex flex-col items-center gap-3 h-auto">
        <h1 className="text-4xl font-bold mt-8">Work/Experience</h1>
        <h3 className='text-2xl font-bold text-cyan-400 pt-10'>Resume</h3>
        <a
          href="/images/Gradutae Resume Adobe.webp"  // Replace with actual image path
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40%] max-w-xl"
        >
          <img
            src="/images/Gradutae Resume Adobe.webp" // Same image path here
            alt="Resume preview"
            className="w-full h-auto rounded-md shadow-lg hover:opacity-90 transition duration-200"
          />
        </a>

        <footer className='mt-8 mb-10 w-[600px] border-t border-grey-500 '> </footer>




        {/* OLEMISS HACKATHON SECTION */}
        <div className="w-full mx-auto my-0 max-w-[80.5rem]  h-auto border-white rounded-sm flex ">
          <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/WEir.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold ">HackBeta Spring 25" </h1>
            <h2 className='text-2xl font-bold mb-3'>1st Place Project(Virtual Advisor)</h2>
            <h3 className="text-xl ">University of Mississippi</h3>
            <h3 className="text-l  text-cyan mb-2">March 22th, 2025</h3>

            <p className="text-m mt-10">
               <b>A</b>longside a team of 3 others, we created a website that uses AI to help students create a course plan for graduating with a Bachelor’s of Science in Computer Science at the University of Mississippi. I played a part in constructing the front end of the website, using React.js and its components to display an interactive and engaging experience for users. Our team, <b>Earth, Fire, Doss & Peter</b>, received 1st place in our project division.
            </p>
            <footer className='mt-6 border-t border-gray-500' ></footer>
            <p className='text-cyan-500 '>Github, React.js, HTML, CSS, Javascript, Figma, Adobe  Illustrator</p>
          </div>
          
        </div>
        <footer className='mt-8 mb-30 w-[80.5rem] border-t border-gray-500 '> </footer>

        {/* ECAC MEDIA INTERN SECTION */}
        <div className="w-full mx-auto my-0 max-w-[80.5rem]  h-auto border-white rounded-sm flex ">
          
          <div className="w-[60%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">E.C.A.C Media Team Intern</h1>
            <h3 className="text-xl font-semibold">ECAC Esports</h3>
            <h3 className="text-l  text-cyan mb-2">March 10th,2025 - Present</h3>

            <p className="text-m mt-10">
              <b>A</b>s a member of the ECAC Media Team, I am responsible for creating and editing content for the ECAC Esports social media platforms. I work with a team of other media interns to create engaging content that promotes the ECAC Esports brand and its events. My role includes creating graphics and other media content that is shared on social media platforms such as their website, Twitter, and Instagram.
            </p>
             <footer className='mt-6 border-t border-grey-500' ></footer>
            <p className='text-cyan-500 '>Discord, Adobe PhotoShop, Adobe  Illustrator, Google Drive</p>
          </div>
        <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/ECAC.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
       
        <footer className='mt-8 mb-30 w-[80.5rem] border-t border-grey-500 '> </footer>
        <div className="w-full mx-auto my-0 max-w-[80.5rem]  h-auto border-white rounded-sm flex ">
          <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/UniversityofMississippiDorms-Secondary3.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">Graduate Assistant</h1>
            <h3 className="text-xl font-semibold">University of Mississippi -- <b>Student Housing</b></h3>
            <h3 className="text-l  text-cyan mb-2">July 14th, 2025 - Present</h3>

            <p className="text-m mt-10">
               <b>A</b>s a Graduate Assistant, I am responsible for assisting the Graduate Community Coordinator with various tasks related to the management of student housing at the university. This includes helping with the planning and execution of events, managing student records, and providing support to students living in the residence halls. I work closely with the Graduate Coordinator and resident assistants to ensure that all aspects of student housing run smoothly and efficiently.
            </p>
            <footer className='mt-6 border-t border-grey-100' ></footer>
            <p className='text-cyan-500 '>Team Communication, Event Planning, Time Management, Customer Service, Google Excel, Adobe Illustrator, Microsoft Teams</p>
          </div>
          
        </div>
        <footer className='mt-8 mb-30 w-[80.5rem] border-t border-grey-500 '> </footer>



        {/* CODING CAMP INTERN SECTION */}
        <div className="w-full mx-auto my-0 max-w-[80.5rem]  h-auto border-white rounded-sm flex ">

          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">Coding Camp Intern</h1>
            <h3 className="text-xl font-semibold ">Dealth Health Alliance</h3>
            <h3 className="text-l  text-cyan mb-2">May 27th,2024-July 3th,2024</h3>

            <p className="text-m mt-10">
              <b>I</b>nstructed students on the basics of coding languages and game development. During the six-week internship, I worked with a group of other interns to create teaching strategies to promote basic Python, Java, and Karel to high school students (9th–12th grade) in the Mississippi Delta.
            </p>
             <footer className='mt-6 border-t border-grey-500' ></footer>
            <p className='text-cyan-500 '>Karel, Python, Java, Unity, Html/CSS</p>
          </div>
          <div className="ml-auto w-[40%] h-full">
            <img
              src="/images/DHA.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
        <footer className='mt-8 mb-10 w-[80.5rem] border-t border-grey-500 '> </footer>

        <div className="h-[200px] w-full flex items-center justify-center m-2">
  {/* <button className="bg-cyan-500 text-white p-3 rounded-l hover:bg-black transition hover:text-black transition">
    <a href="https://chrisdoss.myportfolio.com/work"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-white hover:text-cyan no-underline">Link to Digital Arts Portfolio Website</a>
  </button> */}
  <StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="2s"
>
  
  <a href="https://chrisdoss.myportfolio.com/work"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-white hover:text-cyan no-underline">Link to Digital Arts Portfolio Website</a>
  </StarBorder>
  
</div>




      </div>
    </>
  );
}
