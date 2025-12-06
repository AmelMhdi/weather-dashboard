import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [input, setInput] = useState("");
    const handleSearch = () => {
        onSearch(input);
    }

    return (
        <div className="px-6 py-4">
            <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search for a city..."
                    className="w-full pl-12 bg-gray-200 p-4 rounded focus:ring-2 focus:ring-gray-400 outline-none"
                />
            </div>
            <button onClick={handleSearch} className="w-full px-4 py-3 text-gray-800 font-semibold border border-gray-300 rounded hover:bg-gray-100">Search</button>
        </div>
    )
}