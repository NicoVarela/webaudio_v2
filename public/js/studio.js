// Adicione seu código JS aqui
console.log('Web Audio Studio carregado!');

document.getElementById('generateAudio').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const voice = (document.getElementById('voice_select').value);
    const stability = document.getElementById('stability').value;
    const similarity = document.getElementById('similarity').value;
    const sty = document.getElementById('style').value;
   
    fetch(`/generateAudio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, voice, stability, similarity, sty })
    })
    .then(response => response.json())
    .then(data => {
        const audioContainer = document.getElementById('audio-container');
        audioContainer.innerHTML = `
            <audio controls>
                <source src="${data.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
    })
    .catch(error => console.error('Error:', error));
});



/////SPEECH TO SPEECH/////////////////////////
// document.getElementById('speectospeec').addEventListener('click', function() {
//    // const text = document.getElementById('text-input').value;
//     const voice = (document.getElementById('voice_select').value);
//     // const voice = 'HWzchRSYwaEowyiY3YcZ';
//     const stability = document.getElementById('stability').value;
//     const similarity = document.getElementById('similarity').value;
//     const sty = document.getElementById('style').value;
//     const aud = "public/audios/00loc.mp3";
   
//     fetch(`/speectospeec`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
       
//         body: JSON.stringify({ aud, voice, stability, similarity, sty })
//     })
//     .then(response => response.json())
//     .then(data => {
//         const audioContainer = document.getElementById('audio-container2');
//         audioContainer.innerHTML = `
//             <audio controls>
//                 <source src="${data.audioUrl}" type="audio/mpeg">
//                 Your browser does not support the audio element.
//             </audio>
//         `;
//     })
//     .catch(error => console.error('Error:', error));
// });


