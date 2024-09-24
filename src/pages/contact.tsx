export default function Contact() {
  return (
    <div className="flex justify-between items-center h-screen w-4/5 ml-auto bg-primarybg perspective-1000 pt-20 pr-20">
      <img
        className="w-auto max-w-[500px] h-auto object-contain"
        src="profile.png"
        alt="Fatima Baghandeh Profile imag"
      />

      <ul className="ml-10 -skew-y-3  mr-7 -mt-20 text-primarytext ">
        <li className="text-7xl   text-black font-bold text-transparent mb-5 ">
          GitHub
        </li>
        <li className="text-7xl  font-bold text-transparent  mb-5 ">
          Linkedin
        </li>
        <li className="text-7xl   font-bold text-transparent  mb-5 ">
          Gmail
        </li>
        <li className="text-7xl   font-bold text-transparent mb-5 ">
          Telegram
        </li>
      </ul>
    </div>
  );
}  
    //text-7xl    font-bold text-transparent bg-clip-text bg-gradient-to-r 