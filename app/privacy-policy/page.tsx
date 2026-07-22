import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The X Group Inc. website visitors and communication services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <section className="pb-16 pt-28 text-[#334155]">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-5 lg:px-10">
          <header className="mt-8 flex flex-col items-center space-y-3 text-center">
            <h1 className="font-display text-3xl font-extrabold text-[#111827] sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#CC0000]">
              Last Updated: July 20, 2026
            </p>
            <p className="max-w-3xl text-base leading-7 text-[#475569]">
              How we collect, use, and protect your information when you visit our website or contact us.
            </p>
          </header>

          <article className="space-y-6 text-sm leading-7 sm:text-base">
            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">1. Introduction</h2>
              <p className="mt-2">
                The X Group Inc. (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose personal information when you use our website https://thexgroup.ca/ and our communication services, including SMS.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">2. Information We Collect</h2>
              <p className="mt-2">We collect information you provide directly to us, including:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name, email address, and physical address.</li>
                <li>
                  <strong>Phone Number:</strong> Specifically collected for the purpose of business communication and SMS updates.
                </li>
                <li>
                  <strong>Log Data:</strong> IP addresses and browser types collected automatically via our website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">3. Use of Information</h2>
              <p className="mt-2">
                We use your information to provide our services, respond to inquiries, and send administrative or marketing communications (where consented).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">4. SMS Communication &amp; Privacy</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>No Third-Party Sharing:</strong> Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes.
                </li>
                <li>
                  <strong>Exclusion:</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">5. Data Retention</h2>
              <p className="mt-2">
                We retain your personal information only as long as necessary to fulfill business purposes or as required by law in Alberta and applicable US jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">6. Your Rights</h2>
              <p className="mt-2">
                Depending on your location (Canada or the US), you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:info@thexgroup.ca" className="text-[#CC0000] underline">info@thexgroup.ca</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-[#111827]">7. AI-Generated Content</h2>
              <p className="mt-2">
                Please note that some images and graphical elements used on this website may be AI-generated to provide an enhanced user experience. These images are for illustrative purposes and do not infringe on any privacy rights.
              </p>
            </section>

            <section className="pt-6">
              <div className="mb-4 h-px w-full bg-[#CC0000]" />
              <h2 className="font-display text-xl font-semibold text-[#111827]">SMS Terms &amp; Conditions</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-[#111827]">1. Program Description</h3>
                  <p className="mt-1">
                    By providing your phone number and opting in through our website forms, you consent to receive SMS messages from X Group Inc. regarding sales inquiries, project updates, and freight coordination.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#111827]">2. Consent &amp; Opt-In</h3>
                  <p className="mt-1">
                    Consent to receive automated marketing or operational text messages is not a condition of any purchase. You may opt-in by checking the consent box on our forms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#111827]">3. Message Frequency</h3>
                  <p className="mt-1">Message frequency varies based on your interaction with our team.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#111827]">4. Cost</h3>
                  <p className="mt-1">Message and data rates may apply. Check with your mobile carrier for details.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#111827]">5. How to Opt-Out</h3>
                  <p className="mt-1">
                    To stop receiving text messages from X Group Inc., reply <strong>STOP</strong> to any message we send.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#111827]">6. Support</h3>
                  <p className="mt-1">
                    For help, reply <strong>HELP</strong> to any message or email <a href="mailto:info@thexgroup.ca" className="text-[#CC0000] underline">info@thexgroup.ca</a>.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
