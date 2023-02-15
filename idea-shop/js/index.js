let container = document.querySelector(`.main-container`);
let header = document.querySelector(`.header`)
let card = header.querySelector(`.cart-container`);
let sidebar = container.querySelector(`.sidebar`);

card.addEventListener ('click', function(){
    sidebar.classList.toggle(`hidden`);
})

let food_container = container.querySelector(`.food-container`);
let sidebar_list = container.querySelector(`.sidebar-list`);
let sidebar_total = container.querySelector(`.sidebar-total`);

sp_items = [];
food_container.addEventListener (`click`, function(evt){
    card_item = evt.target.closest(`.card`);
    sidebar_list.innerHTML = ``;
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
    console.log(sp_items)
    for(i=0; i<sp_items.length; i++){
        sidebar_list.innerHTML += sp_items[i];
    }
})

