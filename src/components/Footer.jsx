import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer({ onCancel, onConfirm, confirmLabel, confirmColor }) {
  return (
    <div className="bg-green-100 px-6 py-8 flex flex-col gap-6 text-gray-800 rounded-b-2xl">
      {/* Newsletter Signup */}
      <div className="flex flex-col items-center text-center gap-3">
        <p className="text-base font-semibold text-green-900">
          Stay updated with our latest news
        </p>
        <form className="flex w-full max-w-sm gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-lg text-sm border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="h-px bg-green-300/60 mx-auto w-3/4"></div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-5">
        <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-green-700 hover:text-green-900 transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
