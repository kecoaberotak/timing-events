// // setTimeOut
// setTimeout(tampilPesan, 3000);
// function tampilPesan(){
//   console.log('Test Time Out');
// };

// setTimeout(function(){
//   console.log('Set Time Out 2');
// }, 2000);

// const setTimeOut3 = setTimeout(function(){
//   console.log('Set Time Out 3');
// }, 5000);


// // setInterval
// const setIntervalTest = setInterval(function(){
//   console.log('Test Interval');
// }, 2000);



// // Clear Time Out & Interval
// const button = document.querySelector('.button');

// button.addEventListener('click', function(){
//   clearTimeout(setTimeOut3);
//   clearInterval(setIntervalTest);
//   console.log('Clear Time Out & Interval');
// });


// Latihan countdown
const countdownInterval = setInterval(function(){
  const text = document.querySelector('.countdown');
  const tanggalTujuan = new Date('Jul 20, 2023 12:00:00').getTime();
  const tanggalSekarang = new Date().getTime();

  const selisih = tanggalTujuan - tanggalSekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
  const detik = Math.floor(selisih % (1000 * 60) / (1000));

  text.innerHTML = 'SDCC : ' + hari + ':' + jam + ':' + menit + ':' + detik;

  if(selisih == 0){
    clearInterval(countdownInterval);
    text.innerHTML = 'SDCC Now'
  }

}, 1000);