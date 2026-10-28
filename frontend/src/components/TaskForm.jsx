import React from "react";
import { useState } from "react";
import { createTask } from "../api/taskService";

export default function TaskForm({ onTaskCreated }){
     const [title, setTitle ] = useState("");
     const [loading, setLoading] = useState(false);

     const handleSubmit = async (e) => {
          e.preventDefault();
          if(!title.trim()) return;

          setLoading(true);
          try{
               const requestPayload = {
                    title
               };

               const newCreatedTask = await createTask(requestPayload);
               if (onTaskCreated) {
                    onTaskCreated(newCreatedTask);
               }
               setTitle('');
          }
          catch(error){
               console.error("Error in creating task", error);
          }
          finally{
               setLoading(false);
          }
     };
     return(
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-md mb-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Create New Task</h3>
               
               <div className="space-y-4">
               <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Task Title</label>
                    <input 
                    type="text" 
                    placeholder="Enter task title..." 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                    />
               </div>

               {/* <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                    <textarea 
                    placeholder="Enter description..." 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                    />
               </div> */}

               <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 text-sm shadow-sm disabled:opacity-50"
               >
                    {loading ? 'Creating...' : 'Add Task'}
               </button>
               </div>
          </form>
     )
}