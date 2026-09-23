# Marcador Na Lata

Página de celular onde o narrador marca, durante a partida, as jogadas que
merecem virar highlight ou reels. Ele escolhe o duelo do dia e digita **o placar
do ponto em disputa** — o que está na tela enquanto a jogada acontece. No fim de
cada game confirma o vencedor e o placar, e aquele game sobe para a base.

Do outro lado, o Na Lata Studio lê essas marcações e encaixa cada uma no ponto
certo da partida, comparando com o placar que ele mesmo leu da transmissão.

## Por que este repositório é separado e público

Ele existe só para o GitHub Pages publicar a página. Aqui dentro há apenas a
página: nenhum código do Studio, nenhum vídeo, nenhuma credencial de máquina.

A chave do Supabase que aparece em `config.js` é a **anon public**, feita para
ficar visível no navegador. Quem limita o que ela pode fazer são as regras da
tabela, no painel do Supabase. A chave `service_role` não entra aqui.

## Como usar no celular

Abrir o link no **Safari** (no iPhone só funciona por ele), tocar em compartilhar
e escolher "Adicionar à Tela de Início". Abre em tela cheia, com cara de app.

Funciona sem internet: o que for marcado fica guardado no celular e sobe sozinho
quando a conexão voltar. O canto de cima à direita mostra o estado.
