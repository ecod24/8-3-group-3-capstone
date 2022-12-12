import React from "react";
import { Link } from "react-router-dom";

export default function Match({ match }) {
  console.log(match);
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <Link to={`/users/${match.id}`}>
          <img
            src={match.image}
            className="rounded-full border-4 border-logored max-h-56"
          />
        </Link>
        <a href="https://www.instagram.com/pambeesly/">
          <div className="font-fonts text-3xl text-red">
            {match.chat_handle}
          </div>
        </a>
      </div>
    </div>
  );
}
