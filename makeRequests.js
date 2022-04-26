// <!-- 
// status

// 200 - resolve
// 102("В обработке". Этот код указывает, что сервер получил запрос и обрабатывает его, но обработка ещё не завершена.) - wait
// 202("Принято". Запрос принят, но ещё не обработан. ) -  in progress
// 404,500-505  - reject
//  -->

function addListUrl(num, arr) {
    let listUrl = new Object()

    for (let url of arr) {
        listUrl[url] = {
            status: '',
            dublicate: '',
            result: ''
        }
        fetch(url)
        .then(response => {
            if (response.status === 200) {
                let key = listUrl[url] 
                key.status = 'response'
                console.log('response')
                console.log(listUrl)
            } 
            // else if (response.status === 102){    ????????????????????
            //     let key = listUrl[url] 
            //     key.status = 'wait'
            //     console.log('wait')
            //     console.log(listUrl)

            // } else if (response.status === 202){
            //     let key = listUrl[url] 
            //     key.status = 'in progress'
            //     console.log('in progress')
            //     console.log(listUrl)
            // }
            return response.json()
          })
        .then(data => {
            let key = listUrl[url] 
            key.result = JSON.stringify(data)
            
        })  
        .catch( reject => {
            let key = listUrl[url] 
            key.status = 'reject'
        })
        }

    return listUrl
};


// https://jsonplaceholder.typicode.com/todos/1
// https://randomuser.me/api/?results=1

const makeRequests = () => {
    let inputMaxReText = document.querySelector('#inputMaxReq').value
    let newArrAddUrl = []
    newArrAddUrl = arrAddUrl.filter((elem, index) => arrAddUrl.indexOf(elem) == index) // игнорируем одинаковые ссылки
    if (inputMaxReText !== '') {

        return newArrAddUrl = addListUrl(inputMaxReText, newArrAddUrl) 
    } 

    document.querySelector('#inputMaxReq').value = ''
    
};
