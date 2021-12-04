import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getItem}  from "../Redux/List/actions";
import * as action from '../Redux/List/actions'

function ItemPage() {
    const {id}=useParams();
    const {isLoading, error, item}=useSelector(state => state.item)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getItem(id))
    },[dispatch, id])
    
    return (
        isLoading?
            <div>Loading...</div>:
           <>
           <div>{id} : {error?error:item.title}</div>
            <button  onClick={()=>dispatch(action.addItemAction({id:2,name:'tea',price:33,description:'perfect prodect'}))}>delete</button>
            <button  onClick={()=>dispatch(action.delItem(id))}>add</button>


            </>
            
    );
}

export default ItemPage;