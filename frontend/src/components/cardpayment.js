const cardpayment=()=>{
    return `<div id="carditcarddetail">
    <div>
        <h3>Credit/Debit Card</h3>
    </div>
    <hr>
    <div>
        <input class="carddetail" id="cardnumberbox" maxlength="16" type="text" placeholder="Card Number" >
    </div>
    <div>
        <input class="carddetail" id="carddatebox" type="month" placeholder="MM/YY">
        <input class="carddetail" id="cardcvvbox" type="text" placeholder="CVV" maxlength="3">
    </div>

    <p id="savedetail"><input type="checkbox"> Save this card securely for future </p>

    <button id="paybutton">pay</button>
</div>`
    
}


export default cardpayment