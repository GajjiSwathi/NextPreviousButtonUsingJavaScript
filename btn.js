var blogs = {
    "blogItem": [{
        "id": 1,
        "title": "animals blog 1",
        "category": "animals",
        "text": "text",
        "articleid": 1
    }, {
        "id": 2,
        "title": "lifestyle blog 1",
        "category": "lifestyle",
        "text": "text",
        "articleid": 1
    }, {
        "id": 3,
        "title": "animals blog 2",
        "category": "animals",
        "text": "text",
        "articleid": 2
    }, {
        "id": 5,
        "title": "animals blog 4",
        "category": "dieren",
        "text": "text",
        "articleid": 4
    }, {
        "id": 4,
        "title": "animals blog 5",
        "category": "animals",
        "text": "text",
        "articleid": 3
    }]
};
var index = 0;
var item = blogs.blogItem[index];

var title = document.getElementById('title');
var category = document.getElementById('category');
var previous = document.getElementById('previous');
var next = document.getElementById('next');

displayItem(item);

previous.addEventListener('click', function() {
    displayItem(blogs.blogItem[--index]);
});

next.addEventListener('click', function() {
    displayItem(blogs.blogItem[++index]);
});

function displayItem(item) {
    title.innerText = item.title;
    category.innerText = item.category;
    previous.disabled = index <= 0;
    next.disabled = index >= blogs.blogItem.length -1;
}