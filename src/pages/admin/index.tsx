import { useAuth } from "@/contexts/AuthContext";
// import { useNetlifyGetFunction } from "@/hooks/useNetlifyGetFunction";
import { AdminLayout } from "@/layouts/AdminLayout";
// import { SummaryCard } from "@/components/admin/Cards/SummaryCard";
// import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { NextPageWithLayout } from "@/types/app";

// type Stats = {
//   news: number;
//   events: number;
//   projects: number;
// };

const AdminDashboard: NextPageWithLayout<undefined> = () => {
  const { user } = useAuth();

  // const { data, loading, error } = useNetlifyGetFunction<Stats>({
  //   fetchUrlPath: "/admin-stats",
  //   user,
  // });

  // if (loading) {
  //   return (
  //     <div className="p-4">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  // if (error || !data) {
  //   return (
  //     <div className="p-4">
  //       <h2>Error fetching your stats, please try again later!</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="p-4">
      <h2 className="text-gray-600 font-bold">
        Welcome back {user?.user_metadata?.full_name}
      </h2>
      <p className="text-gray-600">
        This is your admin panel, where you can handle everything about events,
        news, projects and images.
      </p>

      {/* Maybe put some help videos from loom or something */}
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
