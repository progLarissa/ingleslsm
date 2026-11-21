# ingleslsm

**English Notebook** — caderno interativo de inglês do A2 ao C1, feito para ver filmes, ler livros, fazer provas de leitura e escrita e perder o medo de falar.

Versão publicada (privada): https://claude.ai/artifact/9TkvGFDNwjdfNK4zv43jRD

## Abrir

Abra `index.html` em qualquer navegador. Funciona sozinho. A correção com IA, a conversa com IA e a sincronização entre aparelhos só funcionam na versão publicada no Claude.

## Conteúdo

- Warm-up A2 (6 unidades) e 12 unidades do B1 ao C1
- My plan: cronograma diário de ~25 minutos com datas reais
- Reading exams: simulados Cambridge (Parts 5, 6, 7) e IELTS
- Your books: um livro por nível (*Holes*, *And Then There Were None*, *The Martian*)
- Verbos irregulares, falsos amigos, laboratório de frases, vocabulário, escuta e fala

## Estrutura

- `index.html` — a página completa, gerada
- `src/data/` — conteúdo (unidades, exercícios, testes, livros…)
- `src/*_app.js` — funções de plano, provas, livros e ritmo
- `src/it/` + `src/trans*.py` + `src/apply.py` — o motor, adaptado do Quaderno d'Italiano
- `src/build.sh` — gera `index.html`: `bash src/build.sh` (precisa de Python 3 e Node)
