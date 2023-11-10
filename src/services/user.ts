import myAxios  from "../plugins/myAxios.js";
import {setCurrentUserState} from "../states/user.ts";

export const getCurrentUser = async ()=>{

    const  res = await myAxios.get('/ser/current');
    if(res.code ===0){
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}