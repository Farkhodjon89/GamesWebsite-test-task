import React, {useState} from 'react';

const useSearchGames = () => {
    const [games, setGames] = useState([]);

    const searchGames = React.useCallback(async (query) => {

        const url = `https://api.rawg.io/api/games?search=${query}&key=${process.env.NEXT_PUBLIC_MY_API_KEY}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }, [])

    return {
        games, setGames, searchGames
    }
};

export default useSearchGames;