import DashboardLayout from "../../components/Dashboard/AppDashboard";
import UploadForm from "../../components/Upload";

const Upload = () => {
    return (
        <div>
            <DashboardLayout headerTitle="From Upload" pageTitle="Upload">
                <UploadForm/>
            </DashboardLayout>
        </div>
    );
}

export default Upload;
