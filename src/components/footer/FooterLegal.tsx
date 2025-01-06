export default function FooterLegal() {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} NAVADA. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}