export default function TermsOfService() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-500 font-code">
        Terms of Service
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Welcome to our platform. By using our services, you agree to comply with
        the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        By accessing or using our website and services, you acknowledge that you
        have read, understood, and agree to be bound by these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        2. User Responsibilities
      </h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>
          You must provide accurate and truthful information when registering.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account.
        </li>
        <li>
          You agree not to misuse or attempt to exploit the service for unlawful
          purposes.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        3. Termination
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We reserve the right to suspend or terminate your account if you violate
        these terms or engage in harmful behavior.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        4. Changes to Terms
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We may update these Terms of Service from time to time. Continued use of
        the platform constitutes your acceptance of the revised terms.
      </p>
    </div>
  );
}
