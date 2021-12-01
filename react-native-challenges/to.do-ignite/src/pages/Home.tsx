import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const hasSameTitle = tasks.find((task) => task.title === newTaskTitle);

    if (hasSameTitle) {
      return Alert.alert(
        "Task já cadastrada",
        "Você não pode cadastrar uma task com o mesmo nome",
        [
          {
            text: "Ok",
            onPress: () => {},
          },
        ]
      );
    }

    const id = new Date().getTime();
    setTasks((prevState) => [
      ...prevState,
      { id, title: newTaskTitle, done: false },
    ]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const newArrayOfTasksUpdate = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newArrayOfTasksUpdate);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?",
      [
        {
          style: "cancel",
          text: "Cancelar",
        },
        {
          style: "destructive",
          text: "Sim",
          onPress: () => {
            const newArrayOfTasks = tasks.filter((task) => task.id !== id);
            setTasks(newArrayOfTasks);
          },
        },
      ]
    );
  }

  function handleEditTask(id: number, newTitle: string) {
    //TODO - toggle task done if exists
    const newArrayOfTasksUpdate = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(newArrayOfTasksUpdate);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handleEditTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
