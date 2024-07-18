import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import your app component here
import { PostComponent } from './post/post.component'; // Import your post component here

@NgModule({
  declarations: [
    AppComponent, // Include your app component here
    PostComponent, // Include your post component here
    // Other components if any
  ],
  imports: [
    BrowserModule,
    // Other modules you may need (e.g., HttpClientModule, FormsModule, ReactiveFormsModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
