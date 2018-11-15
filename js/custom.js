
let currentSelectedIdx = 0;
var btns = document.querySelectorAll('.btn');
var paginationWrapper = document.querySelector('.pagination-wrapper');
var bigDotContainer = document.querySelector('.big-dot-container');
var littleDot = document.querySelector('.little-dot');


for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', btnClick);
}

function btnClick() {
  if(this.classList.contains('btn--prev')) {
    paginationWrapper.classList.add('transition-prev');
    currentSelectedIdx-= 1;
    debugger
    if (currentSelectedIdx === 0) {
      this.classList.add('disabled');
    }
    console.log(this);
    showClips();
  } else {
    paginationWrapper.classList.add('transition-next');
    currentSelectedIdx += 1;
    showClips();
  }

  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if(paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if(paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}

const k = "AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE";

const baseLink = "https://www.googleapis.com/youtube/v3/search?";

const keyPart = "key=" + k;

const filterPart = "&type=video&part=snippet&maxResults=25";

const video_container = document.getElementById('videos');

const search_container = document.querySelector('.search-container');

let arrayOfData = [];


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

let loadingIcon = document.createElement('i');
loadingIcon.className = 'fa fa-spinner fa-spin';

console.log('w' + document.documentElement.clientWidth);

// no results found
let divNoResults = document.createElement('div');
let searchNoResults = document.createElement('h2');
searchNoResults.textContent = 'No results found';
let searchSuggestion = document.createElement('span');
searchSuggestion.textContent = 'Try different keywords';
divNoResults.append(searchNoResults, searchSuggestion);



let divVideoResults = document.createElement('div');
divVideoResults.classList.add('video-results');


// do search
function doSearch() {
  currentSelectedIdx = 0;
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


// add listener for search button
submit.addEventListener('click', doSearch);


searchBox.onkeydown = (evt) => {
  const e = evt || window.event;
  const {key} = e;
  if (key === 'Enter') {
    doSearch();
  }
};

const populateList = data => {
  // clear previous result
  video_container.innerHTML = '';
  divVideoResults.innerHTML = '';
  arrayOfData = Array.from(data.items);
  if (arrayOfData && arrayOfData.length) {
    //create 1-4 clips per page
    let numberOfPages = Math.ceil(arrayOfData.length / 4);
    //let pageCount = numberOfPages > 4 ? 4 : numberOfPages;
    let videoCount = arrayOfData.length < 4 ? arrayOfData.length : 4;
    let width =  document.documentElement.clientWidth;
    if (width < 1000) {
        videoCount = 1;
    }
    for (let i = 0; i < videoCount; i++) {
      divVideoResults.appendChild(createClip(arrayOfData[i]));

    }
    // for (let i = 0; i < pageCount; i += 1) { TODO
    //   const newButton = buttonToSwitch.cloneNode(true);
    //   newButton.setAttribute('data-index', i);
    //   divControlsForPagination.appendChild(newButton);
    // }
    //allPaginationItems = divControlsForPagination.querySelectorAll('.fa-circle-o');
    video_container.append(divVideoResults);
    //video_container.append(divVideoResults, divControlsForPagination);
    //allPaginationItems[currentSelectedIdx].classList.add('fa-circle');
  } else video_container.appendChild(divNoResults);
};

const createClip = (idx) => {
  if (idx) {
    let divFlex = document.createElement('div');
    divFlex.classList.add('clip-container');
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

function showClips() {
  console.log("CI" + currentSelectedIdx, "AL" + arrayOfData.length);

  let startIndex = 4 * currentSelectedIdx;
  divVideoResults.innerHTML = '';

  let endIndex = (arrayOfData.length - startIndex) < 4 ? arrayOfData.length : startIndex + 4;
    let width =  document.documentElement.clientWidth;
    if (width < 1000) {
        endIndex = startIndex + 1;
    }
  console.log(startIndex, endIndex);
  for (let i = startIndex; i < endIndex; i += 1) {
    divVideoResults.appendChild(createClip(arrayOfData[i]));
  }
}


//SWIPE
var startX;
var startY;
var endX;
var endY;
var treshold = 100; //this sets the minimum swipe distance, to avoid noise and to filter actual swipes from just moving fingers

//Function to handle swipes
function handleTouch(start,end, cbL, cbR){
    //calculate the distance on x-axis and o y-axis. Check wheter had the great moving ratio.
    var xDist = endX - startX;
    var yDist = endY - startY;
    console.log(xDist);
    console.log(yDist);
    if(endX - startX < 0){
        cbL();
    }else{
        cbR();
    }
}

//writing the callback fn()
var left = () =>{
    document.querySelector('.main-container').style.background = '#D8335B'
};
var right = () =>{
    document.querySelector('.main-container').style.background = '#2C82C9'
};

//configs the elements on load
window.onload = function(){
    window.addEventListener('touchstart', function(event){
        //console.log(event);
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        //console.log(`the start is at X: ${startX}px and the Y is at ${startY}px`)

    })

    window.addEventListener('touchend', function(event){
        //console.log(event);
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        //console.log(`the start is at X: ${endX}px and the Y is at ${endY}px`)

        handleTouch(startX, endX, left, right)

    })
}
