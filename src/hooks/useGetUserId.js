const useGetUserId = () => {
  return localStorage.getItem("userId");
};

export default useGetUserId;
