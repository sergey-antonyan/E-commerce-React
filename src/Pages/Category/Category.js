import React from 'react'
import {fetchCategory , getAllCategory} from "../../feauters/categorySlice"
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams , Link} from 'react-router-dom'
import './category.css'


const Category = () => {

  const data = useSelector(getAllCategory)
  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(()=> {
    dispatch(fetchCategory())
  }, [])

  const category = data.find((category) => category.id === Number(id));
  
  return (
    <div className='cont'>
      <h1>КАТЕГОРИИ</h1>
      <div className='containerCategory'>
      {data.map((category) => (
        <div className='childDiv'>
        <Link key={category.id} to={`/category/${category.id}`}>
          <div>{category.category_name}</div>
        </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Category
