import {getPost} from '../services/post_api'

export const loadPostsAction = async (dispatch) => {
    const res = await getPost()
    // const ress = res.json()
    dispatch({
        type:'LOAD_POSTS',
        payload:res.data.special_class
    })
    
    // console.log(res.data.data.special_class)
}