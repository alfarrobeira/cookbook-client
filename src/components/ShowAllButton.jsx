import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ShowAllButton = ({ setSearchQuery }) => {
    const navigate = useNavigate();

    return (
        <Button className="showAllButton py-0" onClick={e => {
            navigate("/recipes");
            setSearchQuery("");
        }}>Show All</Button>
    );
}

export default ShowAllButton;