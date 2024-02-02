import { Footer } from "@/components/Footer";
import { ProjectNavbar } from "@/components/Project/Navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectNavbar />

      {children}

      <Footer />
    </>
  );
}
