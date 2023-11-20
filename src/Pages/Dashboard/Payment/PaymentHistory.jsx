
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import SectionTitle from './../../../Components/SectionTitle';


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()

    const { data } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`payment/${user?.email}`)
            return res.data
        }
    })
    console.log(data)

    return (
        <div>
            <SectionTitle heading={'Payment History'} subHeading={'At A Glance'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data.map((item, idx) => (
                            <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>${item.totalPrice}</td>
                                <td>${item.status}</td>
                                <td>${item.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;