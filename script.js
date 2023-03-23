
// ----------------services sections over ------------------


var sersec = document.getElementById('services-grid');
var grid = document.querySelector(`.ser-grid-list${i}`);



for (var i = 1; i <= 6; i++) {

    var div = document.createElement('div');
    div.classList.add(`ser-grid-list${i}`);
    // div.textContent = `This is a Div ${i}`;
    sersec.appendChild(div);

};

for (var i = 1; i <= 6; i++) {


    var grid = document.querySelector(`.ser-grid-list${i}`);
    var div11 = document.createElement('div');
    div11.classList.add(`div-card${i}`);
    grid.appendChild(div11);


};


document.querySelector('.div-card1').textContent = 'GST REGISTRATION AMND';
document.querySelector('.div-card2').textContent = 'SALARY STRUCTURE';
document.querySelector('.div-card3').textContent = 'DEFECTIVE RETURN NOTICE';
document.querySelector('.div-card4').textContent = 'TDS ON PAYMENT TO NRI-FORM 27Q';
document.querySelector('.div-card5').textContent = `DPT-03`;
document.querySelector('.div-card6').textContent = 'GST NOTICE SECTION 61';



for (var i = 1; i <= 6; i++) {
    var grid = document.querySelector(`.ser-grid-list${i}`);

    var para = document.createElement('p');
    para.classList.add(`para-card-para${i}`);
    grid.appendChild(para);


};

document.querySelector('.para-card-para1').textContent = 'GST REGISTRATION AMND';
document.querySelector('.para-card-para2').textContent = 'SALARY STRUCTURE';
document.querySelector('.para-card-para3').textContent = 'DEFECTIVE RETURN NOTICE';
document.querySelector('.para-card-para4').textContent = 'TDS ON PAYMENT TO NRI-FORM 27Q';
document.querySelector('.para-card-para5').textContent = `DPT-03`;
document.querySelector('.para-card-para6').textContent = 'GST NOTICE SECTION 61';

for (var i = 1; i <= 6; i++) {


    var grid = document.querySelector(`.ser-grid-list${i}`);
    var line = document.createElement('div');
    line.classList.add(`para-card-line${i}`);
    grid.appendChild(line);


};

for (var i = 1; i <= 6; i++) {


    var grid = document.querySelector(`.ser-grid-list${i}`);
    var opara = document.createElement('p');
    opara.classList.add(`para-other-line${i}`);
    grid.appendChild(opara);


};

document.querySelector('.para-other-line1').textContent = 'Gstn profile update';
document.querySelector('.para-other-line5').textContent = 'Deposite return to be filled with registrar of companies';


for (var i = 1; i <= 6; i++) {


    var grid = document.querySelector(`.ser-grid-list${i}`);
    var button = document.createElement('button');
    button.textContent = 'Read More'
    button.classList.add(`click-button${i}`);
    grid.appendChild(button);


};

document.querySelector('.click-button1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});
document.querySelector('.click-button2').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});
document.querySelector('.click-button3').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});
document.querySelector('.click-button4').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});
document.querySelector('.click-button5').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});
document.querySelector('.click-button6').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

});


// ----------------services sections over ------------------

// login button  start

document.getElementById('getbutton').addEventListener('click', () => {

    let emailID = document.querySelector('#email').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID \"@\" , \".\"  ")
        document.querySelector('#email').value = '';


        return false;
    }
    else {
        confirm("Congratulation.... You Sign Up Succesfull");
        document.querySelector('#email').value = '';

        setTimeout(() => {
            window.location.reload()
        }, 500)
    }


});

// login button Over
