export default function IngredientListComponent(props){
   console.log(props)
    return(
         <section>
              <h3 className='hand'>Ingrdients on hand</h3>   
              <ul className='listIngredients'>{props.list}</ul> 
                {  props.ingredient.length > 3 && 
                  <div className='getRecipeConatiner'>
                   <div>
                    <h4>Ready for recipe?</h4>
                     <p>Generate a recipe for lsit of ingredients.</p>
                    </div>
                    <button className='recipeButton' onClick={props.toggle}>Get a recipe</button>
                    </div>
                 }
            </section> 
    )
}