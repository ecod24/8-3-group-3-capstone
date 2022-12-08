import React from "react";

export default function Footer() {
  return (
    <footer class="mt-52 bg-green rounded-lg shadow md:flex md:items-center justify-between md:p-6 dark:bg-green">
      <span class="font-fonts text-sm sm:text-center dark:text-red">
        © 2022 Table For Two. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center text-sm text--500 dark:text-red sm:mt-0">
        <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6 ">
            About Us
          </a>
        </li>
      </ul>
    </footer>
  );
}
