import { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import TikTok from "../assets/components/TikTok";
import Instagram from "../assets/components/Instagram";
import Youtube from "../assets/components/Youtube";

export default function Home() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [social, setSocial] = useState("Youtube");
  const handleReload = () => {
    window.location.reload(); // Recharge la page
  };
  const handleClick = (platform) => {
    handleReload(); // Recharge la page
    setSocial(platform); // Met à jour l'état en fonction du bouton cliqué

  };

  const fetchData = async () => {
    const url = `https://full-downloader-social-media.p.rapidapi.com/?url=${inputValue}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "044cbcb213mshabfc96bda117265p18e8fejsn478b70e453eb",
        "x-rapidapi-host": "full-downloader-social-media.p.rapidapi.com",
      },
    };

    try {
      // Utilisation de await pour attendre la réponse
      const response = await axios.get(url, options);

      // Mise à jour des données après avoir reçu la réponse
      setData(response.data);

      // Vérification si les données sont vides après que la réponse a été reçue
      if (response.data.length === 0) {
        toast.error("Échec lors de la récupération des données !");
      } else {
        toast.success("Données récupérées avec succès !");
      }

      console.log(response.data); // Affichage des données récupérées
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      toast.error("Erreur lors de la requête.");
    }
  };

  return (
    <div className="flex-col items-center justify-center mt-10 py-8">
      <div>
        <h2 className="text-7xl text-center font-bold ">
          Téléchargeur de vidéos{" "}
          <span className="block">Tiktok, Instagram,</span>
          <span className="block">YouTube</span>
        </h2>
        <p className="text-center">
          Téléchargez gratuitement en ligne maintenant !
        </p>
        <div className="flex items-center justify-center gap-5 cursor-pointer mt-4">
          <div className="px-3 py-2 bg-red-600 text-xl text-white rounded-2xl flex gap-2 hover:bg-red-400 transition-all ease-in-out duration-200" onClick={() =>handleClick("Youtube")}>Youtube</div>
          <div className="px-3 py-2 bg-red-600 text-xl text-white rounded-2xl flex gap-2 hover:bg-red-400 transition-all ease-in-out duration-200"  onClick={() =>handleClick("TikTok")}>Tiktok</div>
          <div className="px-3 py-2 bg-red-600 text-xl text-white rounded-2xl flex gap-2 hover:bg-red-400 transition-all ease-in-out duration-200"  onClick={() =>handleClick("Instagram")}>Instagram</div>
        </div>
      </div>

      <div className="bg-white flex justify-between mt-8 w-3/4 px-8 py-4 mx-auto rounded-3xl">
        <input
          type="text"
          placeholder={`Paste your ${social} URL`}
          className="outline-none w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={fetchData}
          className="px-5 py-3 bg-red-600 text-xl text-white rounded-2xl flex gap-2 hover:bg-red-400 transition-all ease-in-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
            />
          </svg>
          Dowload
        </button>
      </div>

      {/* Display Response */}

      



      {data.length === 0 ? (
  ""
) : (
  (() => {
    switch (social) {
      case "TikTok":
        return <TikTok data={data}/>;
      case "Instagram":
        return <Instagram data={data} />;
      default:
        return <Youtube data={data} />;
    }
  })()
)}

    </div>
  );
}
