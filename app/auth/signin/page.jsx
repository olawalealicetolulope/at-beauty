import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { auth, signIn } from "@/auth";

const page = async () => {
  const session = await auth()
  console.log(session?.user?.name);
  
  return (
    <main className="min-h-dvh bg-[url('/bg1.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <section className="min-h-dvh bg-black/20 bg-cover w-full">
       <div className="space-y-10 max-md:p-3  w-1/2 mx-auto py-10">
        <div className="flex justify-center">
           <Image
                    src={"/logo1.jpg"}
                    alt="logo"
                    width={1500}
                    height={1500}
                    className="w-20 h-20 rounded-full "
                  />
        </div>
        <h1 className="md:text-4xl text-2xl text-orange-300 font-bold text-center">
          Sign Up to AT Beauty
        </h1>

        <div className=" flex flex-col gap-10">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="border w-full flex items-center justify-center gap-3 text-lg rounded-full py-3">
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </form>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaGithub className="text-2xl" />
            Sign in with Github
          </button>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaXTwitter className="text-2xl" />
            Sign in with Twitter
          </button>
        </div>

        <p className="text-sm text-center text-white ">
          By signing in, you agree with our{" "}
          <span className="hover:text-black hover:underline">
            Terms of Use
          </span>
          , and{" "}
          <span className="hover:text-black hover:underline">
            privacy Policy
          </span>
        </p>
      </div>

      </section>
    </main>
  );
};

export default page;
