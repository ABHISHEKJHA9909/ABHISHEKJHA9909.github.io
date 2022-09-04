const body=document.getElementById("body");

const CreateChild=(ChildType,ChildClass)=>{
    const p=document.createElement(ChildType);
    p.setAttribute('class',ChildClass);
    return p;
}

const project=(Pname,Purl)=>{
    const a=CreateChild('a','text-decoration-none ');
    const x=CreateChild('div','alert alert-primary m-2 text-decoration-none');
    x.innerText=Pname;
    a.setAttribute('href',`${Purl}`);
    a.appendChild(x);
    body.appendChild(a);
}

const intro=()=>{
    const p=CreateChild("div","m-2");
    const t=CreateChild("p","lead display-6 text-center");
    t.innerText="Hello! My name is Abhishek Jha. These are some of my project";
    p.appendChild(t);
    body.appendChild(p);
}


const func=()=>{
    intro();
    project("To Do App",'projects/to do app/index.html');
}