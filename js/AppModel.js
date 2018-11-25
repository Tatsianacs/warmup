/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default class AppModel {
  constructor() {
    this.baseLinksSearch = 'https://www.googleapis.com/youtube/v3/search?';
    this.baseLinksStat = 'https://www.googleapis.com/youtube/v3/videos?';
    this.settings = {
      apiKey: 'AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE',
    };
    this.filterPart = '&type=video&part=snippet&maxResults=15';
  }

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  makeUrl(queryP) {
    const keyPart = `key=${this.settings.apiKey}`;
    return this.baseLinksSearch + keyPart + this.filterPart + queryP;
  }

  makeUrlForToken(queryP, token) {
    const keyPart = `key=${this.settings.apiKey}`;
    return this.baseLinksSearch + keyPart + this.filterPart + queryP + token;
  }

  makeUrlForStat(videoId) {
    const keyPart = `key=${this.settings.apiKey}`;
    return `${this.baseLinksStat}${keyPart}&id=${videoId}&part=statistics`;
  }

  search(queryP, callback) {
    fetch(this.makeUrl(queryP))
      .then(AppModel.handleErrors)
      .then((data) => {
        this.lengthOfItems += Array.from(data.items).length;
        this.nextPageToken = data.nextPageToken;
        this.totalResults = data.pageInfo.totalResults;
        const promises = data.items.map((item) => {
          const videoItemId = item.id.videoId;
          return fetch(this.makeUrlForStat(videoItemId))
            .then(AppModel.handleErrors);
        });
        Promise.all(promises)
          .then((allCounts) => {
            const videoStat = allCounts.map(VideoItem => VideoItem.items[0].statistics.viewCount);
            callback(data, videoStat);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch(err => console.error(err));
  }

  loadNextPage(queryP, callback) {
    const nextPage = `&pageToken=${this.nextPageToken}`;
    fetch(this.makeUrlForToken(queryP, nextPage))
      .then(AppModel.handleErrors)
      .then((data) => {
        this.lengthOfItems += Array.from(data.items).length;
        this.nextPageToken = data.nextPageToken;
        const promises = data.items.map((item) => {
          const videoItemId = item.id.videoId;
          return fetch(this.makeUrlForStat(videoItemId))
            .then(AppModel.handleErrors);
        });
        Promise.all(promises)
          .then((allCounts) => {
            const videoStat = allCounts.map(VideoItem => VideoItem.items[0].statistics.viewCount);
            callback(data, videoStat);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch(err => console.error(err));
  }
}
