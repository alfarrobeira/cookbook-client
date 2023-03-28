import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }) => {
    const queryRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(queryRef.current);
        navigate('/recipes');
    }

    return (
        <>
            <form className="mb-3" onSubmit={handleSubmit}>
                <TextField
                    id="search-bar"
                    className="text"
                    label="Search"
                    variant="outlined"
                    placeholder="Search for recipes..."
                    size="small"
                    sx={{ width: '40ch' }}
                    onInput={(e) => queryRef.current = (e.target.value)}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "dodgerblue" }} />
                </IconButton>
            </form>
        </>
    );
};

export default SearchBar;