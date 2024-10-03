import express from "express";
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import { dirname } from "path";
import path from "path"
import { fileURLToPath } from "url";
import { ElevenLabsClient, ElevenLabs,play }  from 'elevenlabs'
import fs  from 'fs';
import axios from 'axios';
import FormData from 'form-data'
import multer from "multer";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static('public'));

// Configura o EJS como motor de visualização
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Web Audio Studio' });
});

app.get('/samples', (req, res) => {
    res.render('samples.ejs', { title: 'Samples' });
});

app.get('/studio', (req, res) => {
    res.render('studio.ejs', { title: 'Studio' });
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs', { title: 'Web Audio Studio' });
});


app.get('/about', (req, res) => {
    res.render('about.ejs', { title: 'radiobroad' });
});


app.get('/mixer', (req, res) => {
    res.render('partials/mixer.ejs');
});

app.use(express.json());



// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




