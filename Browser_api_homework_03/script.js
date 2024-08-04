 const accessKey = 'm46Q5TQvhQ--CwpGYZMsXanos48gQOrUigoSQqT-zEo';

 const fetchPhotos = async (count) => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${accessKey}&per_page=${count}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Ошибка при получении данных!');
    }
 }

 function renderImage(data) {
    return `
    <div class="pic_block" data-id=${data.id}>
        <img src="${data.urls.full}" alt="pic" class="pic">
        <div class="info">
            <h3 class="name">${data.user.name}</h3>
            <div class="actions">
                <div class="like ${data.liked_by_user ? 'active' : ''}"></div>
                <span class="counter">${data.likes}</span>
            </div>
        </div>
    </div>
    `;
 }

 async function run() {
    const data = await fetchPhotos(1);
    document.querySelector('.picture').insertAdjacentHTML('beforeend', renderImage(data));

    renderHistoryImages();

    saveToHistory(data);

    document.querySelectorAll('.pic_block .actions .like').forEach(button_like => {
        button_like.addEventListener('click', function () {
            const isLiked = button_like.classList.contains('active');
            doLike(button_like.closest('.pic_block').dataset.id, isLiked);
        });
    });
 }

 function saveToHistory(data) {
    let history = localStorage.getItem('history');
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }

    history.push({
        id: data.id,
        liked_by_user: false,
        likes: data.likes,
        user: {
            name: data.user.name
        },
        urls: {
            full: data.urls.full
        },
    });

    localStorage.setItem('history', 
        JSON.stringify(history)
    );
 }

 function renderHistoryImages() {
    let history = JSON.parse(localStorage.getItem('history'));
    if (history) {
        history.forEach(pic => {
            document.querySelector('.history').insertAdjacentHTML('beforeend', renderImage(pic));
        });
    }
 }

 function doLike(id, isLiked) {
    const pic = document.querySelector(`.pic_block[data-id="${id}"]`);
    const img_like = pic.querySelector('.actions .like');
    const counter = pic.querySelector('.counter');
    const newLikesVal = Number(counter.innerText) + (isLiked ? -1 : 1);
    counter.innerText = newLikesVal;
    img_like.classList.toggle('active');

    let history = JSON.parse(localStorage.getItem('history'));
    history.map((obj) => {
        if (obj.id === id) {
            obj.liked_by_user = !isLiked;
            obj.likes = newLikesVal;
        }
    });
    localStorage.setItem('history', 
        JSON.stringify(history)
    );
 }

 run();