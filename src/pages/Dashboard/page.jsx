import DashboardLayout from "../../components/Dashboard/AppDashboard";
import Tables from "../../components/Dashboard/components/Tables";

const Page = () => {
  return (
    <DashboardLayout headerTitle="Dashboard" pageTitle="Dashboard">
      <Tables/>
    </DashboardLayout>
  );
}

export default Page;
