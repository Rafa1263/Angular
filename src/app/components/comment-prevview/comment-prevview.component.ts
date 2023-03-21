import { Component } from '@angular/core';
// Poner en input

@Component({
  selector: 'app-comment-prevview',
  templateUrl: './comment-prevview.component.html',
  styleUrls: ['./comment-prevview.component.scss']
})

export class CommentPrevviewComponent {
  public readonly POSTS = [
    {
      id: 1,
      name: "test",
      title: "TEST",
      content: "dnkwanjkdnajkdw",
      photo: "default"
    },
    {
      id: 1,
      name: "test",
      title: "TEST",
      content: "dnkwanjkdnajkdw",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7Hsc9TliEcBsGvylGUF8vABnC_As0w2vGw&usqp=CAU"
    }

  ];


}
