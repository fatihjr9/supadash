import { FaRegEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Avatars from "../../components/Avatars"

function Tables() {
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
            <tr className="bg-white border-y">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                </th>
                <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet.
                </td>
                <td className="px-6 py-4">
                    Longtime project
                </td>
                <td className="px-6 py-4">
                    2 Dec 2023
                </td>
                <td className="px-6 py-4">
                    <Avatars/>
                </td>
                <td className="px-6 py-4">
                    Ongoing
                </td>
                <td className="px-6 py-4">
                    <Link to="" className="underline">Download Brief</Link>
                </td>
                <td className="px-6 py-4 flex flex-row items-center gap-x-2">
                    <button className="bg-yellow-400 p-2 text-white rounded-md"><FaRegEdit/></button>
                    <button className="bg-red-400 p-2 text-white rounded-md"><FaTrash/></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Tables