import { FC } from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    placeholder?: string;
}

const Searchbar:FC <Props> = ({
    value,
    onChange,
    onClear,
    placeholder = 'Buscar...',
}) => {
    return (
        <div className="flex justify-center p-10">
            <input
                type="search"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block p-2.5 z-20 text-sm bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white"
            />
            <button
                className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onClear}
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <span className="sr-only">Clear</span>
            </button>
        </div>
    );
};

export default Searchbar;