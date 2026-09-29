# Qual tecnologia resolve?

Jogo para crianças sobre **para que servem as tecnologias do dia a dia**, com o robô Tito. Feito para uso em sala de aula, sem pontuação e sem competição.

🎮 **Jogar:** https://qual-tecnologia.cliick.dev

## Como funciona

- **9 lugares e 54 fases:** Em casa, Na escola, Na rua, Saúde e cuidado, Conversar e se divertir, Para que serve?, Antes e agora, Detetive do Tito e Desafios do Tito.
- **Vários modos:** qual tecnologia resolve o problema (às vezes mais de uma), para que serve esta tecnologia, como era antes (carta, telefone fixo, vitrola), qual NÃO resolve, e desafios com 5 opções sobre energia, internet e medidas.
- **Sem pontos:** cada fase dá uma figurinha para o álbum. Errar só apaga a opção e explica; a dica tira uma opção errada.
- **Reflexão final:** o celular aparece como resposta muitas vezes. Por que será que ele resolve tanta coisa?
- **Pensado para todos:** leitura em voz alta do problema e da explicação, animações desligáveis, sons desligados por padrão.

## Para o professor

- Em **Ajustes**, ative **Todas as fases abertas** para escolher qualquer fase em aula.
- O progresso fica salvo no próprio aparelho. **Recomeçar do zero** apaga o progresso daquele aparelho.

## Rodar localmente

Site estático. Sirva a pasta com um servidor simples:

```bash
npx serve .
```

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | A página do jogo |
| `estilo.css` | Visual e animações |
| `jogo.js` | Tecnologias, fases e a lógica do jogo |
| `icones.js` | Ícones em SVG, gerados a partir da IconPark, mais alguns desenhados para o jogo |
| `fontes/` | Fredoka e Nunito |
| `CNAME` | Domínio do GitHub Pages |

Para acrescentar fases, edite `MUNDOS` em `jogo.js`. As tecnologias ficam em `T` (ícone, cor, nome) e as figuras dos problemas em `P`.

## Créditos e licenças

Veja [CREDITOS.md](CREDITOS.md). Ícones da [IconPark](https://github.com/bytedance/IconPark) (Apache 2.0); fontes [Fredoka](https://fonts.google.com/specimen/Fredoka) e [Nunito](https://fonts.google.com/specimen/Nunito) (OFL).

Faz parte de uma coleção de jogos educativos: [Qual vem depois?](https://github.com/MatheusFQueiroz/padroes), [Invasão das Letras](https://github.com/MatheusFQueiroz/invasao-das-letras), [Pode ou não pode?](https://github.com/MatheusFQueiroz/pode-ou-nao-pode) e [A casa das máquinas](https://github.com/MatheusFQueiroz/casa-das-tecnologias).
