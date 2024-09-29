import { useEffect, useState, type Key } from 'react';
const Carousel = ({ images }: { images?: string[] }) => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [images]);

  const handlePrev = () => {
    if (images) {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (images) {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }
  };

  return (
    <div className="carousel relative w-full h-screen overflow">
      <div className="carousel-indicators absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {images?.map((_: any, index: Key | null | undefined) => (
          <button
            key={index}
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === currentImage ? 'active' : ''}`}
            aria-current={index === currentImage ? 'true' : 'false'}
            aria-label={`Slide ${index !== null && index !== undefined ? (index as number) + 1 : ''}`}
            onClick={() => setCurrentImage(index as number)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
        {images?.map((image: string, index: number) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] ${index === currentImage ? 'block' : 'hidden'} w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex items-center justify-center h-full overflow-hidden">
              <img src={image} alt="Carousel Image" className="block object-contain overflow-hidden " />
            </div>

          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default Carousel;