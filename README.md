# 🎮 GameFlow - Jogo da Forca

Um projeto simples de **Jogo da Forca** feito em **JavaScript**, rodando diretamente no **Terminal**.

O objetivo do jogo é adivinhar a palavra escolhida pelo sistema digitando letras de **A a Z**.  
Cada erro reduz uma vida do jogador.

---

## 🚀 Tecnologias Utilizadas

- JavaScript
- Node.js
- Terminal / CLI

---

## 📜 Regras do Jogo

1. O jogo escolhe **aleatoriamente uma palavra**.
2. O jogador deve **digitar uma letra de A a Z**.
3. Se a letra **existir na palavra**, ela será revelada.
4. Se a letra **não existir**, o jogador perde uma vida.
5. O jogador possui **6 vidas**.
6. O jogo termina quando:
   - O jogador **descobre todas as letras** (vitória 🎉)
   - Ou **perde todas as vidas** (derrota 💀)

---

## ▶️ Como Jogar

1. Clone o repositório:

```bash
git clone https://github.com/Vagner0303/GameFlow.git
```

2. Abra a pasta do projeto no **Visual Studio Code (VS Code)**.

3. Abra o **terminal do VS Code**.

4. No terminal, execute o jogo com o comando:

```bash
npm install readline-sync
node GameFlow.js
```