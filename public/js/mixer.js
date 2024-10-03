import EnvelopePlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/envelope.esm.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';
//import createElement from 'wavesurfer.js/dist/dom.js';

var loads= [,,,,,];

var solos= [,,,]; 
var fileName= [,,,];

var currentTracks = [,,,];
var autos = [,,,];
var volFator = 1
var buffer;
var audio =[];
var player = [];
var idt = 0;
var corWave = [80,40,200,0,130,255,100,30,180,140];
// Novo projeto: Criar folder e salvar
// Abrir projeto: Abrir folder já exixtente
//Numero de tracks. Quantos tracks o projeto? (máximo 8)////////

/////CRIAR TRACKS

for (let index = 0; index < 5; index++) {
  audio[index] = document.getElementById(`audio${index}`);
 // audio[index].src = 'audios/trilha.mp3';
  loads[index] = document.getElementById(`ld${index}`);  
}

// 02 BOTAO LOAD //////


loads[0].addEventListener('click', function (e) { 
  idt = 0;
  fileInput.click(); 
 
 }); 
         
 loads[1].addEventListener('click', function () { 
  idt = 1 ;
  fileInput.click();    
 }) 
 
 loads[2].addEventListener('click', function () {  
  idt = 2;
 
  fileInput.click(); 
       
 }) 
 
 loads[3].addEventListener('click', function () { 
  idt = 3 ;
  fileInput.click();      
 }) 

 loads[4].addEventListener('click', function () { 
  idt = 4 ;
  fileInput.click();      
 }) 

//  loads[4].addEventListener('click', function () { 
//   idt = 4 ;
//   fileInput.click();      
//  }) 

 /// ATIVA AUTOMACAO /////
//  const auto = document.getElementById('auto')
//  auto.addEventListener('click', function () { 
//   automacao();   
//  }) 

// 01 LER ARQUIVO

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change' , function () { 


if (fileInput.files.length > 0) {
const arquivo = fileInput.files[0];
const audioURL = URL.createObjectURL(arquivo);
audio[idt].src  = audioURL; 

// if (arquivo ) {
//   const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//   const reader = new FileReader();

//   reader.onload = function(e) {
//       audioContext.decodeAudioData(e.target.result, function(buffer) {
//           drawWaveform(buffer,idt);
//           setBackground(idt);
//       });
//   };

//   reader.readAsArrayBuffer(arquivo);
// }


// fileName[idt].textContent = arquivo.name;
// if (fileName[idt].textContent.length > 25) {
//            // Trunca o valor para 25 caracteres
//  fileName[idt].textContent = fileName[idt].textContent.slice(0, 25);
//  fileName[idt].textContent = fileName[idt].textContent + "..."; 
//  console.log( "fileName",fileName[idt].textContent);
// }
multitrack.addTrack({
  id: idt,
  
  startPosition: 0,
  draggable: true,
  envelope:true,
  envelope: [
         { time: 2, volume: 0.5 },
         { time: 10, volume: 0.8 },
       
       ],
  options: { media:audio[idt],
    waveColor: `hsl(${corWave[Math.floor(Math.random() * 9)]}, 60%, 40%)`,
        progressColor: `hsl(${corWave[Math.floor(Math.random() * 9)]}, 87%, 20%)`,
  },
})

}
else{console.log("Arquivo não encontrado")} 

})

//FINAL LER ARQUIVO

// document.getElementById('integerInput').addEventListener('input', function (event) {
//   const value = event.target.value;
//   for (let i = 0; i < value; i++) {
//     audio[i] = new Audio()
//     audio[i].controls = true;
//     player[i] = document.getElementById('a0')
//     player[i].appendChild(audio[i]);
  
//   }
// });
// const audio0 = new Audio()
// audio0.controls = true;
// // audio0.src = 'audios/output.mp3';

// const audio1 = new Audio()
// audio1.controls = true;
// // audio1.src = 'audios/trilha.mp3';

// const player0 = document.getElementById('a0')
// player0.appendChild(audio0);

// // const player1 = document.getElementById('a1')
// // player1.appendChild(audio1);

const multitrack = Multitrack.create(
  
  [
    
    {
      id:0,
      options:{
         media: audio[0],
        
        
      },
      draggable :true,
      envelope: true,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 10, volume: 0.8 },
      
      ],
    
   
    },

    {
      id:1,
    
      options:{
        media: audio[1], 
      },
      draggable :true,
      envelope: true,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 10, volume: 0.8 },
      
      ],
    
   
    },

    {id:2,
      options:{
         media:audio[2],
      
        
      },
      draggable :true,
      envelope: true,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 10, volume: 0.8 },
      
      ],
    },

    {id:3,
     options:{
         media:audio[3],
       
        
      },
      draggable :true,
      envelope: true,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 10, volume: 0.8 },
      
      ],
    },

    {id:4,
      options:{
          media:audio[4],
       
         
       },
       draggable :true,
       envelope: true,
       envelope: [
         { time: 2, volume: 0.5 },
         { time: 10, volume: 0.8 },
       
       ],
     },
   

  ],
   
    {
    container: document.querySelector('#mixer'), // required!
    minPxPerSec: 10, // zoom level
    rightButtonDrag: false, // set to true to drag with right mouse button
    cursorWidth: 2,
    cursorColor: '#D72F21',
    draggable:true,
    trackBackground: '#0f2340',
    trackBorderColor: '#7C7C7C',
    dragBounds: true,
    envelopeOptions: {
      lineColor: 'rgba(255, 0, 0, 0.7)',
      lineWidth: 4,
      dragPointSize: window.innerWidth < 600 ? 20 : 10,
      dragPointFill: 'rgba(255, 255, 255, 0.8)',
      dragPointStroke: 'rgba(255, 255, 255, 0.3)',
    },
  },
)


