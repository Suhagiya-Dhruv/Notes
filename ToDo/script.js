// Read, Create, Update, Delete

const addItem = document.getElementById("btn");
const inputValue = document.getElementById("inputValue");
const list = document.getElementById("list");

const addItemFunction = () => {

    if (addItem.innerText === "Update Item") {
        addItem.innerText = "Add Item";
    }

    const value = inputValue.value;
    if (value) {

        const button = document.createElement("BUTTON");
        button.innerText = "Edit"
        button.setAttribute("data-id", value);

        const del = document.createElement("BUTTON");
        del.innerText = "Delete"
        del.setAttribute("data-deleteItem", value);

        const mark = document.createElement("BUTTON");
        mark.innerText = "Done"
        mark.setAttribute("data-done", value);

        const p = document.createElement("p");
        p.innerText = value;

        p.appendChild(button);
        p.appendChild(del);
        p.appendChild(mark);

        list.appendChild(p);
        inputValue.value = "";
    }
}

addItem.addEventListener("click", addItemFunction);

list.addEventListener("click", fetchItem);

function fetchItem(event) {

    const { id, deleteitem, done } = event.target.dataset;

    if (id) {
        inputValue.value = id;
        addItem.innerText = "Update Item";
        event.target.parentNode.remove();
    }

    if (deleteitem) {
        event.target.parentNode.remove();
    }

    if (done) {
        const parentNode = event.target.parentNode;
        const value = event.target.parentNode.getElementsByTagName("button");

        while(value.length){
            value[0].remove();
        }
        // parentNode.style.textDecoration = "line-through";
        parentNode.setAttribute("class", "mark-as-done")
    }
}
