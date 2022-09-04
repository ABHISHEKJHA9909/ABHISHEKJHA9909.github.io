const body = document.getElementById("body");

const CreateChild = (ChildType, ChildAttribute, InnText = null) => {
    const p = document.createElement(ChildType);
    for (let key in ChildAttribute) {
        p.setAttribute(key, ChildAttribute[key]);
    }
    if (InnText != null)
        p.innerText = InnText;
    return p;
}

const card = (cTitle, cSubtitle, text, cUrl) => {
    const cardDiv=CreateChild('div',{
        'class':'d-flex justify-content-center',
    });
    const card = CreateChild("div", {
        'class': 'm-3 card alert alert-info',
        'style': 'width: 30rem;'
    });
    const cardBody = CreateChild("div", {
        'class': 'card-body',
    });

    const cardTitle = CreateChild('h5', {
        'class': 'card-title h2',
    }, cTitle);

    const cardSubtitle = CreateChild('h5', {
        'class': 'card-subtitle mb-2 text-muted',
    }, cSubtitle);

    const cardText = CreateChild('p', {
        'class': 'card-text',
    }, text);

    const cardLink = CreateChild('a', {
        'class': 'card-link h6',
        'href': cUrl,
    }, "Link")
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    cardDiv.appendChild(card);
    return cardDiv;
}

const project = (Pname, technology, about, Purl) => {
    a = card(Pname, technology, about, Purl);
    body.appendChild(a);
}

const intro = () => {
    const t = CreateChild("p", {
        'class': "m-2 lead display-6 text-center",
    });
    t.innerText = "Hello! My name is Abhishek Jha. These are some of my project";
    body.appendChild(t);
}


const func = () => {
    intro();
    project("To Do App", "HTML-5 Bootstrap Javascript", "The basic Idea behind this project is to work effectively using to do list.", 'projects/to do app/index.html');
    project("Caesar Cipher Encryption and Decryption", "C++ ", `This encryption and decryption tool is built using c++ and using trie data structure for dictionary check.
    It aims to decrypt Caesar Cipher encrypted text using a dictionary count algorithm.`, 'https://github.com/ABHISHEKJHA9909/Caesar-cipher');
    project("Password Manager","C++ Oops",`This tool is built using C++ and the concept of OOPS and everytime it has a password with minimum 2 uppercase,2 lowercase, 2 digit, 2 special characters.
    It aims to create unique and strong passwords`,"https://github.com/ABHISHEKJHA9909/Password-manager");
}