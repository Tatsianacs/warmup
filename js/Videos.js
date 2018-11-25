export default class Videos {
  static draw(idx, videoCount) {
    const divFlex = document.createElement('div');
    divFlex.classList.add('video-item');
    const linkToClip = document.createElement('a');
    linkToClip.setAttribute('target', '_blank');
    linkToClip.setAttribute('href', `https://www.youtube.com/watch?v=${idx.id.videoId}`);
    const cloneOfLink = linkToClip.cloneNode(true);
    linkToClip.textContent = idx.snippet.title;
    linkToClip.classList.add('video-title');
    const previewImage = document.createElement('img');
    previewImage.classList.add('clip-preview');
    previewImage.src = idx.snippet.thumbnails.high.url;
    previewImage.setAttribute('alt', 'video preview');
    cloneOfLink.appendChild(previewImage);
    const description = document.createElement('span');
    description.classList.add('description');
    description.innerHTML = `<i class="fa fa-youtube" aria-hidden="true"></i>${idx.snippet.description}`;
    const author = document.createElement('span');
    author.classList.add('author');
    author.innerHTML = `<i class="fa fa-user" aria-hidden="true"></i>${idx.snippet.channelTitle}`;
    const date = document.createElement('span');
    date.classList.add('date');
    const dateFormatted = idx.snippet.publishedAt.slice(0, 10);
    date.innerHTML = `<i class="fa fa-calendar"></i>${dateFormatted}`;
    const rate = document.createElement('span');
    rate.classList.add('rate');
    rate.innerHTML = `<i class="fa fa-eye"></i>${videoCount}`;
    divFlex.append(cloneOfLink, linkToClip, description, author, date, rate);
    const videoContainer = document.getElementById('video_container');
    const list = videoContainer.querySelector('.videos');
    list.appendChild(divFlex);
  }
}
