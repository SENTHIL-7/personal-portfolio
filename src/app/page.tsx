import Image from "next/image";

const links = {
  github: "https://github.com/SENTHIL-7",
  linkedin: "https://www.linkedin.com/in/apsenthilkumar/",
  instagram: "https://www.instagram.com/senthil_kumar448/",
}
const icons = {
  github: "/icons/github.png",
  linkedin: "/icons/linkedin.png",
  instagram: "/icons/instagram.png",
}
export default function Home() {
  return (
    <div className="p-10">
      <div className="flex gap-10 justify-around lg:flex-row flex-col lg:items-center items-center" style={{minHeight:"600px"}} >
        <div className="max-w-xl flex flex-col items-center justify-center lg:order-1 order-2" >
          <div className="text-5xl ">
          <span className="font-bold">Hi!</span> I'm <span className="font-bold mr-3">Senthil kumar ,</span> 
           A <span className="font-bold">Software Engineer</span>
          </div>
          <div className="mt-5 text-xl mb-5">
            I am a software engineer with a passion for building products that solve real-world problems. I am a quick learner and a team player.
          </div>
          <div className="flex gap-5 mt-5">
            {/* <button className="bg-blue-800 text-white px-4 py-2 rounded-md ">Download CV</button> */}
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md mr-5">Contact Me</button>
            {/* social media icons */}
            <div className="flex items-center gap-5">
              <a href={links.github}><Image src={icons.github} alt="GitHub" width={30} height={30} /></a>
              <a href={links.linkedin}><Image src={icons.linkedin} alt="LinkedIn" width={30} height={30} /></a>
              <a href={links.instagram}><Image src={icons.instagram} alt="Instagram" width={30} height={30} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:order-2 order-1">
          <Image className="rounded-full" style={{objectFit: "cover",width: "350px", height: "350px"}} src="/images/profile.jpg" alt="Senthil kumar" width={350} height={350} priority/>
        </div>
      </div>
    </div>
  );
}