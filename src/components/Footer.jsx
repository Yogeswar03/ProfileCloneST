import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ModalFooter({ onCancel, onConfirm, confirmLabel, confirmColor }) {
  return (
    <div className="border-t bg-gray-50 px-6 py-6 flex flex-col gap-4">
      {/* Newsletter Signup */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-sm font-medium text-gray-700">Stay updated with our latest news</p>
        <form className="flex w-full max-w-sm gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 text-gray-500">
        <a href="#" className="hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="hover:text-sky-500"><Twitter className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></a>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className={`px-4 py-2 rounded-lg text-white ${confirmColor}`}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}
