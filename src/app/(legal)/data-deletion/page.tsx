export default function DataDeletion() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 font-code text-blue-500">
        Data Deletion Instructions
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We respect your right to control your personal data. If you wish to
        delete your account and associated data, please follow the steps below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        1. In-App Deletion
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Navigate to <span className="font-medium">Settings &gt; Account</span>{" "}
        and select{" "}
        <span className="font-semibold text-red-600">Delete Account</span>. This
        will permanently remove your data from our systems.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        2. Email Request
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Alternatively, you may send an email to{" "}
        <span className="font-mono text-blue-600">support@example.com</span>{" "}
        using the subject line{" "}
        <span className="font-semibold">"Data Deletion Request"</span>. Please
        include your registered email address.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        3. Processing Time
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Your request will be processed within{" "}
        <span className="font-medium">7 business days</span>. You will receive a
        confirmation once completed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 font-code">
        4. Important Note
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Data deletion is{" "}
        <span className="font-bold">permanent and irreversible</span>. Once your
        account is deleted, all associated data will be lost.
      </p>
    </div>
  );
}
