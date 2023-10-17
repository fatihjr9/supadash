import { create } from "zustand";
import supabase from "./src/supabase";
import { Alert } from "antd";

const useStore = create((set) => ({
  applicantItems: [],
  getApplicants: async () => {
    const { data } = await supabase.from("applications").select("*");
    data ? set({ applicantItems: data }) : <Alert>Nothing</Alert>;
  },
}));

export default useStore;