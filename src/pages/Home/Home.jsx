import './Home.scss'
import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {getAllCategories} from "../../api";
import Preloader from "../../components/Preloader/Preloader";
import CategoryList from "../../components/CategoryList/CategoryList";
import Search from "../../components/Search/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalogs, setFilteredCatalogs] = useState([]);

    const {pathname, search} = useLocation()

    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalogs(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )

        navigate({
            pathname,
            search: `?search=${str}`,
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalogs( search ? data.categories.filter(item => {
               return  item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
            }) : data.categories)
        })
    }, [search])

    return (
       <>
           <Search cb={handleSearch}/>
           {

               !catalog.length ? <Preloader /> : (
                   <CategoryList catalog={filteredCatalogs}/>
               )
           }
       </>
    )
}

export default Home
