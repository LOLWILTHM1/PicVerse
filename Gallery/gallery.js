document.addEventListener('DOMContentLoaded', () =>{
    const image = document.querySelectorAll('.image-item',);

    image.forEach(image =>{
        image.addEventListener('click', () =>{
            createPopup({
                image: '../Assets/pbaic624o2121.png',
                title: 'Eugene Bright - “ramen shop”',
                likes: 109,
                comments: [
                    { user: 'Shaoof', text: 'Crazy art work!!' }
                ]
            })
        })
    })
})

document.addEventListener('DOMContentLoaded', () =>{
    const image = document.querySelectorAll('.image-item2',);

    image.forEach(image =>{
        image.addEventListener('click', () =>{
            createPopup({
                image: '../Assets/pbaic624o2121.png',
                title: 'Eugene Bright - “ramen shop”',
                likes: 109,
                comments: [
                    { user: 'Shaoof', text: 'Crazy art work!!' }
                ]
            })
        })
    })
})

function createPopup({image, title, likes, comments}){
    const over = document.createElement('div')
    over.className = 'popup-overlay'

    over.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-icon">
                    <img class="like-img" src="../Assets/like.png" alt="like"/>
                    <span class="like-count">${likes}</span>
                </div>
                <div class="popup-icon">
                    <img src="../Assets/comment.png" alt="comment"/>
                </div>
                <div class="popup-icon">
                    <img src="../Assets/download.png" alt="download"/>
                </div>
            </div>
            <img src="${image}" alt="popup-image">
            <p class="popup-title">${title}</p>
            <div class="popup-comments">
                <h4>${comments.length} Comment${comments.length !== 1 ? 's' : ''}</h4>
                ${comments.map(c => `
                    <div class="comment">
                        <strong style="color:var(--username-color)">${c.user}</strong>
                        <p>${c.text}</p>
                    </div>
                `).join('')}
                <input type="text" placeholder="Add a comment" id="com">
            </div>
        </div>
    `;

    document.body.appendChild(over)

    const likeImg = over.querySelector('.like-img');
    const likeCount = over.querySelector('.like-count');
    let liked = false;

    likeImg.addEventListener('click', () => {
        if (!liked) {
            likeImage(likeImg, likeCount);
            return liked = true;
        } else {
            unlikeImage(likeImg, likeCount);
            return liked = false
        }
    });

    over.addEventListener('click', e =>{
        if(e.target === over){
            over.remove()
        }
    })

    function likeImage(img, countSpan) {
        img.style.transition = 'transform 0.4s';
        img.style.transform = 'rotate(360deg)';
        img.src = '../Assets/like(1).png';


        countSpan.textContent = parseInt(countSpan.textContent) + 1;
    }

    function unlikeImage(img, countSpan) {
        img.style.transition = 'transform 0.4s';
        img.style.transform = 'rotate(-360deg)';
        img.src = '../Assets/like.png';

        countSpan.textContent = parseInt(countSpan.textContent) - 1;
    }
}