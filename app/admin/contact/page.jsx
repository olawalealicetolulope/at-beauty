"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ContactPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));
        const data = snapshot.docs
          .map((doc, index) => ({
            id: doc.id,
            sn: index + 1,
            ...doc.data(),
          }))
          .filter((msg) => msg.message && msg.message.trim() !== "");
        setMessages(data);
      } catch (error) {
        console.error("Error fetching contact messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-orange-300 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-orange-500 font-semibold">Loading messages...</span>
        </div>
        
      ) : messages.length === 0 ? (
        <p className="text-center py-10 text-orange-500 font-medium">
          No messages found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-orange-200 text-left">
              <tr>
                <th className="p-3 border">S/N</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Message</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg.id} className="hover:bg-orange-50">
                  <td className="p-3 border text-center">{index + 1}</td>
                  <td className="p-3 border">{msg.name || "No Name"}</td>
                  <td className="p-3 border">{msg.email || "No Email"}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => setSelectedMessage(msg.message)}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View Message
                    </button>
                  </td>
                  <td className="p-3 border">{msg.date || "No Date"}</td>
                  <td className="p-3 border">{msg.time || "No time"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Message</h2>
            <p className="text-gray-800 whitespace-pre-line mb-4">
              {selectedMessage}
            </p>
            <button
              onClick={() => setSelectedMessage(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
