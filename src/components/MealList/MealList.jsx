import './MealList.scss'
import MealItem from "../MealItem/MealItem";
function MealList({meals}) {
    return (
        <div className="meals-list">
            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}
export default MealList
