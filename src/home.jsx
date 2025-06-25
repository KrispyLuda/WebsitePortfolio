
import StarBorder from './components/StarBorder'

// import Squares from './components/retro';
import InfiniteScroll from './components/scroll';
import CircularGallery from './components/Gallery';

// Example items for InfiniteScroll with plain text and JSX content
const items1 = [
  { content: "Graphic Designer" },
  { content: <p>Front End Designer</p> },
  { content: "CAD Designer" },
  { content: <p>Motion Graphics</p> },
  { content: "Full-Stack Web Developer" },
  { content: "Computer Programmer" },
];



export default function Body() {
  return (
    <>
    <div className="h-screen relative overflow-hidden">
    {/* Infinite Scroll background */}
    <InfiniteScroll
      items={items1}
      isTilted={true}
      tiltDirection="right"
      autoplay={true}
      autoplaySpeed={1.9}
      autoplayDirection="up"
      pauseOnHover={false}
    />

    <div className="absolute top-40 left-8 z-10 text-white max-w-[90%]">
      <p className="text-2xl font-bold">Chris Doss Jr.</p>
      <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Welcome to My Portfolio</h1>
      
      <h3 className="text-xl font-light drop-shadow">Designer  | Developer  | Creator</h3>
    </div>
  </div>

<section className="pt-20 w-full bg-darkblue-800 border-t-1 border-white px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    <section className=" p-5 text-center text-black shadow-md rounded-sm border-b-2 border-r-2 border-blue-500 hover:border-white hover:scale-105 transition-transform duration-300">
      <h2 className="font-bold text-white text-xl mb-2">Website Design & Development</h2>
      <p className='text-white'>
        I specialize in creating visually engaging, responsive websites using modern technologies like HTML, CSS, JavaScript, and React. Whether it's building from scratch or improving an existing site, I ensure intuitive navigation, optimized performance, and a strong visual identity tailored to user needs.
      </p>
    </section>

    <section className="border-cyan-500 border-b-2 border-l-2 p-5 text-center text-black shadow-md rounded-sm hover:border-white hover:scale-105 transition-transform duration-300">
      <h2 className=" text-white font-bold text-xl mb-2">Motion/Static Graphic Design</h2>
      <p className='text-white'>
        From static branding assets to dynamic motion graphics, I deliver designs that communicate clearly and creatively. My work includes logo design, social media graphics, Twitch overlays, and short motion graphics with tools like Adobe Photoshop, Illustrator, and After Effects.
      </p>
    </section>

    <section className="border-cyan-500 border-t-2 border-r-2 p-5 text-center text-black shadow-md rounded-sm hover:border-white hover:scale-105 transition-transform duration-300">
      <h2 className="text-white font-bold text-xl mb-2">CAD & 3D Printing</h2>
      <p className='text-white'>
        Experienced in CAD modeling and 3D printing for both prototyping and functional designs. I use tools like AutoCAD and Blender to model precision parts and concept designs, and bring them to life with various 3D printing technologies including FDM and resin-based systems.
      </p>
    </section>

    <section className="border-l-2 border-t-2 border-blue-500 p-5 text-center text-black shadow-md rounded-sm hover:border-white hover:scale-105 transition-transform duration-300">
      <h2 className="font-bold text-white text-xl mb-2">Computer Programming</h2>
      <p className='text-white'>
        I write efficient, readable code across multiple languages such as Python, and Java. Whether developing backend logic, automation scripts, or interactive applications, I enjoy solving real-world problems with scalable and maintainable software solutions.
      </p>
    </section>
  </div>
</section>



<br /><br />
{/* Using Flex Items and containers  */}
<div className="flex h-[400px]  border-white gap-2 flex-col">
  {/* Header Section */}



  <div className="p-3 flex-1 bg-black text-white justify-center items-center flex">
    <h1 className='mt-10'>Programming Languages</h1>
  </div>

  {/* Content Section */}
  <div className="mb-3 flex flex-1 gap-6 p-2">
    
    {/* Website Design & Development */}
    <div className="flex flex-col text-center flex-1  rounded-lg text-black p-2">
      <h2 className="font-bold mb-2 text-xl text-white ">Website Design & Development</h2>

      <div className="flex gap-2 flex-1 ">
        <div className=" flex-1 bg-gray-100 p-2 left-1/2 top-0 rounded-lg"><h3 className='font-bold'>Front-End</h3>

        <div className="grid grid-cols-2  gap-2">
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">HTML</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">CSS</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">Tailwind CSS</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">Figma</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">React.js</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">Webflow</div>
      </div>

        </div>

        <div className="flex-1 bg-gray-200 p-2  rounded-lg"><h3 className='font-bold'>Back-End</h3>
          <div className="grid grid-cols-1 gap-2">
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">JavaScript</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">Python</div>
        <div className="bg-gradient-to-b from-white to-gray-200 w-auto p-2 rounded border-1 border-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] text-center">SQL</div>
      </div>
        </div>
      </div>
    </div>
    
    {/* General */}
    <div className="flex-1 text-black rounded-lg p-2">
      <h2 className=" text-center text-xl font-bold mb-2 text-white ">General</h2>

      <div className=" grid grid-cols-1 gap-2  p-2 left-1/2 text-white  top-0 rounded-lg gap 2 ">
      <div className="bg-blue-500 w-auto p-2 rounded border-2 border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0)] text-center">Java</div>
      <div className="bg-blue-500  w-auto p-2 rounded border-2 border-white shadow text-center"><h3>Python</h3></div>
      <div className="bg-blue-500  w-auto p-2 rounded border-2 border-white shadow text-center">C</div>
      <div className="bg-blue-500  w-auto p-2 rounded border-2 border-white shadow text-center">C++</div>

      </div>
    </div>

    {/* Game Dev */}
 <div className="flex-1 rounded-lg text-black p-2">
  <h2 className="text-center text-xl font-bold mb-2 text-white">Game Development</h2>

  <div className="grid grid-cols-1 gap-2 p-2 text-white rounded-lg">
    <div className="bg-cyan-500 w-auto p-2 rounded border-2 border-white shadow text-center">
      Unity (C#)
    </div>
    <div className="bg-cyan-500 w-auto p-2 rounded border-2 border-white shadow text-center">
      <h3>Unreal (C++)</h3>
    </div>
    <div className="bg-cyan-500 w-auto p-2 rounded border-2 border-white shadow text-center">
      <h3>Godot (GDScript)</h3>
    </div>
  </div>
</div>
</div>

</div>
<br />
<div style={{ height: '510px', position: 'relative' }}>
  <h1 className=" flex-1 bg-black text-white justify-center items-center flex">Design Tools</h1>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>

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

    </>
  );
}
