(function(){
'use strict';
var TINTA='#26306B';

/* ======================================================================
   Desenho dos ícones (icones.js) com as cores de cada figura
   ====================================================================== */
function clareia(hex,t){
  var n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;
  r=Math.round(r+(255-r)*t); g=Math.round(g+(255-g)*t); b=Math.round(b+(255-b)*t);
  return '#'+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1);
}
function pinta(corpo,cor,cor2){
  return corpo.replace(/"#000"/g,'"'+TINTA+'"').replace(/#2F88FF/gi,cor).replace(/#43CCF8/gi,cor2||clareia(cor,.55));
}
function svg(corpo){ return '<svg class="ic" viewBox="0 0 48 48" aria-hidden="true">'+corpo+'</svg>'; }
function icone(nome,cor,cor2){ return svg(pinta(ICONES[nome],cor||'#7BD389',cor2)); }
function desenho(f){ return icone(f[0],f[1],f[2]&&f[2].charAt(0)==='#'?f[2]:null); }
function silhueta(nome){
  return svg(ICONES[nome].replace(/stroke="#[0-9a-fA-F]{3,6}"/g,'stroke="#C3C8E3"').replace(/fill="#[0-9a-fA-F]{3,6}"/g,'fill="#E6E9F5"'));
}
var UI={mapa:['map-draw','#7BD389'],album:['stickers','#FFC93C'],ajustes:['setting-two','#B8C2FF'],ouvir:['volume-up','#6EC3FF'],
  dica:['lampada','#FFD43B'],som:['bell-ring','#FFD43B'],anim:['magic','#B388FF'],livre:['unlock','#7BD389'],recomeca:['refresh','#FF9F43'],
  pensa:['thinking-problem','#FFD43B'],feito:['check-one','#7BD389']};
function ui(k){ return k==='cadeado'?silhueta('lock'):icone(UI[k][0],UI[k][1]); }
var SETA_BRANCA='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* Mascote: o robô Tito */
function mascote(){
  var T=' stroke="'+TINTA+'" stroke-width="5" stroke-linejoin="round"';
  return '<svg class="mascote" viewBox="0 0 120 120" aria-hidden="true"><g class="m-corpo">'+
   '<path d="M60 23V12" stroke="'+TINTA+'" stroke-width="5" stroke-linecap="round"/>'+
   '<circle class="m-luz" cx="60" cy="10" r="6.5" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4"/>'+
   '<g class="m-braco-e"><path d="M37 92c-11 2-17 8-19 16" fill="none" stroke="'+TINTA+'" stroke-width="5" stroke-linecap="round"/><circle cx="17" cy="110" r="5.5" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4"/></g>'+
   '<g class="m-braco-d"><path d="M83 92c11 2 17 8 19 16" fill="none" stroke="'+TINTA+'" stroke-width="5" stroke-linecap="round"/><circle cx="103" cy="110" r="5.5" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4"/></g>'+
   '<rect x="35" y="82" width="50" height="32" rx="12" fill="#5BB8F5"'+T+'/>'+
   '<circle cx="60" cy="98" r="6.5" fill="#FF8FB1" stroke="'+TINTA+'" stroke-width="4"/>'+
   '<rect x="11" y="42" width="11" height="22" rx="5.5" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4"/>'+
   '<rect x="98" y="42" width="11" height="22" rx="5.5" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4"/>'+
   '<rect x="20" y="22" width="80" height="62" rx="21" fill="#6EC3FF"'+T+'/>'+
   '<rect x="30" y="32" width="60" height="42" rx="14" fill="'+TINTA+'"/>'+
   '<g class="m-olhos"><rect x="43" y="42" width="10" height="14" rx="5" fill="#7CF5C8"/><rect x="67" y="42" width="10" height="14" rx="5" fill="#7CF5C8"/></g>'+
   '<path d="M50 62q10 7 20 0" fill="none" stroke="#7CF5C8" stroke-width="4" stroke-linecap="round"/>'+
   '<circle cx="38" cy="63" r="3.5" fill="#FF8FB1" opacity=".8"/><circle cx="82" cy="63" r="3.5" fill="#FF8FB1" opacity=".8"/>'+
   '<path d="M28 30a14 14 0 0 1 10-6" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none" opacity=".7"/>'+
   '</g></svg>';
}

/* ======================================================================
   Tecnologias: [ícone, cor, nome]
   ====================================================================== */
var T={
 cel:['iphone','#6EC3FF','Celular'], tv:['tv-one','#B388FF','Televisão'], som:['speaker','#FF9F43','Caixa de som'], lam:['lampada','#FFD43B','Lâmpada'],
 lan:['flashlight','#FFB84D','Lanterna'], desp:['alarm-clock','#FF6B6B','Despertador'], rel:['time','#7BD389','Relógio'], comp:['laptop','#6EC3FF','Computador'],
 imp:['printer','#C9D1FF','Impressora'], proj:['projector','#FFB84D','Projetor'], micf:['microphone','#B388FF','Microfone'], sinal:['bell-ring','#FFD43B','Sinal da escola'],
 semaf:['semaforo','#C9D1FF','Semáforo'], onibus:['bus','#FFD43B','Ônibus'], bici:['bike','#FF6B6B','Bicicleta'], rad:['radio','#FF9F43','Rádio'],
 termo:['thermometer','#FF6B6B','Termômetro'], oculos:['glasses','#6EC3FF','Óculos'], audit:['aparelho-auditivo','#FFC2A6','Aparelho auditivo'],
 cadeira:['wheelchair','#6EC3FF','Cadeira de rodas'], cam:['camera','#FF8FB1','Câmera'], fone:['headset','#B388FF','Fone de ouvido'],
 mo:['microwave-oven','#C9D1FF','Micro-ondas'], lav:['washing-machine','#6EC3FF','Máquina de lavar'], gel:['refrigerator','#9BE3F5','Geladeira'],
 vent:['ventilador','#6EC3FF','Ventilador'], cart:['maquininha','#7BD389','Máquina de cartão'], liq:['soybean-milk-maker','#FF8FB1','Liquidificador'],
 ferro:['iron','#FF8FB1','Ferro de passar'], arc:['air-conditioning','#C9D1FF','Ar-condicionado'], fogao:['fogao','#FFB84D','Fogão'],
 calc:['calculator','#7BD389','Calculadora'], elev:['elevator','#C9D1FF','Elevador'], escova:['escova','#6EC3FF','Escova de dentes'],
 carta:['envelope','#FFE08A','Carta'], telfixo:['phone','#C9D1FF','Telefone fixo'], vela:['spa-candle','#FFE08A','Vela'], leque:['fan','#FF8FB1','Leque'],
 jornal:['newspaper-folding','#E9ECF7','Jornal'], vitrola:['record-player','#FFB84D','Vitrola'], relpulso:['watch','#7BD389','Relógio de pulso'],
 tablet:['ipad','#B388FF','Tablet'], controle:['remote-control','#C9D1FF','Controle remoto'], drone:['drone','#6EC3FF','Drone'], carro:['car','#FF6B6B','Carro'],
 videogame:['gamepad','#B388FF','Videogame'], wifi:['wifi','#6EC3FF','Wi-Fi'], pilha:['battery-full','#7BD389','Pilha'], tomada:['plug','#FFB84D','Tomada'],
 estet:['stethoscope','#FF6B6B','Estetoscópio'], micro:['microscope','#B388FF','Microscópio'], regua:['ruler','#FFB84D','Régua'], fita:['tape-measure','#FFD43B','Fita métrica']
};
/* figuras dos problemas */
var P={
 comida:['bowl','#FFB84D'], leite:['milk','#9BE3F5'], roupa:['t-shirt','#6EC3FF'], calor:['sun-one','#FFB84D'], escuro:['cloudy-night','#B8C2FF'],
 morango:['morango','#FF6B6B','#7BD389'], conta:['notes','#FFE08A'], video:['film','#B388FF'], desenho:['picture','#7BD389'], relogio:['hourglass','#FFD43B'],
 baleia:['whale','#6EC3FF'], fala:['people-speak','#FFB84D'], caminho:['local-two','#FF6B6B'], carro:['car','#FF6B6B'], escola:['school','#FFB84D'],
 mercado:['shopping-cart','#7BD389'], sacola:['shopping-bag','#FF8FB1'], noite:['moon','#FFE08A'], febre:['hospital-bed','#6EC3FF'], olhos:['eyes','#6EC3FF'],
 mudo:['volume-mute','#C9D1FF'], dentes:['teeth','#FFFFFF'], parque:['tree-one','#7BD389'], remedio:['pill','#FF8FB1'], casa:['home','#FFB84D'],
 chuva:['heavy-rain','#6EC3FF'], bolo:['birthday-cake','#FF8FB1'], musica:['music','#B388FF'], dormir:['sleep-two','#B8C2FF'], coelho:['rabbit','#FFC7D6'],
 foto:['picture','#FF8FB1'], acordar:['sunrise','#FFB84D'], jornal:['newspaper-folding','#E9ECF7'], mesa:['triangle-ruler','#FFB84D']
};

/* ======================================================================
   Lugares e fases
   Fase normal: e = figura do problema · p = problema · ok = tecnologias que resolvem · op = opções · x = explicação
   Fase "para que serve?": r = tecnologia · op = [figura, frase] · ok = posições certas
   f = figurinha [ícone, cor, nome]. Quando ok tem mais de uma resposta, a criança encontra todas.
   ====================================================================== */
var MUNDOS=[
 {nome:'Em casa',ic:['home','#FFB84D'],cor:'#FFF0D6',selo:'#FFB020',txt:'Problemas da cozinha, da sala e do quarto.',fases:[
  {e:'comida',p:'A comida do almoço esfriou.',ok:['mo'],op:['tv','mo','rel'],x:'O micro-ondas esquenta a comida bem rápido.',f:['hot-pot','#FF9F43','Panelinha']},
  {e:'leite',p:'O leite não pode estragar.',ok:['gel'],op:['gel','mo','vent'],x:'A geladeira deixa a comida gelada, e assim ela demora a estragar.',f:['milk','#9BE3F5','Caixinha de leite']},
  {e:'roupa',p:'A minha roupa está toda suja.',ok:['lav'],op:['tv','lav','gel'],x:'A máquina de lavar limpa a roupa com água e sabão.',f:['t-shirt','#6EC3FF','Camiseta']},
  {e:'calor',p:'Está muito calor na sala.',ok:['vent','arc'],op:['vent','fogao','arc'],x:'O ventilador e o ar-condicionado refrescam a sala.',f:['icecream','#FF8FB1','Sorvete']},
  {e:'escuro',p:'A luz acabou e a sala ficou escura.',ok:['lan'],op:['som','tv','lan'],x:'Sem energia, a lâmpada não acende. A lanterna funciona com pilha e ilumina!',f:['desk-lamp','#FFD43B','Luminária']},
  {e:'morango',p:'Quero fazer um suco de morango.',ok:['liq'],op:['liq','ferro','tv'],x:'O liquidificador mistura e tritura a fruta.',f:['juice','#FF6B6B','Suco']}]},
 {nome:'Na escola',ic:['school','#7BD389'],cor:'#DDF5E3',selo:'#5CCB6F',txt:'Tecnologias que ajudam a aprender.',fases:[
  {e:'conta',p:'Preciso conferir uma conta bem grande.',ok:['calc'],op:['calc','gel','lan'],x:'A calculadora faz contas rapidinho.',f:['pencil','#FFD43B','Lápis']},
  {e:'video',p:'A professora quer mostrar um vídeo para a turma toda.',ok:['proj','tv'],op:['proj','liq','tv'],x:'O projetor e a televisão mostram o vídeo grande, para todos verem.',f:['film','#B388FF','Filme']},
  {e:'desenho',p:'Quero uma cópia do meu desenho no papel.',ok:['imp'],op:['imp','som','vent'],x:'A impressora coloca no papel o que está no computador.',f:['paint','#FF8FB1','Pincel']},
  {e:'relogio',p:'Como a turma sabe que o recreio acabou?',ok:['sinal'],op:['lam','sinal','gel'],x:'O sinal da escola toca e todo mundo sabe que é hora de voltar.',f:['book-one','#7BD389','Livro']},
  {e:'baleia',p:'Quero pesquisar sobre as baleias.',ok:['comp','cel'],op:['comp','ferro','cel'],x:'No computador e no celular dá para pesquisar na internet.',f:['whale','#6EC3FF','Baleia']},
  {e:'fala',p:'Vou apresentar um trabalho e a sala é grande.',ok:['micf','som'],op:['micf','gel','som'],x:'O microfone e a caixa de som deixam a voz mais alta.',f:['bachelor-cap-two','#B8C2FF','Capelo']}]},
 {nome:'Na rua',ic:['bus','#FFD43B'],cor:'#DDF1FC',selo:'#4DB5F5',txt:'Tecnologias para andar pela cidade.',fases:[
  {e:'caminho',p:'Não sei o caminho para a casa do meu amigo.',ok:['cel'],op:['cel','tv','desp'],x:'O celular tem mapa e mostra o caminho!',f:['map-draw','#7BD389','Mapa']},
  {e:'carro',p:'Os carros precisam saber a hora de parar para eu atravessar.',ok:['semaf'],op:['semaf','lam','som'],x:'O semáforo avisa: vermelho para parar, verde para seguir.',f:['car','#FF6B6B','Carro']},
  {e:'escola',p:'A escola é longe demais para ir a pé.',ok:['onibus','bici'],op:['onibus','gel','bici'],x:'O ônibus e a bicicleta levam a gente mais rápido.',f:['bus','#FFD43B','Ônibus']},
  {e:'mercado',p:'Preciso pagar as compras no mercado.',ok:['cart','cel'],op:['cart','vent','cel'],x:'Dá para pagar com a máquina de cartão e com o celular.',f:['shopping-cart','#7BD389','Carrinho de compras']},
  {e:'sacola',p:'Moro no 10º andar e estou com muitas sacolas.',ok:['elev'],op:['rad','elev','lan'],x:'O elevador leva a gente e as sacolas lá para cima.',f:['building-one','#C9D1FF','Prédio']},
  {e:'noite',p:'Vou passear à noite e preciso enxergar o caminho.',ok:['lan'],op:['lan','desp','rad'],x:'A lanterna ilumina o caminho no escuro.',f:['moon','#FFE08A','Lua']}]},
 {nome:'Saúde e cuidado',ic:['health','#FF6B6B'],cor:'#FFE3EE',selo:'#FF8FB1',txt:'Tecnologias que cuidam das pessoas.',fases:[
  {e:'febre',p:'Acho que estou com febre.',ok:['termo'],op:['termo','tv','liq'],x:'O termômetro mede a temperatura do corpo.',f:['health','#FF6B6B','Coração']},
  {e:'olhos',p:'Não consigo enxergar as letras do quadro.',ok:['oculos'],op:['fone','oculos','rel'],x:'Os óculos ajudam os olhos a enxergar melhor.',f:['glasses','#6EC3FF','Óculos']},
  {e:'mudo',p:'Meu avô não escuta bem.',ok:['audit'],op:['audit','lam','fogao'],x:'O aparelho auditivo ajuda o ouvido a escutar melhor.',f:['bell-ring','#FFD43B','Sininho']},
  {e:'dentes',p:'Preciso cuidar dos meus dentes.',ok:['escova'],op:['escova','ferro','rad'],x:'A escova de dentes limpa os dentes. Ela também é uma tecnologia!',f:['teeth','#FFFFFF','Dentinho']},
  {e:'parque',p:'Minha amiga não consegue andar e quer passear no parque.',ok:['cadeira'],op:['gel','cadeira','imp'],x:'A cadeira de rodas ajuda a amiga a ir aonde ela quiser.',f:['tree-one','#7BD389','Árvore']},
  {e:'remedio',p:'A vovó precisa lembrar do remédio na hora certa.',ok:['desp','cel'],op:['desp','tv','cel'],x:'O despertador e o alarme do celular avisam a hora certa.',f:['pill','#FF8FB1','Pílula']}]},
 {nome:'Conversar e se divertir',ic:['people-speak','#B388FF'],cor:'#EDE6FF',selo:'#9B7BFF',txt:'Falar com as pessoas, ouvir, ver e lembrar.',fases:[
  {e:'casa',p:'A vovó mora longe e eu quero ver ela.',ok:['cel'],op:['cel','gel','lam'],x:'Com o celular dá para fazer chamada de vídeo e ver a vovó!',f:['heart-ballon','#FF6B6B','Balão de coração']},
  {e:'chuva',p:'Quero saber se vai chover amanhã.',ok:['cel','tv'],op:['cel','lav','tv'],x:'O celular e a televisão mostram a previsão do tempo.',f:['umbrella','#6EC3FF','Guarda-chuva']},
  {e:'bolo',p:'Quero guardar a lembrança do meu aniversário.',ok:['cam','cel'],op:['cam','vent','cel'],x:'A câmera e o celular tiram fotos para a gente lembrar depois.',f:['birthday-cake','#FF8FB1','Bolo']},
  {e:'musica',p:'Quero ouvir a minha música preferida.',ok:['cel','som'],op:['cel','lam','som'],x:'O celular e a caixa de som tocam música.',f:['music','#B388FF','Nota musical']},
  {e:'dormir',p:'Quero ouvir música sem incomodar ninguém.',ok:['fone'],op:['som','fone','sinal'],x:'Com o fone de ouvido, só você escuta. Ele também ajuda quando o barulho incomoda.',f:['headset','#B388FF','Fone de ouvido']},
  {e:'coelho',p:'Quero assistir um desenho.',ok:['tv','cel'],op:['lav','tv','cel'],x:'A televisão e o celular mostram desenhos.',f:['rabbit','#FFC7D6','Coelhinho']}]},
 {nome:'Para que serve?',ic:['puzzle','#B8C2FF'],cor:'#E4E8FF',selo:'#7C8CFF',txt:'Agora é ao contrário: veja a tecnologia e descubra o que ela resolve.',fases:[
  {r:'gel',ok:[0],op:[['leite','Guardar a comida gelada'],['roupa','Lavar a roupa'],['musica','Tocar música']],x:'A geladeira guarda a comida gelada.',f:['snowflake','#9BE3F5','Floco de neve']},
  {r:'lav',ok:[0],op:[['roupa','Limpar a roupa suja'],['comida','Esquentar a comida'],['escuro','Iluminar o escuro']],x:'A máquina de lavar limpa a roupa.',f:['water','#6EC3FF','Gotinha']},
  {r:'termo',ok:[0],op:[['febre','Ver se tem febre'],['caminho','Mostrar o caminho'],['foto','Tirar foto']],x:'O termômetro mede se a gente está com febre.',f:['thermometer','#FF6B6B','Termômetro']},
  {r:'vent',ok:[0],op:[['calor','Refrescar no calor'],['leite','Guardar o leite'],['acordar','Acordar cedo']],x:'O ventilador refresca quando está calor.',f:['whirlwind','#B8C2FF','Ventinho']},
  {r:'semaf',ok:[0],op:[['carro','Ajudar a atravessar a rua'],['morango','Fazer suco'],['dentes','Limpar os dentes']],x:'O semáforo organiza a rua para a gente atravessar com segurança.',f:['semaforo','#C9D1FF','Semáforo']},
  {r:'cel',ok:[0,1,2],op:[['casa','Ver a vovó que mora longe'],['foto','Tirar foto'],['caminho','Mostrar o caminho'],['roupa','Lavar a roupa']],x:'O celular faz muitas coisas: chamada de vídeo, foto, mapa… Só não lava roupa!',f:['iphone','#6EC3FF','Celular']}]},
 {nome:'Antes e agora',ic:['hourglass','#FFB84D'],cor:'#F6EEDD',selo:'#C9A27A',txt:'Como as pessoas resolviam esses problemas antigamente? Agora são 4 opções.',fases:[
  {e:'casa',p:'Antes do celular, como as pessoas mandavam notícias para quem morava longe?',ok:['carta','telfixo'],op:['carta','telfixo','drone','tablet'],x:'Escreviam cartas e usavam o telefone fixo, que ficava preso na parede.',f:['stamp','#FF8FB1','Selo postal']},
  {e:'escuro',p:'Antes da lâmpada, como as casas eram iluminadas à noite?',ok:['vela'],op:['vela','lan','controle','wifi'],x:'Com velas e lampiões. A lâmpada elétrica chegou depois.',f:['spa-candle','#FFE08A','Velinha']},
  {e:'calor',p:'Antes do ventilador, como as pessoas se refrescavam?',ok:['leque'],op:['leque','arc','vitrola','mo'],x:'Abanavam com um leque. O ventilador e o ar-condicionado vieram depois.',f:['fan','#FF8FB1','Leque']},
  {e:'musica',p:'Antes do celular, como se ouvia música em casa?',ok:['rad','vitrola'],op:['rad','vitrola','tablet','drone'],x:'No rádio e na vitrola, que toca discos grandes.',f:['music-cd','#B388FF','Disco']},
  {e:'jornal',p:'Antes da internet, como as pessoas liam e ouviam as notícias do dia?',ok:['jornal','rad','tv'],op:['jornal','rad','tv','videogame'],x:'No jornal de papel, no rádio e na televisão.',f:['newspaper-folding','#E9ECF7','Jornal']},
  {e:'relogio',p:'Antes do celular, como as pessoas sabiam as horas na rua?',ok:['relpulso'],op:['relpulso','calc','carta','lan'],x:'Olhando o relógio de pulso ou o relógio grande da praça.',f:['watch','#7BD389','Relógio de pulso']}]},
 {nome:'Detetive do Tito',ic:['search','#B388FF'],cor:'#EDE6FF',selo:'#9B7BFF',txt:'Ao contrário: três resolvem, e você acha a que NÃO resolve.',fases:[
  {t:'intruso',e:'escuro',p:'Preciso enxergar no escuro.',ok:['gel'],op:['lan','lam','vela','gel'],x:'Lanterna, lâmpada e vela iluminam. A geladeira só deixa as coisas geladas.',f:['torch','#FFB84D','Tocha']},
  {t:'intruso',e:'musica',p:'Quero ouvir música.',ok:['ferro'],op:['rad','cel','som','ferro'],x:'Rádio, celular e caixa de som tocam música. O ferro só passa roupa.',f:['music','#B388FF','Nota musical']},
  {t:'intruso',e:'comida',p:'Quero preparar a comida.',ok:['imp'],op:['fogao','mo','liq','imp'],x:'Fogão, micro-ondas e liquidificador ajudam na cozinha. A impressora não.',f:['knife-fork','#C9D1FF','Talheres']},
  {t:'intruso',e:'caminho',p:'Quero chegar à casa da minha tia, que mora em outra cidade.',ok:['escova'],op:['onibus','carro','bici','escova'],x:'Ônibus, carro e bicicleta levam a gente. A escova de dentes não anda!',f:['road-sign','#FFB84D','Placa']},
  {t:'intruso',e:'casa',p:'Quero conversar com a vovó que mora longe.',ok:['termo'],op:['cel','telfixo','carta','termo'],x:'Celular, telefone fixo e carta levam a conversa. O termômetro só mede a febre.',f:['envelope','#FFE08A','Cartinha']},
  {t:'intruso',e:'relogio',p:'Preciso saber que horas são.',ok:['liq'],op:['rel','relpulso','cel','liq'],x:'Relógio de parede, relógio de pulso e celular mostram as horas. O liquidificador não.',f:['stopwatch','#7BD389','Cronômetro']}]},
 {nome:'Desafios do Tito',ic:['robot-one','#6EC3FF'],cor:'#DFF6F2',selo:'#2CBFA9',txt:'Os mais difíceis: 5 opções, energia, internet e medidas.',fases:[
  {e:'escuro',p:'A lanterna apagou. O que ela precisa para acender de novo?',ok:['pilha'],op:['pilha','wifi','tomada','carta','regua'],x:'A lanterna funciona com pilha. Quando a pilha acaba, é só trocar.',f:['battery-full','#7BD389','Pilha']},
  {e:'casa',p:'A geladeira e a televisão não funcionam sem o quê?',ok:['tomada'],op:['tomada','pilha','wifi','controle','carta'],x:'Elas precisam da energia elétrica, que chega pela tomada.',f:['plug','#FFB84D','Tomada']},
  {e:'video',p:'Quais aparelhos mostram vídeos da internet?',ok:['cel','comp','tablet'],op:['cel','comp','tablet','ferro','vela'],x:'Celular, computador e tablet mostram vídeos, quando têm internet.',f:['ipad','#B388FF','Tablet']},
  {r:'wifi',ok:[0],op:[['video','Levar a internet até os aparelhos'],['comida','Esquentar a comida'],['roupa','Lavar a roupa'],['febre','Medir a febre']],x:'O Wi-Fi leva a internet, sem fio, até o celular, o tablet e o computador.',f:['wifi','#6EC3FF','Wi-Fi']},
  {e:'febre',p:'O médico quer ouvir o coração e ver se tem febre.',ok:['estet','termo'],op:['estet','termo','micro','calc','drone'],x:'O estetoscópio escuta o coração e o termômetro mede a febre.',f:['stethoscope','#FF6B6B','Estetoscópio']},
  {e:'mesa',p:'Quero medir o tamanho da mesa.',ok:['regua','fita'],op:['regua','fita','rel','calc','termo'],x:'A régua e a fita métrica medem tamanhos. O termômetro mede temperatura e a calculadora faz contas.',f:['tape-measure','#FFD43B','Fita métrica']}]}
];
var FASES=[]; MUNDOS.forEach(function(m,mi){ m.fases.forEach(function(f,fi){ f.m=mi; f.i=fi; FASES.push(f); }); });
var NUM=['','uma','duas','três','quatro'];
var ELOGIOS=['Muito bem!','Você conseguiu!','Isso mesmo!','Boa ideia!','Mandou bem!'];

/* ======================================================================
   Memória (fica só neste aparelho) e ajustes
   ====================================================================== */
var CHAVE='qual-tecnologia-v2';
var est={feitas:{},som:false,anim:true,livre:false};
try{ var sv=JSON.parse(localStorage.getItem(CHAVE)||'null'); if(sv) for(var k in sv) est[k]=sv[k]; }catch(e){}
try{ if(!localStorage.getItem(CHAVE) && window.matchMedia('(prefers-reduced-motion: reduce)').matches) est.anim=false; }catch(e){}
function salva(){ try{ localStorage.setItem(CHAVE,JSON.stringify(est)); }catch(e){} }

var $=function(i){return document.getElementById(i)};
function el(tag,cls,html){ var d=document.createElement(tag); if(cls) d.className=cls; if(html!=null) d.innerHTML=html; return d; }
function txt(tag,cls,t){ var d=el(tag,cls); d.textContent=t; return d; }
function aplicaAnim(){ document.body.classList.toggle('sem-animacao',!est.anim); }
function depois(ms,fn){ return setTimeout(fn,est.anim?ms:0); }

/* sons baixinhos (desligados por padrão) */
var ctx=null;
function tom(freqs){
  if(!est.som) return;
  try{
    ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach(function(f,i){
      var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+i*.12;
      o.type='sine'; o.frequency.value=f; g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(.08,t+.03); g.gain.exponentialRampToValueAtTime(.0001,t+.35);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t+.4);
    });
  }catch(e){}
}
function fala(t){
  try{ speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(t); u.lang='pt-BR'; u.rate=.9; speechSynthesis.speak(u); }catch(e){}
}

/* ======================================================================
   Efeitos: faíscas, confete, mascote reagindo
   ====================================================================== */
var COR_FAISCA=['#FFC93C','#FF8FB1','#6EC3FF','#7BD389','#B388FF'];
function faiscas(alvo){
  if(!est.anim) return;
  var r=alvo.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(var i=0;i<10;i++){
    var f=el('div','faisca','<svg viewBox="0 0 24 24"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="'+COR_FAISCA[i%5]+'"/></svg>');
    var ang=i/10*Math.PI*2,dist=r.width*.55+Math.random()*30;
    f.style.left=(cx-7)+'px'; f.style.top=(cy-7)+'px';
    f.style.setProperty('--dx',Math.cos(ang)*dist+'px'); f.style.setProperty('--dy',Math.sin(ang)*dist+'px');
    document.body.appendChild(f); setTimeout(f.remove.bind(f),900);
  }
}
function confete(){
  if(!est.anim) return;
  for(var i=0;i<28;i++){
    var c=el('div','confete'); c.style.left=(Math.random()*100)+'vw'; c.style.background=COR_FAISCA[i%5];
    c.style.borderRadius=i%3===0?'50%':'3px'; c.style.zIndex=51;
    c.style.setProperty('--dx',(Math.random()*160-80)+'px'); c.style.setProperty('--giro',(Math.random()*720-360)+'deg');
    c.style.setProperty('--dur',(2.4+Math.random()*1.4)+'s'); c.style.setProperty('--atraso',(Math.random()*.5)+'s');
    document.body.appendChild(c); setTimeout(c.remove.bind(c),4600);
  }
}
function reage(tipo){
  var m=document.querySelector('#mascoteJogo .mascote'); if(!m) return;
  m.classList.remove('feliz','pensando'); void m.getBBox(); m.classList.add(tipo);
  clearTimeout(m._t); m._t=setTimeout(function(){ m.classList.remove(tipo); },1500);
}

/* ======================================================================
   Navegação
   ====================================================================== */
var telaAtual='mapa';
function mostra(id){
  ['mapa','jogo','album','ajustes'].forEach(function(t){ $(t).classList.toggle('oculto',t!==id); });
  var t=$(id); t.classList.remove('entra'); void t.offsetWidth; t.classList.add('entra');
  $('premio').classList.add('oculto');
  [].forEach.call(document.querySelectorAll('.confete,.faisca'),function(x){ x.remove(); });
  ['Mapa','Album','Ajustes'].forEach(function(n){ $('bt'+n).classList.toggle('ativo',id===n.toLowerCase()||(id==='jogo'&&n==='Mapa')); });
  try{ speechSynthesis.cancel(); }catch(e){}
  telaAtual=id; window.scrollTo(0,0);
}
function aberta(i){ return est.livre||i===0||!!est.feitas[i-1]||!!est.feitas[i]; }
function proxima(){ for(var i=0;i<FASES.length;i++) if(!est.feitas[i]) return i; return -1; }
function mundoCompleto(m){ return MUNDOS[m].fases.every(function(f){ return est.feitas[FASES.indexOf(f)]; }); }

/* ======================================================================
   Mapa
   ====================================================================== */
function mapa(){
  var t=$('mapa'); t.innerHTML='';
  var p=proxima(),nFeitas=Object.keys(est.feitas).length;
  var fl=el('div','fala'); fl.appendChild(el('div',null,mascote()));
  var msg=nFeitas===0?['Oi! Eu sou o Tito.','Vamos descobrir como as tecnologias ajudam a gente? Toque na bolinha amarela para começar.']
         :p<0?['Você visitou todos os lugares!','Pode jogar qualquer fase de novo quando quiser.']
         :['Que bom te ver!','A bolinha amarela mostra onde paramos.'];
  var b=el('div','balao'); b.appendChild(txt('b',null,msg[0])); b.appendChild(txt('span',null,msg[1])); fl.appendChild(b);
  t.appendChild(fl);
  var ilhas=el('div','ilhas');
  MUNDOS.forEach(function(m,mi){
    var c=el('section','ilha'); c.style.setProperty('--cor-ilha',m.cor); c.style.animationDelay=(mi*.06)+'s';
    var topo=el('div','ilha-topo');
    topo.appendChild(el('div','ilha-ic',desenho(m.ic)));
    var tx=el('div'); tx.appendChild(txt('h2',null,m.nome)); tx.appendChild(txt('p',null,m.txt)); topo.appendChild(tx);
    if(mundoCompleto(mi)) topo.appendChild(el('div','selo-ilha',ui('feito')+'<span>Explorado</span>'));
    c.appendChild(topo);
    var tr=el('div','trilha','<svg class="caminho" aria-hidden="true"></svg>');
    m.fases.forEach(function(f,fi){
      var gi=FASES.indexOf(f),bt=el('button','no'); bt.style.animationDelay=(mi*.06+fi*.05+.1)+'s';
      if(est.feitas[gi]){ bt.classList.add('feito'); bt.innerHTML=desenho(f.f)+'<span class="ok">'+CHECK+'</span>'; bt.setAttribute('aria-label','Fase '+(fi+1)+', já feita: '+f.f[2]); }
      else if(aberta(gi)){ bt.classList.add(gi===p?'atual':'aberto'); bt.textContent=fi+1; bt.setAttribute('aria-label','Fase '+(fi+1)); if(gi===p) bt.appendChild(el('span','aqui',mascote())); }
      else { bt.classList.add('fechado'); bt.innerHTML=ui('cadeado'); bt.setAttribute('aria-label','Fase '+(fi+1)+', ainda fechada'); }
      bt.onclick=function(){ if(aberta(gi)) joga(gi); };
      tr.appendChild(bt);
    });
    c.appendChild(tr); ilhas.appendChild(c);
  });
  t.appendChild(ilhas);
  mostra('mapa');
  requestAnimationFrame(function(){ desenhaCaminhos(true); });
}
function desenhaCaminhos(anima){
  document.querySelectorAll('#mapa .trilha').forEach(function(tr){
    var nos=tr.querySelectorAll('.no'); if(!nos.length) return;
    var pts=[].map.call(nos,function(n){ return [n.offsetLeft+n.offsetWidth/2,n.offsetTop+n.offsetHeight/2]; });
    var d='M'+pts[0][0]+' '+pts[0][1],dFeito=null,ult=-1;
    [].forEach.call(nos,function(n,i){ if(n.classList.contains('feito')) ult=i; });
    for(var i=1;i<pts.length;i++){
      var a=pts[i-1],b=pts[i],mx=(a[0]+b[0])/2;
      d+=' C'+mx+' '+a[1]+' '+mx+' '+b[1]+' '+b[0]+' '+b[1];
      if(i===Math.min(ult+1,pts.length-1)&&ult>=0) dFeito=d;
    }
    var s=tr.querySelector('svg.caminho');
    s.innerHTML='<path class="base" d="'+d+'"/>'+(dFeito?'<path class="feito" d="'+dFeito+'"/>':'')+'<path class="pontilhado" d="'+d+'"/>';
    var pf=s.querySelector('.feito');
    if(pf&&anima&&est.anim){ pf.style.setProperty('--len',pf.getTotalLength()); pf.classList.add('desenha'); }
  });
}
var tRes; window.addEventListener('resize',function(){ clearTimeout(tRes); tRes=setTimeout(function(){ if(telaAtual==='mapa') desenhaCaminhos(false); },120); });

/* ======================================================================
   Jogo
   ====================================================================== */
var atual=0,L=null,achadas=0,erros=0,trava=false,botoes=[];

function joga(i){
  atual=i; L=FASES[i]; achadas=0; erros=0; trava=false; botoes=[];
  var m=MUNDOS[L.m];
  $('jogo').style.setProperty('--cor-ilha',m.cor);
  $('chipMundo').innerHTML=desenho(m.ic); $('chipMundo').appendChild(txt('span',null,m.nome));
  var ps=$('passos'); ps.innerHTML='';
  m.fases.forEach(function(f,fi){ var d=el('i'); if(est.feitas[FASES.indexOf(f)]) d.className='f'; if(fi===L.i) d.className='a'; ps.appendChild(d); });
  $('mascoteJogo').innerHTML=mascote();
  $('aviso').innerHTML='';

  var multi=L.ok.length>1,perg,apoio,fig,texto,sub;
  if(L.r){
    perg='Para que serve?'; apoio=multi?'Ela resolve vários problemas. Encontre as '+NUM[L.ok.length]+' respostas certas!':'Toque no problema que ela resolve.';
    fig=desenho(T[L.r]); texto=T[L.r][2]; sub='Que problema ela resolve?';
  } else if(L.t==='intruso'){
    perg='Qual NÃO resolve?'; apoio='Três resolvem o problema. Toque na única que NÃO resolve.';
    fig=desenho(P[L.e]); texto=L.p; sub='Cuidado: aqui você procura a que não ajuda.';
  } else {
    perg='Qual tecnologia resolve?'; apoio=multi?'Aqui '+NUM[L.ok.length]+' tecnologias resolvem. Encontre as '+NUM[L.ok.length]+'!':'Toque na tecnologia que resolve o problema.';
    fig=desenho(P[L.e]); texto=L.p; sub=null;
  }
  $('pergunta').innerHTML=''; $('pergunta').appendChild(txt('b',null,perg)); $('pergunta').appendChild(txt('span',null,apoio));
  var cena=$('cena'); cena.innerHTML=''; cena.classList.remove('entra'); void cena.offsetWidth; cena.classList.add('entra');
  cena.appendChild(el('div','fig',fig));
  var ct=txt('div','txt',texto); if(sub) ct.appendChild(txt('small',null,sub)); cena.appendChild(ct);
  contador();

  var o=$('opcoes'); o.innerHTML='';
  var ordem=L.op.map(function(_,j){ return j; }).sort(function(){ return Math.random()-.5; });
  ordem.forEach(function(j,idx){
    var item=L.op[j],certo,svgOp,nome;
    if(L.r){ svgOp=desenho(P[item[0]]); nome=item[1]; certo=L.ok.indexOf(j)>=0; }
    else { svgOp=desenho(T[item]); nome=T[item][2]; certo=L.ok.indexOf(item)>=0; }
    var b=el('button','opcao',svgOp); b.appendChild(txt('span','t',nome)); b.style.animationDelay=(.2+idx*.07)+'s';
    b.setAttribute('aria-label',nome); b._certo=certo;
    b.onclick=function(){ escolhe(b); }; o.appendChild(b); botoes.push(b);
  });
  $('btDica').classList.remove('chama');
  mostra('jogo');
}
function contador(){
  var c=$('contador'); c.innerHTML='';
  if(L.ok.length<2) return;
  c.appendChild(txt('span',null,'Encontradas:'));
  for(var i=0;i<L.ok.length;i++) c.appendChild(el('b',i<achadas?'ok':'',i<achadas?CHECK:''));
}
function avisa(t,tipo,ic){
  var a=$('aviso'); a.innerHTML='';
  var c=el('div','aviso-caixa'+(tipo?' '+tipo:''),ic?ui(ic):''); c.appendChild(txt('span',null,t)); a.appendChild(c);
}
function escolhe(b){
  if(trava||b.classList.contains('certa')||b.classList.contains('fora')||b.classList.contains('resolve')) return;
  if(b._certo){
    b.classList.add('certa'); b.appendChild(el('span','ok-op',CHECK)); achadas++; tom([523]); faiscas(b); contador();
    if(achadas>=L.ok.length){ trava=true; reage('feliz'); depois(800,conclui); }
    else { reage('feliz'); avisa('Isso! Tem mais '+NUM[L.ok.length-achadas]+' que também resolve.','bom','feito'); }
  } else {
    erros++; tom([330]); reage('pensando');
    b.classList.add(L.t==='intruso'?'resolve':'fora'); if(est.anim){ b.classList.remove('balanca'); void b.offsetWidth; b.classList.add('balanca'); }
    var frases=L.t==='intruso'?['Essa resolve, sim! Procure a que NÃO resolve.','Pense: o que cada uma faz? Qual não tem nada a ver com o problema?']
                  :L.r?['Essa não é o que ela faz. Tudo bem, tente outra!','Pense: para que a gente usa essa tecnologia?']
                  :['Essa não resolve este problema. Tudo bem, tente outra!','Pense: o que precisa acontecer para resolver?'];
    avisa(frases[Math.min(erros-1,frases.length-1)],null,'pensa');
    if(erros>=2) $('btDica').classList.add('chama');
  }
}
function dica(){
  $('btDica').classList.remove('chama');
  var errados=botoes.filter(function(b){ return !b._certo&&!b.classList.contains('fora')&&!b.classList.contains('resolve'); });
  if(L.t==='intruso'){
    if(!errados.length){ avisa('Só sobrou uma: é ela que NÃO resolve!','dica','dica'); return; }
    errados[0].classList.add('resolve');
    avisa('Marquei uma que resolve. A que você procura está entre as outras!','dica','dica'); return;
  }
  if(!errados.length){ avisa('Todas as que sobraram resolvem! Toque nelas.','dica','dica'); return; }
  errados[0].classList.add('fora');
  avisa('Tirei uma que não resolve. Sobrou menos para escolher!','dica','dica');
}

/* ======================================================================
   Conclusão da fase
   ====================================================================== */
function vezesCelular(){ var n=0; FASES.forEach(function(f){ if(f.r==='cel') n+=f.ok.length; else if(!f.r&&f.ok.indexOf('cel')>=0) n++; }); return n; }
function pense(){
  var d=el('div','pense',icone('iphone','#6EC3FF'));
  d.appendChild(txt('span',null,'Você reparou? O celular apareceu como resposta '+vezesCelular()+' vezes! Por que será que ele resolve tanta coisa?'));
  return d;
}
function conclui(){
  var novo=!est.feitas[atual]; est.feitas[atual]=1; salva();
  tom([523,659,784]);
  var ult=atual===FASES.length-1,m=MUNDOS[L.m],fimMundo=L.i===m.fases.length-1;
  var p=$('premio'); p.innerHTML='';
  var c=el('div','cartao'); c.style.setProperty('--cor-ilha',m.cor);
  var mc=el('div',null,mascote()); c.appendChild(mc.firstChild); c.firstChild.classList.add('feliz');
  var h=txt('h2',null,ELOGIOS[Math.floor(Math.random()*ELOGIOS.length)]); h.id='premioTit'; c.appendChild(h);
  c.appendChild(txt('div','explica',L.x));
  var fg=el('div','figurinha','<div class="f-in">'+desenho(L.f)+'</div>'); fg.style.setProperty('--cor-selo',m.selo); c.appendChild(fg);
  c.appendChild(el('div','nome-fig',(novo?'Figurinha nova: ':'Você já tem: ')+'<b></b>')); c.lastChild.lastChild.textContent=L.f[2];
  if(fimMundo&&!ult) c.appendChild(txt('div','sub','Você explorou todo o lugar "'+m.nome+'"!'));
  if(ult) c.appendChild(pense());
  var lb=el('div','linha-bts');
  var bp=el('button','bt-principal');
  if(!ult){ bp.innerHTML='Continuar '+SETA_BRANCA; bp.onclick=function(){ joga(atual+1); }; }
  else { bp.innerHTML=ui('album')+' Ver meu álbum'; bp.onclick=album; }
  lb.appendChild(bp);
  var bo=el('button','bt-leve',ui('ouvir')+'Ouvir'); bo.onclick=function(){ fala(L.x); }; lb.appendChild(bo);
  var bm=el('button','bt-leve',ui('mapa')+'Mapa'); bm.onclick=mapa; lb.appendChild(bm);
  c.appendChild(lb); p.appendChild(c); p.classList.remove('oculto');
  confete();
  setTimeout(function(){ bp.focus(); },60);
}

/* ======================================================================
   Álbum
   ====================================================================== */
function album(){
  var t=$('album'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',ui('album')+'<span>Meu álbum</span>'));
  t.appendChild(txt('p','texto-tela','Cada fase guarda uma figurinha. Não tem pressa: cada um completa o seu álbum no seu tempo.'));
  MUNDOS.forEach(function(m,mi){
    var g=el('section','album-grupo'); g.style.setProperty('--cor-ilha',m.cor); g.style.animationDelay=(mi*.05)+'s';
    var h=el('h3',null,desenho(m.ic)); h.appendChild(txt('span',null,m.nome)); g.appendChild(h);
    var gr=el('div','album-grade');
    m.fases.forEach(function(f,fi){
      var tem=!!est.feitas[FASES.indexOf(f)];
      var s=el('div','selo '+(tem?'tem':'falta'),'<div class="s-in">'+(tem?desenho(f.f):silhueta(f.f[0]))+'</div>');
      s.style.setProperty('--cor-selo',m.selo); if(tem) s.firstChild.style.animationDelay=(mi*.05+fi*.04)+'s';
      s.appendChild(txt('span',null,tem?f.f[2]:'Fase '+(fi+1))); gr.appendChild(s);
    });
    g.appendChild(gr); t.appendChild(g);
  });
  if(proxima()<0){ var pz=pense(); pz.style.maxWidth='820px'; t.appendChild(pz); }
  mostra('album');
}

/* ======================================================================
   Ajustes
   ====================================================================== */
function ajustes(){
  var t=$('ajustes'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',ui('ajustes')+'<span>Ajustes</span>'));
  t.appendChild(txt('p','texto-tela','Os ajustes ficam guardados neste aparelho.'));
  var box=el('div','ajustes');
  function chave(ic,nome,desc,prop,fn){
    var b=el('button','ajuste',ui(ic)); b.setAttribute('role','switch'); b.setAttribute('aria-checked',est[prop]?'true':'false');
    var tx=txt('div','txt',nome); tx.appendChild(txt('small',null,desc)); b.appendChild(tx); b.appendChild(el('div','chave'));
    b.onclick=function(){ est[prop]=!est[prop]; salva(); b.setAttribute('aria-checked',est[prop]?'true':'false'); if(fn) fn(); };
    box.appendChild(b);
  }
  chave('som','Sons','Sons baixinhos ao tocar nas respostas.','som');
  chave('anim','Animações','Movimentos suaves na tela. Desligue se incomodar.','anim',aplicaAnim);
  chave('livre','Todas as fases abertas','Para o professor escolher qualquer fase.','livre');
  var r=el('button','ajuste perigo',ui('recomeca')); var rt=txt('div','txt','Recomeçar do zero'); rt.appendChild(txt('small',null,'Apaga as figurinhas deste aparelho.'));
  r.appendChild(rt);
  r.onclick=function(){ if(confirm('Apagar todas as figurinhas deste aparelho?')){ est.feitas={}; salva(); mapa(); } };
  box.appendChild(r); t.appendChild(box);
  mostra('ajustes');
}

/* ======================================================================
   Início
   ====================================================================== */
aplicaAnim();
$('btInicio').insertAdjacentHTML('afterbegin',mascote());
$('btMapa').insertAdjacentHTML('afterbegin',ui('mapa'));
$('btAlbum').insertAdjacentHTML('afterbegin',ui('album'));
$('btAjustes').insertAdjacentHTML('afterbegin',ui('ajustes'));
$('btVoltar').insertAdjacentHTML('afterbegin',icone('arrow-left','#fff'));
$('btOuvir').innerHTML=ui('ouvir');
$('btDica').insertAdjacentHTML('afterbegin',ui('dica'));
$('btInicio').onclick=mapa; $('btMapa').onclick=mapa; $('btVoltar').onclick=mapa;
$('btAlbum').onclick=album; $('btAjustes').onclick=ajustes; $('btDica').onclick=dica;
$('btOuvir').onclick=function(){ fala($('pergunta').firstChild.textContent+' '+$('cena').textContent); };
document.addEventListener('keydown',function(ev){ if(ev.key==='Escape'&&!$('premio').classList.contains('oculto')) mapa(); });
mapa();
})();
