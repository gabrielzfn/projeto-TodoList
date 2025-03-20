document.addEventListener('DOMContentLoaded', function () {
    loadTasks();

    // Adiciona o evento de clique ao botão "Adicionar"
    document.getElementById('addTaskBtn').addEventListener('click', function () {
        const taskInput = document.getElementById('taskInput');
        const taskText  = taskInput.value.trim();

        // Verificação para ver se o campo de entrada não é vazio
        if(taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });
});


// Função para adicionar uma nova tarefa à lista
function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;


    // Cria um botão para excluir a tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        saveTasks();
    });


    // Adiciona um evento de clique para marcar/desmarcar os concluídos
    li.addEventListener('click', function () {
        li.classList.toString('completed');
        saveTasks();
    });


    // Adiciona o botão de excluir à lista
    li.appendChild(deleteBtn);


    // Adiciona a tarefa à lista
    taskList.appendChild(li);
}


// Função para salvar as tarefas no localStorage
function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];


    // Percorre todas as tarefas na lista
    taskList.querySelectorAll('li').forEach(function (task) {
        task.push({
            text: task.textContent.replace('Excluir', '').trim(),
            completed: task.classList.contains('completed')
        });
    });


    // Salva as tarefas no localStorage como uma string JSON
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Função que carrega as tarefas salvas no localStorage
function loadTasks() {
    //TODO
}