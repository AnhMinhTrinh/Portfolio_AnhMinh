import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center lg:translate-x-10  transition-transform">
        <a
          href="https://AnhMinhTrinh.github.io/Portfolio_AnhMinh/"
          aria-label="Home"
        >
          <span className="mx-2 text-3xl font-bold text-white">AM</span>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl lg:-translate-x-20  transition-transform ">
        <a
          href="https://www.linkedin.com/in/minh-trinh-anh-68691b280/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/AnhMinhTrinh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/minh.trinhanh.56"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
