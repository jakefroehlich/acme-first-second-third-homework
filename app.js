const app = document.querySelector('#app')

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'lucy', slot: 'second'},
    {id: 3, name: 'pablo', slot: 'third'},
    {id: 4, name: 'Scary Terry', slot: 'third', selected: 'true'}
]

const headerCreator = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('hContainer');

    const header = document.createElement('h1');
    header.innerText = 'Jake\'s Acme First, Second, Third';

    headerContainer.append(header);

    return headerContainer;
}

const boxContainerCreator = () => {
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('bContainer');

    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            const boxOne = boxCreator('First', 'rbutton');
            boxContainer.append(boxOne);
        }
        else if (i == 1) {
            const boxTwo = boxCreator('Second', 'both');
            boxContainer.append(boxTwo);
        }
        else {
            const boxThree = boxCreator('Third', 'lbutton');
            boxContainer.append(boxThree);
        }
    }
    
    return boxContainer;
}


const boxCreator = (title, activeButtons) => {
    const box = document.createElement('div');
    box.classList.add('box');

    const h2title = document.createElement('h2');
    h2title.innerText = title;

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('nContainer');

    const rButton = document.createElement('button');
    rButton.classList.add('directionbutton');
    rButton.innerText = '>';
    rButton.dataset[0] = title;

    const lButton = document.createElement('button');
    lButton.classList.add('directionbutton');
    lButton.innerText = '<';
    lButton.dataset[0] = title;

    if (activeButtons === 'rbutton') {
        rButton.classList.add('active');
    }
    else if (activeButtons === 'both') {
        rButton.classList.add('active');
        lButton.classList.add('active');
    }
    else {
        lButton.classList.add('active');
    }

    rButton.addEventListener('click', event => {
        users.map(user => {
            if (user.selected && user.slot == 'first' && rButton.dataset[0] == 'First') {
                user.slot = 'second';
                render();
            }
            else if (user.selected && user.slot == 'second' && rButton.dataset[0] == 'Second') {
                user.slot = 'third';
                render();
            }
        })
    })

    lButton.addEventListener('click', event => {
        users.map(user => {
            if (user.selected && user.slot == 'third' && lButton.dataset[0] == 'Third') {
                user.slot = 'second';
                render();
            }
            else if (user.selected && user.slot == 'second' && lButton.dataset[0] == 'Second') {
                user.slot = 'first';
                render();
            }
        })
    })

    if (title == 'First') {
        users.map(user => {
            if (user.slot == 'first') {
                let userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');

                if (user.selected) {
                    userDiv.setAttribute('class', 'active');
                } else {
                    userDiv.setAttribute('class', 'userDiv');
                };

                let userText = document.createElement('span');
                userText.innerText = user.name;

                userDiv.append(userText);
                nameContainer.append(userDiv);

                userDiv.addEventListener('click', event => {
                    users.forEach(user => {
                        user.selected = false;
                    });

                    user.selected = true;

                    render();
                })
            }
        })
    }
    else if (title == 'Second') {
        users.map(user => {
            if (user.slot == 'second') {
                let userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');

                if (user.selected) {
                    userDiv.setAttribute('class', 'active');
                } else {
                    userDiv.setAttribute('class', 'userDiv');
                };

                let userText = document.createElement('span');
                userText.innerText = user.name;

                userDiv.append(userText);
                nameContainer.append(userDiv);

                userDiv.addEventListener('click', event => {
                    users.forEach(user => {
                        user.selected = false;
                    });

                    user.selected = true;

                    render();
                })
            }
        })
    }
    else {
        users.map(user => {
            if (user.slot == 'third') {
                let userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');

                if (user.selected) {
                    userDiv.setAttribute('class', 'active');
                } else {
                    userDiv.setAttribute('class', 'userDiv');
                };

                let userText = document.createElement('span');
                userText.innerText = user.name;

                userDiv.append(userText);
                nameContainer.append(userDiv);

                userDiv.addEventListener('click', event => {
                    users.forEach(user => {
                        user.selected = false;
                    })

                    user.selected = true;

                    render();
                })
            }
        })
    }

    box.append(rButton);
    box.append(lButton);
    box.append(h2title);
    box.append(nameContainer);

    return box;
}


const render = () => {
    app.innerHTML = '';
    app.append(headerCreator());

    app.append(boxContainerCreator());
}

render();

