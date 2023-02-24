let container = document.querySelector(`.main-container`);
let header = document.querySelector(`.header`)
let card = header.querySelector(`#card`);
let sidebar = document.querySelector(`.sidebar`);
let order_button = document.querySelector(`.order-button`);

let search = header.querySelector(`.search-button`);



card.addEventListener ('click', function(){
    sidebar.classList.toggle(`hidden`);
})

let food_container = container.querySelector(`.food-container`);
let sidebar_list = container.querySelector(`.sidebar-list`);
let sidebar_total = container.querySelector(`.sidebar-total`);


//Вывод списка покупок и суммарной стоимости

function add_sp(){
    // console.log(sidebar_total)
    // console.log(evt.target)
    let sp_items = [];
    food_container.addEventListener(`click`, function(evt){
        card_item = evt.target.closest(`.card`);
        console.log(card_item)
        sidebar_list.innerHTML = ``;
        sidebar_total.innerHTML = ``;
        food_title = card_item.querySelector(`.food-title`);
        food_price = card_item.querySelector(`.food-price`);
        
        console.log(sp_items)

        if (card_item.classList.contains(`card-active`)){
            sp_items.splice(sp_items.indexOf(`<li>${food_title.innerHTML} - ${food_price.innerHTML}</li>`), 1);
            card_item.classList.remove(`card-active`);
            console.log(sp_items);
        } else {
            // sidebar_list.innerHTML += `<li>${food_title.innerHTML} - ${food_price.innerHTML}</li>`;
            sp_items.push(`<li>${food_title.innerHTML} - ${food_price.innerHTML}</li>`);
            card_item.classList.add(`card-active`);
            console.log(sp_items);
        }

        summa = 0;

        console.log(sp_items)
        for(i=0; i<sp_items.length; i++){
            sidebar_list.innerHTML += sp_items[i];
            summa += Number(food_price.innerHTML);
        }
        sidebar_total.innerHTML = `<div>Всего: ${summa}</div>`

    });
}
add_sp()



//Поиск по form

const sp_items = food_container.querySelectorAll(`.card`)

function searchByTitle() {

  let input = header.querySelector(`.search-input`);
  console.log(input, input.value)

    // строка поиска 
    let search1 = input.value.toLowerCase();

    sp_food_container = [];

    for (let i = 0; i < sp_items.length; i++) {
                
        let item_right = sp_items[i];
        //вся информаия о карточке, чтобы вставть в шаблон
        let food_title = item_right.querySelector(`.food-title`).innerHTML.toLowerCase();
        
        if(food_title.includes(search1)) {
            console.log(`чето я дурында`)

            let right_food_title = item_right.querySelector(`.food-title`).innerHTML;
            let food_price = item_right.querySelector(`.food-price`).innerHTML;


            sp_food_container.push(`<div class="card">
            <img src="assets/goods/${i+1}.jpg">
            <div class="card-body">
            <span class="food-title">${right_food_title}</span>
            <span class="food-price">${food_price}</span>
            </div>
            </div>`)   
            
        }
        
        
    }
    return sp_food_container

}

function print_searchByTitle(){
  search.addEventListener(`click`, function(){
    let sp_food_container = searchByTitle();
    console.log(sp_food_container);
    food_container.innerHTML = ``;
    for(i=0; i<sp_food_container.length; i++){
        food_container.innerHTML += sp_food_container[i]
    }
  })
}

print_searchByTitle()

//magic for заказать

let pay = document.querySelector(`.pay`);
order_button.addEventListener(`click`, function(){
    if (summa != 0){
        pay.classList.remove(`d-none`);
        food_container.classList.add(`d-none`);
        sidebar.classList.add(`d-none`);
    }
});

let ret = document.querySelector(`.return`);
ret.addEventListener(`click`, function(){
    
    pay.classList.add(`d-none`);
    food_container.classList.remove(`d-none`);
    sidebar.classList.remove(`d-none`);
    
})

let buyNode = document.querySelector(`.buy`);

let cardnumber = document.querySelector(`#cardnumber`)
let cvv = document.querySelector(`#cvv`)
let name = document.querySelector(`#name`)


buyNode.addEventListener(`click`, function(){
    if (cardnumber.value!=`` && cvv.value!=`` && name.value!=``){
        alert(`Оплата прошла успешно`)
        pay.classList.add(`d-none`);
        food_container.classList.remove(`d-none`);
        sidebar.classList.remove(`d-none`);
        cardnumber.value=``
        cvv.value=``
        name.value=``
    
    } else {
        alert(`Не все поля заполнены`)
    }
    
})



