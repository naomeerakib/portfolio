import { useState } from 'react';
import { Link } from 'react-router';
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

  // Mobile menu: every page in order, a blank line between sections
  const mobileGroups = [
    designProjects.map((p) => ({ to: `/design/${p.slug}`, title: p.title })),
    archiveProjects.map((p) => ({ to: `/archive/${p.slug}`, title: p.title })),
    motionProjects.map((p) => ({ to: `/motion/${p.slug}`, title: p.title })),
    [{ to: '/about', title: 'about' }],
  ];

  return (
    <nav className="pointer-events-none fixed top-0 right-0 w-full z-50 px-4 py-5 md:px-[15px] md:py-[40px]">
      <div className="flex items-center justify-end">
        {/* Mobile: one "wave" menu with every project in order */}
        <button
          type="button"
          className="nav-link pointer-events-auto md:hidden"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          wave
        </button>

        <ul className="pointer-events-auto hidden items-start gap-5 relative md:flex">
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
        <>
          {/* Tap anywhere outside the list to close it */}
          <div className="pointer-events-auto fixed inset-0 md:hidden" aria-hidden="true" onClick={closeMobileMenu} />
          <div className="mobile-menu pointer-events-auto relative ml-auto mt-[14px] w-fit pb-2 pl-3 text-right md:hidden">
            {mobileGroups.map((group, groupIndex) => (
              <ul key={groupIndex} className={groupIndex > 0 ? 'mt-[1.3em]' : undefined}>
                {group.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="dropdown-link mobile-link block whitespace-nowrap" onClick={closeMobileMenu}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </>
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

        .mobile-link {
          line-height: 1.3;
        }

        .mobile-menu {
          background: #ffffff;
        }

        html[data-slide-theme='dark'] .mobile-menu {
          background: #000000;
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
