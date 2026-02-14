import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

interface DropdownItem {
  label: string;
  path: string;
  children?: DropdownItem[];
}

interface MenuItem {
  label: string;
  path: string;
  children?: DropdownItem[];
}

const Navigation = ({ mobile = false, onItemClick }: NavigationProps) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      path: '/about',
      children: [
        { label: 'Who we are', path: '/about/who-we-are' },
        { label: 'How it Evolved', path: '/about/how-it-evolved' },
        { label: 'Mission', path: '/about/mission' },
        { label: 'Legal & Financial', path: '/about/legal-financial' },
      ],
    },
    {
      label: 'Activities',
      path: '/activities',
      children: [
        {
          label: 'Medical Programmes',
          path: '/activities/medical-programmes',
          children: [
            { label: 'Dental Camp', path: '/activities/dental-camp' },
            { label: 'General Health Camp', path: '/activities/general-health-camp' },
            { label: 'Medical Helpline', path: '/activities/medical-helpline' },
          ],
        },
        { label: 'Trust Camp Activities', path: '/activities/trust-camp' },
        { label: 'Eye Camps', path: '/activities/eye-camps' },
        { label: 'Blood Camps', path: '/activities/blood-camps' },
        { label: 'Veterinary Camps', path: '/activities/veterinary-camps' },
        { label: 'Educational Programmes', path: '/activities/educational-programmes' },
        { label: 'Social Programmes', path: '/activities/social-programmes' },
        { label: 'Awareness Programmes', path: '/activities/awareness-programmes' },
      ],
    },
    { label: 'Photo Gallery', path: '/photo-gallery' },
    {
      label: 'Ways to Help',
      path: '/ways-to-help',
      children: [
        { label: 'Volunteer', path: '/ways-to-help/volunteer' },
        { label: 'Donate', path: '/ways-to-help/donate' },
        { label: 'Spread the Word', path: '/ways-to-help/spread-the-word' },
      ],
    },
    {
      label: 'Press & Events',
      path: '/press-events',
      children: [
        { label: 'PCMC Trust in Media', path: '/press-events/media' },
      ],
    },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (label: string) => {
    if (!mobile) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  };

  const toggleDropdown = (label: string) => {
    if (mobile) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const toggleSubDropdown = (label: string) => {
    if (mobile) {
      setOpenSubDropdown(openSubDropdown === label ? null : label);
    }
  };

  if (mobile) {
    return (
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === item.label ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <div key={child.label}>
                        {child.children ? (
                          <div>
                            <button
                              onClick={() => toggleSubDropdown(child.label)}
                              className="w-full flex items-center justify-between px-4 py-2 text-sm rounded-lg bg-gray-50 text-gray-900 hover:bg-gray-100 transition-all duration-300"
                            >
                              <span>{child.label}</span>
                              <ChevronDown
                                className={`w-3 h-3 transition-transform ${
                                  openSubDropdown === child.label ? 'transform rotate-180' : ''
                                }`}
                              />
                            </button>
                            {openSubDropdown === child.label && (
                              <div className="ml-4 mt-1 space-y-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    to={subChild.path}
                                    onClick={onItemClick}
                                    className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                                      isActive(subChild.path)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={child.path}
                            onClick={onItemClick}
                            className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                              isActive(child.path)
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={onItemClick}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-1">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children ? (
            <>
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[220px] z-50">
                  {item.children.map((child) => (
                    <div key={child.label} className="relative group/sub">
                      {child.children ? (
                        <>
                          <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 transition-all duration-300">
                            <span className="text-sm font-medium">{child.label}</span>
                            <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                          </div>
                          <div className="hidden group-hover/sub:block absolute left-full top-0 ml-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.label}
                                to={subChild.path}
                                className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-all duration-300 ${
                                  isActive(subChild.path) ? 'text-orange-600 bg-orange-50 font-medium' : 'text-gray-700'
                                }`}
                              >
                                {subChild.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={child.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-all duration-300 ${
                            isActive(child.path) ? 'text-orange-600 bg-orange-50 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
