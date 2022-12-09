import React from "react";

export default function Footer() {
  return (
    <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-green">
      <span class="fonts-font text-sm sm:text-center text-red">
        © 2022{" "}
        <a class="hover:underline">
          Table For Two™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-logored sm:mt-0">
        <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}