// // Trata as divs 
// const mixers = document.getElementById('mixer');
// const mixInterna1 = mixers.querySelector('div');
// const mixInterna2 = mixInterna1.querySelector('div');
// const divTrack1 =mixInterna2.querySelector(' div:nth-child(2)');
// // // const divTrack2 =mixInterna2.querySelector(' div:nth-child(4)');

// // // let minhaDiv = document.createElement('div');

// divTrack1.style.maxHeight = "80px";
// // divTrack1.appendChild(minhaDiv);
// // minhaDiv.style.width = '10%';
// // minhaDiv.style.height = '100%';
// // minhaDiv.style.border = '2px solid black';



// const isMobile = top.matchMedia('(max-width: 900px)').matches



// console.log("AQUI");
// // Optionally, add the audio to the page to see the controls


// ///////EVENTOS E OUTROS///////////////////

// // Events
multitrack.on('start-position-change', ({ id, startPosition }) => {
  console.log(`Track ${id} start position updated to ${startPosition}`)
})

multitrack.on('start-cue-change', ({ id, startCue }) => {
  console.log(`Track ${id} start cue updated to ${startCue}`)
})

multitrack.on('end-cue-change', ({ id, endCue }) => {
  console.log(`Track ${id} end cue updated to ${endCue}`)
})

multitrack.on('volume-change', ({ id, volume }) => {
  // console.log(`Track ${id} volume updated to ${volume}`)
})

multitrack.on('fade-in-change', ({ id, fadeInEnd }) => {
  console.log(`Track ${id} fade-in updated to ${fadeInEnd}`)
})

multitrack.on('fade-out-change', ({ id, fadeOutStart }) => {
  console.log(`Track ${id} fade-out updated to ${fadeOutStart}`)
})

multitrack.on('intro-end-change', ({ id, endTime }) => {
  console.log(`Track ${id} intro end updated to ${endTime}`)
})

multitrack.on('envelope-points-change', ({ id, points }) => {
  console.log(`Track ${id} envelope points updated to`, points)
})

////CONECTA MIX
let audioCtx = new AudioContext();
  const mix = audioCtx.createGain();
  const gainNode = [,,,,];
  var bufferLength  ;
  var dataArray ;
  var amplitude = [,,,];
  var ctx = [,,,];
  const recorder = new Recorder(mix);
  var track = [,,,,]; 
  for (let v = 0;v<5 ; v++)
    { 
       gainNode[v] = new GainNode(audioCtx);
     
    } 
    
      track[0] = new MediaElementAudioSourceNode(audioCtx, {
        mediaElement: multitrack.tracks[0].options.media,
        
      });
      
    
      track[1] = new MediaElementAudioSourceNode(audioCtx, {
        mediaElement: audio[1],
      });
     
      track[2] = new MediaElementAudioSourceNode(audioCtx, {
        mediaElement: audio[2],
      });
      
    
      track[3] = new MediaElementAudioSourceNode(audioCtx, {
        mediaElement: audio[3],
      });

      track[4] = new MediaElementAudioSourceNode(audioCtx, {
        mediaElement: audio[4],
      });

track[0].connect(gainNode[0]).connect(mix);
track[1].connect(gainNode[1]).connect(mix);
track[2].connect(gainNode[2]).connect(mix);
track[3].connect(gainNode[3]).connect(mix);
track[4].connect(gainNode[4]).connect(mix);
  mix.connect(audioCtx.destination);
 
///////FIM CONECTA MIX

// Play/pause button
const button = document.querySelector('#play')
button.disabled = true
multitrack.once('canplay', () => {
  button.disabled = false
  button.onclick = () => {
    multitrack.isPlaying() ? multitrack.pause() : multitrack.play();
    button.textContent = multitrack.isPlaying() ? 'Pause' : 'Play';
    audioCtx.resume().then(() => {
    });
  }
})

// Forward/back buttons
const forward = document.querySelector('#forward')
forward.onclick = () => {
  multitrack.setTime(multitrack.getCurrentTime() + 30)
}
const backward = document.querySelector('#backward')
backward.onclick = () => {
  multitrack.setTime(multitrack.getCurrentTime() - 30)
}

