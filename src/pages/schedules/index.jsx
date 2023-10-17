import Layout from "../../components/Layout"
import Calendars from "./Calendars"

function Schedules() {
  return (
    <Layout>
      <div className="px-16 mt-8">
        <h5 className="text-2xl font-medium">Schedules</h5>
        <Calendars/>
      </div>
    </Layout>
  )
}

export default Schedules