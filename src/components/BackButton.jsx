import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        // using navigate hook with "-1" simulates hitting the back button
        <Button className="backButton py-0" onClick={e => { navigate(-1) }}>Back</Button>
    );
}

export default BackButton;