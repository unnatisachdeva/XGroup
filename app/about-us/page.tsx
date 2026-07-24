import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";

export const metadata: Metadata = {
  title: "About Us | The X Group Inc.",
  description:
    "Behind every successful logistics partnership is a relationship built on trust, consistency, and reliable execution.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutClient />
      <CertificationsStrip />
    </>
  );
}
