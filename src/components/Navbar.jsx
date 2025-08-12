import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Heart,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";
import SidebarContent from "./SidebarContent";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const [engagementsOpen, setEngagementsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navRef = useRef(null);

  const closeAllDropdowns = () => {
    setDropdownOpen(false);
    setEngagementsOpen(false);
    setHelpOpen(false);
    setWishlistOpen(false);
    setNotificationsOpen(false);
  };

  useEffect(() => {
    function handleDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAllDropdowns();
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 bg-white shadow-md"
      >
        {/* Left: hamburger + brand + search */}
        <div className="flex items-center gap-3 flex-1">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <span className="font-semibold text-gray-800 text-lg whitespace-nowrap">
            <svg id="logo-37" width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z" class="ccustom" fill="#25CAAC"></path> <path d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z" class="ccustom" fill="#25CAAC"></path> <path d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z" class="ccustom" fill="#25CAAC"></path> <path d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z" class="ccustom" fill="#25CAAC"></path> <path d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z" class="ccustom" fill="#25CAAC"></path> <path d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z" class="ccustom" fill="#25CAAC"></path> </svg>
          </span>

          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-2 py-1 ml-4 w-full max-w-xs">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5 relative">
          {/* My engagements dropdown */}
          <div className="relative">
            <span
              className="text-sm text-gray-700 font-medium cursor-pointer"
              onClick={() => {
                closeAllDropdowns();
                setEngagementsOpen((v) => !v);
              }}
            >
              my engagements
            </span>
            {engagementsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Current Projects
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Past Projects
                </button>
              </div>
            )}
          </div>

          {/* Help dropdown */}
          <div className="relative">
            <HelpCircle
              className="w-5 h-5 text-gray-600 cursor-pointer"
              onClick={() => {
                closeAllDropdowns();
                setHelpOpen((v) => !v);
              }}
            />
            {helpOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  FAQ
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Contact Support
                </button>
              </div>
            )}
          </div>

          {/* Wishlist dropdown */}
          <div className="relative">
            <Heart
              className="w-5 h-5 text-gray-600 cursor-pointer"
              onClick={() => {
                closeAllDropdowns();
                setWishlistOpen((v) => !v);
              }}
            />
            {wishlistOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  View Wishlist
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Manage Wishlist
                </button>
              </div>
            )}
          </div>

          {/* Notifications dropdown */}
          <div className="relative">
            <Bell
              className="w-5 h-5 text-gray-600 cursor-pointer"
              onClick={() => {
                closeAllDropdowns();
                setNotificationsOpen((v) => !v);
              }}
            />
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50">
                <p className="px-4 py-2 text-sm text-gray-600">
                  No new notifications
                </p>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 w-20 border border-gray-300 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                closeAllDropdowns();
                setDropdownOpen((v) => !v);
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src="/picture.png"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <ChevronDown
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowProfilePopup(true)}
                >
                  View Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-2 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50 md:hidden">
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 mb-2 mx-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none text-sm w-full"
              />
            </div>

            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              My engagements
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Help
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Wishlist
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Notifications
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setShowProfilePopup(true);
              }}
            >
              View Profile
            </button>
          </div>
        )}
      </nav>

      {/* Profile Popup */}
      {showProfilePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm max-h-[90vh] overflow-y-auto animate-scaleIn relative">
            <button
              onClick={() => setShowProfilePopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
