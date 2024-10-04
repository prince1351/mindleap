

export default function Youtube(props) {
  const { data } = props;

  return (
    <div className="flex flex-col mt-8 w-3/4 mx-auto">
    <h4 className="text-3xl font-semibold">{data.title}</h4>
    <div className=" flex gap-10 items-center">
      <div className=" w-96 h-40 bg-black rounded-md mt-5">
        <img
          src={data.thumb}
          alt=""
          className="rounded-md w-full h-full"
        />
      </div>

      <div className=" text-2xl">
        <ul>
          {data.videos.slice(0, 3).map((video, index) => (
            <li key={index}>
              <a
                href={video.dlink}
                download={`${data.title}_${video.quality}.mp4`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger la vidéo en {video.quality} (
                {video.size || "Taille non spécifiée"})
              </a>
            </li>
          ))}
          {data.audios.map((audio, index) => (
            <li key={index}>
              <a
                href={audio.dlink}
                download={`${data.title}_${audio.quality}.mp4`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger audio en {audio.quality} (
                {audio.size || "Taille non spécifiée"})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
