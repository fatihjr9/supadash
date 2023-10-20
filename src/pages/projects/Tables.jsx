/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa"
import useStore from "../../../store"
import Loading from '../../components/Loading';
import { useEffect } from "react";

function Tables() {
    const { getProject, projectItems } = useStore();
    const [loading, setLoading] = useState(true);

    const handleProject = async() => {
        try {
            await getProject()
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    useEffect(()=> {
        handleProject()
    },[])

  return (
    <div className="relative overflow-x-auto ring-1 ring-gray-200 sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Project Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Project Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Start Project
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
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? (
                        <Loading/>
                    ) :
                    projectItems.map((item) => (
                        <tr key={item.id} className="bg-white border-y">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.id}
                            </th>
                            <td className="px-6 py-4">
                                {item.project_name}
                            </td>
                            <td className="px-6 py-4 truncate max-w-[10rem]">
                                {item.project_type}
                            </td>
                            <td className="px-6 py-4">
                                {item.project_start}
                            </td>
                            <td className="px-6 py-4">
                                {
                                    item.participants > 2 ? (
                                        <div className="w-fit font-medium rounded-md text-[#4747FF] p-2 bg-[#F0F0FF]">
                                            {item.participants}
                                        </div>
                                    ) : (
                                        <div className="w-fit font-medium rounded-md text-[#4747FF] p-2 bg-[#F0F0FF]">
                                            {item.participants}
                                        </div>
                                    )
                                }
                            </td>
                            <td className="px-6 py-4">
                                {item.status}
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center gap-x-2">
                                <button className="bg-yellow-400 p-2 text-white rounded-md"><FaRegEdit/></button>
                                <button className="bg-red-400 p-2 text-white rounded-md"><FaTrash/></button>
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