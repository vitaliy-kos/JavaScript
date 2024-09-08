// Задание
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productInput = document.querySelector('.product_input');
const reviewInput = document.querySelector('.review_input');
const sendBtn = document.querySelector('.send_btn');
const divError = document.querySelector('.error_msg');

if (sendBtn) { 
    sendBtn.addEventListener('click', function () {
        try {
            if (productInput.value.trim().length == 0) throw new Error ('Не указано название товара!');
            if (reviewInput.value.trim().length < 2) throw new Error ('Слишком короткий отзыв!');

            divError.textContent = '';

            const reviews = getAllReviews();
            reviews.push({
                id: getLastId() + 1,
                name: productInput.value.trim(),
                review: reviewInput.value.trim()
            });
            setReviews(reviews);
            
            productInput.value = '';
            reviewInput.value = '';

        } catch (error) {
            divError.textContent = error.message;
        }
    });
}

const reviews = document.querySelector('.reviews');
if (reviews) {
    const reviewsByProduct = getReviewsByPrducts();
    reviewsByProduct.forEach((productReviews, name) => {

        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h3');
        productName.textContent = name;

        productDiv.appendChild(productName);
        
        productReviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');

            const reviewText = document.createElement('p');
            reviewText.textContent = review.review;
            reviewDiv.appendChild(reviewText);

            const removeBtn = document.createElement('button');
            removeBtn.dataset.id = review.id;
            removeBtn.textContent = 'Удалить';
            reviewDiv.appendChild(removeBtn);

            productDiv.appendChild(reviewDiv);
        });
        reviews.appendChild(productDiv)
    });

    const removeBtns = reviews.querySelectorAll('button');
    if (removeBtns.length) {
        removeBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                removeReview(this.dataset.id);
                const review = btn.parentElement;
                const product = review.parentElement
                review.remove();

                if (product.querySelectorAll('.review').length == 0) {
                    product.remove();
                }
            });
        });
    }
}

function getAllReviews() {
    return JSON.parse(localStorage.getItem('reviews')) ?? [];
}

function setReviews(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function getLastId() {
    const reviews = getAllReviews();
    let lastId = 0;
    reviews.forEach(review => {
        if (review.id > lastId) lastId = review.id;
    });
    return lastId;
}

function getReviewsByPrducts() {
    const reviews = getAllReviews();
    const reviews_by_products = new Map;
    reviews.forEach(review => {
        if (!reviews_by_products.get(review.name)) {
            reviews_by_products.set(review.name, []);
        }
        reviews_by_products.get(review.name).push(review);
    });
    
    return new Map([...reviews_by_products.entries()].sort());
}

function removeReview(id) {
    const reviews = getAllReviews();
    setReviews(reviews.filter(review => review.id != id));
}