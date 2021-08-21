var likeCount = 0
function addLike(document) {
    likeCount++;
    var currentCount = parseInt(document.innerText)
    document.innerText = 1 + currentCount;
}