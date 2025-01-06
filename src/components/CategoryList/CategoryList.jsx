import './CategoryList.scss'
import CategoryItem from "../CategoryItem/CategoryItem";

function CategoryList({catalog = []}) {
    return (
        <div className="category-list">
            {
                catalog.map(el => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))
            }
        </div>
    )
}

export default CategoryList
