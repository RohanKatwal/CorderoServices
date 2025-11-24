import DashboardHeader from "@/components/shared/dashboard/DashboardHeader";
import DashboardMenu from "@/components/shared/dashboard/DashboardMenu";
import DashboardVideos from "@/components/shared/dashboard/DashboardVideos";

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
