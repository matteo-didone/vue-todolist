// Bonus:
// By clicking on the text of the item, reverse the value of the done property of the corresponding todo (if done was false, set it to true, and vice versa).

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
            doneList: [],

            // Variable to store the text of the new to do item
            newToDoElement: '',
            // Variable to store the status of the new item
            done: false,

            // Variable to store the index of the selected todo item
            // Initialized to null, but as soon as we click on a li, it is set to the index of the clicked element
            selectedToDoIndex: null,

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
            // Using the trim() function to remove any whitespace from the new to-do item before checking if it's empty
            if (this.newToDoElement.trim() !== '') {
                // Add the new to do item to the list of to do items
                this.toDoList.push({
                    text: this.newToDoElement,
                    done: false, 
                });
                // Reset the new to do item variable
                this.newToDoElement = '';
            }
        },

        // Method to add item to the list on Enter key press
        handleEnterKey(event) {
            if (event.key === 'Enter') {
                this.addToDo();
            }
        },

        // Method to remove a to do item from the list
        removeToDo(toDoElement, toDoElementIndex) {
            // Check if the index is valid
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) {
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
        restoreToDo(doneElementIndex) {
            // Check if the done list index is valid
            if (doneElementIndex >= this.doneList.length || doneElementIndex < 0) {
                console.warn('Invalid index');
                return;
            }
        
            // Remove the item from the done list using splice
            const restoredElement = this.doneList.splice(doneElementIndex, 1)[0];
            // Set the done property to false for the restored item
            restoredElement.done = false;
            // Add the restored item back to the to-do list
            this.toDoList.push(restoredElement);
        },                

        toggleDoneStatus(toDoElement) {
            toDoElement.done = !toDoElement.done;

            if (toDoElement.done) {
                const doneIndex = this.doneList.findIndex(item => item.text === toDoElement.text);
                if (doneIndex === -1) {
                    this.doneList.push(toDoElement);
                }

                const index = this.toDoList.findIndex(item => item.text === toDoElement.text);
                if (index !== -1) {
                    this.toDoList.splice(index, 1);
                }
            } else {
                const index = this.doneList.findIndex(item => item.text === toDoElement.text);
                if (index !== -1) {
                    this.doneList.splice(index, 1);
                }

                const todoIndex = this.toDoList.findIndex(item => item.text === toDoElement.text);
                if (todoIndex === -1) {
                    this.toDoList.push(toDoElement);
                }
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

        removeFromToDoListEntirely(toDoElementIndex) {
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) {
                console.warn('Invalid index');
                return;
            }

            const removedElement = this.toDoList.splice(toDoElementIndex, 1)[0];

            if (removedElement.done) {
                const doneElementIndex = this.doneList.findIndex(element => element.text === removedElement.text);
                if (doneElementIndex >= 0) {
                    this.doneList.splice(doneElementIndex, 1);
                }
            }
        },

        removeFromDoneListEntirely(doneElementIndex) {
            if (doneElementIndex >= this.doneList.length || doneElementIndex < 0) {
                console.warn('Invalid index');
                return;
            }

            this.doneList.splice(doneElementIndex, 1);
        }

    }

}).mount('#app');
