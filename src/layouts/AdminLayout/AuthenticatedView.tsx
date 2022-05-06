import { NavBar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface AuthenticatedViewProps {
  onLogout: VoidFunction;
}

export const AuthenticatedView: React.FC<React.PropsWithChildren<AuthenticatedViewProps>> = ({
  children,
  onLogout,
}) => (
  <div>
    <NavBar onLogout={onLogout} />

    <div className="flex overflow-hidden bg-white pt-12">
      <Sidebar />

      <div
        id="main-content"
        className="h-full w-full bg-admin-grey relative overflow-y-auto lg:ml-64 pt-2"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  </div>
);
