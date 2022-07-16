// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };

  return task;
}

// -----------DRIVER CODE BELOW-----------------
// Print the state of a task to the console in a nice readable way
// eslint-disable-next-line func-style
function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? " " : " not "}been completed`
  );
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// eslint-disable-next-line func-style
function completeTask(task) {
  task.complete = true;
}

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// DRIVER CODE BELOW

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
task1.title;
