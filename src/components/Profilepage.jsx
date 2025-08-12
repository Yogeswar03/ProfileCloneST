import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import Tabs from "./Tabs";

export default function ProfilePage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block w-full lg:w-1/3 xl:w-1/4">
          <ProfileSidebar />
        </div>

        {/* Tabs section */}
        <div className="flex-1">
          <Tabs />
        </div>
      </div>

      {/* Off-canvas sidebar for mobile */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowSidebar(false)}
          />

          {/* Sidebar panel */}
          <div className="relative bg-white w-80 max-w-full h-full shadow-lg p-4 overflow-y-auto">
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ProfileSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
