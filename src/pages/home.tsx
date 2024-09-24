
export default function App() {
 

  return (
    <div className="flex justify-between items-center h-screen w-4/5 ml-auto bg-primarybg perspective-1000 pt-20">
      <img 
        className="w-auto max-w-[500px] h-auto object-contain" 
        src="profile.png" 
        alt="Fatima Baghandeh Profile imag" 
      />
      
      <div className="ml-10 -skew-y-3  mr-7 -mt-60 ">
        <h1 
          className="text-7xl   text-primarytext font-bold text-transparent bg-clip-text bg-gradient-to-r "
      
        >
          Front-End Developer
        </h1>
        
        <h2 className="mt-3 text-1xl text-primarytext">
          with a passion for continuous learning and <br/> improving my skills
        </h2>
      </div>
    </div>
  );
}
