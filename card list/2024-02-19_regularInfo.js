// card/character headings
function may__title() {
  let $cardName, $chara, $character;
  
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
      .attr('class')
      .split(' ')[2];
    switch ($chara) {
      case 'eichi':
        $character = '天祥院 英智';
        break;
      case 'wataru':
        $character = '日々樹 渉';
        break;
      case 'tori':
        $character = '姫宮 桃李';
        break;
      case 'yuzuru':
        $character = '伏見 弓弦';
        break;
        
      case 'hokuto':
        $character = '氷鷹 北斗';
        break;
      case 'subaru':
        $character = '明星 スバル';
        break;
      case 'makoto':
        $character = '遊木 真';
        break;
      case 'mao':
        $character = '衣更 真緒';
        break;
        
      case 'tetora':
        $character = '南雲 鉄虎';
        break;
      case 'midori':
        $character = '高峯 翠';
        break;
      case 'shinobu':
        $character = '仙石 忍';
        break;
      case 'chiaki':
        $character = '守沢 千秋';
        break;
      case 'kanata':
        $character = '深海 奏汰';
        break;
        
      case 'hiiro':
        $character = '天城 一彩';
        break;
      case 'aira':
        $character = '白鳥 藍良';
        break;
      case 'mayoi':
        $character = '礼瀬 マヨイ';
        break;
      case 'tatsumi':
        $character = '風早 巽';
        break;
        
      case 'nagisa':
        $character = '乱 凪砂';
        break;
      case 'hiyori':
        $character = '巴 日和';
        break;
      case 'ibara':
        $character = '七種 茨';
        break;
      case 'jun':
        $character = '漣 ジュン';
        break;
        
      case 'shu':
        $character = '斎宮 宗';
        break;
      case 'mika':
        $character = '影片 みか';
        break;
      case 'hinata':
        $character = '葵 ひなた';
        break;
      case 'yuuta':
        $character = '葵 ゆうた';
        break;
        
      case 'rinne':
        $character = '天城 燐音';
        break;
      case 'himeru':
        $character = 'HiMERU';
        break;
      case 'kohaku':
        $character = '桜河 こはく';
        break;
      case 'niki':
        $character = '椎名 ニキ';
        break;
        
      case 'rei':
        $character = '朔間 零';
        break;
      case 'kaoru':
        $character = '羽風 薫';
        break;
      case 'koga':
        $character = '大神 晃牙';
        break;
      case 'adonis':
        $character = '乙狩 アドニス';
        break;
        
      case 'tomoya':
        $character = '真白 友也';
        break;
      case 'nazuna':
        $character = '仁兎 なずな';
        break;
      case 'mitsuru':
        $character = '天満 光';
        break;
      case 'hajime':
        $character = '紫之 創';
        break;
        
      case 'keito':
        $character = '蓮巳 敬人';
        break;
      case 'kuro':
        $character = '鬼龍 紅郎';
        break;
      case 'souma':
        $character = '神崎 颯馬';
        break;
        
      case 'tsukasa':
        $character = '朱桜 司';
        break;
      case 'leo':
        $character = '月永 レオ';
        break;
      case 'izumi':
        $character = '瀬名 泉';
        break;
      case 'ritsu':
        $character = '朔間 凛月';
        break;
      case 'arashi':
        $character = '鳴上 嵐';
        break;
        
      case 'natsume':
        $character = '逆先 夏目';
        break;
      case 'tsumugi':
        $character = '青葉 つむぎ';
        break;
      case 'sora':
        $character = '春川 宙';
        break;
      case 'madara':
        $character = '三毛縞 斑';
        break;
    }
    $(this).find('h2').after('<h3>' + $character + '</h3><hr>');
  });
};

// release/campaign info box
function may__info() {
  $('.item').each(function() {
    let $item = $(this).find('i');
    let $release = $item
      .text()
      .split(',')
      .join('</td><td>');
    $('<table><tr><td>' + $release + '</td></tr></table>')
      .replaceAll($item);
  })
}

// campaign shorthand replace, class addition
function campaignReplaceClass(item,array) {
  let $this = item;
  let arr = array;
  let $cur;
  for (let l = 0; l < arr.length; l++) {
    $cur = arr[l];
    if ($this.text() == $cur[0]) {
      break;
    }
  };
  if ($this.text() == $cur[0]) {
    $this.closest('.item').addClass($cur[2]);
    $this.text($cur[1]);
  };
}

// IR status
function may__status() {
  $('.item').each(function() {
    let $card = $(this)
    if ($card.hasClass('completeB') == false) {
      $card.addClass('incompleteB');
    };
    if ($card.hasClass('completeM') == false) {
      $card.addClass('incompleteM');
    };
  });
};

// wiki links
function may__container() {

  $('.item table').prepend('<tr><th>追加日</th><th>キャンペーン</th></tr>');
  $('td:nth-child(1)').attr('class','release');
  
  $('.item > div').each(function() {
    $(this).addClass('infoContainer');
  });
  $('.infoContainer').each(function() {
    let $item = $(this);
    $item
      .find('div:first')
      .addClass('gridBasic');
    $item
      .find('div:not([class])')
      .addClass('gridMusic');
  });
  
  $('.item').each(function() {
    let $item = $(this);
    let $basicNew = 
      '<a class="basic" target="_blank">https://gamerch.com/ensemble-star-basic/entry/' + 
      $item.attr('class').split(' ')[3] + '</a>';
    let $musicNew = 
      '<a class="music" target="_blank">https://gamerch.com/ensemble-star-music/entry/' + 
      $item.attr('class').split(' ')[4] + '</a>';
    $item.find('div.infoContainer').append($basicNew);
    $item.find('div.infoContainer').append($musicNew);
    let $newLinkB = $(this).find('a.basic');
    let $newLinkM = $(this).find('a.music');
    $newLinkB.attr('href',$newLinkB.text());
    $newLinkB.html('Gamerch');
    $newLinkM.attr('href',$newLinkM.text());
    $newLinkM.html('Gamerch');
  });
  
  $('.gridBasic, .gridMusic').each(function() {
    let $text = $(this).html().split(',').join('</p><p>');
    $(this).html('<p>' + $text + '</p>');
  });
  
  $('.infoContainer').each(function() {
    let $item = $(this);
    $item
      .find('div.gridBasic')
      .prepend('<h4><span>Basic</span></h4>');
    $item
      .find('div.gridMusic')
      .prepend('<h4><span>Music</span></h4>');
  });
}
