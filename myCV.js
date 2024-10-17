const menuNav = document.querySelector('.pageHeaderNav');
const menuHeader = document.querySelector('.pageHeaderMenu');
const menuItems = document.querySelectorAll('.pageHeaderMenu .menuItem a');
const menuCentralPicture = document.querySelector('.pageHeaderMenu .pictureContainer .aboutMe img');


/* Détection survol du menu */
menuNav.addEventListener(
    'mouseover', function(){
        /* rotation des flèches du menu */
        const rotateItems = document.querySelectorAll('.rotationOff')
        rotateItems.forEach(
            (item) => {
                item.classList.remove('rotationOff');
                item.classList.add('rotationOn');
            }   
        )
        const lightedItems = document.querySelectorAll('.lightedOn')
        lightedItems.forEach(
            (item) => {
                item.classList.remove('lightedOn');
                item.classList.add('lightedOff');
            }   
        )
    }
)

/* Détection du non survol du menu */
menuNav.addEventListener(
    'mouseout', function(){
        const rotateItems = document.querySelectorAll('.rotationOn')
        rotateItems.forEach(
            (item) => {
                item.classList.remove('rotationOn');
                item.classList.add('rotationOff');
            }   
        )
        const lightedItems = document.querySelectorAll('.lightedOn')
        lightedItems.forEach(
            (item) => {
                item.classList.remove('lightedOn');
                item.classList.add('lightedOff');
            }   
        )
    }
)

/* Détection des clics sur les boutons du menu */
menuItems.forEach((item) => {
    item.addEventListener(
        'click', function (event) {
            event.preventDefault();
            const menuItemName = event.target.className;
            const bodyClassName = document.body.className;
            if (bodyClassName != menuItemName + 'Theme') {
                changeTheme(menuItemName);
            };
        }
    );
});

/* Détection clic sur l'image centrale du menu */
menuCentralPicture.addEventListener(
    'click', function (event) {
        const bodyClassName = document.body.className;
        event.preventDefault();
        if (bodyClassName != 'aboutMeTheme') {
            changeTheme('aboutMe');
        } else {
            const lightedItems = document.querySelectorAll('.lightedOff')
            lightedItems.forEach(
                (item) => {
                    item.classList.remove('lightedOff');
                    item.classList.add('lightedOn');
                }   
            )
        }
    }
);
/* end détection clic sur l'image centrale du menu */

/* Changement de thème et de contenu selon l'élément du menu cliqué */
function changeTheme(menuItemName) {
    const toggleItems = document.querySelectorAll('.active, .inactive')
    document.body.className = menuItemName + 'Theme';
    toggleItems.forEach(
        (item) => {
            if (!item.classList.contains(menuItemName + 'Section') && item.classList.contains('active')) {
                item.classList.remove('active');
                item.classList.add('inactive');
            } else if (item.classList.contains(menuItemName + 'Section') && item.classList.contains('inactive')) {
                item.classList.remove('inactive');
                item.classList.add('active');
            }
        }
    );
}