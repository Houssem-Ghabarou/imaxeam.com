import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow pt-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-orange-500">
                Privacy Policy
              </h1>
            </div>

            <div className="max-w-4xl mx-auto text-justify">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Website Visitors</h2>
                <p className="mb-4">
                  Like most website operators, we collect
                  non-personally-identifying information of the sort that web
                  browsers and servers typically make available, such as the
                  browser type, language preference, referring site, and the
                  date and time of each visitor request. Our purpose in
                  collecting non-personally identifying information is to better
                  understand how our visitors use the website. From time to
                  time, we may release non-personally-identifying information in
                  the aggregate, e.g., by publishing a report on trends in the
                  usage of its website. We also collect potentially
                  personally-identifying information like Internet Protocol (IP)
                  addresses. We do not use such information to identify
                  visitors, however, and do not disclose such information, other
                  than under the same circumstances that it uses and discloses
                  personally-identifying information, as described below.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  Gathering of Personally-Identifying Information
                </h2>
                <p className="mb-4">
                  Certain visitors to our websites choose to interact with us in
                  ways that require us to gather personally-identifying
                  information. The amount and type of information that we gather
                  depends on the nature of the interaction. For example, we ask
                  visitors who submit for more information to provide a name and
                  email address. In any case, we collect such information only
                  insofar as is necessary or appropriate to fulfill the purpose
                  of the visitor's interaction with us. We do not disclose
                  personally-identifying information other than as described
                  below. And visitors can always refuse to supply
                  personally-identifying information, with the caveat that it
                  may prevent them from engaging in certain website-related
                  activities.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  Aggregated Statistics
                </h2>
                <p className="mb-4">
                  We may collect statistics about the behavior of visitors to
                  our websites. For instance, we may monitor the most popular
                  URLs for an account or domain to help identify trends or spam
                  activity. We may display this information publicly or provide
                  it to others. However, we do not disclose
                  personally-identifying information other than as described
                  below.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  Protection of Certain Personally-Identifying Information
                </h2>
                <p className="mb-4">
                  We disclose potentially personally-identifying and
                  personally-identifying information only to those of our
                  employees, contractors and affiliated organizations that (i)
                  need to know that information in order to process it on our
                  behalf or to provide services available at our websites, and
                  (ii) that have agreed not to disclose it to others. Some of
                  those employees, contractors and affiliated organizations may
                  be located outside of your home country; by using our
                  websites, you consent to the transfer of such information to
                  them. We will not rent or sell potentially
                  personally-identifying and personally-identifying information
                  to anyone. Other than to our employees, contractors and
                  affiliated organizations, as described above, we disclose
                  potentially personally-identifying and personally-identifying
                  information only when required to do so by law, or when we
                  believe in good faith that disclosure is reasonably necessary
                  to protect the property or rights of our company, third
                  parties or the public at large. If you send us a request (for
                  example via a support or inquiry email or via one of our
                  feedback or contact mechanisms) through our website and have
                  supplied your email address, we may occasionally send you an
                  email to tell you about new products and services, solicit
                  your feedback, or just keep you up to date with what's going
                  on with our company and our products. We take all measures
                  reasonably necessary to protect against the unauthorized
                  access, use, alteration or destruction of potentially
                  personally-identifying and personally-identifying information.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Cookies</h2>
                <p className="mb-4">
                  A cookie is a string of information that a website stores on a
                  visitor's computer, and that the visitor's browser provides to
                  the website each time the visitor returns. We use cookies to
                  help us identify and track visitors, their usage of our
                  website, and their website access preferences. Our visitors
                  who do not wish to have cookies placed on their computers
                  should set their browsers to refuse cookies before using our
                  websites, with the drawback that certain features of our
                  websites may not function properly without the aid of cookies.
                  Any storage of potentially personal information within cookies
                  is encrypted to further ensure your security.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  Business Transfers
                </h2>
                <p className="mb-4">
                  If our company, or substantially all of its assets, were
                  acquired, or in the unlikely event that we go out of business
                  or enter bankruptcy, user information would be one of the
                  assets that is transferred or acquired by a third party. You
                  acknowledge that such transfers may occur, and that any
                  acquirer of our company may continue to use your personal
                  information as set forth in this policy.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Ads</h2>
                <p className="mb-4">
                  We do not allow third-party advertising on our websites.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Comments</h2>
                <p className="mb-4">
                  We do not allow non-employees to make comments or posts on our
                  websites.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  Privacy Policy Changes
                </h2>
                <p className="mb-4">
                  Although most changes are likely to be minor, we may change
                  our Privacy Policy from time to time, and in our sole
                  discretion. We encourage visitors to frequently check this
                  page for any changes to our Privacy Policy. If you do business
                  with us, you should also check this page frequently for any
                  changes. Your continued use of this site after any change in
                  this Privacy Policy will constitute your acceptance of such
                  change.
                </p>
              </div>

              <hr className="my-8" />

              <p className="text-orange-500">
                This Privacy Policy is based on the Automattic privacy policy
                which they released under Creative Commons.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
