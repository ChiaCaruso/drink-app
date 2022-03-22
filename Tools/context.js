import { useState, useContext, createContext } from 'react';
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [query, setQuery] = useState("margarita");
    const [scrollPosition, setScrollPosition] = useState(0)
    const { isLoading, data, isError } = useFetch(`search.php?s=${query}`);

    const showSidebar = () => {
        setOpenSidebar(true);
    };

    const hideSidebar = () => {
        setOpenSidebar(false);
    };

    const handleSearch = (authorInput) => {
        setQuery(authorInput);
    };

    const getScrollPosition = (value) => {
        setScrollPosition(value);
    }

    const deleteScrollPosition = (value) => {
        setScrollPosition(0);
    }

    return (
        <AppContext.Provider
            value={{
                openSidebar,
                showSidebar,
                hideSidebar,
                isLoading,
                isError,
                data,
                query,
                handleSearch,
                scrollPosition,
                getScrollPosition,
                deleteScrollPosition
            }}>
            {children}
        </AppContext.Provider>
    )
};

const globalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, globalContext };