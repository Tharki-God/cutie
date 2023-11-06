import React from "react";
import Assets from "../../../assets";
import "./Connections.css";
export default React.memo(() => {
  return (
    <div className="connections">
      <a title="github" href="https://steamcommunity.com/profiles/76561199174580871">
        <img className="connection-icon" src={Assets.connections.steam} alt="steam" />
      </a>
      <a title="loneweeb" href="https://discord.com/users/701424426394320967/">
        <img className="connection-icon" src={Assets.connections.discord} alt="discord" />
      </a>
      <a title="instagram" href="https://www.instagram.com/someoneyoudontneedtoconcernyou/">
        <img className="connection-icon" src={Assets.connections.insta} alt="instagram" />
      </a>
      <a title="youtube" href="https://open.spotify.com/user/8x1iiladejyvaf4vbbifvepvi">
        <img className="connection-icon" src={Assets.connections.spotify} alt="spotify" />
      </a>
      <a title="twitch" href="https://www.twitch.tv/thisisizumi">
        <img className="connection-icon" src={Assets.connections.twitch} alt="twitch" />
      </a>
    </div>
  );
});
