/* eslint-disable react-hooks/exhaustive-deps */
import useStore from "../../../store"
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { FaRegEdit, FaTrash } from "react-icons/fa";
function Tables() {
    const { teamItems, getTeams } = useStore();
    const [loading, setLoading] = useState(true);

    const handleTeams = async() => {
        try {
            await getTeams()
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        handleTeams()
    }, []);

    return (
        <div className="relative overflow-x-auto ring-1 ring-gray-200 sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Member Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Participants
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brief
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <Loading/>
                        ) :
                        teamItems.map((item) => (
                            <tr key={item.id} className="bg-white border-y">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.id}
                                </th>
                                <td className="px-6 py-4">
                                    {item.team_name}
                                </td>
                                <td className="px-6 py-4 truncate max-w-[10rem]">
                                    {item.position}
                                </td>
                                <td className="px-6 py-4">
                                    {item.salary}
                                </td>
                                <td className="px-6 py-4">
                                    {item.documents}
                                </td>
                                <td className="px-6 py-4">
                                    {item.status}
                                </td>
                                <td className="px-6 py-4 flex flex-row items-center gap-x-2">
                                    <button className="bg-yellow-400 p-2 text-white rounded-md"><FaRegEdit/></button>
                                    <button className="bg-red-400 p-2 text-white rounded-md" ><FaTrash/></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tables