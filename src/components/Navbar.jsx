// Navbar.jsx
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

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setEngagementsOpen(false);
        setHelpOpen(false);
        setWishlistOpen(false);
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 py-3 bg-white shadow-md">
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
            My App
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
              onClick={() => setEngagementsOpen((v) => !v)}
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
              onClick={() => setHelpOpen((v) => !v)}
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
              onClick={() => setWishlistOpen((v) => !v)}
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
              onClick={() => setNotificationsOpen((v) => !v)}
            />
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50">
                <p className="px-4 py-2 text-sm text-gray-600">No new notifications</p>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-2 w-20 border border-gray-300 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-50"
              onClick={() => setDropdownOpen((v) => !v)}
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
