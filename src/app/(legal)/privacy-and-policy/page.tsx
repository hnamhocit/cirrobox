export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 font-code text-blue-500">
        Privacy Policy
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, and protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Personal information you provide during registration.</li>
        <li>Usage data such as log files, cookies, and session information.</li>
        <li>Communications between you and our support team.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        2. How We Use Information
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We use the collected information to provide and improve our services,
        ensure security, and communicate important updates.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        3. Data Security
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We implement appropriate security measures to protect your personal
        information from unauthorized access, disclosure, or misuse.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">4. Updates</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We may update this Privacy Policy periodically. Any significant changes
        will be communicated through the platform or via email.
      </p>
    </div>
  );
}
