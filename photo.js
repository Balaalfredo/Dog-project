const photos = document.querySelectorAll('.photos');
const bigBox = document.querySelector('.big-box');
const closeee = document.querySelector('.closeee');




photos.forEach((a, index) => {
    a.addEventListener('click', () => {
        bigBox.style.visibility = 'visible';
        const copy = a.cloneNode(true);
        copy.style.width = '850px';
        bigBox.style.width = '90%';

        copy.style.height = '650px'; bigBox.style.transition = '1.2s';
        copy.style.boxShadow = '3px 3px 3px 3px black';
        bigBox.appendChild(copy);

        closeee.addEventListener('click', () => {
            bigBox.removeChild(copy); bigBox.style.visibility = 'hidden';
            bigBox.style.width = '0';
        })


        copy.addEventListener('click', () => {
            copy.style.transition = '1.2s';
            copy.style.transform = 'scale(1.3)';

        })

        copy.addEventListener('dblclick', () => {
            copy.style.transition = '1.2s';
            copy.style.transform = 'scale(1)';

        })

    })



})