const menuItems = document.querySelectorAll('.pageHeaderMenu .menuItem a');
const menuCentralPicture = document.querySelector('.pageHeaderMenu .pictureContainer .aboutMe img');

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

menuCentralPicture.addEventListener(
    'click', function (event) {
        const bodyClassName = document.body.className;
        event.preventDefault();
        if (bodyClassName != 'aboutMeTheme') {
            changeTheme('aboutMe');
        };
    }
);

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