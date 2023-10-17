import { create } from "zustand";
import supabase from "./src/supabase";
import { Alert } from "antd";

const useStore = create((set) => ({
  applicantItems: [],
  // applicants section
  getApplicants: async () => {
    const { data } = await supabase.from("applications").select("*");
    data ? set({ applicantItems: data }) : <Alert>Nothing</Alert>;
  },
  deleteApplicants: async(itemId) => {
    try {
      await supabase.from("applications").delete().eq("id", itemId);
      set((state) => ({
        applicantItems: state.applicantItems.filter((applicant) => applicant.id !== itemId),
      }));
    } catch (error) {
      console.error("Error deleting applicant:", error);
    }
  }
}));

export default useStore;