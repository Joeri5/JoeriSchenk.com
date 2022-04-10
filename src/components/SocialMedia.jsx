import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/joeri157">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://discord.com/users/594237090019934269" target="_blank">
        <div>
          <FaDiscord />
        </div>
      </a>
      <a href="https://www.instagram.com/joeri33/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
