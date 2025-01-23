fetch('http://localhost:3000/api/order')
    .then(result => result.json())
    .then(json => {

        const fragment = document.createDocumentFragment();
        json.result.forEach(callback)

        function callback(order){
            const div = document.createElement('div');
            const priceParagraph = document.createElement('p');
            const statusParagraph = document.createElement('p');
            const number = document.createElement('p');
      
            priceParagraph.innerHTML = `Total de la orden:  ${order.totalPrice}`;
            statusParagraph.innerHTML = `Estatus: ${order.status}`;
            number.innerHTML = `Orden numero: ${order.number}`;
      
            div.appendChild(number)
            div.appendChild(priceParagraph);
            div.appendChild(statusParagraph);
            fragment.append(div);
        }

        const ordersContainer = document.getElementById('orders');
        ordersContainer.appendChild(fragment);
    })