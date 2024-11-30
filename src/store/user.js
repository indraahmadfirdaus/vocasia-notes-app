import { create } from "zustand";
import { userApi } from "../api/userApi";
import { devtools } from "zustand/middleware";

const useUserStore = create(
    devtools(
        (set) => ({
            user: null,
            fetchProfile: async () => {
                try {
                    const data = await userApi.getProfile()
                    set({ user: data })
                } catch (error) {
                    console.log(error);
                    throw error
                }
            }
        }))
    )

export default useUserStore