import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation';
import Image from "next/image";
import React from "react";

const page = async () => {
   const session = await auth()
    
    if(!session){
        redirect("/auth/signin")
    }
  // You can replace this with dynamic data later
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+234 701 234 5678",
    bio: "Beauty therapist with a passion for glowing skin and empowering self-confidence.",
    avatar: "/avatar.jpg", // Put an image in your /public folder or use a placeholder URL
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-orange-50 p-8 rounded-xl shadow-md">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 relative mb-4">
            <img
              src={session?.user?.image}
              alt={session?.user?.name.slice(0, 1).toLocaleLowerCase()}
              fill
              className="rounded-full object-cover border-4 border-orange-300"
            />
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-orange-600">{session?.user?.name}</h2>
          <p className="text-gray-500 text-sm">{session?.user?.email}</p>
          {/* <p className="text-gray-500 text-sm mb-4">{session?.BookSession?.phone}</p> */}
          {/* <p className="text-gray-700 mt-2 max-w-md">{user.bio}</p> */}

          {/* Optional Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Edit Profile
            </button>
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button className="px-4 py-2 border border-orange-400 text-orange-500 rounded hover:bg-orange-100 transition">
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </main >
  );
}
export default page