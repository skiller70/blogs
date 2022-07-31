import {put,takeEvery,takeLatest,call} from 'redux-saga/effects'
import axios from 'axios';

// ALL ACTION WATCHER **************************************************************
export default function* actionWatcher(){
yield takeLatest('SHOW_ALL_COMMENTS',showAllComments)
yield takeLatest('POST_COMMENT',postUserComment)

}


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