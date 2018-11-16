const k = "AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE";

const baseLink = "https://www.googleapis.com/youtube/v3/search?";

const keyPart = "key=" + k;

const filterPart = "&type=video&part=snippet&maxResults=25";

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

var width = 300; // ширина изображения
var count = 3; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('.videos');


var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    var listElems = carousel.querySelectorAll('.item');
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};


submit.addEventListener('click', doSearch);

function doSearch() {
    const inputData = searchBox.value.trim();
    const queryPart = "&q=" + inputData.replace(/\s/g, '+');
    if (inputData) {
        fetch(baseLink + keyPart + filterPart + queryPart)
            .then(res => res.json())
            .then(data => {
                populateList(data);
            })
            .catch(err => console.log(err));
    }
};

const populateList = data => {
    arrayOfData = Array.from(data.items);
    if (arrayOfData && arrayOfData.length) {
        for (let i = 0; i < arrayOfData.length; i++) {
            list.appendChild(createClip(arrayOfData[i]));

        }
        // for (let i = 0; i < pageCount; i += 1) { TODO
        //   const newButton = buttonToSwitch.cloneNode(true);
        //   newButton.setAttribute('data-index', i);
        //   divControlsForPagination.appendChild(newButton);
        // }
        //allPaginationItems = divControlsForPagination.querySelectorAll('.fa-circle-o');
        //video_container.append(divVideoResults);
        //video_container.append(divVideoResults, divControlsForPagination);
        //allPaginationItems[currentSelectedIdx].classList.add('fa-circle');
    } //else video_container.appendChild(divNoResults);
};

const createClip = (idx) => {
    if (idx) {
        let divFlex = document.createElement('div');
        divFlex.classList.add('item');
        let linkToClip = document.createElement('a');
        linkToClip.setAttribute('href', 'https://www.youtube.com/watch?v=' + idx.id.videoId);
        linkToClip.setAttribute('alt', 'clip');
        linkToClip.textContent = idx.snippet.title;
        divFlex.append(linkToClip);
        return divFlex;
    }
}