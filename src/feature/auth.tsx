import req from "../axios/get_token";

export const auth = (payload: Object) => {
  const authOption = {
    get_access_token: async () => {
      const response = await req.post("/api/token", payload);
      return response;
    },
  };
  return authOption["get_access_token"];
};
