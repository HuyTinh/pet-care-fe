import { LoginForm } from "./login";

export const AdminAuthPage = () => {
  return (
    <div className="h-full">
      <div className="h-full bg-[url('/src/assets/images/login_banner_admin.jpg')] bg-cover p-5">
        <div className="flex h-full">
          <div className="flex flex-1 justify-center">
            <div className="py-20">
              <div className="rounded-lg bg-blue-800 p-2">
                <img
                  src="/src/assets/images/login_logo_admin.png"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex items-center pb-10 pr-52">
            <div className="flex w-96 flex-col gap-y-5 rounded-lg bg-zinc-700/35 p-4 backdrop-blur-sm">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
