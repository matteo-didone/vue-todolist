// MILESTONE 2
// Display a "x" next to each item: by clicking on it, the todo will be removed from the list.

// Bonus:
// 1- In addition to clicking the button, also intercept the ENTER key to add the todo to the list.
// 2- By clicking on the text of the item, reverse the value of the done property of the corresponding todo (if done was false, set it to true, and vice versa).

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
                // Check if the new to do item is not empty
                if (this.newToDoElement !== '') 
                {
                    // Add the new to do item to the list of to do items
                    this.toDoList.push({
                        text: this.newToDoElement,
                        done: false
                    });
                    // Reset the new to do item variable
                    this.newToDoElement = '';
                }
            },

        // Method to remove a to do item from the list
        removeToDo(toDoElement, toDoElementIndex) {
            // Check if the index is valid
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) 
            {
                // If the index is invalid, warn
                console.warn('Invalid index');
            } 
            else // If the index is valid
            {
                // It uses the splice method, which modifies the array by removing or replacing elements
                // In this case, it removes one element (because of ", 1") at the specified index (toDoElementIndex)
                this.toDoList.splice(toDoElementIndex, 1);
                // After removing the item from the toDoList, it adds the same item (toDoElement) to the doneList array using the push method. This action effectively moves the item from the to-do list to the done list.
                this.doneList.push(toDoElement);
            }
        },

        // Method to restore a to do item from the done list 
        restoreToDo(toDoElementIndex) {
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
            // Check if the to do item is done or not, and return the value
            return this.toDoElement.done;
        },

        // Method to update the status of a to do item in the list
        updateStatus(toDoElement) {
            // Update the status of the to do item
            this.done = !this.done;
        },

        // Method to completely remove from either list the task 
        removeTask(toDoElementIndex) {

            // Check if the index is valid just like we did before with the removeToDo method
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) {
                console.warn('Invalid index');
            }
        
            // Remove the todo item from the appropriate list by checking if it is in the to do list or not
            if (this.toDoList.includes(this.toDoList[toDoElementIndex])) 
            {
                // Remove from the todo list
                this.toDoList.splice(toDoElementIndex, 1);
            } 
            else if (this.doneList.includes(this.doneList[toDoElementIndex])) 
            {
                // Remove from the done list
                this.doneList.splice(toDoElementIndex, 1);
            }
        }
    }

}).mount('#app');
