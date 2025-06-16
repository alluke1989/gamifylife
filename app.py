import os
import json
from typing import List
from fastapi import FastAPI
from pydantic import BaseModel

from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

app = FastAPI()

class UserMessage(BaseModel):
    user_id: str
    message: str

# Load knowledge base
if os.path.exists('framework_embeddings.json'):
    with open('framework_embeddings.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    texts = [item['text'] for item in data.values()]
    metadatas = [{'source': name} for name in data.keys()]
else:
    texts = []
    metadatas = []

# Initialize embeddings and vector store
embedding_model = OpenAIEmbeddings()
vectorstore = Chroma.from_texts(texts, embedding_model, metadatas=metadatas, collection_name="framework")

llm = ChatOpenAI(temperature=0)
qa_chain = RetrievalQA.from_chain_type(llm, retriever=vectorstore.as_retriever())

# Simple in-memory XP store
user_xp = {}

negative_words = {"guilt", "resentment", "fear", "shame"}
positive_words = {"love", "gratitude", "trust", "safety"}

@app.post("/chat")
def chat(msg: UserMessage):
    response = qa_chain.run(msg.message)

    xp = 0
    text = msg.message.lower()
    if any(word in text for word in negative_words):
        xp -= 1
    if any(word in text for word in positive_words):
        xp += 1

    user_xp[msg.user_id] = user_xp.get(msg.user_id, 0) + xp

    return {"response": response, "xp": user_xp[msg.user_id]}
