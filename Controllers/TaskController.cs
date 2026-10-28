namespace TaskApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using TaskApi.Models;
using TaskApi.Services;

[ApiController ]
public class TaskController : ControllerBase
{
     private readonly TaskService _taskService;
     public TaskController (TaskService taskService)
     {
          _taskService = taskService;
     }

     [HttpGet("/tasks")]
     public async Task<IActionResult> GetAllTasks()
     {
          var tasks = await _taskService.GetAllTasks();
          return Ok(tasks);
     }

     [HttpGet("/tasks/{id}")]
     public async Task<IActionResult> GetTaskById(int id)
     {
          var task = await _taskService.GetTaskById(id);
          if (task == null)
          {
               return NotFound();
          }
          return Ok(task);
     }

     [HttpPost("/tasks")]
     public async Task<IActionResult> CreateTask(CreateToDoTaskRequest request)
     {
          var newTask =await _taskService.CreateTask(request);
          return CreatedAtAction(nameof(GetTaskById), new { id = newTask.Id }, newTask);
     }
}