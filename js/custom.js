//TODO Re-size
//TODO lazy loading
//TODO Number of page
//TODO loading icon
//TODO how left and right work, sensetive area
//MORE info in populate data
//Width and number of results

const k = "AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE";

const baseLink = "https://www.googleapis.com/youtube/v3/search?";

const keyPart = "key=" + k;

const filterPart = "&type=video&part=snippet&maxResults=25";

const search_container = document.querySelector('.search-container');

let arrayOfData = [];

let video_container = document.getElementById('video_container');
let list = video_container.querySelector('.videos');

let loadingIcon = document.createElement('i');
loadingIcon.className = 'fa fa-spinner fa-spin';

// Create a search box
let searchBox = document.createElement('input');
searchBox.type = 'text';
searchBox.classList.add('search-box');
searchBox.setAttribute('placeholder', 'Search...');

let submit = document.createElement('button');
submit.type = 'button';
let searchIcon = document.createElement('i');
searchIcon.className = 'fa fa-search';
submit.appendChild(searchIcon);
search_container.append(searchBox, submit);

// Create navigation bar


let arrowLeft = document.createElement('i');
arrowLeft.classList.add('fa', 'fa-chevron-left', 'btn', 'btn--prev');
let arrowRight = document.createElement('i');
arrowRight.classList.add('fa', 'fa-chevron-right', 'btn', 'btn--next');

let paginationWrapper = document.createElement('div');
paginationWrapper.classList.add('pagination-wrapper');
let paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination-container');

let dotLittleF = document.createElement('div');
dotLittleF.classList.add('little-dot',  'little-dot--first');
let divLittle = document.createElement('div');
divLittle.classList.add('little-dot');
let dotBigContainer = document.createElement('div');
dotBigContainer.classList.add('big-dot-container');
let dotBig = document.createElement('div');
dotBig.classList.add('big-dot');
let dotLittleL = document.createElement('div');
dotLittleL.classList.add('little-dot',  'little-dot--last');

dotBigContainer.appendChild(dotBig);
divLittle.appendChild(dotBigContainer);
paginationContainer.append(dotLittleF, divLittle, dotLittleL);
paginationWrapper.append(arrowLeft, paginationContainer, arrowRight);


// no results found
let divNoResults = document.createElement('div');
let searchNoResults = document.createElement('h2');
searchNoResults.textContent = 'No results found';
let searchSuggestion = document.createElement('span');
searchSuggestion.textContent = 'Try different keywords';
divNoResults.append(searchNoResults, searchSuggestion);


// Perform Search
submit.addEventListener('click', doSearch);

function doSearch() {
  const inputData = searchBox.value.trim();
  const queryPart = "&q=" + inputData.replace(/\s/g, '+');
  if (inputData) {
    video_container.appendChild(loadingIcon);
    fetch(baseLink + keyPart + filterPart + queryPart)
      .then(res => res.json())
      .then(data => {
        populateList(data);
      })
      .catch(err => console.log(err));
  }
}

const populateList = data => {
   video_container.removeChild(loadingIcon);
   list.innerHTML = '';
  arrayOfData = Array.from(data.items);
  if (arrayOfData && arrayOfData.length) {
    for (let i = 0; i < arrayOfData.length; i++) {
      list.appendChild(createClip(arrayOfData[i]));

    }
    video_container.appendChild(paginationWrapper);

  } else video_container.appendChild(divNoResults);
};

const createClip = (idx) => {
  if (idx) {
    let divFlex = document.createElement('div');
    divFlex.classList.add('video_item');
    let linkToClip = document.createElement('a');
    linkToClip.setAttribute('href', 'https://www.youtube.com/watch?v=' + idx.id.videoId);
    linkToClip.setAttribute('alt', 'clip');
    linkToClip.textContent = idx.snippet.title;

    let cloneOfLink = linkToClip.cloneNode(true);
    let previewImage = document.createElement('img');
    previewImage.classList.add('clip-preview');
    previewImage.src = idx.snippet.thumbnails.high.url;
    cloneOfLink.appendChild(previewImage);
    let description = document.createElement('span');
    description.classList.add('description');
    description.innerHTML = `<b>Description:</b> ${idx.snippet.description}`;
    let author = document.createElement('span');
    author.classList.add('author');
    author.innerHTML = `<b>Author:</b> ${idx.snippet.channelTitle}`;
    let date = document.createElement('span');
    date.classList.add('date');
    date.innerHTML = `<b>Date:</b ${idx.snippet.publishedAt}`;
    let rate = document.createElement('span');
    rate.classList.add('rate');

    const query = 'https://www.googleapis.com/youtube/v3/videos?' + keyPart + '&id=' + idx.id.videoId + '&part=statistics';
    fetch(query)
      .then(res => res.json())
      .then(videoStat => {
        let arr = Array.from(videoStat.items);
        rate.innerHTML = `<b>Rate:</b> ${arr[0].statistics.viewCount}`;
      })
      .catch(err => console.log(err));


    divFlex.append(linkToClip, cloneOfLink, description, author, date, rate);
    return divFlex;
  }
};


let width = 300; //width of block, check width of image and calculate blocks per page
let count = 4; // number of blocks
let position = 0; // current shift position


// SWIPE
let startX;
let endX;
let treshold = 100; //this sets the minimum swipe distance

//Function to handle swipes
function handleTouch(start, end, cbL, cbR) {
  if (Math.abs(endX - startX) > treshold) {
    if (endX - startX < 0) {
      cbL();

    } else {
      cbR();
    }
  }
}

let right = () => {
  paginationWrapper.classList.add('transition-next');
  // currentSelectedIdx += 1;
  let listElems = video_container.querySelectorAll('.video_item');
  console.log(position);
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
let left = () => {
   paginationWrapper.classList.add('transition-prev');
  // currentSelectedIdx -= 1;
  // if (currentSelectedIdx === 0) {
  //   this.classList.add('disabled');
  // }
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = position + 'px';
  console.log(position);
};


video_container.addEventListener('touchstart', function (event) {
  startX = event.touches[0].clientX;
});

video_container.addEventListener('touchend', function (event) {
  endX = event.changedTouches[0].clientX;
  handleTouch(startX, endX, right, left)
});

searchBox.onkeydown = (evt) => {
  const e = evt || window.event;
  const {key} = e;
  if (key === 'Enter') {
    doSearch();
  }
};


let btns = paginationWrapper.querySelectorAll('.btn');
console.log(btns.length);
for (let i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener('click', btnClick);
}

function btnClick() {
  if (this.classList.contains('btn--prev')) {
     paginationWrapper.classList.add('transition-prev');
     left();
    // currentSelectedIdx -= 1;
    // if (currentSelectedIdx === 0) {
    //   this.classList.add('disabled');
    // }
  } else {
    paginationWrapper.classList.add('transition-next');
    right();
    // currentSelectedIdx += 1;
  }
  setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if (paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if (paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}