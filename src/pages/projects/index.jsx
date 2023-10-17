import Layout from "../../components/Layout"
import Tables from "./Tables"

function Projects() {
  return (
    <Layout>
      <div className="px-16 mt-8">
        <h5 className="text-2xl font-medium">Projects</h5>
        <Tables/>
      </div>
    </Layout>
  )
}

export default Projects