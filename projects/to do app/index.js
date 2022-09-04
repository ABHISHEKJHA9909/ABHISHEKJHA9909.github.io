let value = localStorage.getItem('value')==null?0:localStorage.getItem('value');

const task = document.getElementById('task');
const done = document.getElementById('done');
const ip = document.getElementById('input');



const addTask = (work,tid=null) => {
    let child = document.createElement('div');
    tid=tid==null?`task${value}`:tid;
    
    child.id=tid;
    child.className = ' m-2 alert alert-primary';
    child.setAttribute('style', "word-wrap:break-word");
    let textdiv = document.createElement('div');


    // buttondiv
    let buttdiv = document.createElement('div');
    buttdiv.className = "mt-2 d-flex justify-content-begin";
    // button
    const button = document.createElement('button');
    button.className = "btn btn-primary ";
    button.innerText = "Done";
    button.setAttribute('onclick', `removeTask('${tid}')`);

    textdiv.append(document.createTextNode(work));
    buttdiv.append(button);

    child.append(textdiv, buttdiv);
    task.append(child);
}

const add = () => {
    if (ip.value) {
        addTask(ip.value);
        localStorage.setItem(`task${value}`,ip.value);
        ip.value = "";
        value++;
        localStorage.setItem('value',value);
    }
    else
        alert("NO TASK")
}


const removeTask = (id) => {
    let curr = document.getElementById(id);
    task.removeChild(curr);
    curr.className = " m-3 alert alert-success";
    
    const btn = curr.childNodes[1].childNodes[0];
    btn.className = ("btn btn-danger");
    btn.innerText = "Clear";
    btn.setAttribute('onclick', `removeFinal('${id}')`)
    done.append(curr);
    localStorage.removeItem(id);
}


const removeFinal = (id) => {
    done.removeChild(document.getElementById(id));
}

ip.addEventListener('keypress', (e) => e.key == 'Enter' ? add() : () => { });

for(let i=0;i<=value;i++){
    const curr=localStorage.getItem(`task${i}`);
    if(curr!=null)
        addTask(curr,`task${i}`);
}
