import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers:[SpotifyService]
})

export class SearchComponent {

  searchStr: string | undefined;

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.searchMusic(this.searchStr, 'artist',  res.access_token)
      .subscribe((res: any) => {
        console.log(res.artists.items);
      })
    })
  }
}