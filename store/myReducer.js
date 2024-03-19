
const initState = {
    username:"hello",
    report:[],
}
const myReducer = (state=initState, action)=>{
  if(action.type == 'update_user'){
    return{
      username:action.userId
    }
  }
  return state;
}

export default myReducer
