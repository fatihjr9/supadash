import Layout from "../../components/Layout"
import Tables from "./tables"
function Applications() {
  return (
    <Layout>
      <div className="px-8 md:px-16 mt-8">
        <h5 className="text-2xl font-medium">Applications</h5>
        <Tables/>
      </div>
    </Layout>
  )
}

export default Applications