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
    description.innerHTML = `<b>Description:</b> ${idx.snippet.description}`;
    const author = document.createElement('span');
    author.classList.add('author');
    author.innerHTML = `<b>Author:</b> ${idx.snippet.channelTitle}`;
    const date = document.createElement('span');
    date.classList.add('date');
    const dateFormatted = idx.snippet.publishedAt.slice(0, 10);
    date.innerHTML = `<b>Date:</b> ${dateFormatted}`;
    const rate = document.createElement('span');
    rate.classList.add('rate');
    rate.innerHTML = `<b>Rate:</b> ${videoCount}`;
    divFlex.append(cloneOfLink, linkToClip, description, author, date, rate);
    const videoContainer = document.getElementById('video_container');
    const list = videoContainer.querySelector('.videos');
    list.appendChild(divFlex);
  }
}
