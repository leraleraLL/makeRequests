
let arrAddUrl = [] // массив, в котором хранятся ссылки

// работа с input. добавляем ссылку
 const addUrl = () => {
    let inputUrlText = document.querySelector('#inputUrl').value
    if (inputUrlText !== '') {
        arrAddUrl = addTableUrl(inputUrlText, arrAddUrl) // добавляем в таблицу текст
    } 
    document.querySelector('#inputUrl').value = ''
    // создаем таблицу
    return arrAddUrl
};


function addTableUrl(text, arr) {
    let table_requests = document.querySelector('.table_requests')

    // создаем ветку
    let elem_ParrentTrUrl = document.createElement('tr')
    let elem_ChildThUrl = document.createElement('th')
    let btn_UrlRemove = document.createElement('button')
    btn_UrlRemove.className = 'btn_UrlRemove'
    table_requests.appendChild(elem_ParrentTrUrl)
    elem_ParrentTrUrl.appendChild(elem_ChildThUrl)
    elem_ParrentTrUrl.appendChild(btn_UrlRemove)
    elem_ChildThUrl.innerHTML = text
    btn_UrlRemove.innerHTML = 'remove'

    elem_ParrentTrUrl.id = arr.length + 1

    arr.push(text) // добавляем значение в массив

    // btn remove
    btn_UrlRemove.addEventListener('click', function(e) { 
        let target = e.target; 
        let elem_Remove = target.parentNode // получили родителя(ветку) объекта btn
        arr = updateTable(elem_Remove, arr, table_requests ) // обновляем таблицу и массив
    })


    // if (target.tagName != 'BUTTON') {
    //     let targetParrent = target.parentNode; // Получаем родителя объекта клика
    //     let trElemUrl = document.createElement('tr'); // создаем строку таблицы
    //     table_requests.append(trElemUrl); // Добавляем строку в целевую таблицу
    //     // Вывод ячеек в строку таблицы
    //     for (let i = 0; i < arrUrl.length; i++) {
    //       let tdElem = document.createElement('td');
    //       tdElem.innerHTML = targetParrent.innerHTML;
    //       trElem.append(tdElem);
    //     }
    return arr
}

function updateTable(elem, arr, collection) {
    let elArr = elem.querySelector('th').innerHTML
    arr = arr.filter(el => el !== elArr )
    elem.remove() // удаляем на странице
    let numId = collection.getElementsByTagName('tr') // обновляем id после удаления элементов
    for(let i = 0; i < numId.length; i++) {
        numId[i].id = i+1
    }
    return arr
}


