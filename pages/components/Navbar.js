import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="bg-teal-600 text-white sticky top-0 z-40 shadow-md">
      <div class="container mx-auto px-4 lg:max-w-7xl flex justify-between">
        <div class="flex flex-row gap-1 items-center py-3 md:py-2">
          <a class="inline-block mr-2" href="#" aria-label="Go to home">
            <svg viewBox="0 0 64 64" class="w-8 h-8 active:scale-95">
              <g id="layer1" transform="translate(0 -988.36)">
                <path
                  id="border-path"
                  class="hover:fill-teal-500"
                  d="m32 991.45c16.017.0 28.911 12.894 28.911 28.911S48.017 1049.272 32 1049.272s-28.911-12.894-28.911-28.911S15.983 991.45 32 991.45z"
                  stroke="#fff"
                  stroke-width="4.9018"
                  fill="teal"></path>
                <path
                  id="hat-path"
                  fill-rule="evenodd"
                  fill="#fff"
                  d="m40.027 1002.9-28.596 8.3852 41.137 18.986z"></path>
                <path
                  id="face-path"
                  fill-rule="evenodd"
                  fill="#fff"
                  d="m21.869 1017.7.14738 5.203.19841 7.0046 2.7399-.4921 2.7642 7.9199 15.535-9.5z"></path>
              </g>
            </svg>
          </a>
          <a
            href="/ "
            class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-dark hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11 2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Home
          </a>
          <a
            href="/"
            class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-dark hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            Posts
          </a>
          <a
            href="/about "
            class="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-dark hover:bg-teal-700 focus:ring-2 focus:ring-teal-500">
            Tentang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
