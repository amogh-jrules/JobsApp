import {AsyncStorage} from 'react-native';
import {
    FACEBOOK_LOGIN_SUCCESS,FACEBOOK_LOGIN_FAIL
} from '../types';
import {Facebook} from 'expo';

export const facebookLogin = () => {
    return async function(dispatch) {let token = await AsyncStorage.getItem('fb_token')
    if(token){
        //dispatch an action saying fb login is done
        dispatch({
            type : FACEBOOK_LOGIN_SUCCESS, payload : token
        });
    }else{
        //start up fb login process
        doFacebookLogin(dispatch);

    }}
};
const doFacebookLogin = async (dispatch)=>{
    let {type,token} = await Facebook.logInWithReadPermissionsAsync("346383486069800",{
        permissions : ['public_profile']
    });
    if(type === 'cancel'){
        return dispatch({type : FACEBOOK_LOGIN_FAIL});
    }
    await AsyncStorage.setItem('fb_token',token);
    dispatch({type :FACEBOOK_LOGIN_SUCCESS,payload:token});
};

