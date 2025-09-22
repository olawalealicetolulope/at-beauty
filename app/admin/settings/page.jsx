"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const SettingsPage = () => {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const uid = session?.user?.id; // Get the Firebase UID from session

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;

      try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name || "");
        } else {
          console.warn("User document not found.");
          setStatusMsg("⚠️ Profile not found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
        setStatusMsg("❌ Failed to load profile.");
      }
    };

    fetchUser();
  }, [uid]);

  const handleUpdate = async () => {
    if (!uid) {
      setStatusMsg("❌ Invalid user session.");
      return;
    }

    setLoading(true);
    setStatusMsg("");

    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { name });
      setStatusMsg("✅ Profile updated successfully.");
    } catch (error) {
      console.error("Update error:", error.message);
      setStatusMsg("❌ Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold text-lg">{session?.user?.name || "Admin"}</h2>
            <p className="text-sm text-gray-600">{session?.user?.email}</p>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Display Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update"}
        </button>

        {statusMsg && <p className="text-sm text-gray-600">{statusMsg}</p>}
      </div>
    </div>
  );
};

export default SettingsPage;
