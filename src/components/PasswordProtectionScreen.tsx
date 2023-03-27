import { useForm } from "react-hook-form";

interface PasswordProtectionScreenProps {
  loading: boolean;
  fetchError?: Error;
  onFetchProject: (password: string) => void;
}

interface FormData {
  password: string;
}

export const PasswordProtectionScreen: React.FC<
  React.PropsWithChildren<PasswordProtectionScreenProps>
> = ({ loading, fetchError, onFetchProject }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => onFetchProject(data.password);

  return (
    <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center bg-[#FFB649]">
      <span className="text-3xl w-3/5 text-center mb-12">
        This project is protected for confidentiality. If you want to have a
        look at it, but don{"'"}t have the password, just drop me a message at{" "}
        <a href="mailto:hello@beatricecox.com" className="text-black underline">
          hello@beatricecox.com
        </a>{" "}
        and I will send it to you.
      </span>
      <form className="flex gap-x-4 h-14" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          {...register("password")}
          className="px-5 block border-gray-200 rounded-lg text-lg w-96 focus:border-red-500 focus:ring-red-500"
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-56 disabled:cursor-not-allowed rounded-lg h-full text-lg w-auto px-6 py-2 overflow-hidden relative group border-2 font-medium border-black text-black disabled:bg-black disabled:opacity-75"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 group-disabled:h-0 group-disabled:translate-y-0 ease" />
          <span className="relative text-black transition duration-300 group-hover:text-white group-disabled:text-white ease">
            {!loading ? (
              "Reveal Project"
            ) : (
              <div className="flex items-center justify-center space-x-2 animate-bounce">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </span>
        </button>
      </form>
      <div className="h-36 mt-12 w-full flex justify-center items-center">
        {fetchError && (
          <span className="text-lg w-auto text-center bg-red-500 rounded-xl px-8 py-6 font-bold text-white">
            Wrong password, please make sure to use the right one
          </span>
        )}
      </div>
    </div>
  );
};
