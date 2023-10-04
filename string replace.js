function may__title() {
  $cardName = $('.item h2');
  $cardName.each(function() {
    $rarity = $(this)
      .closest('.item')
      .attr('class')
      .split(' ')[1];
    $(this).prepend('☆' + $rarity + '［');
    $(this).append('］');
  });
  
  $('.item').each(function() {
    $chara = $(this)
      .closest('.item')
      .attr('class')
      .split(' ')[2];
    $(this).find('h2').after('<h3>' + $chara + '</h3><hr>');
  });
};

may__title();


function may__tables() {
  let btn = $('.item .wiki');
  btn.each(function() {
    let text = $(this).text().split(',').join('</a><a>');
    $(this).html('<a>' + text + '</a>');
  });
  
  let $basic = btn.find('a:nth-child(1)');
  let $music = btn.find('a:nth-child(2)');
  
  let chart = $('.item i');
  chart.wrap('<table></table>');
  chart.each(function() {
    $release = $(this).text().split(',').join('</td><td>');
    $('<tr><td>' + $release + '</td></tr>').replaceAll('i');
  })
  $('.item table').prepend('<tr><th>追加日</th><th>キャンペーン</th></tr>');
  $('.item table').after('<hr>');
  $('td:nth-child(1)').attr('class','release');
  
  $basic.prepend('https://gamerch.com/ensemble-star-basic/entry/');
  $music.prepend('https://gamerch.com/ensemble-star-music/entry/');
  
  $basic.each(function() {
    let $link = $(this).text();
    $(this).attr('href',$link);
    $(this).attr('class','basic');
    $(this).html('Gamerch (Basic)');
  });
  $music.each(function() {
    let $link = $(this).text();
    $(this).attr('href',$link);
    $(this).attr('class','music');
    $(this).html('Gamerch (Music)');
  });
};

may__tables();


function may__characters() {
  let $charEng = $('.item h3');
  $charEng.each(function() {
    let eng = $(this).text();
    $(this).closest('.item').addClass(eng);
    let charJP = eng
      .replaceAll(/eichi/g,'天祥院 英智')
      .replaceAll(/wataru/g,'日々樹 渉')
      .replaceAll(/tori/g,'姫宮 桃李')
      .replaceAll(/yuzuru/g,'伏見 弓弦')
      
      .replaceAll(/hokuto/g,'氷鷹 北斗')
      .replaceAll(/subaru/g,'明星 スバル')
      .replaceAll(/makoto/g,'遊木 真')
      .replaceAll(/mao/g,'衣更 真緒')
      
      .replaceAll(/tetora/g,'南雲 鉄虎')
      .replaceAll(/midori/g,'高峯 翠')
      .replaceAll(/shinobu/g,'仙石 忍')
      .replaceAll(/chiaki/g,'守沢 千秋')
      .replaceAll(/kanata/g,'深海 奏汰')
      
      .replaceAll(/hiiro/g,'天城 一彩')
      .replaceAll(/aira/g,'白鳥 藍良')
      .replaceAll(/mayoi/g,'礼瀬 マヨイ')
      .replaceAll(/tatsumi/g,'風早 巽')
      
      .replaceAll(/nagisa/g,'乱 凪砂')
      .replaceAll(/hiyori/g,'巴 日和')
      .replaceAll(/ibara/g,'七種 茨')
      .replaceAll(/jun/g,'漣 ジュン')
      
      .replaceAll(/shu/g,'斎宮 宗')
      .replaceAll(/mika/g,'影片 みか')
      .replaceAll(/hinata/g,'葵 ひなた')
      .replaceAll(/yuuta/g,'葵 ゆうた')
      
      .replaceAll(/rinne/g,'天城 燐音')
      .replaceAll(/himeru/g,'HiMERU')
      .replaceAll(/kohaku/g,'桜河 こはく')
      .replaceAll(/niki/g,'椎名 ニキ')
      
      .replaceAll(/rei/g,'朔間 零')
      .replaceAll(/kaoru/g,'羽風 薫')
      .replaceAll(/koga/g,'大神 晃牙')
      .replaceAll(/adonis/g,'乙狩 アドニス')
      
      .replaceAll(/tomoya/g,'真白 友也')
      .replaceAll(/nazuna/g,'仁兎 なずな')
      .replaceAll(/mitsuru/g,'天満 光')
      .replaceAll(/hajime/g,'紫之 創')
      
      .replaceAll(/keito/g,'蓮巳 敬人')
      .replaceAll(/kuro/g,'鬼龍 紅郎')
      .replaceAll(/souma/g,'神崎 颯馬')
      
      .replaceAll(/tsukasa/g,'朱桜 司')
      .replaceAll(/leo/g,'月永 レオ')
      .replaceAll(/izumi/g,'瀬名 泉')
      .replaceAll(/ritsu/g,'朔間 凛月')
      .replaceAll(/arashi/g,'鳴上 嵐')
      
      .replaceAll(/natsume/g,'逆先 夏目')
      .replaceAll(/tsumugi/g,'青葉 つむぎ')
      .replaceAll(/sora/g,'春川 宙')
      
      .replaceAll(/madara/g,'三毛縞 斑');
    $(this).text(charJP);
  })
};

