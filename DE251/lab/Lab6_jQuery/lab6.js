$(document).ready(function() {
    const $inputBox = $('#input-box');
    const $listContainer = $('#list-container');

    // Load tasks from localStorage on page load
    loadTasks();

    // Function to add task
    $('#add-task-button').click(function() {
        const taskText = $inputBox.val();
        if (taskText === '') {
            alert("You must write something!");
        } else {
            const $li = $('<li></li>').text(taskText);
            $li.click(toggleComplete); // Add the click event for marking complete
            $listContainer.append($li);
            saveTasks();
        }
        $inputBox.val(''); // Clear input box
    });

    // Function to toggle the 'completed' class
    function toggleComplete() {
        $(this).toggleClass('completed');
        saveTasks(); // Save tasks whenever a task is marked/unmarked as complete
    }

    // Function to clear completed tasks
    $('#clear-completed-button').click(function() {
        $('.completed').remove();
        saveTasks(); // Save tasks after clearing completed
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        $('#list-container li').each(function() {
            const task = {
                text: $(this).text(),
                completed: $(this).hasClass('completed')
            };
            tasks.push(task);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task) {
            const $li = $('<li></li>').text(task.text);
            if (task.completed) {
                $li.addClass('completed');
            }
            $li.click(toggleComplete);
            $listContainer.append($li);
        });
    }
});
