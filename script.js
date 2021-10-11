function get_todos(){
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if(todos_str !== null){
        todos = JSON.parse(todos_str); // use to convert json string back to js data
    }
    return todos;
}

function add(){
    let task = document.getElementById('task').value;
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));
    
    show();

    return false;
}

function clearDefault(a){
    if(a.defaultValue == a.value) {a.value=""}
};

function remove(){
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));

    show();

    return false;
}

function show(){
    let todos = get_todos();
    let html = '<ul>';
    for(let i = 0; i<todos.length; i++){
        html += '<li>' + todos[i] + '<button class = "remove" id = "'+ i + '">Delete</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    };
}

document.getElementById('add').addEventListener('click',add);
show();