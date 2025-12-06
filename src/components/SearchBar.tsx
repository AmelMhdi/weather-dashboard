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
        <div>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for a city..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}