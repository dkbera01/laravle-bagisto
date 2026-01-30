import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    const hasTodos = todos.length > 0;

    if (!hasTodos) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-300">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                </div>
                <p className="text-slate-500 text-lg font-medium">No tasks yet</p>
                <p className="text-slate-400 text-sm mt-1">Add a task to get started on your day</p>
            </div>
        );
    }

    return (
        <div className="w-full space-y-1">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}
