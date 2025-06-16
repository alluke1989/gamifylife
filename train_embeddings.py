import os
import json
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
knowledge = {}

for filename in os.listdir('framework'):
    path = os.path.join('framework', filename)
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
        embedding = model.encode(text)
    knowledge[filename] = {
        'text': text,
        'embedding': embedding.tolist()
    }

with open('framework_embeddings.json', 'w', encoding='utf-8') as f:
    json.dump(knowledge, f, ensure_ascii=False, indent=2)

print('Saved embeddings for', len(knowledge), 'documents.')
