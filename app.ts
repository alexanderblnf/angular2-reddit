import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  template: `
    <div class="four wide column center aligned votes">
      <div class="ui statistic">
        <div class="value">{{votes}}</div>
        <div class="label">Points</div>
      </div>
    </div>

    <div class="twelve wide column">
      <a href="{{link}}" class="ui large header">
        {{title}}
      </a>
      <ul class="ui big horizontal list voters">
        <li class="item">
          <a href (click)="voteUp()">
            <i class="icon arrow up">upvote</i>
          </a>
        </li>
        <li class="item">
          <a href (click)="voteDown()">
            <i class="icon arrow down">downvote</i>
          </a>
        </li>
      </ul>
    </div>
  `
})

class ArticleComponent {
  votes:number;
  title:string;
  link:string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }
}

@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  template: `
    <form class="ui large form segment">
      <h3 class="ui header">
        Add a link
      </h3>

      <div class="field">
        <label for="title">Title:</label>
        <input name="title" required="required" #newTitle>
      </div>

      <div class="field">
      <label for="link">Link:</label>
        <input name="link" required="required" #newLink>
      </div>

      <button class="ui button positive right floated"
              (click)="addArticle(newTitle, newLink)">
        Submit link
      </button>
    </form>

    <div class="ui grid posts">
      <reddit-article></reddit-article>
    </div>
    `
})

class RedditApp {
  constructor() {

  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement):void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }
}

bootstrap(RedditApp);