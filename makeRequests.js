 * @param  {string[]} urls      массив с адресами
 * @param  {number} maxRequests максимальное количество одновременных запросов
 * @return {Promise}
 */

function addListUrl(num, arr) {
    for (let url of arr) {
        fetch(`${url}`).then(function(response) {
                console.log(response.status)
                }).then(function(data) {
                console.log(data);
        })
    }

    return arr
};

// https://translate.google.com/?hl=ru&tab=TT

const makeRequests = () => {
    let inputMaxReText = document.querySelector('#inputMaxReq').value
    let newArrAddUrl = []
    newArrAddUrl = arrAddUrl.filter((elem, index) => arrAddUrl.indexOf(elem) == index) // игнорируем одинаковые ссылки
    console.log(newArrAddUrl)
    if (inputMaxReText !== '') {
        return  addListUrl(inputMaxReText, newArrAddUrl) 
    } 

    document.querySelector('#inputMaxReq').value = ''
    
};
