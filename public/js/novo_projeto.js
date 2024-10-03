//  import { constants } from "fs/promises";

   let fd = 'nomeProj';

    document.getElementById('createProjectBtn').addEventListener('click', async () => {
    const projectName = document.getElementById('projectNameInput').value.trim();
    fd = projectName;
   
    if (!projectName) {
      alert('Digite o nome do projeto.');
      return;
    }
    
    // Envia uma requisição ao backend para criar a pasta
    const response = await fetch('/createProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectName }),
    });
    
    const result = await response.json();
    document.getElementById('feedback').textContent = result.message;
    
  });

 
//     export function getFolderName(){
//    return fd;
   
//   }
