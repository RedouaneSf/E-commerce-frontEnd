import AdminMain from "./AdminMain";
import AdminSideBar from "./AdminSideBar";
import "./admin.css";

const AdminDashboard = () => {
    return ( 

        <section className="admin-dashboard">
           <AdminMain/>
           <AdminSideBar/>
           
        </section>
    );
}
 
export default AdminDashboard;