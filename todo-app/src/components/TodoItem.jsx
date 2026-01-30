import React from 'react';
import { Trash2, Check } from 'lucide-react';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className={`group flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-transparent transition-all duration-300 hover:shadow-md hover:border-violet-100 ${todo.completed ? 'opacity-70 bg-gray-50/80' : ''}`}>
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${todo.completed
                            ? 'bg-violet-500 border-violet-500 text-white'
                            : 'border-slate-300 text-transparent hover:border-violet-400'
                        }`}
                    aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                    <Check size={14} strokeWidth={3} />
                </button>
                <span
                    className={`text-lg font-medium transition-all duration-200 break-all ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'
                        }`}
                >
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-2 p-2 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-red-500 hover:bg-red-50 rounded-lg focus:opacity-100"
                aria-label="Delete todo"
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
}
