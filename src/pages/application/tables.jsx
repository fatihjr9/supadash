/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import useStore from '../../../store'
import Loading from '../../components/Loading';

function Tables() {
    const { applicantItems, getApplicants } = useStore()
    const [loading, setLoading] = useState(true);
    const handleApplicants = async() => {
        try {
            await getApplicants()
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        handleApplicants()
    }, []);
    

  return (
    <div className="relative overflow-x-auto ring-1 ring-gray-200 sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500 table-auto">
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Applicant Name
                    </th>
                    <th scope="col" className="px-6 py-3 truncate">
                        Cover Letter
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Salary Expectations
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Document
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
            {
                loading ? (
                    <Loading/>
                ) :
                applicantItems.map((item) => (
                    <tr key={item.id} className="bg-white border-y">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.id}
                        </th>
                        <td className="px-6 py-4">
                            {item.applicant_name}
                        </td>
                        <td className="px-6 py-4 truncate max-w-[10rem]">
                            {item.cover_letter}
                        </td>
                        <td className="px-6 py-4">
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