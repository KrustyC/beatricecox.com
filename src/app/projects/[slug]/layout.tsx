import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </>
  );
}
