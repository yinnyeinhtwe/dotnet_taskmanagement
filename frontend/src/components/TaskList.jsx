export default function TaskList({ tasks, onSelectTask }) {
     if(!tasks || tasks.length === 0){
          return <p className="text-gray-500 text-sm italic">No tasks available.</p>
     }
     return(
          <div className="max-w-md space-y-3">
               {tasks.map((task) => (
                    <div 
                         key={task.id} 
                         onClick={() => onSelectTask(task.id)}
                         className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center cursor-pointer transition hover:border-blue-400 hover:shadow-md"
                    >
                         <div>
                         <h4 className="font-semibold text-gray-800 text-base">{task.title}</h4>
                         <p className="text-xs text-gray-500 mt-1">{task.description || "No description"}</p>
                         </div>
                         <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                         ID: {task.id}
                         </span>
                    </div>
               ))}
          </div>
     )
};