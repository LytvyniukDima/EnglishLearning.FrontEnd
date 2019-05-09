import { Component, OnInit, PipeTransform } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  public videoModel = new EnglishVideoModel;
  public videoUrl;
  public transcription: string[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoModel.id = 'dskd';
    this.videoModel.apiId = 'pphn8cJSApo';
    this.videoModel.transcription = '- Miles?! You\'ve gotta go. - Yeah?\nIf you want me to drive you, we\'ve got to go now.\n- Personal chauffeur going once. - No Dad, I\'ll walk. It\'s okay.\nSeriously, dad. Walking would have been fine.\nBreaking news: Spider-Man saves the day again.\nSpider-Man.\nThis guy swings-in once a day and zip-zap-zop...\nDad speedup! Speedup! I know these kids.\n- Hey Miles! Have you been arrested?! - Guys, don\'t cops run red lights?\nWell, yeah, some do.\nBut not your dad.\nIn your universe, there\'s only one Spider-Man.\nBut there\'s another universe that looks and sounds like yours, but is not.\nMy name is Miles Morales.\nHey, kid.\n- You\'re like me. - How?\nI know it\'s complicated.\nYou want to know what happened to you.\nI can teach you to be Spider-Man.\nI love these burgers, so delicious.\nIt\'s one of the best burgers I\'ve ever had.\nYou have money, right? I\'m not very liquid right now.\nI think you\'re gonna be a bad teacher.\nHow am I supposed to save the whole world?\nYou can\'t think about saving the world. You have to think about saving one person.\nOne thing I know for sure: don\'t do it like me.\nDo it like you!\nI see this spark in you. It\'s amazing!\nHands up!\nWhatever you choose to do, you\'ll be great.\n- I love you, Miles. - Yeah, I know, dad.\n- You\'ve got to say, \"I love you back.\" - Dad, are you serious?\nI want to hear it. \"I love you, dad.\"\n- You\'re dropping me... - \"I love you, dad\".\n\"Dad, I love you.\"\nDad, I love you.\nThat\'s a copy.\n- Time to swing, just like I told you. - When did you teach me that?\nI didn\'t. It\'s a little joke for team building.\n- Hey, guys. - Okay, who are you?\nI\'m Gwen Stacy.\nCome on!\n- How many spider-people are there? - Save it for Comic-Con.\n- What\'s Comic-Con? - Let\'s go!\'';
    this.videoModel.videoType = 'Trailer';
    this.videoModel.title = 'Spider-Man: Into the Spider-Verse Trailer';
    this.videoModel.englishLevel = 'None';

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoModel.apiId}`);
    this.transcription = this.videoModel.transcription.split('\n');
    console.log(this.videoUrl);
  }
}
