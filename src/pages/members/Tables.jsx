import { Link } from "react-router-dom"

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
                    $2999
                </td>
                <td className="px-6 py-4">
                    Ongoing
                </td>
                <td className="px-6 py-4">
                    <Link to="" className="underline">Download Brief</Link>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Tables