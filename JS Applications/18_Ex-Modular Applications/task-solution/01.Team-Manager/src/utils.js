export const getUserData =()=>{
    if(sessionStorage.getItem('accessToken')){
        return{
            email: sessionStorage.getItem('email'),
            username: sessionStorage.getItem('username'),
            _id: sessionStorage.getItem('_id'),
            accessToken: sessionStorage.getItem('accessToken')
        };
    }

    return null;
}