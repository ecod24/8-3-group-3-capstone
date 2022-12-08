import React from "react";

export default function Footer() {
  return (
    <footer className="mt-52 bg-green rounded-lg shadow md:flex md:items-center justify-between md:p-6 dark:bg-green">
      <span className="font-fonts text-sm sm:text-center dark:text-red">
        © 2022 Table For Two. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm text--500 sm:mt-0">
        <li>
          <a
            href="/about"
            className="mr-4 hover:underline md:mr-6 text-logored"
          >
            About Us
          </a>
        </li>
      </ul>
    </footer>
  );
}
