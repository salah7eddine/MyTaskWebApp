import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by Admin on 27/04/2018.
 */

@Injectable()
export class AuthenticationService{

  private host:string="http://localhost:8080";
  private jwtToken=null;
  constructor (private http:HttpClient){
  }

  login(user){
    console.log("User auth Service : ");console.log(user);
    return this.http.post(this.host+"/login", user ,{observe:'response'});


  }

  saveToken(jwt:string){localStorage.setItem('token',jwt);}

  loadToken(){this.jwtToken=localStorage.getItem('token');}

  getTaks(){
   if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
}
