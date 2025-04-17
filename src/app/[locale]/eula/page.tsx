import Link from "next/link";
import GetInTouch from "@/components/shared-components/getInTouch";

export default function EulaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow pt-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-orange-500">EULA</h1>
            </div>

            <div className="max-w-4xl mx-auto text-justify">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  YOUR COMPANY PRESENTS THIS SOFTWARE END-USER LICENSE AGREEMENT
                  FOR THESE PRODUCTS:
                </h2>
                <p className="mb-4">
                  1. PRODUCT ONE ALL VERSIONS
                  <br />
                  2. PRODUCT TWO ALL VERSIONS
                  <br />
                  3. PRODUCT THREE ALL VERSIONS
                </p>
                <p className="text-sm text-gray-600">
                  1) All trademarks are the property of their respective owners.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-orange-500 font-bold">
                  IMPORTANT:
                  <br />
                  Please read the terms and conditions of this license agreement
                  carefully before continuing with any software product install
                  or use.
                </p>
              </div>

              <div className="mb-8">
                <p className="mb-4">
                  This End-User License Agreement ("EULA") is a binding legal
                  agreement between You (either an individual or a single
                  entity, corporation, company, or firm, "you," and "your") and
                  Your Company ("Company," "we," "us," and "our") software
                  product(s) identified within this EULA which may include
                  associated software components, media, printed materials, and
                  online or electronic documentation ("Software Product"). By
                  installing, copying, or otherwise using the Software Product,
                  you agree to be bound by the terms of this EULA. This EULA
                  represents the entire agreement concerning the actual Software
                  Product use between you and us, and it supersedes any prior
                  proposal, representation, or understanding between the
                  parties.
                </p>
                <p className="font-bold">
                  IF YOU DO NOT AGREE TO THE TERMS OF THIS EULA, DO NOT INSTALL
                  OR USE THE SOFTWARE PRODUCT.
                </p>
                <p>
                  The Software Product is protected by copyright laws and
                  international copyright treaties, as well as other
                  intellectual property laws and treaties. The Software Product
                  is licensed, not sold.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">1. GRANT OF LICENSE</h3>
                <p className="mb-2">
                  The Software Product is licensed as follows:
                </p>
                <p className="mb-2">
                  <strong>(a) General Installation and Use</strong>
                  <br />
                  Company grants you the right to install and use the Software
                  Product within the set of one (1) licensed Organization. You
                  can install the Software Product in ONE ORGANIZATION and use
                  the Software Product as specified in your purchase agreement.
                </p>
                <p className="mb-2">
                  <strong>
                    (b) Installation or Use in More Than ONE ORGANIZATION
                  </strong>
                  <br />
                  You may not install or use the Software Product in more than
                  ONE ORGANIZATION without a separate licensing Agreement from
                  Company. Excluded from this regulation are test and
                  development environments.
                </p>
                <p className="mb-2">
                  <strong>(c) Backup Copies</strong>
                  <br />
                  You may make copies of the Software Product as may be
                  necessary for backup and archival purposes.
                </p>
                <p className="mb-2">
                  <strong>(d) Use Within Timely Limitations</strong>
                  <br />
                  If there is nothing defined in the purchase process concerning
                  a limited or unlimited time period where the product can be
                  used, the timely limitation is defined as perpetual use after
                  purchase date.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  2. DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS
                </h3>
                <p className="mb-2">
                  <strong>(a) Maintenance of Copyright Notices</strong>
                  <br />
                  You must not remove or alter any copyright notices on any or
                  all copies of the Software Product.
                </p>
                <p className="mb-2">
                  <strong>(b) Distribution</strong>
                  <br />
                  You may not distribute copies of the Software Product to third
                  parties without the written Agreement from Company.
                </p>
                <p className="mb-2">
                  <strong>
                    (c) Prohibition on Reverse Engineering, Decompilation, and
                    Disassembly
                  </strong>
                  <br />
                  You may not reverse engineer, decompile, or disassemble the
                  Software Product, except and only to the extent that such
                  activity is expressly permitted by applicable law
                  notwithstanding this limitation.
                </p>
                <p className="mb-2">
                  <strong>(d) Rental</strong>
                  <br />
                  You may not rent, lease, or lend the Software Product.
                </p>
                <p className="mb-2">
                  <strong>(e) Support Services</strong>
                  <br />
                  Company may provide you with support services related to the
                  Software Product ("Support Services"). Any supplemental
                  software code provided to you as part of the Support Services
                  shall be considered part of the Software Product and subject
                  to the terms and conditions of this EULA.
                </p>
                <p className="mb-2">
                  <strong>(f) Compliance with Applicable Laws</strong>
                  <br />
                  You must comply with all applicable laws regarding use of the
                  Software Product.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">3. TERMINATION</h3>
                <p>
                  Without prejudice to any other rights, Company may terminate
                  this EULA if you fail to comply with the terms and conditions
                  of this EULA. In such event, you must destroy all copies of
                  the Software Product in your possession.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">4. COPYRIGHT</h3>
                <p>
                  All title, including but not limited to copyrights, in and to
                  the Software Product and any copies thereof are owned by
                  Company or its suppliers. All title and intellectual property
                  rights in and to the content which may be accessed through use
                  of the Software Product is the property of the respective
                  content owner and may be protected by applicable copyright or
                  other intellectual property laws and treaties. This EULA
                  grants you no rights to use such content. All rights not
                  expressly granted are reserved by Company.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">5. NO WARRANTIES</h3>
                <p>
                  Company expressly disclaims any warranty for the Software
                  Product. The Software Product is provided 'As Is' without any
                  express or implied warranty of any kind, including but not
                  limited to any warranties of merchantability, noninfringement,
                  or fitness of a particular purpose. Company does not warrant
                  or assume responsibility for the accuracy or completeness of
                  any information, text, graphics, links or other items
                  contained within the Software Product. Company further
                  expressly disclaims any warranty or representation to
                  Authorized Users or to any third party.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  6. LIMITATION OF LIABILITY
                </h3>
                <p>
                  In no event shall Company be liable for any damages
                  (including, without limitation, lost profits, business
                  interruption, or lost information) rising out of 'Authorized
                  Users' use of or inability to use the Software Product, even
                  if Company has been advised of the possibility of such
                  damages. In no event will Company be liable for loss or damage
                  of data or for indirect, special, incidental, consequential
                  (including lost profit), or other damages based in contract,
                  tort or otherwise. Company shall have no liability with
                  respect to the content of the Software Product or any part
                  thereof, including but not limited to errors or omissions
                  contained therein, libel, infringements of rights of
                  publicity, privacy, trademark rights, business interruption,
                  personal injury, loss of privacy, moral rights or the
                  disclosure of confidential information. This point can be
                  contracted in another way in the purchasing process.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">7. SEVERANCE CLAUSE</h3>
                <p>
                  If any provision of this agreement is prohibited by law or
                  judged by a court to be unlawful, void or unenforceable, the
                  provision shall, to the extent required, be severed from this
                  agreement and rendered ineffective as far as possible without
                  modifying the remaining provisions of this agreement, and
                  shall not in any way affect any other circumstances of or the
                  validity or enforcement of this agreement.
                </p>
              </div>

              <hr className="my-8" />

              <p className="text-sm text-gray-500">
                THIS EULA LAST UPDATED ON {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
