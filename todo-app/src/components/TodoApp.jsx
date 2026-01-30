import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        // Lazy initial state to read from local storage only once
        try {
            const saved = localStorage.getItem('todos');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Failed to parse todos', e);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Safe counters
    const activeCount = todos.filter(t => !t.completed).length;
    const completedCount = todos.length - activeCount;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
            <div className="max-w-xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-3 tracking-tight pb-1">Focus.</h1>
                    <p className="text-slate-500 font-medium">
                        {activeCount === 0 && todos.length > 0
                            ? "All caught up! 🎉"
                            : activeCount > 0
                                ? `You have ${activeCount} task${activeCount === 1 ? '' : 's'} remaining`
                                : "Stay organized and get things done."}
                    </p>
                </div>

                <TodoInput addTodo={addTodo} />

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>

                {todos.length > 0 && (
                    <div className="mt-8 text-center text-xs text-slate-400 font-medium tracking-wide">
                        {completedCount}/{todos.length} COMPLETED
                    </div>
                )}
            </div>
        </div>
    );
}
