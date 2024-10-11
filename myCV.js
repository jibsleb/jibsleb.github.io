const menuItems = document.querySelectorAll('.pageHeaderMenu .menuItem a');
const menuCentralPicture = document.querySelector('.pictureContainer .aboutMe img');
const sectionItems = document.querySelectorAll('section');

menuItems.forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const menuItemName = event.target.className;
        const bodyClassName = document.body.className;

        if (menuItemName === "myCV" && bodyClassName !== menuItemName + "SectionTheme") {
            document.body.className = menuItemName + "SectionTheme";

            sectionItems.forEach((section) => {
                section.classList.remove('active');
                if (section.classList.contains(menuItemName + 'Section')){
                    section.classList.add('active');
                } 
            });

        }

        else if (menuItemName === "myTrainings" && bodyClassName !== menuItemName + "SectionTheme") {
            document.body.className = menuItemName + "SectionTheme";

            sectionItems.forEach((section) => {
                section.classList.remove('active');
                if (section.classList.contains(menuItemName + 'Section')){
                    section.classList.add('active');
                } 
            });

        }

        else if (menuItemName === "aboutMe" && bodyClassName !== menuItemName + "SectionTheme") {
            document.body.className = menuItemName + "SectionTheme";

            sectionItems.forEach((section) => {
                section.classList.remove('active');
                if (section.classList.contains(menuItemName + 'Section')){
                    section.classList.add('active');
                } 
            });

        }

        else if (menuItemName === "myExperience" && bodyClassName !== menuItemName + "SectionTheme") {
            document.body.className = menuItemName + "SectionTheme";

            sectionItems.forEach((section) => {
                section.classList.remove('active');
                if (section.classList.contains(menuItemName + 'Section')){
                    section.classList.add('active');
                } 
            });

        }

        else if (menuItemName === "mySkills" && bodyClassName !== menuItemName + "SectionTheme") {
            document.body.className = menuItemName + "SectionTheme";

            sectionItems.forEach((section) => {
                section.classList.remove('active');
                if (section.classList.contains(menuItemName + 'Section')){
                    section.classList.add('active');
                } 
            });

        }
    });
});

menuCentralPicture.addEventListener('click', function (event) {
    event.preventDefault();
    handleMenuClick('aboutMe');
});

function handleMenuClick(menuItemName) {
    const bodyClassName = document.body.className;

    if (bodyClassName !== menuItemName + "SectionTheme") {
        document.body.className = menuItemName + "SectionTheme";

        sectionItems.forEach((section) => {
            section.classList.remove('active');
            if (section.classList.contains(menuItemName + 'Section')) {
                section.classList.add('active');
            }
        });
    }
}