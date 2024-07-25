import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constant";

const VideoCarousel = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLast: false,
    isPlaying: false,
  });
  const { isEnd, startPlay, videoId, isLast, isPlaying } = video;

  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    if (loadedData.length > 3) {
      const currentVideo = videoRef.current[videoId];
      if (!isPlaying && currentVideo) {
        currentVideo.pause();
      } else if (startPlay && currentVideo) {
        currentVideo.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      // Animate progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={() =>
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }))
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((textList) => (
                  <p
                    key={textList}
                    className="sm:text-sm md:text-2xl text-xl font-medium"
                  >
                    {textList}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                videoDivRef.current[index] = el;
              }}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer inline-block"
            >
                 <span 
                className="absolute h-full w-full rounded-full bg-blue-500"
                ref={(el) => {
                  videoSpanRef.current[index] = el;
                }}
              >
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
