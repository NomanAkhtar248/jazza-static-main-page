import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 px-4 py-3 md:px-6 lg:px-8">
        <div className="mx-auto text-sm text-gray-600">
          <Link href="#" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="font-semibold">Privacy Policy</span>
        </div>
      </div>

      <main className="mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
        {/* Main Heading */}
        <h1 className="mb-8 text-4xl font-bold md:mb-12 md:text-5xl">
          Privacy Policy
        </h1>

        {/* Privacy Policy Section 1 */}
        <section className="mb-10 space-y-4">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              {
                "All credit/debit cards' details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties"
              }
            </li>
            <li>
              {"JAZAA.ae will not pass any debit/credit card details to "}
              <span className="font-bold">third parties</span>
            </li>
            <li>
              {
                "https://jazaa.ae/ takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, "
              }
              <Link
                href="https://jazaa.ae"
                className="text-blue-600 hover:underline"
              >
                www.jazaa.ae
              </Link>{" "}
              {
                "cannot guarantee the security of any information that is disclosed online"
              }
            </li>
            <li>
              {"The "}
              <Link
                href="https://jazaa.ae/"
                className="text-blue-600 hover:underline"
              >
                https://jazaa.ae/
              </Link>{" "}
              {
                "is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. You should contact these entities directly if you have any questions about their use of the information that they collect."
              }
            </li>
            <li>
              {
                "The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements and standards. Therefore, the Customers' are encouraged to frequently visit these sections to be updated about the changes on the website. Modifications will be effective on the day they are posted."
              }
            </li>
          </ul>
        </section>

        {/* Terms & Conditions Section */}
        <section className="mb-10 space-y-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Terms & Conditions
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              {
                "JAZAA MOBILE PHONES & ACCESSORIES TRADING CO. L.L.C) maintains the "
              }
              <Link
                href="https://jazaa.ae/"
                className="text-blue-600 hover:underline"
              >
                https://jazaa.ae/
              </Link>
            </li>
            <li>
              {
                "United Arab of Emirates is our country of domicile and stipulate that the "
              }
              <span className="font-bold">governing law</span>
              {
                " is the local law. All disputes arising in connection therewith shall be heard only by a court of competent jurisdiction in U.A.E."
              }
            </li>
            <li>
              {
                "Visa or MasterCard debit and credit cards in AED will be accepted for payment"
              }
            </li>
            <li>
              {"We will not trade with or provide any services to "}
              <span className="font-bold">OFAC and sanctioned countries</span>
            </li>
            <li>
              {"Customer using the website who are Minor /under "}
              <span className="font-bold">the age of 18</span>
              {
                " shall not register as a User of the website and shall not transact on or use the website"
              }
            </li>
            <li>
              {"Cardholder must retain a copy of "}
              <span className="font-bold">transaction records</span>
              {" and Merchant policies and rules"}
            </li>
            <li>
              {"User is responsible for maintaining the "}
              <span className="font-bold">confidentiality of his account</span>
            </li>
          </ul>
        </section>

        {/* At JAZAA, we value your privacy... Section */}
        <section className="mb-10 space-y-4">
          <p className="mb-4">
            {
              "At JAZAA, we value your privacy. This policy outlines how we collect, use, and protect your personal data when you visit our website."
            }
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <span className="font-bold">Information Collection:</span>
              {
                " We collect personal information such as name, email address, and payment details when you register or make purchases."
              }
            </li>
            <li>
              <span className="font-bold">Data Usage:</span>
              {
                " We use your information to process transactions, provide customer support, and send marketing updates (with consent)."
              }
            </li>
            <li>
              <span className="font-bold">Cookies:</span>
              {
                " We use cookies to enhance user experience and analyze site usage."
              }
            </li>
            <li>
              <span className="font-bold">Data Protection:</span>
              {
                " We employ security measures to safeguard your personal information."
              }
            </li>
            <li>
              <span className="font-bold">Third-Party Sharing:</span>
              {
                " We do not sell or share your data with third parties without your consent, except when required by law."
              }
            </li>
            <li>
              <span className="font-bold">Your Rights:</span>
              {" You have the right to access, update, or delete your data."}
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
