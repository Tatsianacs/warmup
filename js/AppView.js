import Videos from './Videos';

export default class AppView {
  constructor() {
    this.videos = new Videos();
    this.onClickGetVideos = null;
    this.onDownGetTooltip = null;
    this.onUpHideTooltip = null;
  }

  // function to handle hover issues on touch devices
  static isTouchDevice() {
    return 'ontouchstart' in window;
  }

  drawVideos(data, arrStat) {
    const videoContainer = document.getElementById('video_container');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    AppView.removeLoader();
    const newArrayOfData = Array.from(data.items);
    if (newArrayOfData && newArrayOfData.length) {
      for (let i = 0; i < newArrayOfData.length; i += 1) {
        let videoCount;
        if (arrStat && arrStat.length) {
          videoCount = arrStat[i];
        } else videoCount = 0;
        Videos.draw(newArrayOfData[i], videoCount);
      }
      if (!videoContainer.contains(paginationWrapper)) {
        this.drawPagination();
      }
    } else {
      if (videoContainer.contains(paginationWrapper)) {
        paginationWrapper.remove();
      }
      AppView.drawNoResults();
    }
  }

  static drawContainer() {
    const container = document.createElement('div');
    container.classList.add('.main-container');
    const sectionSearch = document.createElement('section');
    sectionSearch.classList.add('search-container');
    const videoContainer = document.createElement('section');
    videoContainer.classList.add('video-container');
    videoContainer.setAttribute('id', 'video_container');
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    const videos = document.createElement('div');
    videos.classList.add('videos');
    gallery.appendChild(videos);
    videoContainer.appendChild(gallery);
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.classList.add('search-box');
    searchBox.setAttribute('placeholder', 'Search...');
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.type = 'button';
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa fa-search';
    submit.appendChild(searchIcon);
    sectionSearch.append(searchBox, submit);
    container.append(sectionSearch, videoContainer);
    document.body.insertBefore(container, document.body.firstChild);
    if (AppView.isTouchDevice()) {
      container.classList.add('touch');
    } else {
      container.classList.add('no-touch');
    }
  }

  drawPagination() {
    // Create navigation bar
    const arrowLeft = document.createElement('i');
    arrowLeft.classList.add('fa', 'fa-chevron-left', 'btn', 'btn--prev');
    const arrowRight = document.createElement('i');
    arrowRight.classList.add('fa', 'fa-chevron-right', 'btn', 'btn--next');

    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('pagination-wrapper');
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination-container');

    const dotLittleF = document.createElement('div');
    dotLittleF.classList.add('little-dot', 'little-dot--first');
    const divLittle = document.createElement('div');
    divLittle.classList.add('little-dot');
    const dotBigContainer = document.createElement('div');
    dotBigContainer.classList.add('big-dot-container');
    const dotBig = document.createElement('div');
    dotBig.classList.add('big-dot');
    const dotLittleL = document.createElement('div');
    dotLittleL.classList.add('little-dot', 'little-dot--last');

    dotBigContainer.appendChild(dotBig);
    divLittle.appendChild(dotBigContainer);
    paginationContainer.append(dotLittleF, divLittle, dotLittleL);
    paginationWrapper.append(arrowLeft, paginationContainer, arrowRight);
    const videoContainer = document.getElementById('video_container');
    videoContainer.appendChild(paginationWrapper);
    // Create a tooltip
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    dotBig.appendChild(tooltip);

    arrowLeft.addEventListener('click', this.onClickGetVideos);
    arrowRight.addEventListener('click', this.onClickGetVideos);
    dotBig.addEventListener('mousedown', this.onDownGetTooltip);
    window.addEventListener('mouseup', this.onUpHideTooltip);
    dotBig.addEventListener('touchstart', this.onDownGetTooltip);
    window.addEventListener('touchend', this.onUpHideTooltip);
  }

  static drawNoResults() {
    const divNoResults = document.createElement('div');
    const searchNoResults = document.createElement('h2');
    searchNoResults.textContent = 'No results found';
    const searchSuggestion = document.createElement('span');
    searchSuggestion.textContent = 'Try different keywords';
    divNoResults.classList.add('text-no-results');
    divNoResults.append(searchNoResults, searchSuggestion);

    const videoContainer = document.getElementById('video_container');
    videoContainer.appendChild(divNoResults);
  }

  static addLoader() {
    const loadingIcon = document.createElement('i');
    loadingIcon.className = 'fa fa-spinner fa-spin';
    document.body.appendChild(loadingIcon);
  }

  static removeLoader() {
    const loadingIcon = document.querySelector('.fa-spinner');
    if (document.body.contains(loadingIcon)) {
      document.body.removeChild(loadingIcon);
    }
  }

  static redrawPagination(leftState, rightState) {
    const arrowLeft = document.querySelector('.btn--prev');
    const arrowRight = document.querySelector('.btn--next');
    const dotLittleF = document.querySelector('.little-dot--first');
    const dotLittleL = document.querySelector('.little-dot--last');
    if (leftState) {
      arrowLeft.classList.add('disabled');
      dotLittleF.classList.add('disabled');
    } else if (arrowLeft.classList.contains('disabled')) {
      arrowLeft.classList.remove('disabled');
      dotLittleF.classList.remove('disabled');
    }
    if (rightState) {
      arrowRight.classList.add('disabled');
      dotLittleL.classList.add('disabled');
    } else if (arrowRight.classList.contains('disabled')) {
      arrowRight.classList.remove('disabled');
      dotLittleL.classList.remove('disabled');
    }
  }

  static resetPagination() {
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    if (paginationWrapper.classList.contains('transition-next')) {
      paginationWrapper.classList.remove('transition-next');
    } else if (paginationWrapper.classList.contains('transition-prev')) {
      paginationWrapper.classList.remove('transition-prev');
    }
  }
}
