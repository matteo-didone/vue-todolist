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
                    // First task
                    {
                        text: 'Go for a morning jog',
                        done: false
                    },
                    // Second task
                    {
                        text: 'Prepare breakfast',
                        done: false
                    },
                    // Third task
                    {
                        text: 'Read a chapter from a book',
                        done: false
                    },
                    // Fourth task
                    {
                        text: 'Complete the coding project milestone',
                        done: false
                    },
                    // Fifth task
                    {
                        text: 'Have a healthy lunch',
                        done: false
                    },
                    // Sixth task
                    {
                        text: 'Attend a team meeting',
                        done: false
                    },
                    // Seventh task
                    {
                        text: 'Reply to important emails',
                        done: false
                    },
                    // Eigth task
                    {
                        text: 'Take a short break and stretch',
                        done: false
                    },
                    // Ninth task
                    {
                        text: 'Research new coding techniques',
                        done: false
                    },
                    // Tenth task
                    {
                        text: 'Write a blog post about your project',
                        done: false
                    },
                    // Eleventh task
                    {
                        text: 'Review and debug code',
                        done: false
                    },
                    // Twelveth task
                    {
                        text: 'Plan tasks for tomorrow',
                        done: false
                    },
                    // Thirteenth task
                    {
                        text: 'Cook dinner',
                        done: false
                    },
                    // Fourteenth task
                    {
                        text: 'Watch a tutorial on a new programming language',
                        done: false
                    },
                    // Fifteenth task
                    {
                        text: 'Relax and unwind with a favorite hobby',
                        done: false
                    },
                    // Sixteenth task
                    {
                        text: 'Don\'t forget to brush your teeth before bed',
                        done: false
                    },
                    // Seventeenth task
                    {
                        text: 'Start a new life in Argentina',
                        done: false
                    }
                ],

            // Prepare an array that's going to store the to do items that will be done: true
            doneList: [],

            // Variable to store the text of the new to do item
            // It is binded to the input, because I'm using the v-model directive in the HTML. The v-model directive binds the input value to the newToDoElement property here, allowing two-way data binding. 
            newToDoElement: '',

            // Variable to store the status of the new item
            done: false,

            // Variable to store the index of the selected todo item
            // Initialized to null, but as soon as we click on a li, it is set to the index of the clicked element
            selectedToDoIndex: null,

        }
    },

    // Methods of the app
    methods: {

        // Method to add a new to do item to the list
        addToDo(toDoElement) {
            // Check if the new to do item is not empty
            // Using the trim() function to remove any whitespace from the new to-do item before checking if it's empty
            if (this.newToDoElement.trim() !== '') {
                // Add the new to do item to the list of to do items 
                this.toDoList.push({
                    // We set the text to the newToDoElement, that takes as input what the user provides
                    text: this.newToDoElement,
                    // We set the done property to false, just like any other task that's initialized
                    done: false,
                });
                // Reset the new to do item variable
                this.newToDoElement = '';
            }
        },

        // Method to add item to the list on Enter key press
        // It takes as a parameter an event, which is the "keydown event" (when the user pushes a key on the keyboard)
        handleEnterKey(event) {
            // If the key that's being pushed is "Enter", then it invokes the addToDo method above
            if (event.key === 'Enter') {
                this.addToDo();
            }
        },

        // Method to remove a to do item from the list
        // As parameters, it takes:
        // - toDoElement, which is the element itself we want to remove
        // - toDoElementInde, which is the index at which the element is found
        // The index is necessary because we first need to find the element we want to remove within the array, but it is not necessary within the addToDo, because we simply add an element at the end of the array 
        removeToDo(toDoElement, toDoElementIndex) {
            // Check if the index is valid
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) {
                // If the index is invalid, warn the user
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
            // Check if the done element index is valid
            if (doneElementIndex >= this.doneList.length || doneElementIndex < 0) {
                console.warn('Invalid index');
            }

            // Remove the item from the done list using splice 
            // Why do I add [0]? Because the splice method returns an array, with only one element
            // I am now trying to store the element contained in the first cell of the array at index 0 into a variable called "restoredElement"
            // Without the [0], I'd be trying to save the whole variable into the restoredElement
            const restoredElement = this.doneList.splice(doneElementIndex, 1)[0];
            // Set the done property back to false for the restored item
            restoredElement.done = false;
            // Add the restored item back to the to-do list
            this.toDoList.push(restoredElement);
        },

        // Method that toggles the done status of an element
        // It takes as a parameter a toDoElement
        toggleDoneStatus(toDoElement) {
            // I negate the current value of the done property of the toDoElement
            toDoElement.done = !toDoElement.done;
            // If toDoElement.done === true --> It is now false
            // If toDoElement.done === false --> It is now true

            // Now, only if toDoElement.done === true
            if (toDoElement.done) {
                // The arrow function that's a parameter of the findIndex method, searches for an item in the doneList array whose text property matches the text property of the toDoElement
                // The findIndex function returns the index of the first matching element found in the doneList array, or -1 if no match is found
                // The result is stored in the doneIndex variable
                const doneIndex = this.doneList.findIndex(item => item.text === toDoElement.text);

                // Because the findIndex method returns -1 if no match is found, if that's the case
                if (doneIndex === -1) {
                    // We add to the "doneList" the toDoElement
                    this.doneList.push(toDoElement);
                }

                // The arrow function that's a parameter of the findIndex method, searches for an item in the toDoList array whose text property matches the text property of the toDoElement
                // The findIndex function returns the index of the first matching element found in the doneList array, or -1 if no match is found
                // The result is stored in the index variable
                const index = this.toDoList.findIndex(item => item.text === toDoElement.text);

                // Because the findIndex method returns -1 if no match is found, if that's not the case it means the element has been found in the toDoList
                if (index !== -1) {
                    // The element is removed from the toDoList using the splice method
                    // The splice method returns an array, with 1 element in this case (because of ", 1"), starting from "index" 
                    this.toDoList.splice(index, 1);
                }

            }

            // This happens only if toDoElement.done === false
            else {
                // The item arrowFunction searches in the doneList array if text property of the item matches the text property of the toDoElement
                // The findIndex function returns the index of the first matching element found in the doneList array, or -1 if no match is found
                // The result is stored in the index variable
                const index = this.doneList.findIndex(item => item.text === toDoElement.text);

                // If the index is not -1, which means the item has been found, and its index stored into a variable
                if (index !== -1) {
                    // The element is removed from the doneList using the splice method
                    // The splice method returns an array, with 1 element in this case (because of ", 1"), starting from "index" 
                    this.doneList.splice(index, 1);
                }

                // The item arrowFunction searches in the toDoList array if text property of the item matches the text property of the toDoElement
                // The findIndex function returns the index of the first matching element found in the doneList array, or -1 if no match is found
                // The result is stored in the toDoIndex variable
                const toDoIndex = this.toDoList.findIndex(item => item.text === toDoElement.text);

                // If toDoIndex is equal to -1, it means the item has not been found within the toDoList
                if (toDoIndex === -1) {
                    // If the item has not been found within the toDoList array, then we push the "toDoElement" inside of the "toDoList"
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

        // Method to delete completely an element from the toDoLsit
        removeFromToDoListEntirely(toDoElementIndex) {
            // Check if the toDoElementIndex is valid
            if (toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0) {
                console.warn('Invalid index');
            }

            // Remove the item from the toDoList using splice 
            // Why do I add [0]? Because the splice method returns an array, with only one element
            // I am now trying to store the element contained in the first cell of the array at index 0 into a variable called "restoredElement"
            // Without the [0], I'd be trying to save the whole variable into the restoredElement
            const removedElement = this.toDoList.splice(toDoElementIndex, 1)[0];

            // If removedElement.done === true
            if (removedElement.done) {

                // The arrow function "element" searches for an item in the doneList array whose text property matches the text property of the removedElement
                // The findIndex function returns the index of the first matching element found in the doneList array, or -1 if no match is found
                // The result is stored in the doneElementIndex variable.
                const doneElementIndex = this.doneList.findIndex(element => element.text === removedElement.text);

                // If the element is found in the doneList array
                if (doneElementIndex >= 0) {
                    // Then, we remove the element from doneList using the splice method
                    this.doneList.splice(doneElementIndex, 1);
                }
            }
        },

        // Method to delete completely an element from the doneList
        removeFromDoneListEntirely(doneElementIndex) {
            // Check if the doneElementIndex is valid
            if (doneElementIndex >= this.doneList.length || doneElementIndex < 0) {
                console.warn('Invalid index');
            }

            // Remove the item from the doneList using splice
            this.doneList.splice(doneElementIndex, 1);
        }

    }

}).mount('#app');
