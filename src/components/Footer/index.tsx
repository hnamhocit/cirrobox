import ProgressLink from "../ProgressLink";

const Footer = () => {
  return (
    <footer className="mt-12 py-8 bg-neutral-100 transition-colors dark:bg-neutral-950">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img
            src="/logo.png"
            alt="App Logo"
            className="h-16 w-16 mb-2 bg-neutral-900 rounded-full"
          />

          <span className="font-bold text-lg font-code">
            Cirro<span className="text-blue-500">Box</span>
          </span>

          <p className="mt-2 text-sm">
            Making your life easier, one app at a time.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h4 className="font-semibold mb-2 font-code">Contact</h4>
          <p className="text-sm">Email: hnamhocit@gmail.com</p>
          <p className="text-sm">Phone: +84 335574737</p>
          <p className="text-sm">Address: TPHCM, BD, Vietnam</p>
        </div>

        {/* Các trang quan trọng */}
        <div>
          <h4 className="font-semibold mb-2 font-code">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Chính sách & hỗ trợ */}
        <div>
          <h4 className="font-semibold mb-2 font-code">Legal</h4>

          <ul className="space-y-1 text-sm">
            <li>
              <ProgressLink
                href="/terms-of-service"
                className="hover:underline"
              >
                Terms of Service
              </ProgressLink>
            </li>

            <li>
              <ProgressLink
                href="/privacy-and-policy"
                className="hover:underline"
              >
                Privacy Policy
              </ProgressLink>
            </li>

            <li>
              <ProgressLink href="/data-deletion" className="hover:underline">
                Data Deletion
              </ProgressLink>
            </li>

            <li>
              <ProgressLink href="/help" className="hover:underline">
                Help Center
              </ProgressLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 font-code text-center">
        © {new Date().getFullYear()} Cirro
        <span className="text-blue-500">Box</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
