import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../globalComponent/button/button.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  posts: any[] = [];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.posts = data.map(post => ({
        ...post,
        isEditing: false,
        backupTitle: post.title,
        backupBody: post.body
      })).slice(0, 10);
    });
  }

  viewPost(postId: number) {
    this.http.get<any>(`${this.apiUrl}/${postId}`).subscribe(data => {
      alert('View Post:\n' + JSON.stringify(data, null, 2));
    });
  }

  enableEdit(post: any) {
    post.isEditing = true;
    post.backupTitle = post.title;
    post.backupBody = post.body;
  }

  savePost(post: any) {
    const updatedData = {
      title: post.title,
      body: post.body
    };

    this.http.patch<any>(`${this.apiUrl}/${post.id}`, updatedData).subscribe(data => {
      alert('Post updated (PATCH):\n' + JSON.stringify(data, null, 2));
      post.isEditing = false;
    });
  }

  cancelEdit(post: any) {
    post.title = post.backupTitle;
    post.body = post.backupBody;
    post.isEditing = false;
  }

  deletePost(postId: number) {
    this.http.delete<any>(`${this.apiUrl}/${postId}`).subscribe(data => {
      alert('Post deleted successfully.');
      this.posts = this.posts.filter(post => post.id !== postId);
    });
  }
}

