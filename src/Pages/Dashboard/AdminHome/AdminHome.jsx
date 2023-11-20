import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <SectionTitle heading={'WellCome To admin home'} subHeading={user?.displayName} ></SectionTitle>
        </div>
    );
};

export default AdminHome;
