console.log('Web Audio Studio carregado!');

 ////////////////////DROP/////////
//   import {getFolderName} from './novo_projeto.js'
//   console.log(getFolderName());

 const dropArea = document.getElementById('dropzone');
 const fileInfo = document.getElementById('fileInfo');
 let file;

 // Previne os comportamentos padrões de drag & drop
 ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
     dropArea.addEventListener(eventName, preventDefaults, false)
 });

 function preventDefaults(e) {
     e.preventDefault();
     e.stopPropagation();
 }

 // Destacar a área ao arrastar o arquivo
 ['dragenter', 'dragover'].forEach(eventName => {
     dropArea.addEventListener(eventName, () => dropArea.classList.add('hover'), false)
 });

 ['dragleave', 'drop'].forEach(eventName => {
     dropArea.addEventListener(eventName, () => dropArea.classList.remove('hover'), false)
 });

 // Lidar com o arquivo arrastado
 dropArea.addEventListener('drop', handleDrop, false);

 function handleDrop(e) {
     const files = e.dataTransfer.files;
     handleFiles(files);
 }

 function handleFiles(files) {
     file = files[0];  // Obter o primeiro arquivo
      fileInfo.innerHTML = `<p>Arquivo: ${file.name}</p>`;  // Exibir nome do arquivo
     
     if (file) {
        const formData = new FormData();
        formData.append('audio', file);
       

        // Envia o arquivo para o backend
        fetch('/upload', {
          method: 'POST',
          body: formData
        })
        .then(data => {
            console.log('Arquivo enviado com sucesso:', data);
          })
          .catch(error => {
            console.error('Erro ao enviar o arquivo:', error);
        });
     } 
     
}
 ///////////////////////////////////////////////

/////SPEECH TO SPEECH/////////////////////////
document.getElementById('speectospeec').addEventListener('click', function() {
   // const text = document.getElementById('text-input').value;
    const voice = (document.getElementById('voice_select').value);
    // const voice = 'HWzchRSYwaEowyiY3YcZ';
    const aud = `uploads/${file.name}`;
    

   
   
    fetch(`/speectospeec`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       
        body: JSON.stringify({ aud, voice})
    })
    .then(response => response.json())
    .then(data => {
        const audioContainer = document.getElementById('audio-container2');
        audioContainer.innerHTML = `
            <audio controls>
                <source src="${data.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
    })
    .catch(error => console.error('Error:', error));
});

