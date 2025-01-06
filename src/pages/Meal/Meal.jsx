import './Meal.scss'

import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../../api";
import Preloader from "../../components/Preloader/Preloader";

function Meal() {

    const {id} = useParams();

    const [meal, setMeal] = useState({});

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // Возврат на предыдущую страницу
    };

    useEffect(() => {
        getMealById(id).then(data => {
            setMeal(data.meals[0])
        })
    }, [id])


    return (
        <>


            {!meal.idMeal ? <Preloader/> : (

                <div className="meal-detail">
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                    <h1 className="title">
                        {meal.strMeal}
                    </h1>
                    <h6>Category: {meal.strCategory}</h6>
                    {meal.strArea ? <h6>Area: {meal.strArea}</h6> : null}
                    <p>{meal.strInstructions}</p>

                    <table className={'centered'}>
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(meal).map(key => {
                                if(key.includes('Ingredient') && meal[key]){

                                    return (
                                        <tr key={key}>
                                            <td>{meal[key]}</td>
                                            <td>{
                                                meal[`strMeasure${key.slice(13)}`]
                                            }</td>
                                        </tr>
                                    )
                                }
                                return null
                            })
                        }
                        </tbody>
                    </table>
                    {meal.strYoutube ? (
                        <div className="row">
                            <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                                    allowFullScreen></iframe>
                        </div>
                    ) : null}
                </div>
            )}

            <button className="btn" onClick={goBack}>Go Back</button>
        </>
    )
}

export default Meal;
