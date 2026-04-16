import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/services/api/auth";
import useAuthStore from "@/store/useAuthStore";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    queryClient.clear();
    await useAuthStore.getState().clearTokens();
    /* TODO: 유저 정보 storage 만들면 여기서 초기화 함수 실행 */
  }
  
  return useMutation({
    mutationFn: logout,
    onSuccess: handleLogout,
    onError: async (error) => {
      console.error("로그아웃 실패", error);
      await handleLogout();
    },
  });
};
