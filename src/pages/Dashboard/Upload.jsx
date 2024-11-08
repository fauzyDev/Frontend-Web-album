import DashboardLayout from "../../components/Dashboard/AppDashboard";
import UploadForm from "../../components/Upload";

const Upload = () => {
    return (
        <DashboardLayout headerTitle="Form Upload" pageTitle="Upload">
            <UploadForm/>
        </DashboardLayout>
    );
}

export default Upload;
