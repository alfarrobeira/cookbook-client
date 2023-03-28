import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
    //console.log(recipe);
    return (
        <>
            <div className="recipeListItem container my-1 p-1 border border-black-50">
                <Link className="text-decoration-none text-reset" to={`/recipes/${recipe.sys_id}`} >   
                    <div className="row align-items-center text-start">
                        <div className="col-sm-4 col-xl-2">
                            <img src={recipe.image.file.url} alt={recipe.title} />
                        </div>
                        <div className="col">
                            <div className="fs-5">{recipe.title}</div>
                            { recipe.title !== recipe.description ? <div>{recipe.description}</div> :  <div></div> }
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default RecipeListItem;