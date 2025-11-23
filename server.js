import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { HfInference } from '@huggingface/inference'

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json()) 
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.


// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
const apikey=process.env.VITE_HF_ACCESS_TOKEN;
const hf = new HfInference(apikey)
app.post('/api/recipe', async (req, res) => {
  const { ingredientsList } = req.body;

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsList}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    });

    res.json({ recipe: response.choices[0].message.content });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000,()=>{console.log("server running on port no.3000")});