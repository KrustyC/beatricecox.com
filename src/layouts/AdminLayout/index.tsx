import { useAuth } from "@/contexts/AuthContext";
import { NavBar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div>
      <NavBar onLogout={logout} />

      <div className="flex overflow-hidden bg-white pt-12">
        <Sidebar />

        <div
          id="main-content"
          className="h-screen w-full bg-admin-grey relative overflow-y-auto lg:ml-64 p-4"
        >
          {children}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
