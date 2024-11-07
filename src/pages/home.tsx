import Typewriter from "../components/Type-writer";

export default function App() {
 

  return (
    <div className=" grid grid-rows-7 grid-cols-4 "  >
      <h1 className="lg:text-7xl text-3xl font-custom-mono row-start-3 col-start-1 col-end-5  ">
     <Typewriter text={"> Fatima Baghandeh"} />
       </h1>
       <h2 className="text-lg lg:text-2xl row-start-5 col-start-1 col-end-5 ">I'm Cs student and a Web Developer. I love learning new things. My passion is building creative websites.   </h2>
     
    </div>
  );
}
