import React from 'react';
import ClaudeRecipeComponent from './claudeRecipeCompnent';
import IngredientListComponent from './ingredientListComponent';

export default function ChefContent(){
   
    const [ingredients,setIngredients]=React.useState([]);
    const [recipeShown,setRecipeShown]=React.useState(false);
    const [resultRecipe,setResultRecipe]=React.useState([]);
    const ingredientListItem=ingredients.map(ingredient=>(<li key={ingredient}>{ingredient}</li>))
     async function getRecipeFromApi(ingrdientsList) {
      const result=await fetch('http://localhost:3000/api/recipe',{
          method:'POST',
          headers:{'Content-Type':"application/json"},
         body: JSON.stringify({ ingrdientsList })
        });
        const data= await result.json();
        return data;
     }
    function addIngredient(formData){
      const newIngredient=formData.get("ingredient");
      setIngredients((prev)=>[...prev,newIngredient]);
     
    }
    async function handleShowRecipe(){
        const recipeData=getRecipeFromApi(ingredientListItem);
        console.log(recipeData); 
        setResultRecipe(recipeData);
        setRecipeShown(true);
    }
    return(
        <main>
            <form className="ingredientsForm" action={addIngredient}>
                <input type="text" placeholder="e.g. oregano" className="chefInput" name="ingredient" required />
                <button className="chefAddButton">+ Add Ingredients</button>
            </form>
            
            {
              ingredients.length > 0 && 
              <IngredientListComponent ingredient={ingredients} list={ingredientListItem} toggle={handleShowRecipe}/>
            }
            {
                recipeShown && <ClaudeRecipeComponent result={resultRecipe}/>
            
            }
            
           
        </main>
    )
}