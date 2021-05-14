import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators"; 

@Injectable()
export class SpotifyService {
    private searchUrl: string | undefined;

    private client_id ='996080937ebb4594a0979146c9c0c121';
    private client_secret = '0bda3cfd213c4622bc6c562586568ec8';
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private access_token: string | undefined;
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

    constructor(private _http: HttpClient){

    }

    getToken(){
        // let params : URLSearchParams = new URLSearchParams();
        // params.set('grant_type' , 'client_credentials');
        // let body = params.toString();
         var params = ('grant_type=client_credentials');
 
         var headers = new HttpHeaders();
         headers.append( 'Authorization', 'Basic ' + this.encoded);
        
         headers.append('Content-Type' , 'application/x-www-form-urlencoded');
 
         return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
            .pipe(map((response: any) => response.json()));
      }

    searchMusic(str : string | undefined, type='artist', token: string) {

        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
        let headers = new HttpHeaders();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.searchUrl, {headers : headers})
            .pipe(map((response: any) => response.json()));
    }
}