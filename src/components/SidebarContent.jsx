import { useState } from "react";

export default function SidebarContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/picture.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover"
        />
        <h2 className="mt-3 text-xl font-semibold">Alex Johnson</h2>
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg mt-2">
          AVAILABLE IN 2 - 4 WEEKS
        </span>
        <p className="text-sm text-gray-500 mt-2">
          Senior UI/UX Designer @ Greenhouse
        </p>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-4 text-sm">
        <div>
          <p className="font-medium">Seniority</p>
          <p className="text-gray-500 text-xs">Senior</p>
        </div>
        <div>
          <p className="font-medium">Location & Timezone</p>
          <p className="text-gray-500 text-xs">GMT+02:00, Barcelona, Spain</p>
        </div>
        <div>
          <p className="font-medium">Average Hourly Rate</p>
          <p className="text-gray-500 text-xs">€60-80 / hour</p>
        </div>
        <div>
          <p className="font-medium">Languages</p>
          <p className="text-gray-500 text-xs">Spanish, English</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <button
          onClick={() => handleOpenModal("hire")}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium cursor-pointer hover:bg-green-700"
        >
          Hire Alex
        </button>
        <button
          onClick={() => handleOpenModal("wishlist")}
          className="w-full border border-gray-300 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-100"
        >
          Add to Wishlist
        </button>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Top skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "FinTech",
            "SaaS",
            "Healthcare",
            "Website Design",
            "Mobile Apps",
            "UX Strategy",
            "React",
            "Figma",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {modalType === "hire" && (
              <>
                <h2 className="text-xl font-semibold mb-4 cursor-pointer">
                  Hire Alex Johnson
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  You’re about to start the hiring process for Alex Johnson.  
                  Please provide your project details and timeline.
                </p>
                <textarea
                  placeholder="Enter project details..."
                  className="w-full border rounded-lg p-2 text-sm mb-4"
                  rows={4}
                ></textarea>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg cursor-pointer font-medium hover:bg-green-700">
                  Send Request
                </button>
              </>
            )}

            {modalType === "wishlist" && (
              <>
                <h2 className="text-xl font-semibold mb-4 cursor-pointer">
                  Add to Wishlist
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Alex Johnson will be added to your wishlist for future hiring opportunities.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                  Confirm
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
