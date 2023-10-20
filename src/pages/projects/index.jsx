import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import Tables from "./Tables"

function Projects() {
  return (
    <Layout>
      <div className="px-8 md:px-16 mt-8">
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-2xl font-medium">Projects</h5>
          <Link to="/project/create" className="px-4 py-2 bg-[#4747FF] text-white rounded-md font-medium">Create</Link>
        </div>
        <Tables/>
      </div>
    </Layout>
  )
}

export default Projects