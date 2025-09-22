"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-orange-300 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-orange-500 font-semibold">Loading users...</span>
        </div>
      ) : (
        <div className="bg-white rounded-md shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-orange-300 text-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">S/N</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id} className="border-t hover:bg-orange-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                      <img
                        src={user.image || "/default-avatar.png"}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2 font-medium">{user.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
