import { create } from "zustand";
import supabase from "./src/supabase";
import { Alert } from "antd";

const useStore = create((set) => ({
  applicantItems: [],
  teamItems: [],
  projectItems: [],
  // Project section
  getProject: async () => {
    const { data } = await supabase.from("project").select("*")
    data ? set({projectItems: data}) : <Alert>No data available</Alert>;
  },
  // members section
  getTeams: async () => {
    const { data } = await supabase.from("teams").select("*");
    data ? set({ teamItems: data }) : <Alert>No data available</Alert>;
  },
  deleteMembers: async(itemId) => {
    try {
      await supabase.from("teams").delete().eq("id", itemId);
      set((state) => ({
        teamItems: state.applicantItems.filter((team) => team.id !== itemId),
      }));
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  },
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