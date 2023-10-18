may__engWikiLink();

function may__engWikiLink() {
  $('.item').each(function() {
    let $item = $(this);
    let character;
    switch ($item.find('h3').text()) {
      case '天祥院 英智':
        character = 'Eichi_Tenshouin';
        break;
      case '日々樹 渉':
        character = 'Wataru_Hibiki';
        break;
      case '姫宮 桃李':
        character = 'Tori_Himemiya';
        break;
      case '伏見 弓弦':
        character = 'Yuzuru_Fushimi';
        break;
      case '氷鷹 北斗':
        character = 'Hokuto_Hidaka';
        break;
      case '明星 スバル':
        character = 'Subaru_Akehoshi';
        break;
      case '遊木 真':
        character = 'Makoto_Yuuki';
        break;
      case '衣更 真緒':
        character = 'Mao_Isara';
        break;
      case '南雲 鉄虎':
        character = 'Tetora_Nagumo';
        break;
      case '高峯 翠':
        character = 'Midori_Takamine';
        break;
      case '仙石 忍':
        character = 'Shinobu_Sengoku';
        break;
      case '守沢 千秋':
        character = 'Chiaki_Morisawa';
        break;
      case '深海 奏汰':
        character = 'Kanata_Shinkai';
        break;
      case '天城 一彩':
        character = 'Hiiro_Amagi';
        break;
      case '白鳥 藍良':
        character = 'Aira_Shiratori';
        break;
      case '礼瀬 マヨイ':
        character = 'Mayoi_Ayase';
        break;
      case '風早 巽':
        character = 'Tatsumi_Kazehaya';
        break;
      case '乱 凪砂':
        character = 'Nagisa_Ran';
        break;
      case '巴 日和':
        character = 'Hiyori_Tomoe';
        break;
      case '七種 茨':
        character = 'Ibara_Saegusa';
        break;
      case '漣 ジュン':
        character = 'Jun_Sazanami';
        break;
      case '斎宮 宗':
        character = 'Shu_Itsuki';
        break;
      case '影片 みか':
        character = 'Mika_Kagehira';
        break;
      case '葵 ひなた':
        character = 'Hinata_Aoi';
        break;
      case '葵 ゆうた':
        character = 'Yuta_Aoi';
        break;
      case '天城 燐音':
        character = 'Rinne_Amagi';
        break;
      case 'HiMERU':
        character = 'HiMERU';
        break;
      case '桜河 こはく':
        character = 'Kohaku_Oukawa';
        break;
      case '椎名 ニキ':
        character = 'Niki_Shiina';
        break;
      case '朔間 零':
        character = 'Rei_Sakuma';
        break;
      case '羽風 薫':
        character = 'Kaoru_Hakaze';
        break;
      case '大神 晃牙':
        character = 'Koga_Oogami';
        break;
      case '乙狩 アドニス':
        character = 'Adonis_Otogari';
        break;
      case '真白 友也':
        character = 'Tomoya_Mashiro';
        break;
      case '仁兎 なずな':
        character = 'Nazuna_Nito';
        break;
      case '天満 光':
        character = 'Mitsuru_Tenma';
        break;
      case '紫之 創':
        character = 'Hajime_Shino';
        break;
      case '蓮巳 敬人':
        character = 'Keito_Hasumi';
        break;
      case '鬼龍 紅郎':
        character = 'Kuro_Kiryu';
        break;
      case '神崎 颯馬':
        character = 'Souma_Kanzaki';
        break;
      case '朱桜 司':
        character = 'Tsukasa_Suou';
        break;
      case '月永 レオ':
        character = 'Leo_Tsukinaga';
        break;
      case '瀬名 泉':
        character = 'Izumi_Sena';
        break;
      case '朔間 凛月':
        character = 'Ritsu_Sakuma';
        break;
      case '鳴上 嵐':
        character = 'Arashi_Narukami';
        break;
      case '逆先 夏目':
        character = 'Natsume_Sakasaki';
        break;
      case '青葉 つむぎ':
        character = 'Tsumugi_Aoba';
        break;
      case '春川 宙':
        character = 'Sora_Harukawa';
        break;
      case '三毛縞 斑':
        character = 'Madara_Mikejima';
        break;
    }
    
    let $engNew = 
      '<a id="eng" target="_blank">https://ensemble-stars.fandom.com/wiki/(' + 
      $item.attr('class').split(' ')[5] + ')_' + character + '</a>';
    $item.append($engNew);
    let $newLinkEng = $(this).find('#eng');
    $newLinkEng.attr('href',$newLinkEng.text());
    $newLinkEng.html('Fandom Wiki');
  });
}
