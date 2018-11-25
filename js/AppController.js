import AppView from './AppView';

export default class AppController {
  constructor(view, model) {
    this.model = model;
    this.view = view;
  }

  init() {
    AppView.drawContainer();
    this.view.onClickGetVideos = this.onClickGetVideos.bind(this);
    this.view.onDownGetTooltip = this.onDownGetTooltip.bind(this);
    this.view.onUpHideTooltip = AppController.onUpHideTooltip.bind(this);
    this.input = document.querySelector('.search-box');
    const videoContainer = document.getElementById('video_container');
    videoContainer.addEventListener('touchstart', this.onTouchStartGetStartX.bind(this));
    videoContainer.addEventListener('touchend', this.onTouchEndGetVideos.bind(this));
    videoContainer.addEventListener('mousedown', this.onMouseStartGetStartX.bind(this));
    videoContainer.addEventListener('mouseup', this.onMouseEndGetVideos.bind(this));
    document.querySelector('.submit').addEventListener('click', this.getResults.bind(this));
    document.querySelector('.search-box').addEventListener('keydown', this.onKeyDownShowResults.bind(this));
    window.addEventListener('resize', this.resizeThrottler.bind(this), false);
  }

  static onUpHideTooltip() {
    const tooltip = document.querySelector('.tooltiptext');
    if (document.body.contains(tooltip)) {
      tooltip.classList.remove('visible');
    }
  }

  onDownGetTooltip(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
    const tooltip = document.querySelector('.tooltiptext');
    tooltip.innerText = `Current page is ${(this.currentPage + 1)}`;
    tooltip.classList.add('visible');
  }

  getResults() {
    const inputData = this.input.value.trim().replace(/\s/g, '+');
    if (inputData.length !== 0) {
      AppView.addLoader();
      const queryPart = `&q=${inputData}`;
      this.calculateSize();
      this.clear();
      this.model.search(queryPart, (data, arrayStat) => {
        this.view.drawVideos(data, arrayStat);
        const videoContainer = document.getElementById('video_container');
        const paginationWrapper = document.querySelector('.pagination-wrapper');
        if (videoContainer.contains(paginationWrapper)) {
          this.checkButtons();
        }
      });
    }
  }

  onKeyDownShowResults(evt) {
    const e = evt || window.event;
    const { key } = e;
    if (key === 'Enter') {
      this.getResults();
    }
    evt.stopPropagation();
  }

  calculateSize() {
    const windowWidth = window.innerWidth
      || document.body.offsetWidth
      || document.body.clientWidth;
    if (windowWidth >= 1600) {
      this.numOfBlocks = 4;
    } else if (windowWidth < 1600 && windowWidth >= 1200) {
      this.numOfBlocks = 3;
    } else if (windowWidth < 1200 && windowWidth >= 800) {
      this.numOfBlocks = 2;
    } else {
      this.numOfBlocks = 1;
    }
    document.querySelector('.gallery').style.width = `${this.numOfBlocks * 400}px`;
  }

  clear() {
    const videoContainer = document.getElementById('video_container');
    const divNoResults = document.querySelector('.text-no-results');
    const list = videoContainer.querySelector('.videos');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    if (videoContainer.contains(divNoResults)) {
      divNoResults.remove();
    }
    list.innerHTML = '';
    list.style.marginLeft = '0px';
    this.currentPage = 0;
    this.allPages = 0;
    this.position = 0;
    this.model.lengthOfItems = 0;
    if (videoContainer.contains(paginationWrapper)) {
      paginationWrapper.remove();
    }
  }

  static cleanClasses() {
    AppView.resetPagination();
  }

  right() {
    const videoContainer = document.getElementById('video_container');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    const list = videoContainer.querySelector('.videos');
    paginationWrapper.classList.add('transition-next');
    this.currentPage += 1;
    const listElems = videoContainer.querySelectorAll('.video-item');
    const positionArgFirst = this.position - AppController.blockWidth * this.numOfBlocks;
    const positionArgSectond = -AppController.blockWidth * (listElems.length - this.numOfBlocks);
    this.position = Math.max(positionArgFirst, positionArgSectond);
    list.style.marginLeft = `${this.position}px`;
    setTimeout(AppController.cleanClasses.bind(this), 500);
    this.checkButtons();
    this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);
    const inputData = this.input.value.trim().replace(/\s/g, '+');
    if (inputData) {
      const queryPart = `&q=${inputData}`;
      if (this.model.lengthOfItems < this.model.totalResults
        && ((this.allPages - this.currentPage) <= 2)) {
        this.model.loadNextPage(queryPart, (data, arrayStat) => {
          this.view.drawVideos(data, arrayStat);
        });
      }
    }
  }

  left() {
    const videoContainer = document.getElementById('video_container');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    const list = videoContainer.querySelector('.videos');
    paginationWrapper.classList.add('transition-prev');
    this.currentPage -= 1;
    this.position = Math.min(this.position + AppController.blockWidth * this.numOfBlocks, 0);
    list.style.marginLeft = `${this.position}px`;
    setTimeout(AppController.cleanClasses.bind(this), 500);
    if (this.currentPage === 0) {
      this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);
    }
    this.checkButtons();
  }

  onClickGetVideos(e) {
    if (e.currentTarget.classList.contains('btn--prev')) {
      this.left();
    } else if (e.currentTarget.classList.contains('btn--next')) {
      this.right();
    }
  }

  isNextDisabled() {
    this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);
    return (this.currentPage + 1) === this.allPages;
  }

  isPrevDisabled() {
    return this.currentPage === 0;
  }

  checkButtons() {
    AppView.redrawPagination(this.isPrevDisabled(), this.isNextDisabled());
  }

  // Handle swipe
  onTouchStartGetStartX(e) {
    this.startX = e.touches[0].clientX;
  }

  onTouchEndGetVideos(e) {
    this.endX = e.changedTouches[0].clientX;
    if (Math.abs(this.endX - this.startX) > AppController.treshold) {
      if (this.endX - this.startX < 0) {
        if (!this.isNextDisabled()) {
          this.right();
        }
      } else if (!this.isPrevDisabled()) {
        this.left();
      }
    }
  }

  onMouseStartGetStartX(e) {
    e.preventDefault(); // prevent user select
    this.startX = e.clientX;
  }

  onMouseEndGetVideos(e) {
    e.preventDefault();
    this.endX = e.clientX;
    if (Math.abs(this.endX - this.startX) > AppController.treshold) {
      if (this.endX - this.startX < 0) {
        if (!this.isNextDisabled()) {
          this.right();
        }
      } else if (!this.isPrevDisabled()) {
        this.left();
      }
    }
  }

  // Handle re-size
  actualResizeHandler() {
    const previousSize = this.numOfBlocks;
    const previousNumberOfResults = this.currentPage * previousSize;
    this.calculateSize();
    const newSizeOfBlocks = this.numOfBlocks;
    this.currentPage = Math.ceil(previousNumberOfResults / newSizeOfBlocks);
    if (previousNumberOfResults % newSizeOfBlocks === 0) {
      this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);
    } else this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks) + 1;
    const videoContainer = document.getElementById('video_container');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    if (videoContainer.contains(paginationWrapper)) {
      this.checkButtons();
    }
  }

  resizeThrottler() {
    let resizeTimeout;
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        this.actualResizeHandler();
        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }
}
AppController.blockWidth = 400;
AppController.treshold = 100;
