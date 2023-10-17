/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useStore from "../../../store"
function Home() {
  const { applicantItems, getApplicants } = useStore();

  useEffect(() => {
    getApplicants();
  }, []);

  // data result
  const totalApplicants = applicantItems.length;

  return (
    <div className="px-16 mt-8">
        <h5 className="text-2xl font-medium">Dashboard</h5>
        <h5>Total Applicant {totalApplicants}</h5>
    </div>
  )
}

export default Home