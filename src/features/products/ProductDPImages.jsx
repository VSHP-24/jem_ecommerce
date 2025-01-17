import { useState } from "react";

function ProductDPImages({ name, images, video }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const videoIdSubStringIndexStartEnd = [
    video.indexOf("embed/") + 6,
    video.indexOf("?"),
  ];

  const videoId = video.substring(
    videoIdSubStringIndexStartEnd[0],
    videoIdSubStringIndexStartEnd[1],
  );

  return (
    <div className="row-start-2 grid w-60 grid-rows-2 justify-self-center laptopS:row-start-1 laptopL:grid-cols-[6rem_20rem] laptopL:grid-rows-1 laptopL:items-center laptopL:justify-center laptopL:gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {images.map((image, i) => (
          <img
            id={`${name}_${i}`}
            key={`${name}_${i}`}
            src={image}
            alt={name}
            onClick={() => setSelectedImage(images[i])}
            onMouseEnter={() => setSelectedImage(images[i])}
            className={`${selectedImage === image ? "border-4 border-primary-400" : " "} h-20 w-20 bg-primary-200 hover:border-4 hover:border-primary-400`}
          />
        ))}
        {video && (
          <img
            id="youtube-video"
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt={`${name} Youtube Video`}
            className={`h-20 w-20 ${selectedImage === video ? "border-4 border-primary-400" : " "} `}
            onClick={() => setSelectedImage(video)}
            onMouseEnter={() => setSelectedImage(video)}
          />
        )}
      </div>

      {selectedImage !== video && (
        <img
          src={selectedImage}
          alt="name"
          className="row-start-1 h-60 bg-primary-200 laptopL:col-start-2 laptopL:h-80 laptopL:w-80"
        />
      )}

      {selectedImage === video && (
        <iframe
          src={video}
          className="row-start-1 h-60 w-60 bg-primary-200 laptopL:col-start-2 laptopL:h-80 laptopL:w-80"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default ProductDPImages;
