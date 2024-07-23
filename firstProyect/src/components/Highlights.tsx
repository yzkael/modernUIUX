import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";



const Highlights = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
    });
    
    gsap.to(".link", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "play none none none",
      },
      stagger: 0.1,
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
            <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                Watch the film
                <img id="watchImg" src={watchImg} alt="watch" className="ml-2" />
                </p>
                <p className="link">
                Watch the event
                <img id="watchImg" src={rightImg} alt="watch" className="ml-2" />
                </p>
            </div>
        </div>
      </div>
      <VideoCarousel/>
    </section>
  );
};

export default Highlights;
