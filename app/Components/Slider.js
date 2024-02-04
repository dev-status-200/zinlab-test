'use client';

export default function Slider() {
  const slides = [
    {title:"PDF to Word", desc:'Convert your files from...'},
    {title:"PDF to PPT", desc:'Convert your files from...'},
    {title:"PDF to TXT", desc:'Convert your files from...'},
    {title:"PDF to Excel", desc:'Convert your files from...'},
    {title:"PDF to JPG", desc:'Convert your files from...'},
    {title:"PDF to PNG", desc:'Convert your files from...'},
    {title:"PDF to Doc", desc:'Convert your files from...'},
  ];

  const nextSlide = () => {
    var slideRight = document.getElementById("slider");
    slideRight.scrollLeft = slideRight.scrollLeft + 330;
  };

  const prevSlide = () => {
    var slideRight = document.getElementById("slider");
    slideRight.scrollLeft = slideRight.scrollLeft - 330;
  };

  return (
  <>
    <div className="container">
      <div className="slider-wrapper" id="slider">
      {slides.map((x, i)=>{
      return(
        <div key={i} className="slider">
          <div className="slider-content">
            <img src="/convert.PNG" height={80} />
            <h6>{x.title}</h6>
            <p>{x.desc}</p>
          </div>
        </div>
      )})}
      </div>
    </div>
    <button onClick={prevSlide} className="prev-btn">
      <img src="/next.png" height={30} />
    </button>
    <button onClick={nextSlide} className="next-btn">
      <img src="/next.png" height={30} />
    </button>
  </>
  );
}