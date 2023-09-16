import React from "react";
import Footerbanner from "./ui/Footerbanner";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

function Footer() {
  const FooterData = [
    {
      title:"Business",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Technology",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Travel",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Sports",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Entertainment",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Features",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"Weather",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
    {
      title:"More",
      list:['Startup', 'Employee', 'Success', 'Videos', 'Market']
    },
  ]
  return (
    <>
      <Footerbanner />
      <div className="lg:flex lg:flex-row justify-center items-start w-full mt-10 sm:flex sm:flex-col sm:items-center">
        <div className="lg:h-96 sm:h-auto md:w-2/3 sm:w-2/3 lg:w-1/2 pe-20 flex flex-col justify-between lg:text-left sm:text-cemter sm:my-10 sm:w-full">
          <div>
            <h1 className="text-3xl font-bold mb-5">Buletin</h1>
            <p className="my-5 sm:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              rerum, saepe voluptates tempore quam pariatur odit in atque
              officiis, labore autem. Architecto, veritatis non similique eos et
              ex optio! Suscipit!
            </p>
            <div className="flex my-5 sm:justify-center lg:justify-start">
              <div className="mx-2 p-2 rounded-full bg-red-500 text-white">
                  <FacebookIcon fill="white" className="hover:scale-105 transition-all duration-200 ease-in-out"/>
              </div>
              <div className="mx-2 p-2 rounded-full bg-red-500 text-white">
                  <TwitterIcon fill="white" className="hover:scale-105 transition-all duration-200 ease-in-out"/>
              </div>
              <div className="mx-2 p-2 rounded-full bg-red-500 text-white">
                  <InstagramIcon className="hover:scale-105 transition-all duration-200 ease-in-out"/>
              </div>
              <div className="mx-2 p-2 rounded-full bg-red-500 text-white">
                  <LinkedinIcon fill="white" className="hover:scale-105 transition-all duration-200 ease-in-out"/>
              </div>
            </div>
          </div>
          <div className="sm:hidden lg:block">
            <a className="text-slate-500 text-decoration-none">Copyrights </a>
          </div>
        </div>
        <div className="gap-x-30 gap-y-20 lg:w-full md:w-2/3 sm:w-1/3 flex lg:justify-start md:justify-center sm:justify-center lg:text-left sm:text-center items-center flex-wrap">
          {
            FooterData?.map((li)=>{
              return(
                <ul className="px-6 sm:w-full md:w-56 lg:w-52">
                  <span className="font-bold text-2xl">{li.title}</span>
                  {
                    li.list.map((item)=>{
                      return(
                        <li>{item}</li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Footer;
