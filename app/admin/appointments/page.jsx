"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const Page = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const snapshot = await getDocs(collection(db, "BookSession"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleEditClick = (service) => {
    setEditingId(service.id);
    setEditData({
      price: service.price || "",
      date: service.date || "",
      time: service.time || "",
      status: service.status || "pending",
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (id) => {
    try {
      const ref = doc(db, "BookSession", id);
      await updateDoc(ref, {
        price: Number(editData.price),
        date: editData.date,
        time: editData.time,
        status: editData.status,
      });

      setServices((prev) =>
        prev.map((service) =>
          service.id === id ? { ...service, ...editData } : service
        )
      );

      setEditingId(null);
      setEditData({});
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const formatDate = (rawDate) => {
    try {
      const dateObj = new Date(rawDate);
      return dateObj.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return rawDate || "N/A";
    }
  };

  const formatTime = (rawTime) => {
    try {
      const dateObj = new Date(`1970-01-01T${rawTime}`);
      return dateObj.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return rawTime || "N/A";
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-orange-300 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-orange-500 font-semibold">Loading Appointments...</span>
        </div>
      ) : (
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-orange-200 text-left">
              <th className="p-3 border">S/N</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Service</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Time</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service.id} className="border-b hover:bg-orange-50">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{service.name || "No Name"}</td>
                <td className="p-3 border">{service.category || "No Category"}</td>
                <td className="p-3 border">{service.service || "No Service"}</td>
                <td className="p-3 border">
                  {editingId === service.id ? (
                    <input
                      type="number"
                      value={editData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      className="border px-2 py-1 w-full"
                    />
                  ) : typeof service.price === "number" ? (
                    `₦${service.price.toLocaleString()}`
                  ) : (
                    "No Price"
                  )}
                </td>
                <td className="p-3 border">
                  {service.message && service.message.trim() !== "" ? (
                    <button
                      onClick={() => setSelectedMessage(service.message)}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View message
                    </button>
                  ) : (
                    <span className="text-gray-500 italic">No message</span>
                  )}
                </td>
                <td className="p-3 border">
                  {editingId === service.id ? (
                    <input
                      type="date"
                      value={editData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    formatDate(service.date)
                  )}
                </td>
                <td className="p-3 border">
                  {editingId === service.id ? (
                    <input
                      type="time"
                      value={editData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    formatTime(service.time)
                  )}
                </td>
                <td className="p-3 border">
                  {editingId === service.id ? (
                    <select
                      value={editData.status}
                      onChange={(e) => handleChange("status", e.target.value)}
                      className="border px-2 py-1 w-full"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded text-white text-xs font-medium ${
                        service.status === "completed"
                          ? "bg-green-600"
                          : service.status === "in-progress"
                          ? "bg-blue-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {service.status || "pending"}
                    </span>
                  )}
                </td>
                <td className="p-3 border space-x-2">
                  {editingId === service.id ? (
                    <>
                      <button
                        onClick={() => handleSave(service.id)}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-600 hover:underline"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleEditClick(service)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for message */}
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

export default Page;
