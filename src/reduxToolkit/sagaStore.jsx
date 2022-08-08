import {put,takeEvery,takeLatest,call,select, delay} from 'redux-saga/effects'
import axios from 'axios';
import { push,replace,goBack } from "redux-first-history";

// ALL ACTION WATCHER **************************************************************
export default function* actionWatcher(){
yield takeLatest('SHOW_ALL_COMMENTS',showAllComments)
yield takeLatest('POST_COMMENT',postUserComment)
yield takeLatest('REGISTER_USER',registerUser)
yield takeEvery("CHANGE_ROUTE",myRoute)

}




//NEW WATCH SAGA STORE***************



//LOAD ALL USERS COMMENTS ON CLINT SIDE **************************************************************
function* showAllComments(){

try {
    yield put({type :"POST_LOADING_TRUE"})
    const link = "http://localhost:5000/api/test/showAllComments";

    const result = yield call(axios.get,link)
    yield put({type : 'SHOW_COMMENTS',payload : result.data})
    yield put({type :"POST_LOADING_FALSE"})
} catch (error) {
    console.log('show all comment error')
    yield put({type :"POST_LOADING_FALSE"})

}
}

//POST USER COMMENTS ****************************************************************************************

function* postUserComment(action){
   console.log(action.payload)
    yield put({type : 'DUMMY_COMMENT',payload:action.payload})
try {
    const reqHeader = {authorization: `Bearer ${localStorage.getItem("token")}`}
    const userCommentApi = `http://localhost:5000/api/test/userComments?userId=${action.payload.USER_ID}&userComment=${action.payload.user_comments}&postId=${action.payload.POST_ID}`;
   
    const result = yield call(axios.get,userCommentApi,reqHeader)
    console.log(result.data)
    yield put({type:'POST_USER_COMMENT',payload: result.data})
    yield put({type : 'CLEAR_DUMMY_COMMENT'})
    
 } catch (error) {
    console.log('somthing went wrong in post comment ')
    yield put({type : 'CLEAR_DUMMY_COMMENT'})
 }
}


//REGISTRATION FORM **************************************************************

function* registerUser(action){
        yield put(push("/home"))
    //  yield put({type:"REGISTER_LOADING_TRUE"})    
    // const ENDPOINT = "http://localhost:5000/api/test/register";
    // const {name,username,password,email} = action.payload

    // const result = yield call(axios.post,ENDPOINT,{name,username,password,email})
  


    // if(result.status == 200){
    //     yield put({type:"REGISTER_USER_DATA",payload:result.data})
    //     yield localStorage.setItem("token",result.data)
    //     yield put({type:"REGISTER_NAVIGATION",payload:true})
       
    // }


}


function* myRoute(action){
yield put({type :"navToggle"})

}