import Hero from "@/components/Home/Hero";
import ProfessionalIntro from "@/components/Home/ProfessionalIntro";
import PracticeAreas from "@/components/Home/PracticeAreas";
import Experience from "@/components/Home/Experience";
import ProfessionalApproach from "@/components/Home/ProfessionalApproach";
import LegalKnowledge from "@/components/Home/LegalKnowledge";
import FAQPreview from "@/components/Home/FAQPreview";
import Location from "@/components/Home/Location";
import ContactCTA from "@/components/Home/ContactCTA";
import DisclaimerNotice from "@/components/Home/DisclaimerNotice";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProfessionalIntro />

      <PracticeAreas />

      <Experience />

      <ProfessionalApproach />

      <LegalKnowledge />

      <FAQPreview />

      <Location />

      <ContactCTA />

      <DisclaimerNotice />
    </>
  );
}