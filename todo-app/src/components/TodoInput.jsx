import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TodoInput({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 relative group z-10">
            <div className="relative transform transition-all duration-300 focus-within:scale-[1.02]">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full pl-6 pr-14 py-4 text-lg bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-slate-300 text-slate-700"
                />
                <button
                    type="submit"
                    disabled={!text.trim()}
                    className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-violet-600 text-white rounded-xl hover:bg-violet-700 disabled:opacity-50 disabled:hover:bg-violet-600 transition-all duration-200 shadow-md shadow-violet-200 active:scale-95"
                    aria-label="Add todo"
                >
                    <Plus size={24} strokeWidth={2.5} />
                </button>
            </div>
        </form>
    );
}
