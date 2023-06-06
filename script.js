// Description:
// Redo the exercise of the to-do list. This time, however, each todo will be an object, consisting of two properties:
// text, a string that indicates the text of the todo
// done, a boolean (true/false) that indicates whether the todo has been completed or not
// MILESTONE 1
// Print an item for each todo inside an HTML list. If the done property is true, display the text of the todo with a strikethrough.
// MILESTONE 2
// Display a "x" next to each item: by clicking on it, the todo will be removed from the list.
// MILESTONE 3
// Set up a text input field and an "add" button: by clicking the button, the entered text is read and used to create a new todo, which is then added to the list of existing todos.
// Bonus:
// 1- In addition to clicking the button, also intercept the ENTER key to add the todo to the list.
// 2- By clicking on the text of the item, reverse the value of the done property of the corresponding todo (if done was false, set it to true, and vice versa).


(() => {
const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of objects with the elements of the to do List 
            // Start creating an array of literal objects
            // Each object will have text and done properties
            toDoList:
            [
                {
                    text: 'Go for a morning jog',
                    done: false
                },
                {
                    text: 'Prepare breakfast',
                    done: false
                },
                {
                    text: 'Read a chapter from a book',
                    done: false
                },
                {
                    text: 'Complete the coding project milestone',
                    done: false
                },
                {
                    text: 'Have a healthy lunch',
                    done: false
                },
                {
                    text: 'Attend a team meeting',
                    done: false
                },
                {
                    text: 'Reply to important emails',
                    done: false
                },
                {
                    text: 'Take a short break and stretch',
                    done: false
                },
                {
                    text: 'Research new coding techniques',
                    done: false
                },
                {
                    text: 'Write a blog post about your project',
                    done: false
                },
                {
                    text: 'Review and debug code',
                    done: false
                },
                {
                    text: 'Plan tasks for tomorrow',
                    done: false
                },
                {
                    text: 'Cook dinner',
                    done: false
                },
                {
                    text: 'Watch a tutorial on a new programming language',
                    done: false
                },
                {
                    text: 'Relax and unwind with a favorite hobby',
                    done: false
                },
                {
                    text: 'Don\'t forget to brush your teeth before bed',
                    done: false
                },
                {
                    text: 'Start a new life in Argentina',
                    done: false
                }
            ], 

            // Prepare an array that's going to store the to do items that will be done: true
            doneList : [],

            // Variable to store the text of the new to do item
            newToDoElement: '', 
            // Variable to store the status of the new item
            done: false 

        }  
    },

    // Method called when the component is mounted
    // mounted() {

    // },

    // Method called before the Vue component is unmounted
    // beforeUnmount() {

    // },

    // Methods of the app
    methods: {

        // Method to add a new to do item to the list
        addToDo(toDoElement) {
            if (this.newToDoElement !== '') 
            {
                this.toDoList.push({
                    text: this.newToDoElement,
                    done: false
                });
                this.newToDoElement = '';
            }
        },

        // Method to remove a to do item from the list
        removeToDo(toDoElementIndex) {
            if( toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) 
            {
                console.log('Invalid index');
            }
            else 
            {
                const removedElement = this.toDoList.splice(toDoElementIndex, 1);
                this.doneList.push(removedElement[0]);
            }
        },

        // Method to restore a to do item from the done list 
        restoreToDo() {
            // Check the done list, to make sure it is not empty 
            if (this.doneList.length > 0) 
            {
                // Pop the last item from the done list and save it in a variable
                const restoredElement = this.doneList.pop();
                // Store the restored element in the todo list 
                this.toDoList.push(restoredElement);
            }
        },


        // Method to check the status of a to do item in the list
        isDone(toDoElement) {
            return this.toDoElement.done;
        },

        // Method to update the status of a to do item in the list
        updateStatus(toDoElement) {
            this.done = !this.done;
        }
    }

}).mount('#app')

})();
