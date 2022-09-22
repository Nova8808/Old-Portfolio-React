import React from "react";
import "./index.css";
import logo from "./images/MagefallSmallestTransparent.png";

function Gamedev(){


return(
<>
<div className="magefall-logo">
<img src={logo} />
</div>
<div className="video-player">
<video src="https://cdn.akamai.steamstatic.com/steam/apps/256907073/movie480_vp9.webm?t=1663777344" width="640" height="480" controls>
  Your browser does not support the video tag.
</video>
</div>
<p className="magefall-desc">
    Magefall is a 3D PC roguelike survivor game focused on slinging spells and big explosions. Made in Unity using C# and the .NET framework and availible for Early Access on Steam.
</p>
<div>
<a
                    href='https://store.steampowered.com/app/2084260/Magefall/?beta=0'
                    className='buy-button'>
                    Buy Magefall on Steam
              </a>
              </div>
</>

)
}

export default Gamedev;