import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { getProjectsByCategory } from '../data/portfolio';

export default function Navigation() {
  const [isDesignHovered, setIsDesignHovered] = useState(false);
  const [isArchiveHovered, setIsArchiveHovered] = useState(false);
  const [isMotionHovered, setIsMotionHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const designProjects = getProjectsByCategory('design');
  const archiveProjects = getProjectsByCategory('archive');
  const motionProjects = getProjectsByCategory('motion');

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="fixed top-0 right-0 w-full z-50 px-4 py-5 md:px-[15px] md:py-[40px]">
      <div className="flex items-center justify-between md:justify-end">
        <Link to="/" className="nav-link md:hidden" onClick={closeMobileMenu}>
          wave
        </Link>

        <button
          type="button"
          className="md:hidden rounded-full border border-black/10 bg-white/90 p-2 backdrop-blur-sm"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-start gap-5 relative md:flex">
          <li>
            <Link
              to="/"
              className="nav-link"
            >
              wave
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIsDesignHovered(true)}
            onMouseLeave={() => setIsDesignHovered(false)}
          >
            <span className="nav-link cursor-pointer">
              design
            </span>

            {/* Dropdown */}
            <div
              className={`
                absolute right-0 top-full pt-[14px] text-right
                transition-opacity duration-300 ease-out
                ${isDesignHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            >
              <ul className="flex flex-col">
                {designProjects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/design/${project.slug}`}
                      className="dropdown-link block whitespace-nowrap"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIsArchiveHovered(true)}
            onMouseLeave={() => setIsArchiveHovered(false)}
          >
            <span className="nav-link cursor-pointer">
              archive
            </span>

            {/* Dropdown */}
            <div
              className={`
                absolute right-0 top-full pt-[14px] text-right
                transition-opacity duration-300 ease-out
                ${isArchiveHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            >
              <ul className="flex flex-col">
                {archiveProjects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/archive/${project.slug}`}
                      className="dropdown-link block whitespace-nowrap"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIsMotionHovered(true)}
            onMouseLeave={() => setIsMotionHovered(false)}
          >
            <span className="nav-link cursor-pointer">
              motion
            </span>

            {/* Dropdown */}
            <div
              className={`
                absolute right-0 top-full pt-[14px] text-right
                transition-opacity duration-300 ease-out
                ${isMotionHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            >
              <ul className="flex flex-col">
                {motionProjects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/motion/${project.slug}`}
                      className="dropdown-link block whitespace-nowrap"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/about"
              className="nav-link"
            >
              about
            </Link>
          </li>
        </ul>
      </div>

      {isMobileOpen && (
        <div className="mt-4 rounded-[2rem] border border-black/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
          <div className="grid gap-5">
            <div className="space-y-3">
              <Link to="/" className="nav-link block" onClick={closeMobileMenu}>
                wave
              </Link>
              <Link to="/about" className="nav-link block" onClick={closeMobileMenu}>
                about
              </Link>
            </div>

            <div>
              <p className="nav-section-title">design</p>
              <div className="mt-2 grid gap-2">
                {designProjects.map((project) => (
                  <Link key={project.slug} to={`/design/${project.slug}`} className="dropdown-link block" onClick={closeMobileMenu}>
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="nav-section-title">archive</p>
              <div className="mt-2 grid gap-2">
                {archiveProjects.map((project) => (
                  <Link key={project.slug} to={`/archive/${project.slug}`} className="dropdown-link block" onClick={closeMobileMenu}>
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="nav-section-title">motion</p>
              <div className="mt-2 grid gap-2">
                {motionProjects.map((project) => (
                  <Link key={project.slug} to={`/motion/${project.slug}`} className="dropdown-link block" onClick={closeMobileMenu}>
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 15px;
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #0066ff;
        }

        .dropdown-link {
          font-size: 15px;
          line-height: 1.1;
          color: #2a2a2a;
          text-decoration: none;
          transition: color 0.15s ease;
          position: relative;
        }

        .dropdown-link:hover {
          color: #0066ff;
        }

        .nav-section-title {
          font-size: 12px;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.45);
        }
      `}</style>
    </nav>
  );
}
