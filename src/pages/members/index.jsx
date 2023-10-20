import Layout from "../../components/Layout"
import Tables from "./Tables"
function Members() {
  return (
    <Layout>
      <div className="px-8 md:px-16 mt-8">
        <h5 className="text-2xl font-medium">Members</h5>
        <Tables/>
      </div>
    </Layout>
  )
}

export default Members