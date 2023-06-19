import { useState } from 'react';
import Link from 'next/link';

export default function SearchComponent() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/search?q=${query}`);
      const data = await response.json();

      setResults(data);
    } catch (error) {
      console.error('An error occurred while fetching search results.', error);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />

      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link href={`https://jobbatao.com/archives/${result.id}`}>
              <a>{result.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