may__characters();


function may__autoObtainType() {
  let eventType = [
    'bigbang',
    'atozEvent',
    'motorshow',
    'tempest',
    'conquest',
    'nightclub',
    'highTouch',
    'succmatch',
    'darkNight',
    'nextDoor',
    'neverland',
    'hotlimit',
    'shangriLa',
    'featherTouch',
    'nightless',
    'bogieTime',
    'xxveilEvent',
    'brancoEvent',
    'cometShow',
    'twinPeaks',
    'antiqueLegends',
    'kuroCenter',
    'euthanasia',
    'magicLantern',
    'primavera',
    'ss1',
    'blackBunny',
    'ariadne',
    'ss2',
    'ringabellEvent',
    'ss3',
    'fragrance',
    'ss4',
    'ss5',
    'discoEvent',
    'ss6',
    'solids',
    'ss7',
    'scarletHalloween',
    'hiddenBeast',
    'ninjaClan',
    'lamortEvent',
    'ssFinal',
    'fourSeasons',
    'phantomShip',
    'loveLetter',
    'trilights',
    'hermitage',
    'kohaSpring',
    'puffybunnyEvent',
    'obligato',
    'vsGame',
    'bridelight',
    'soumaCenter',
    'ymnskTanabata',
    'cruise',
    'sunshine',
    'ymnskSports',
    'butoukaiEvent',
    'cards',
    'ymnskAustralia',
    'ghostic',
    'spider',
    'blendEvent',
    'ymnskFinal',
    'flambeEvent',
    'newColor',
    'greenGo',
    'universe',
    'rougeruby',
    'machina',
    'graduationEvent',
    'bigocean',
    'originEvent',
    'madParty',
    'weddingMarch',
    'numberEight',
    'parallelWorld',
    'tropical',
    'driftIsland',
    'lastMission',
    'atlantis',
    'raison',
    'escapeMansion',
    'entrain',
    'liesAndtruth'
  ];
  let scoutType = [
    'initial',
    'mikaFS1',
    'meowsketeer',
    'tatsumiFS1',
    'atozScout',
    'ibaraFS1',
    'anni5thStarProA',
    'honeyBee',
    'anni5thStarProB',
    'kogaFS1',
    'anni5thStarProC',
    'vagabond',
    'izumiFS1',
    'sweetsHouse',
    'toriFS1',
    'kingThieves',
    'maoFS1',
    'anni5thCosProA',
    'beastSurvival',
    'anni5thCosProB',
    'hokutoFS1',
    'dollhouse',
    'mitsuruFS1',
    'deadEndLand',
    'himeruFS1',
    'regular',
    'summerSnow',
    'soumaFS1',
    'anni5thRhyLinA',
    'wasteFlower',
    'anni5thRhyLinB',
    'shinobuFS1',
    'tsuki',
    'naruFS1',
    'werewolf',
    'tomoyaFS1',
    'spyD',
    'tsukasaFS1',
    'halloweenBox',
    'wataruFS1',
    'anni5thNewDiA',
    'centuryWars',
    'anni5thNewDiB',
    'shuFS1',
    'xxveilScout',
    'rinneFS1',
    'brancoScout',
    'mugiFS1',
    'ushimairi1st',
    'leoFS1',
    'ushimairi2nd',
    'nazunaFS1',
    'whiteLily',
    'hiyoriFS1',
    'sweetHunt',
    'yuutaFS1',
    'phantomFake',
    'madaraFS1',
    'springBed',
    'reiFS1',
    'reloaded',
    'junFS1',
    'asobiClub',
    'adonisFS1',
    'anni6thLoveA',
    'pretty5',
    'anni6thLoveB',
    'natsumeFS1',
    'anni6thLoveC',
    'harusaki',
    'anni6thLoveD',
    'mayoiFS1',
    'anni6thLoveE',
    'azaleas',
    'airaFS1',
    'ringabellScout',
    'makotoFS1',
    'gemSphere',
    'soraFS1',
    'prisonBreaker',
    'chiakiFS1',
    'frontDog',
    'hiiroFS1',
    'marine',
    'kohakuFS1',
    'discoScout',
    'subaruFS1',
    'army',
    'tetsuFS1',
    'anni6thSoulA',
    'fruitOct',
    'anni6thSoulB',
    'midoriFS1',
    'anni6thSoulC',
    'dramatica',
    'anni6thSoulD',
    'soleil',
    'kanataFS1',
    'decadance',
    'yuzuruFS1',
    'hotWinter',
    'lamortScout',
    'nikiFS1',
    'tiger5th',
    'hinataFS1',
    'whiteTiger',
    'hajimeFS1',
    'astraea',
    'kuroFS1',
    'romanticDate',
    'kaoruFS1',
    'myriad',
    'keitoFS1',
    'whiteBrim',
    'ritsuFS1',
    'cityRider',
    'eichiFS1',
    'puffybunnyScout',
    'nagisaFS1',
    'anni7thHeadsA',
    'bandBB',
    'anni7thHeadsB',
    'izumiFS2',
    'anni7thHeadsC',
    'orient',
    'anni7thHeadsD',
    'nazunaFS2',
    'anni7thHeadsE',
    'hangry',
    'cover1',
    'tsukasaFS2',
    'bankara',
    'kanataFS2',
    'keitoLecture',
    'hajimeFS2',
    'polkadots',
    'cover2',
    'mayoiFS2',
    'animals',
    'ibaraFS2',
    'redIsland',
    'maoFS2',
    'butoukaiScout',
    'cover3',
    'toriFS2',
    'anni7thTailsA',
    'mirage',
    'anni7thTailsB',
    'reiFS2',
    'anni7thTailsC',
    'chillYellow',
    'anni7thTailsD',
    'rinneFS2',
    'anni7thTailsE',
    'portrait',
    'cover4',
    'soraFS2',
    'dollyNight',
    'nagisaFS2',
    'blendScout',
    'naruFS2',
    'secretJewel',
    'cover5',
    'wataruFS2',
    'flambeScout',
    'mikaFS2',
    'scramble',
    'keitoFS2',
    'fumble',
    'cover6',
    'hiyoriFS2',
    'fairWaltz',
    'tatsumiFS2',
    'craftMonster',
    'soumaFS2',
    'flush',
    'mitsuruFS2',
    'graduationScout',
    'cover7',
    'leoFS2',
    'scorpio',
    'nikiFS2',
    'originScout',
    'hiiroFS2',
    'batsu',
    'shinobuFS2',
    'mangaClub',
    'kogaFS2',
    'biblion',
    'airaFS2',
    'showWindow',
    'yuzuruFS2',
    'suntan',
    'adonisFS2',
    'eveningPaddle',
    'crazybAlbum',
    'makotoFS2',
    'translucent',
    'tetsuFS2',
    'knightkillers',
    'rabitsAlbum',
    'natsumeFS2',
    'abyss',
    'junFS2',
    'sportsSurvivor',
    'dfAlbum',
    'subaruFS2',
    'privateRoom'
  ];
  let themeType = [
    'meowsketeer',
    'atozScout',
    'honeyBee',
    'vagabond',
    'sweetsHouse',
    'kingThieves',
    'beastSurvival',
    'dollhouse',
    'deadEndLand',
    'summerSnow',
    'wasteFlower',
    'tsuki',
    'werewolf',
    'spyD',
    'halloweenBox',
    'centuryWars',
    'xxveilScout',
    'brancoScout',
    'ushimairi1st',
    'ushimairi2nd',
    'whiteLily',
    'sweetHunt',
    'phantomFake',
    'springBed',
    'reloaded',
    'asobiClub',
    'pretty5',
    'harusaki',
    'azaleas',
    'ringabellScout',
    'gemSphere',
    'prisonBreaker',
    'frontDog',
    'marine',
    'discoScout',
    'army',
    'fruitOct',
    'dramatica',
    'soleil',
    'decadance',
    'hotWinter',
    'lamortScout',
    'tiger5th',
    'whiteTiger',
    'astraea',
    'romanticDate',
    'myriad',
    'whiteBrim',
    'cityRider',
    'puffybunnyScout',
    'bandBB',
    'orient',
    'hangry',
    'bankara',
    'keitoLecture',
    'polkadots',
    'animals',
    'redIsland',
    'butoukaiScout',
    'mirage',
    'chillYellow',
    'portrait',
    'dollyNight',
    'blendScout',
    'secretJewel',
    'flambeScout',
    'scramble',
    'fumble',
    'fairWaltz',
    'craftMonster',
    'flush',
    'graduationScout',
    'scorpio',
    'originScout',
    'batsu',
    'mangaClub',
    'biblion',
    'showWindow',
    'suntan',
    'eveningPaddle',
    'translucent',
    'knightkillers',
    'abyss',
    'sportsSurvivor',
    'privateRoom'
  ];
  let featureType = [
    'mikaFS1',
    'tatsumiFS1',
    'ibaraFS1',
    'kogaFS1',
    'izumiFS1',
    'toriFS1',
    'maoFS1',
    'hokutoFS1',
    'mitsuruFS1',
    'himeruFS1',
    'soumaFS1',
    'shinobuFS1',
    'naruFS1',
    'tomoyaFS1',
    'tsukasaFS1',
    'wataruFS1',
    'shuFS1',
    'rinneFS1',
    'mugiFS1',
    'leoFS1',
    'nazunaFS1',
    'hiyoriFS1',
    'yuutaFS1',
    'madaraFS1',
    'reiFS1',
    'junFS1',
    'adonisFS1',
    'natsumeFS1',
    'mayoiFS1',
    'airaFS1',
    'makotoFS1',
    'soraFS1',
    'chiakiFS1',
    'hiiroFS1',
    'kohakuFS1',
    'subaruFS1',
    'tetsuFS1',
    'midoriFS1',
    'kanataFS1',
    'yuzuruFS1',
    'nikiFS1',
    'hinataFS1',
    'hajimeFS1',
    'kuroFS1',
    'kaoruFS1',
    'keitoFS1',
    'ritsuFS1',
    'eichiFS1',
    'nagisaFS1',
    'izumiFS2',
    'nazunaFS2',
    'tsukasaFS2',
    'kanataFS2',
    'hajimeFS2',
    'mayoiFS2',
    'ibaraFS2',
    'maoFS2',
    'toriFS2',
    'reiFS2',
    'rinneFS2',
    'soraFS2',
    'nagisaFS2',
    'naruFS2',
    'wataruFS2',
    'mikaFS2',
    'keitoFS2',
    'hiyoriFS2',
    'tatsumiFS2',
    'soumaFS2',
    'mitsuruFS2',
    'leoFS2',
    'nikiFS2',
    'hiiroFS2',
    'shinobuFS2',
    'kogaFS2',
    'airaFS2',
    'yuzuruFS2',
    'adonisFS2',
    'makotoFS2',
    'tetsuFS2',
    'natsumeFS2',
    'junFS2',
    'subaruFS2'
  ];
  let limitedType = ['anni5thStarProA',
    'anni5thStarProB',
    'anni5thStarProC',
    'anni5thCosProA',
    'anni5thCosProB',
    'anni5thRhyLinA',
    'anni5thRhyLinB',
    'anni5thNewDiA',
    'anni5thNewDiB',
    'anni5ring',
    'anni6thLoveA',
    'anni6thLoveB',
    'anni6thLoveC',
    'anni6thLoveD',
    'anni6thLoveE',
    'anni6thSoulA',
    'anni6thSoulB',
    'anni6thSoulC',
    'anni6thSoulD',
    'roadToShow',
    'anni7thHeadsA',
    'anni7thHeadsB',
    'anni7thHeadsC',
    'anni7thHeadsD',
    'anni7thHeadsE',
    'cover1',
    'cover2',
    'cover3',
    'anni7thTailsA',
    'anni7thTailsB',
    'anni7thTailsC',
    'anni7thTailsD',
    'anni7thTailsE',
    'cover4',
    'cover5',
    'cover6',
    'cover7',
    'crazybAlbum',
    'rabitsAlbum',
    'entrain',
    'dfAlbum'
  ];
  let otherType = [
    'initial',
    'dfLogIn',
    'startDash',
    'anni5ring',
    'senSenble',
    'roadToShow',
    'tagSenble',
    'cryWolf',
    'rstPowerUp',
    'triTeam'
  ];
  
  
  $('.item').each(function() {
    let $cur = $(this);
    let $camapign = $cur.find('table:not([class]) td:nth-child(2)').text();
    
    const typeEvent = eventType.findIndex(function(name) {
      return name == $camapign;
    });
    const typeScout = scoutType.findIndex(function(name) {
      return name == $camapign;
    });
    const typeTheme = themeType.findIndex(function(name) {
      return name == $camapign;
    });
    const typeFeature = featureType.findIndex(function(name) {
      return name == $camapign;
    });
    const typeLimited = limitedType.findIndex(function(name) {
      return name == $camapign;
    });
    const typeOther = otherType.findIndex(function(name) {
      return name == $camapign;
    });
    
    if (typeEvent == 0) {
      $cur.addClass('event');
    }
    if (typeScout == 0) {
      $cur.addClass('scout');
    }
    if (typeTheme == 0) {
      $cur.addClass('theme');
    }
    if (typeFeature == 0) {
      $cur.addClass('feature');
    }
    if (typeLimited == 0) {
      $cur.addClass('limited');
    }
    if (typeOther == 0) {
      $cur.addClass('other');
    }

  });
}

may__autoObtainType();
