const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

//1. Use findIndex para encontrar a posição da primeira tarefa incompleta
const IncompletedTask = tasks.findIndex(function (task) {
  return task.completed === false;
});
console.log("Primeira tarefa incompleta: ", IncompletedTask);

// 2. Use some para verificar se existe alguma tarefa de baixa prioridade completa
const CompletedLowerPriority = tasks.some(function (task) {
  return task.completed && task.priority === "baixa";
});
console.log("Tarefa de baixa prioridade completa: ", CompletedLowerPriority);

function some2(tasks) {
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].completed && tasks[i].priority === "baixa") {
      return true;
    }
  }
  return false;
}
//3. Use every para verificar se todas as tarefas de alta prioridade
// estão incompletas
const HighPriority = tasks.every(function (task) {
  return task.priority === "alta" && task.completed === false;
});
console.log(HighPriority);

//4. Use findIndex para encontrar a posição de uma tarefa com id = 10.
//Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)

const TarefaIndex = tasks.findIndex(function (task) {
  return task.id == 10;
});
if (TarefaIndex === -1) {
  console.log("Tarefa não encontrada!");
} else {
  console.log("Tarefa encontrada no índice: ", findIndex);
}
