function cs__appendClasses() {
  var $info = $('table');
  $($info).each(function () {
    $info.addClass('info');
  });
  let $rows = $('tr');
  $rows.each(function() {
    let $items = $(this);
    let joins = $items.text().split(',').join('</td><td>');
    $(this).html('<td>' + joins + '</td>');
  });
}

cs__appendClasses();
 
function cs__add() {
  $('table.info').prepend(
    '<tr><th>id</th><th>card name</th><th>rarity</th><th>character</th><th>release date</th><th>campaign</th><th>basic</th><th>music</th></tr>'
  );
  $('tr:odd').css('background-color', '#ffffff');
  $('td:nth-child(3)').prepend('☆');
  $('td:nth-last-child(1)').prepend('https://gamerch.com/ensemble-star-music/entry/');
  $('td:nth-last-child(2)').prepend('https://gamerch.com/ensemble-star-basic/entry/');
}

cs__add();

function hyperLink() {
  let $basLink = $('td:nth-last-child(2)');
  $basLink.each(function() {
    let $item = $(this);
    let bLin = $item.text();
    $item.html('<a href="' + bLin + '">Link</a>');
  })
  
  let $musLink = $('td:nth-last-child(1)');
  $musLink.each(function() {
    let $item = $(this);
    let mLin = $item.text();
    $item.html('<a href="' + mLin + '">Link</a>');
  })
}

hyperLink();

function characters() {
  let $charEng = $('td:nth-child(4)');
  $charEng.each(function() {
    let charJP = $(this).text()
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
}

characters();
