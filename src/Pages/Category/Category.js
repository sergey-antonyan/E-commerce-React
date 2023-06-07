import React from 'react'
import {fetchCategory , getAllCategory} from "../../feauters/categorySlice"
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams , Link} from 'react-router-dom'


const Category = () => {

  const data = useSelector(getAllCategory)
  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(()=> {
    dispatch(fetchCategory())
  }, [])

  const category = data.find((category) => category.id === Number(id));
  
  return (
    <div>
      <h1>Helllllllllllo</h1>
      {data.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <div>{category.category_name}</div>
        </Link>
      ))}
      
    </div>
  );
}

export default Category
