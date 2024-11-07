export default function Contact() {
  return (
    <div className="grid md:gap-44 gird-rows-1 pt-10 sm:pt-0 grid-cols-2 bg-primarytext rounded-[30px] mt-8 ">
           <img className=" md:col-start-1 md:ml-10 col-start-1 col-end-2 ml-4 " src="profile.png"/>
           <div className="md:col-start-2 text-sm md:text-lg lg:text-xl  justify-self-end sm:self-center self-start  text-primarywhite mr-6  md:mr-24 sm:space-y-12 space-y-2 ">
           <div className="justify-self-end  hover:font-medium"> <a  href="mailto:fatima.baghandeh@gmail.com" target="_blank">fatima.baghandeh@gmail.com </a></div>
          <div className="justify-self-end  hover:font-medium "><a  href="https://www.linkedin.com/in/fatima-baghandeh">Linkedin</a></div>
          <div className=" justify-self-end  hover:font-medium"><a  href="https://github.com/fatimabaghandeh" target="_blank">GitHub</a></div>
          </div>
        
    
    </div>
  );
}  