// Zoom
const slider = document.querySelector('input[type="range"]')
slider.oninput = () => {
  multitrack.zoom(slider.valueAsNumber)
}

// Destroy all wavesurfer instances on unmount
// This should be called before calling initMultiTrack again to properly clean up
window.onbeforeunload = () => {
  multitrack.destroy()
}

// Set sinkId
multitrack.once('canplay', async () => {
  await multitrack.setSinkId('default')
  console.log('Set sinkId to default')
})


///////MIXAGEM /////////////

const audioMixed = document.getElementById("mix");
let isRecording = false;

let rec = document.getElementById("rec");

rec.addEventListener('click',()=>{
  toggleRecording();
})

function toggleRecording() {
    isRecording = !isRecording;

    if (isRecording) {
      multitrack.once('canplay', () => {
        button.disabled = true;
      });  
      multitrack.isPlaying() ? multitrack.pause() : multitrack.play();
      button.textContent = multitrack.isPlaying() ? 'Pause' : 'Play';
      rec.textContent = multitrack.isPlaying() ? 'Mixing' : 'MIX';
        // rec.innerText = 'Mixing...';
        // Lógica para iniciar a gravação aqui...
        // rec.style.backgroundColor = "red";
         audioCtx.resume().then(() => {
          recorder.clear();
          recorder.record();
          
          
         });
    } else {
        // rec.innerText = 'MIXED';
        // rec.style.backgroundColor = "white";
        multitrack.isPlaying() ? multitrack.pause() : multitrack.play();
        button.textContent = multitrack.isPlaying() ? 'Pause' : 'Play';
        rec.textContent = multitrack.isPlaying() ? 'Mixing' :'MIX' ;
  
        recorder.exportWAV(blob => {
          // Faça algo com o blob, como enviar para o servidor ou criar um link de download
          var url = URL.createObjectURL(blob);

          // audio = new Audio(url);
        
               audioMixed.src = url;
          // document.body.appendChild(audio);
        });
        
    }
}
 // Função para ajustar o volume com base na posição y do cursor
 function adjustVolume(y,idt) {
    vol_val[idt].value = 1 - (y / 100); 
    volParam(vol_val[idt].value,idt);
}

//////MUTE////////////
var isMuted = [true,true,true,true,true];
var isSolo= [true,true,true,true,true];
var isOn = [false,false,false,false,false];
var isOff = [false,false,false,false,false];
const mutes= [,,,,];
const btnMutes = document.querySelectorAll(".mutes");
const btnSolos = document.querySelectorAll(".solos");
var tempBotao = document.createElement('button');

///// FUNÇÃO SOLO/////////
function soloChannels(soloIndexes) {
  isMuted.forEach((channel, index) => {
      if ((soloIndexes == index) && isMuted[index]==true) {
        gainNode[index].gain.setValueAtTime(1, audioCtx.currentTime);  // Ativa o canal solo
      } else {
    
        gainNode[index].gain.setValueAtTime(0, audioCtx.currentTime); // Silencia os outros canais
      }
  });
}

///////MUTE//////////
btnMutes.forEach(botao => {
  botao.addEventListener('click',function() {
    isOff[botao.value] = !isOff[botao.value];
    botao.style.backgroundColor = isOff[botao.value] ? 'red' : 'rgb(33, 28, 95)';
    isMuted[botao.value] = !isMuted[botao.value];
    gainNode[botao.value].gain.setValueAtTime(isMuted[botao.value], audioCtx.currentTime);
   // muteTracks(botao.value);
  });  
})

/////SOLO//////////

btnSolos.forEach(botao => {
  

  botao.addEventListener('click',function() {
    console.log(tempBotao);
    tempBotao.style.backgroundColor =  'Black';
    
    if(isOn[botao.value] == false || botao == tempBotao){isOn[botao.value] = !isOn[botao.value];}
    

    botao.style.backgroundColor = isOn[botao.value] ? 'red' : 'Black';
    
    if( botao.style.backgroundColor == 'red' ){
    
    soloChannels([botao.value]);
    tempBotao = botao;
    
    }else{

      for(let i = 0;i<5;i++){
       
        gainNode[i].gain.setValueAtTime(isMuted[i], audioCtx.currentTime);
        
        // isOn[botao.value] = !isOn[botao.value];
        // botao.style.backgroundColor = !isOn[botao.value] ? 'black' : 'red';
      }
    }
  });  
})

////// controle MIXDOWN///////////////

const playPauseButton = document.getElementById('playmix');
const downloadButton = document.getElementById('download');

// Função para alternar entre play e pause
playPauseButton.addEventListener('click', function() {
    if (audioMixed.paused) {
      audioMixed.play();
        playPauseButton.textContent = 'Pause';
    } else {
      audioMixed.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Função para baixar o arquivo de áudio
downloadButton.addEventListener('click', function() {
    const a = document.createElement('a');
    a.href = audioMixed.src;
    a.download = 'mixed.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

  


