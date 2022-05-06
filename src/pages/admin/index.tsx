import { useAuth } from "@/contexts/AuthContext";
import { AdminLayout } from "@/layouts/AdminLayout";
import { NextPageWithLayout } from "@/types/app";

const AdminDashboard: NextPageWithLayout<undefined> = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-gray-600 font-bold">
        Welcome back {user?.user_metadata?.full_name}
      </h2>
      <p className="text-gray-600">
        This is your admin panel, where you can handle everything about events,
        news, projects and images.
      </p>
    </div>
  );
};

AdminDashboard.Layout = AdminLayout;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default AdminDashboard;
