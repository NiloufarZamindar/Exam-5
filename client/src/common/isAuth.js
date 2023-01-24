import { parseJwt } from "./../utils/Jwt";
export const isAuth = (prop = null) => {
  let login = localStorage.getItem("login");
  if(prop===null){
    if (login) {
        login = JSON.parse(login);
        const decodedJwt = parseJwt(login);
        if (decodedJwt.exp * 1000 < Date.now()) {
          return false;
        }
        return true;
      }
  }else{
    if (login) {
        login = JSON.parse(login);
        const decodedJwt = parseJwt(login);
        return decodedJwt[prop]
      }   
    return false;
  }
  return false;
};
