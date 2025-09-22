import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { auth, signIn } from "@/auth";

const Page = async () => {
  const session = await auth();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <section className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/logo1.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold text-gray-800">Sign in to AT Beauty</h1>
          <p className="text-sm text-gray-500 text-center">
            Connect with your favorite social account to get started.
          </p>
        </div>

        <div className="space-y-4">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-100 transition">
              <FcGoogle className="text-2xl" />
              <span className="font-medium">Continue with Google</span>
            </button>
          </form>

          <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-100 transition">
            <FaGithub className="text-xl text-gray-800" />
            <span className="font-medium">Continue with GitHub</span>
          </button>

          <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-100 transition">
            <FaXTwitter className="text-xl text-black" />
            <span className="font-medium">Continue with Twitter</span>
          </button>
        </div>

        <p className="text-xs text-center text-gray-500">
          By continuing, you agree to our{" "}
          <span className="text-orange-600 hover:underline cursor-pointer">Terms of Use</span>{" "}
          and{" "}
          <span className="text-orange-600 hover:underline cursor-pointer">Privacy Policy</span>.
        </p>
      </section>
    </main>
  );
};

export default Page;