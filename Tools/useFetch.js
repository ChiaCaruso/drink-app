import { useState, useEffect } from "react";
import axios from "axios";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
// const idUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
const url = "https://www.thecocktaildb.com/api/json/v1/1/";


const useFetch = (query) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {

        (async (query) => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(`${url}${query}`);
                setData(response.data);
            } catch (error) {
                setIsError(true);
                console.error(error.response.data)
            }
            setIsLoading(false);
        })(query);
    }, [query]);
    return { isLoading, data, isError };
};

export default useFetch;

