'use client';

export default function Nav() {

  return (
  <div className="nav-container">
    <div className="nav">
      <div>
        <img src="/Capture.PNG" />
      </div>
      <div className="search-container">
        <input className="search-bar" placeholder="Search For Movies TV Shows" style={{fontSize:18}} />
        <div className="search-icon">
          <img src="/search.PNG" height={25} />
        </div>
      </div>
      <div>
        <button className="signup-btn">Sign-Up</button>
      </div>
    </div>
    <div className="nav px-2">
      <div className="nav-link">Stock Video</div>
      <div className="nav-link">Video Templates</div>
      <div className="nav-link">Music</div>
      <div className="nav-link">Sound Effects</div>
      <div className="nav-link">Graphic Templates</div>
      <div className="nav-link">Graphic</div>
      <div className="nav-link">Presentation Templates</div>
      <div className="nav-link">Photos</div>
      <div className="nav-link">Add-ons</div>
      <div className="nav-link">More</div>
    </div>
  </div>
  );
}