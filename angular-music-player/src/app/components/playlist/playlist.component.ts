import { Component } from '@angular/core';

export interface Song {
    src: string,
    image: string,
    title: string,
    author: string,
}

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.less'],
})

export class PlaylistComponent {

    currentIndex: number = 0;
    isPlaying: boolean = false;
    audio = new Audio();

    listOfSongs: Array<Song> = [
        { 
            src: "../../../assets/songs/AlwaysWithMeAlwaysWithYou.mp3",
            image: "../../../assets/images/JoeSatriani.jpg",
            title: "Always with me, always with you",
            author: "Joe Satriani" 
        },
        { 
            src: "../../../assets/songs/AnotherOneBitesTheDust.mp3",
            image: "../../../assets/images/Queen.jpg",
            title: "Another one bites the dust",
            author: "Queen"  
        },
        { 
            src: "../../../assets/songs/FoolInTheRain.mp3",
            image: "../../../assets/images/PinkFloyd.jpg",
            title: "Fool in the rain",
            author: "Pink Floyd"  
        },
        { 
            src: "../../../assets/songs/PolicyOfTruth.mp3",
            image: "../../../assets/images/DepecheMode.png",
            title: "Policy of truth",
            author: "Depeche Mode"  
        },
        { 
            src: "../../../assets/songs/WhereTheEaglesLearnToFly.mp3",
            image: "../../../assets/images/PinkCream.jpg",
            title: "Where the Eagles learn to fly",
            author: "Pink Cream" 
        }
    ];

    constructor() {

    }

    playSong() {
        this.isPlaying = true;
        this.audio.pause();
        this.audio.src = this.listOfSongs[this.currentIndex].src;
        this.audio.load();
        this.audio.play();
    }

    pauseSong() {
        this.isPlaying = false;
        this.audio.pause();
    }

    nextSong() {
        if(this.currentIndex != 4){
            this.currentIndex++;
            this.playSong();

        } else {
            this.currentIndex = 0;
            this.playSong();
        }
    }

    previousSong() {
        if(this.currentIndex != 0){
            this.currentIndex--;
            this.playSong();
        } else {
            this.currentIndex = 4;
            this.playSong();
        }      
    }
}