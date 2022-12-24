import { AUTHORIZE } from "../../base-urls/base_urls";

const Auth = () => {
  const cliend_id = import.meta.env.VITE_APP_CLIENT_ID;
  const params = `client_id=${cliend_id}&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=playlist-read-private`;
  const href = `${AUTHORIZE}?${params}`;
  return (
    <a href={href} className="h-12 w-52 text-center leading-[48px] rounded-md bg-green-500 text-white font-Gotham_Bold">
      Authenticate
    </a>
  );
};

export default Auth;
