function addTask() {
    var input = document.getElementById("input");
    // Get current text from input field
    var newTask = input.value;
    // Only add new item to list if some text was entered
    if (newTask != "") {
        // Create new HTML list item
        var item = document.createElement("li");
        // Add HTML for buttons and new task text
        item.innerHTML =
            '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
            '<input type="button" class="important" onclick="important(this.parentNode)" value="!" /> ' +
            newTask;
        // Add new item as part of existing list
        document.getElementById("tasks").appendChild(item);
        input.value = "";
        input.placeholder = "Enter next task...";
    }
}

// Change styling used for given item
function markDone(item) {
    item.className = "finished";
}

function remove(item) {
    var status = item.className;
    if (status == "finished") {
        // Remove item completely from document
        item.remove();
    } else {
        alert("Cannot remove unfinished task!");
    }
}

function doAbout() {
    var divAbout = document.getElementById("divabout");
    divAbout.innerHTML = "Author is Marcio Woitek";
    divAbout.className = "aboutcolor";
}

function clearAbout() {
    var divAbout = document.getElementById("divabout");
    divAbout.innerHTML = "";
}

// Highlight item from document
function important(item) {
    item.className = "important";
}
