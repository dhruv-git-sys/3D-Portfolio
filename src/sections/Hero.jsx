import { words } from "../constants/index.js";

const Hero = () => {
  const wordHeight = 40; // height in px
  const duration = words.length * 2; // total animation duration

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 min-h-screen">
          <div className="flex flex-col gap-5">
            <div className="hero-txt">
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <span>Shaping</span>
                <span className="relative h-10 w-[160px] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full animate-smooth-slide"
                    style={{
                      animationDuration: `${duration}s`,
                    }}
                  >
                    {[...words, ...words].map((word, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 h-10"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="w-6 h-6 bg-white rounded-full"
                        />
                        <span>{word.text}</span>
                      </div>
                    ))}
                  </div>
                </span>
              </h1>
              <h1 className="text-3xl font-bold">into Real Projects</h1>
              <h1 className="text-3xl font-bold">that Deliver Results</h1>
            </div>
          </div>
        </header>
      </div>

      {/* Smooth sliding animation */}
      <style jsx>{`
        @keyframes smooth-slide {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-${words.length * 40}px);
          }
        }

        .animate-smooth-slide {
          animation-name: smooth-slide;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
