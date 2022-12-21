AOS.init();

const openn = document.getElementById('openn');
const navigation = document.getElementById('navigation');
const closee = document.getElementById('closee');


openn.onclick = () => { navigation.style.transform = 'translateX(0px)'; navigation.style.transition = '0.6s'; }

closee.onclick = () => { navigation.style.transform = 'translateX(500px)'; navigation.style.transition = '0.6s'; }


// doggpow

const down1 = document.getElementById('down1');
const p2 = document.getElementById('p2');

down1.onclick = () => {
    p2.style.display = 'block'; p22.style.display = 'none'; p2.style.transition = '1.5s'; p222.style.display = 'none'; p2222.style.display = 'none';
    down1.style.color = 'white'; down1.style.background = 'grey';
    down2.style.color = '#799290'; down2.style.background = 'white';
    down3.style.color = '#799290'; down3.style.background = 'white';
    down4.style.color = '#799290'; down4.style.background = 'white';
}

const down2 = document.getElementById('down2');
const p22 = document.getElementById('p22');

down2.onclick = () => {
    p22.style.display = 'block'; p2.style.display = 'none'; p22.style.transition = '1.5s'; p222.style.display = 'none'; p2222.style.display = 'none';
    down2.style.color = 'white'; down2.style.background = 'grey';
    down1.style.color = '#799290'; down1.style.background = 'white';
    down3.style.color = '#799290'; down3.style.background = 'white';
    down4.style.color = '#799290'; down4.style.background = 'white';
}

const down3 = document.getElementById('down3');
const p222 = document.getElementById('p222');

down3.onclick = () => {
    p222.style.display = 'block'; p222.style.transition = '1.5s';
    p22.style.display = 'none'; p2222.style.display = 'none'; p2.style.display = 'none';
    down3.style.color = 'white'; down3.style.background = 'grey';
    down4.style.color = '#799290'; down4.style.background = 'white';
    down2.style.color = '#799290'; down2.style.background = 'white';
    down1.style.color = '#799290'; down1.style.background = 'white';
}

const down4 = document.getElementById('down4');
const p2222 = document.getElementById('p2222');

down4.onclick = () => {
    p2222.style.display = 'block'; p2222.style.transition = '1.5s';
    p22.style.display = 'none'; p222.style.display = 'none'; p2.style.display = 'none';
    down4.style.color = 'white'; down4.style.background = 'grey';
    down3.style.color = '#799290'; down3.style.background = 'white';
    down2.style.color = '#799290'; down2.style.background = 'white';
    down1.style.color = '#799290'; down1.style.background = 'white';

}
