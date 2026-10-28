namespace TaskApi.Services; 

using Microsoft.EntityFrameworkCore;
using TaskApi.Data;
using TaskApi.Models;

public class TaskService
{
     private readonly AppDbContext _context;

     public TaskService (AppDbContext context)
     {
          _context = context;
     }

     //Get All Task
     public async Task<List<ToDoTask>> GetAllTasks()
     {
          return await _context.Tasks.ToListAsync();
     }
     
     //Get Task by Id
     public async Task<ToDoTask?> GetTaskById(int id)
     {
          return await _context.Tasks.FindAsync(id);
     }

     //Create Task
     public async Task<ToDoTask> CreateTask(CreateToDoTaskRequest request)
     {
          var newTask = new ToDoTask(0, request.Title, false);
          _context.Tasks.Add(newTask);

          await _context.SaveChangesAsync();
          return newTask;
     }

     // private readonly List<ToDoTask> _tasks = new()
     
     // {
     //      new ToDoTask(1, "Task 1", false),
     //      new ToDoTask(2, "Task 2", true),
     //      new ToDoTask(3, "Task 3", false)
     // };
     
     // public List<ToDoTask> GetAllTasks()
     // {
     //      return _tasks;
     // }
     
     // public ToDoTask? GetTaskById(int id)
     // {
     //      return _tasks.FirstOrDefault(t=> t.Id == id);
     // }
     // public ToDoTask CreateTask(CreateToDoTaskRequest request)
     // {
     //      var newTask = new ToDoTask(_tasks.Count + 1, request.Title, false);
     //      _tasks.Add(newTask);
     //      return newTask;
     // }
}