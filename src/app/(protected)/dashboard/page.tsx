import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardMenu from "@/components/dashboard/DashboardMenu";
import DashboardVideos from "@/components/dashboard/DashboardVideos";

const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardVideos />
      <DashboardMenu />
    </>
  );
};

export default DashboardPage;
