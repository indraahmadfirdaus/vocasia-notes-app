import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({
        tasks: [...state.tasks, newTask]
    })),
    doneTask: (id) => set((state) => {
        const foundTask = state.tasks.find(task => task.id === id)
        foundTask.isDone = true

        const filteredTask = state.tasks.filter(task => task.id !== id)

        return {
            tasks: [...filteredTask, foundTask]
        }
    })
}))

// SPREAD OPERATOR
// SPREAD ARRAY
// a: [1,2] newValue: 3
// b: [...a, newValue] => [1,2,3] (TAPI INI ARRAY BARU)

// a: [1,2]
// a.push(3)
// a: [1,2,3] (TAPI INI BUKAN ARRAY BARU)

// SPREAD OBJECT
// a: { nama: "indra", kelas: "b" }
// { ...a, tinggi: 175cm }
// b: { nama: "indra", kelas: "b", tinggi: 175cm }

export default useTaskStore