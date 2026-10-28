namespace TaskApi.Models;

     public record ToDoTask(int Id, string Title, bool IsCompleted);
     public record CreateToDoTaskRequest(string Title);
