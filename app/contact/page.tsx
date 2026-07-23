import ContactHero from "./ContactHero";
import ContactPanel from "./ContactPanel";
// import ContactInfo from "./ContactInfo";
import ContactDepartments from "./ContactDepartments";
import QuoteCTA from "./QuoteCTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactPanel />
      {/* <ContactInfo /> */}
      <ContactDepartments />
      <QuoteCTA />
    </main>
  );
}