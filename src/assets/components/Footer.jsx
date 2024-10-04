import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
    <Link to="/">

          <h1 className="text-5xl text-red-600 ">Mydownloader</h1>
          </Link>

          <p className="w-full md:w-2/3 text-gray-600">
          Dans le cadre de mon apprentissage de ReactJS, j'ai entrepris de développer un projet personnel intitulé <span className="text-red-600">Mydownloader</span>. L'objectif de ce projet est double : d'une part, il me permet de progresser dans la maîtrise de React, et d'autre part, il vise à créer une solution qui facilite le téléchargement de vidéos en ligne, tout en évitant les désagréments des publicités envahissantes qui caractérisent souvent ces services gratuits.
           
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">MENU</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">
              <li className="hover:text-red-600 transition-all ease-in-out duration-400 ">
                Home
              </li>
            </NavLink>
            <NavLink to="/support">
              <li className="hover:text-red-600 transition-all ease-in-out duration-400 ">
                Support Me
              </li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CONTACT</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+228 79856311</li>
            <li>boatenglaurent146@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 Laurent_Boateng - All Right Reserved.
        </p>
      </div>
    </div>
  );
}
