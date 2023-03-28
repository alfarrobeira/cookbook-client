import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContentful from "./../services/useContentful.jsx";

const RecipeCard = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();
    const { getRecipeDetails } = useContentful();

    useEffect(() => {
        setLoading(true);
        getRecipeDetails(id).then((response) => {
            setRecipe(response);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading ?
                (
                    // https://mui.com/material-ui/api/circular-progress/
                    <div className="mt-5 pt-5">
                        <CircularProgress size="4rem" />
                    </div>
                )
                :
                (
                    <div className="recipeCard container my-2 border border-dark rounded">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-12">
                                {/* title and description are mandatory in the CSS, so it is safe to display without checking */}
                                <h2 className="my-3">{recipe.title}</h2>
                                <p className="lead">{recipe.description}</p>
                                <div className="container">
                                    <div className="row align-items-center text-start">
                                        <div className="col-sm-12 col-lg-7">
                                            <img src={recipe.image.file.url} alt={recipe.title} />
                                        </div>
                                        <div className="col mx-5 my-2 fs-4">
                                            {/* handle emptry entries: display only, if content available */}
                                            {recipe.kitchen ? <div><span className="fw-semibold">Kitchen: </span><span>{recipe.kitchen}</span></div> : <div />}
                                            {recipe.servings ? <div><span className="fw-semibold">Servings: </span><span>{recipe.servings}</span></div> : <div />}
                                            {recipe.time ? <div><span className="fw-semibold">Time: </span><span> {recipe.time} minutes</span></div> : <div />}
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col"> 
                                        <div className="mx-5 my-3 text-start">
                                            <h4>Ingredients</h4>
                                            <ul>
                                                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
                                            </ul>
                                            {
                                                recipe.instructions ? <div><h4 className="my-2">Instructions</h4>
                                                    <p>{recipe.instructions}</p></div> : <div></div>}
                                        </div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default RecipeCard;