
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  //Global Variable
  public baseURLAPI:string = "http://10.1.19.24/combindrestapi/";
  public authKey:string = "Basic YWRtaW46MTIzNDU2";
  public contentType:string = "application/json"; 
}
