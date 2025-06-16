# Gamify Life AI Prototype

This repository demonstrates a small prototype for training and serving a chatbot using the Gamify Life framework. The workflow includes generating vector embeddings from text files that describe concepts such as **DAB**, **GRIPS**, **GLOWS**, **DRIFT**, and **FAITH**. The chatbot runs with FastAPI and retrieves answers using LangChain with ChromaDB and OpenAI.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Generate embeddings from the framework files:
   ```bash
   python train_embeddings.py
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn app:app --reload
   ```
4. Send POST requests to `/chat` with JSON:
   ```json
   {
     "user_id": "alice",
     "message": "How do I avoid DRIFT?"
   }
   ```

The response contains the assistant's answer and the user's accumulated XP based on positive or negative sentiment words in the message.
