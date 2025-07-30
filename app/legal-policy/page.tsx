import Link from "next/link";

export default function LegalPolicyPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Breadcrumb section */}
      <div className="bg-gray-100 px-4 py-3 md:px-6">
        <nav className="mx-auto text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="font-medium text-gray-900">Legal Policy</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main content section */}
      <main className="mx-auto px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 text-3xl font-bold">Legal Policy</h1>

        <h2 className="mb-4 text-4xl font-bold">Legal Information</h2>
        <p className="text-lg leading-relaxed">
          JAZAA MOBILE PHONES & ACCESSORIES TRADING CO LLC. is a company
          licensed by Dubai economy and tourism department authority and
          incubated in Office No 107, Jabri Building Frij Al Murar Dubai -
          United Arab Emirates.
        </p>
      </main>
    </div>
  );
}
