

export default function Instagram(props) {
 
    const { data } = props;
  
    return (
      <div className="flex flex-col mt-8 w-3/4 mx-auto">
      <div className=" flex gap-10 items-center">
        <div className=" w-96 h-40 bg-black rounded-md mt-5">
          <img
            src={data.thumb}
            alt=""
            className="rounded-md w-full h-full"
          />
        </div>
  
        <div className=" text-2xl">
           <p> <a
                href={data.download_url}
                target="_blank"
                rel="noopener noreferrer"
              >Télécharger la vidéo  </a> </p>
        </div>
      </div>
    </div>
    )
  }
  