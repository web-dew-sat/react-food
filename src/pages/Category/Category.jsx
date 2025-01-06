import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFilteredCategory} from "../../api";
import Preloader from "../../components/Preloader/Preloader";
import MealList from "../../components/MealList/MealList";

function Category() {

    const {name} = useParams();

    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Возврат на предыдущую страницу
    };

    useEffect(() => {
        getFilteredCategory(name).then(data=> {
            setMeals(data.meals)
        })
    }, [name])

    return (
        <>
            <button className="btn" onClick={goBack}>Go Back</button>
            {
                !meals.length ? <Preloader/> : (
                    <MealList meals={meals} />
                )
            }
        </>

    )
}
export default Category;
