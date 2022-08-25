import React, { useState } from 'react';
import { increment, decrement, reset, dircedre, dirincre} from '../redux/count/action'
import { useDispatch, useSelector} from 'react-redux'
import { getCount } from '../redux/count/selector';

function Counter() {
   const dispatch = useDispatch()
   const selector = useSelector(state => state)
   const [countInput, setCountInput] = useState(0)
   const count= getCount(selector)
   const inc = () => {
       dispatch(increment())
   }
   const dec = () => {
       dispatch(decrement())
   }
   const res = () => {
      dispatch(reset())
   }
   const customIncre = () => {

      dispatch(dirincre(countInput))
  }
  const customDecre = () => {

   dispatch(dircedre(countInput))
}




   // const custom = () => {

   //     dispatch(incValue(countInput))
   // }



   return (
      // const {counter,increment,decrement,reset} = this.props;
      // return (
         <div className = "App">
            <div>{count}</div>
            <div>
               <button onClick = {inc}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {dec}>DECREMENT BY 1</button>
            </div>
            <div>
               <input type="text" onChange={(e) => setCountInput(e.target.value)}/>
               <button onClick = {customIncre}>INCREMENT BY </button>
            </div>
            <button onClick = {res}>RESET</button>
         </div>
      // );
   )
}
export default Counter;