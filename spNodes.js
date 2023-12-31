
may__title();
may__info();
may__characters();
may__campaignOne();
may__status();
may__container();

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

function may__campaignOne() {
  let $campaignEng = $('td:last-child');
  $campaignEng.each(function() {
    let campaignJP = $(this).text()
      .replaceAll(/initial/g,'Music初期実装カード')
      .replaceAll(/mikaFS1/g,'フィーチャースカウト みか編')
      .replaceAll(/meowsketeer/g,'スカウト！ニャン銃士')
      .replaceAll(/bigbang/g,'新星団★輝きのBIGBANG！')
      .replaceAll(/tatsumiFS1/g,'フィーチャースカウト 巽編')
      .replaceAll(/atozScout/g,'スカウト！√AtoZ')
      .replaceAll(/atozEvent/g,'SHUFFLE×恋の√はAtoZ')
      .replaceAll(/ibaraFS1/g,'フィーチャースカウト 茨編')
      .replaceAll(/anni5thStarProA/g,'5周年記念スカウト スタプロ編 グループA')
      .replaceAll(/honeyBee/g,'スカウト！ハニービー')
      .replaceAll(/motorshow/g,'交差する／モーターショウ')
      .replaceAll(/anni5thStarProB/g,'5周年記念スカウト スタプロ編 グループB')
      .replaceAll(/kogaFS1/g,'フィーチャースカウト 晃牙編')
      .replaceAll(/anni5thStarProC/g,'5周年記念スカウト スタプロ編 グループC')
      .replaceAll(/vagabond/g,'スカウト！風来坊')
      .replaceAll(/tempest/g,'春雷＊謳歌のテンペスト')
      .replaceAll(/izumiFS1/g,'フィーチャースカウト 泉編')
      .replaceAll(/sweetsHouse/g,'スカウト！お菓子の家')
      .replaceAll(/conquest/g,'軋轢◆内なるコンクエスト')
      .replaceAll(/toriFS1/g,'フィーチャースカウト 桃李編')
      .replaceAll(/kingThieves/g,'スカウト！盗賊王')
      .replaceAll(/nightclub/g,'召しませ／ナイトクラブ')
      .replaceAll(/maoFS1/g,'フィーチャースカウト 真緒編')
      .replaceAll(/anni5thCosProA/g,'5周年記念スカウト コズプロ編 グループA')
      .replaceAll(/beastSurvival/g,'スカウト！ケモノサバイバル')
      .replaceAll(/highTouch/g,'再開＊成長見せてハイタッチ！')
      .replaceAll(/anni5thCosProB/g,'5周年記念スカウト コズプロ編 グループB')
      .replaceAll(/hokutoFS1/g,'フィーチャースカウト 北斗編')
      .replaceAll(/dollhouse/g,'スカウト！ドールハウス')
      .replaceAll(/succmatch/g,'温故知新／継承の御前試合')
      .replaceAll(/mitsuruFS1/g,'フィーチャースカウト 光編')
      .replaceAll(/deadEndLand/g,'スカウト！デッドエンドランド')
      .replaceAll(/darkNight/g,'新参！目覚めの暗夜行路')
      .replaceAll(/dfLogIn/g,'新参！Double Faceログインボーナス')
      .replaceAll(/himeruFS1/g,'フィーチャースカウト HiMERU編')
      .replaceAll(/regular/g,'ダイヤスカウト')
      .replaceAll(/summerSnow/g,'スカウト！サマースノー')
      .replaceAll(/nextDoor/g,'踏み出す行き先／ネクストドア')
      .replaceAll(/soumaFS1/g,'フィーチャースカウト 颯馬編')
      .replaceAll(/anni5thRhyLinA/g,'5周年記念スカウト リズリン編 グループA')
      .replaceAll(/wasteFlower/g,'スカウト！荒野の花')
      .replaceAll(/neverland/g,'降臨！紡ぎ始めるネヴァーランド')
      .replaceAll(/anni5thRhyLinB/g,'5周年記念スカウト リズリン編 グループB')
      .replaceAll(/shinobuFS1/g,'フィーチャースカウト 忍編')
      .replaceAll(/startDash/g,'キラキラ☆スタートダッシュミッション')
      .replaceAll(/tsuki/g,'スカウト！月見語り')
      .replaceAll(/hotlimit/g,'陽炎◆夏の名残とホットリミット')
      .replaceAll(/naruFS1/g,'フィーチャースカウト 嵐編')
      .replaceAll(/werewolf/g,'スカウト！ジンロウ')
      .replaceAll(/shangriLa/g,'銀幕死闘の／桃源郷偶像拳')
      .replaceAll(/tomoyaFS1/g,'フィーチャースカウト 友也編')
      .replaceAll(/spyD/g,'スカウト！スパイTHEミッション')
      .replaceAll(/featherTouch/g,'羨望♦小さな翼のフェザータッチ')
      .replaceAll(/tsukasaFS1/g,'フィーチャースカウト 司編')
      .replaceAll(/halloweenBox/g,'スカウト！ハロウィンBOX')
      .replaceAll(/nightless/g,'Howl！魂を燃やす不夜城')
      .replaceAll(/wataruFS1/g,'フィーチャースカウト 渉編')
      .replaceAll(/anni5thNewDiA/g,'5周年記念スカウト ニューディ編 グループA')
      .replaceAll(/centuryWars/g,'スカウト！世紀末ウォーズ')
      .replaceAll(/bogieTime/g,'バラエティとタッグ／ボギータイム！')
      .replaceAll(/anni5thNewDiB/g,'5周年記念スカウト ニューディ編 グループB')
      .replaceAll(/shuFS1/g,'フィーチャースカウト 宗編')
      .replaceAll(/xxveilScout/g,'スカウト！XXVeil')
      .replaceAll(/xxveilEvent/g,'SHUFFLE×夜の帳とバトラー')
      .replaceAll(/rinneFS1/g,'フィーチャースカウト 燐音編')
      .replaceAll(/brancoScout/g,'スカウト！Branco')
      .replaceAll(/brancoEvent/g,'SHUFFLE×白雪たちのMerryXmas')
      .replaceAll(/mugiFS1/g,'フィーチャースカウト つむぎ編')
      .replaceAll(/anni5ring/g,'5周年展示会 ring for SMILE 開催記念ログインボーナス')
      .replaceAll(/ushimairi1st/g,'スカウト！丑参り（前編）')
      .replaceAll(/cometShow/g,'変身！星々を繋ぐコメットショウ')
      .replaceAll(/leoFS1/g,'フィーチャースカウト レオ編')
      .replaceAll(/ushimairi2nd/g,'スカウト！丑参り（後編）')
      .replaceAll(/twinPeaks/g,'Beyond！共鳴するツインピークス')
      .replaceAll(/nazunaFS1/g,'フィーチャースカウト なずな編')
      .replaceAll(/whiteLily/g,'スカウト！ホワイトリリー')
      .replaceAll(/antiqueLegends/g,'秘宝紐解く／骨董綺譚')
      .replaceAll(/hiyoriFS1/g,'フィーチャースカウト 日和編')
      .replaceAll(/sweetHunt/g,'スカウト！スイートハント')
      .replaceAll(/kuroCenter/g,'一戦！矜持示す天下布武')
      .replaceAll(/yuutaFS1/g,'フィーチャースカウト ゆうた編')
      .replaceAll(/phantomFake/g,'スカウト！怪盗フェイク')
      .replaceAll(/euthanasia/g,'白昼夢＊微睡みのユーサネイジア')
      .replaceAll(/madaraFS1/g,'フィーチャースカウト 斑編')
      .replaceAll(/springBed/g,'スカウト！スプリングベッド')
      .replaceAll(/magicLantern/g,'投影★心を映す幻灯機')
      .replaceAll(/senSenble/g,'先輩とあんさんぶるミッション')
      .replaceAll(/reiFS1/g,'フィーチャースカウト 零編')
      .replaceAll(/reloaded/g,'スカウト！RELOADED')
      .replaceAll(/primavera/g,'ショコラ♥︎甘風そよぐプリマヴェーラ')
      .replaceAll(/junFS1/g,'フィーチャースカウト ジュン編')
      .replaceAll(/asobiClub/g,'スカウト！あそび部')
      .replaceAll(/ss1/g,'『SS』編／1st Stageサテライト')
      .replaceAll(/adonisFS1/g,'フィーチャースカウト アドニス編')
      .replaceAll(/anni6thLoveA/g,'6周年記念スカウト LOVE編 グループA')
      .replaceAll(/pretty5/g,'スカウト！プリティ5')
      .replaceAll(/blackBunny/g,'Wander！ブラックバニー in UNDERLAND')
      .replaceAll(/anni6thLoveB/g,'6周年記念スカウト LOVE編 グループB')
      .replaceAll(/natsumeFS1/g,'フィーチャースカウト 夏目編')
      .replaceAll(/anni6thLoveC/g,'6周年記念スカウト LOVE編 グループC')
      .replaceAll(/harusaki/g,'スカウト！ハルサキRide→ON！')
      .replaceAll(/ariadne/g,'攻略！迷宮結ぶアリアドネの糸')
      .replaceAll(/anni6thLoveD/g,'6周年記念スカウト LOVE編 グループD')
      .replaceAll(/mayoiFS1/g,'フィーチャースカウト マヨイ編')
      .replaceAll(/anni6thLoveE/g,'6周年記念スカウト LOVE編 グループE')
      .replaceAll(/azaleas/g,'スカウト！ツツジ燃ゆる')
      .replaceAll(/ss2/g,'『SS』編／2nd Stageサブマリン')
      .replaceAll(/airaFS1/g,'フィーチャースカウト 藍良編')
      .replaceAll(/ringabellScout/g,'スカウト！Ring.A.Bell')
      .replaceAll(/ringabellEvent/g,'SHUFFLE×Ringが誘う鐘の音')
      .replaceAll(/makotoFS1/g,'フィーチャースカウト 真編')
      .replaceAll(/gemSphere/g,'スカウト！ジェムスフィア')
      .replaceAll(/ss3/g,'『SS』編／3rd Stageシークレットサービス')
      .replaceAll(/soraFS1/g,'フィーチャースカウト 宙編')
      .replaceAll(/prisonBreaker/g,'スカウト！プリズンブレイカーズ')
      .replaceAll(/fragrance/g,'芳香＊忍ばせたフレグランス')
      .replaceAll(/chiakiFS1/g,'フィーチャースカウト 千秋編')
      .replaceAll(/frontDog/g,'スカウト！前線の番犬')
      .replaceAll(/ss4/g,'『SS』編／4th Stageシンセカイ')
      .replaceAll(/hiiroFS1/g,'フィーチャースカウト 一彩編')
      .replaceAll(/marine/g,'スカウト！潮騒マリーナ')
      .replaceAll(/ss5/g,'『SS』編／5th Stageサンドストーム')
      .replaceAll(/kohakuFS1/g,'フィーチャースカウト こはく編')
      .replaceAll(/discoScout/g,'スカウト！月都スペクタクル')
      .replaceAll(/discoEvent/g,'SHUFFLE×月光ミラーボール')
      .replaceAll(/subaruFS1/g,'フィーチャースカウト スバル編')
      .replaceAll(/army/g,'スカウト！一騎当千')
      .replaceAll(/ss6/g,'『SS』編／6th Stageサンクチュアリ')
      .replaceAll(/tetsuFS1/g,'フィーチャースカウト 鉄虎編')
      .replaceAll(/anni6thSoulA/g,'6周年記念スカウト SOUL編 グループA')
      .replaceAll(/fruitOct/g,'スカウト！実りのOCTOBER')
      .replaceAll(/solids/g,'羽撃き◆雲散らすソリッドステージ')
      .replaceAll(/anni6thSoulB/g,'6周年記念スカウト SOUL編 グループB')
      .replaceAll(/midoriFS1/g,'フィーチャースカウト 翠編')
      .replaceAll(/anni6thSoulC/g,'6周年記念スカウト SOUL編 グループC')
      .replaceAll(/dramatica/g,'スカウト！ドラマティカ')
      .replaceAll(/ss7/g,'『SS』編／7th Stageサドンデス')
      .replaceAll(/anni6thSoulD/g,'6周年記念スカウト SOUL編 グループD')
      .replaceAll(/soleil/g,'スカウト！ソレイユ')
      .replaceAll(/scarletHalloween/g,'悠久の鬼◆スカーレットハロウィン')
      .replaceAll(/kanataFS1/g,'フィーチャースカウト 奏汰編')
      .replaceAll(/decadance/g,'スカウト！刑事DANCE')
      .replaceAll(/hiddenBeast/g,'深層＊裏腹に潜んだBeast')
      .replaceAll(/yuzuruFS1/g,'フィーチャースカウト 弓弦編')
      .replaceAll(/hotWinter/g,'スカウト！ホットウィンター')
      .replaceAll(/ninjaClan/g,'ピンチ！？ズバッと両断！忍者団')
      .replaceAll(/lamortScout/g,'スカウト！La Mort')
      .replaceAll(/lamortEvent/g,'SHUFFLE×静寂の黒雪')
      .replaceAll(/nikiFS1/g,'フィーチャースカウト ニキ編')
      .replaceAll(/tiger5th/g,'スカウト！五黄の寅')
      .replaceAll(/ssFinal/g,'『SS』編／Final Stage 『SS』')
      .replaceAll(/hinataFS1/g,'フィーチャースカウト ひなた編')
      .replaceAll(/whiteTiger/g,'スカウト！白虎舞')
      .replaceAll(/fourSeasons/g,'Focus＊ファインダー越しの四季')
      .replaceAll(/hajimeFS1/g,'フィーチャースカウト 創編')
      .replaceAll(/astraea/g,'スカウト！アストレアの工房')
      .replaceAll(/phantomShip/g,'航海◆心を渡る幻影飛行船')
      .replaceAll(/kuroFS1/g,'フィーチャースカウト 紅郎編')
      .replaceAll(/romanticDate/g,'スカウト！ロマンチック？デイト')
      .replaceAll(/loveLetter/g,'ショコラ♥︎ハートで彩るLove Letter')
      .replaceAll(/kaoruFS1/g,'フィーチャースカウト 薫編')
      .replaceAll(/myriad/g,'スカウト！色彩百花')
      .replaceAll(/trilights/g,'Shine▲多面体のトライライツ')
      .replaceAll(/roadToShow/g,'特別上映版あんさんぶるスターズ！！ -Road to Show!!-公開記念ログインボーナス')
      .replaceAll(/keitoFS1/g,'フィーチャースカウト 敬人編')
      .replaceAll(/whiteBrim/g,'スカウト！ホワイトブリム')
      .replaceAll(/hermitage/g,'萌芽＊うつろいゆくエルミタージュ')
      .replaceAll(/tagSenble/g,'タッグであんさんぶるミッション')
      .replaceAll(/ritsuFS1/g,'フィーチャースカウト 凛月編')
      .replaceAll(/cityRider/g,'スカウト！きまぐれシティライダー')
      .replaceAll(/kohaSpring/g,'咲き初め＊つかの間の春宵一刻')
      .replaceAll(/cryWolf/g,'あんさんぶくぶスターズ！！-Cry Worf-')
      .replaceAll(/eichiFS1/g,'フィーチャースカウト 英智編')
      .replaceAll(/puffybunnyScout/g,'スカウト！Puffy☆Bunny')
      .replaceAll(/puffybunnyEvent/g,'SHUFFLE×Easter to you☆')
      .replaceAll(/nagisaFS1/g,'フィーチャースカウト 凪砂編')
      .replaceAll(/anni7thHeadsA/g,'7周年記念スカウト HEADS編 グループA')
      .replaceAll(/bandBB/g,'スカウト！バンド『BB』')
      .replaceAll(/obligato/g,'追憶＊遊色が奏でるオブリガート')
      .replaceAll(/anni7thHeadsB/g,'7周年記念スカウト HEADS編 グループB')
      .replaceAll(/izumiFS2/g,'フィーチャースカウト 泉編2')
      .replaceAll(/anni7thHeadsC/g,'7周年記念スカウト HEADS編 グループC')
      .replaceAll(/orient/g,'スカウト！Orient')
      .replaceAll(/vsGame/g,'Attack！孤軍奮闘のVS GAME')
      .replaceAll(/anni7thHeadsD/g,'7周年記念スカウト HEADS編 グループD')
      .replaceAll(/nazunaFS2/g,'フィーチャースカウト なずな編2')
      .replaceAll(/anni7thHeadsE/g,'7周年記念スカウト HEADS編 グループE')
      .replaceAll(/hangry/g,'スカウト！甜々ハングリー')
      .replaceAll(/bridelight/g,'祝辞＊爪弾くブライドライト')
      .replaceAll(/cover1/g,'COVER SONG 01 スカウト')
      .replaceAll(/tsukasaFS2/g,'フィーチャースカウト 司編2')
      .replaceAll(/bankara/g,'スカウト！バンカラグラフィティ')
      .replaceAll(/soumaCenter/g,'光明◆大空を仰ぐ三光鳥')
      .replaceAll(/kanataFS2/g,'フィーチャースカウト 奏汰編2')
      .replaceAll(/keitoLecture/g,'スカウト！敬人塾')
      .replaceAll(/ymnskTanabata/g,'分断夢ノ咲／希望を架ける七夕祭')
      .replaceAll(/hajimeFS2/g,'フィーチャースカウト 創編2')
      .replaceAll(/polkadots/g,'スカウト！みずたま模様')
      .replaceAll(/cruise/g,'船旅！海と出会うクルーズ')
      .replaceAll(/cover2/g,'COVER SONG 02 スカウト')
      .replaceAll(/mayoiFS2/g,'フィーチャースカウト マヨイ編2')
      .replaceAll(/animals/g,'スカウト！アニマルズ')
      .replaceAll(/sunshine/g,'夏風！異国で煌めくサンシャイン')
      .replaceAll(/ibaraFS2/g,'フィーチャースカウト 茨編2')
      .replaceAll(/redIsland/g,'スカウト！レッドホットアイランド')
      .replaceAll(/ymnskSports/g,'激闘夢ノ咲／存在示す体育祭！')
      .replaceAll(/maoFS2/g,'フィーチャースカウト 真緒編2')
      .replaceAll(/butoukaiScout/g,'スカウト！舞闘会')
      .replaceAll(/butoukaiEvent/g,'SHUFFLE×烈火の舞闘祭')
      .replaceAll(/cover3/g,'COVER SONG 03 スカウト')
      .replaceAll(/toriFS2/g,'フィーチャースカウト 桃李編2')
      .replaceAll(/anni7thTailsA/g,'7周年記念スカウト TAILS編 グループA')
      .replaceAll(/mirage/g,'スカウト！MIRAGE')
      .replaceAll(/cards/g,'Fantasy♠トランプ in UNDERLAND')
      .replaceAll(/anni7thTailsB/g,'7周年記念スカウト TAILS編 グループB')
      .replaceAll(/reiFS2/g,'フィーチャースカウト 零編2')
      .replaceAll(/anni7thTailsC/g,'7周年記念スカウト TAILS編 グループC')
      .replaceAll(/chillYellow/g,'スカウト！Chill Yellow')
      .replaceAll(/ymnskAustralia/g,'放浪夢ノ咲／大陸へ修学旅行！')
      .replaceAll(/anni7thTailsD/g,'7周年記念スカウト TAILS編 グループD')
      .replaceAll(/rinneFS2/g,'フィーチャースカウト 燐音編2')
      .replaceAll(/anni7thTailsE/g,'7周年記念スカウト TAILS編 グループE')
      .replaceAll(/portrait/g,'スカウト！PORTRAIT - Look back -')
      .replaceAll(/ghostic/g,'朧な影＊ゴースティックハロウィン')
      .replaceAll(/cover4/g,'COVER SONG 04 スカウト')
      .replaceAll(/soraFS2/g,'フィーチャースカウト 宙編2')
      .replaceAll(/dollyNight/g,'スカウト！ドーリーナイト')
      .replaceAll(/spider/g,'悪戯心◆スパイダーハロウィン')
      .replaceAll(/nagisaFS2/g,'フィーチャースカウト 凪砂編2')
      .replaceAll(/blendScout/g,'スカウト！BLEND+')
      .replaceAll(/blendEvent/g,'SHUFFLE×憩う一杯とカフェテリア')
      .replaceAll(/naruFS2/g,'フィーチャースカウト 嵐編2')
      .replaceAll(/secretJewel/g,'スカウト！秘密の宝石商')
      .replaceAll(/ymnskFinal/g,'誓願夢ノ咲／最後の七不思議とスタフェス')
      .replaceAll(/cover5/g,'COVER SONG 05 スカウト')
      .replaceAll(/wataruFS2/g,'フィーチャースカウト 渉編2')
      .replaceAll(/flambeScout/g,'スカウト！Flambé！')
      .replaceAll(/flambeEvent/g,'SHUFFLE×未知の聖夜とナイトヘッド！')
      .replaceAll(/mikaFS2/g,'フィーチャースカウト みか編2')
      .replaceAll(/scramble/g,'スカウト！強運SCRAMBLE')
      .replaceAll(/newColor/g,'Vision＊新たな景色を描くNEW COLOR')
      .replaceAll(/keitoFS2/g,'フィーチャースカウト 敬人編2')
      .replaceAll(/fumble/g,'スカウト！乱雲FUMBLE')
      .replaceAll(/greenGo/g,'社会人☆門出を出発新GO！')
      .replaceAll(/cover6/g,'COVER SONG 06 スカウト')
      .replaceAll(/hiyoriFS2/g,'フィーチャースカウト 日和編2')
      .replaceAll(/fairWaltz/g,'スカウト！フェアなワルツ')
      .replaceAll(/universe/g,'彩星！全てを包むthe Universe')
      .replaceAll(/rstPowerUp/g,'パワーアップ衣装つき！新カードプレゼントログインボーナス')
      .replaceAll(/tatsumiFS2/g,'フィーチャースカウト 巽編2')
      .replaceAll(/craftMonster/g,'スカウト！クラフトモンスター')
      .replaceAll(/rougeruby/g,'ショコラ◆格別な一粒Rouge&Ruby')
      .replaceAll(/soumaFS2/g,'フィーチャースカウト 颯馬編2')
      .replaceAll(/flush/g,'スカウト！赤面フラッシュ')
      .replaceAll(/machina/g,'独創◆先行くマキナの回廊')
      .replaceAll(/mitsuruFS2/g,'フィーチャースカウト 光編2')
      .replaceAll(/graduationScout/g,'スカウト！共に進む先')
      .replaceAll(/graduationEvent/g,'波乱の夢の先／君と立つグラデュエーション')
      .replaceAll(/triTeam/g,'三色お祭りあんスタ合戦！！')
      .replaceAll(/cover7/g,'COVER SONG 07 スカウト')
      .replaceAll(/leoFS2/g,'フィーチャースカウト レオ編2')
      .replaceAll(/scorpio/g,'スカウト！スコルピオの毒')
      .replaceAll(/bigocean/g,'謝儀！寄せては返すBig Ocean')
      .replaceAll(/nikiFS2/g,'フィーチャースカウト ニキ編2')
      .replaceAll(/originScout/g,'スカウト！風変わりな終止たち')
      .replaceAll(/originEvent/g,'Origin★星空を歌うAltered')
      .replaceAll(/hiiroFS2/g,'フィーチャースカウト 一彩編2')
      .replaceAll(/batsu/g,'スカウト！バツ×バッテン')
      .replaceAll(/madParty/g,'ひと雫＊特別を選んだMad Party in UNDERLAND')
      .replaceAll(/shinobuFS2/g,'フィーチャースカウト 忍編2')
      .replaceAll(/mangaClub/g,'スカウト！漫画会')
      .replaceAll(/weddingMarch/g,'花婿修行？／ウェディングマーチ！')
      .replaceAll(/kogaFS2/g,'フィーチャースカウト 晃牙編2')
      .replaceAll(/biblion/g,'スカウト！ビブリオン')
      .replaceAll(/numberEight/g,'スゴロク旅！BGMはナンバーエイト')
      .replaceAll(/airaFS2/g,'フィーチャースカウト 藍良編2')
      .replaceAll(/showWindow/g,'スカウト！雨垂れショーウィンドウ')
      .replaceAll(/parallelWorld/g,'無限大★僕らの可能性パラレルワールド')
      .replaceAll(/yuzuruFS2/g,'フィーチャースカウト 弓弦編2')
      .replaceAll(/suntan/g,'スカウト！サンタンSUMMER')
      .replaceAll(/tropical/g,'ぎゅっと☆好きを詰めたトロピカルパラダイス')
      .replaceAll(/adonisFS2/g,'フィーチャースカウト アドニス編2')
      .replaceAll(/eveningPaddle/g,'スカウト！夕立のパドル')
      .replaceAll(/driftIsland/g,'料理対決／漂流？アイランド')
      .replaceAll(/crazybAlbum/g,'アルバム発売記念スカウト Crazy:B')
      .replaceAll(/makotoFS2/g,'フィーチャースカウト 真編2')
      .replaceAll(/translucent/g,'スカウト！幻想夜光')
      .replaceAll(/lastMission/g,'ガーディアンズ◆アイとラストミッション')
      .replaceAll(/tetsuFS2/g,'フィーチャースカウト 鉄虎編2')
      .replaceAll(/knightkillers/g,'スカウト！ナイトキラーズ')
      .replaceAll(/atlantis/g,'蒼海＊輝く真実のアトランティス')
      .replaceAll(/rabitsAlbum/g,'アルバム発売記念スカウト Ra*bits')
      .replaceAll(/natsumeFS2/g,'フィーチャースカウト 夏目編2')
      .replaceAll(/abyss/g,'スカウト！海の鼓動 - Look back -')
      .replaceAll(/raison/g,'Remplacer＊語る人形とレゾンデートル')
      .replaceAll(/junFS2/g,'フィーチャースカウト ジュン編2')
      .replaceAll(/sportsSurvivor/g,'スカウト！スポーツサバイバー')
      .replaceAll(/escapeMansion/g,'謎・解／エスケープマンション')
      .replaceAll(/entrain/g,'あんさんぶるトレーニング！！リリース記念キャンペーン')
      .replaceAll(/dfAlbum/g,'アルバム発売記念スカウト Double Face')
    $(this).text(campaignJP);
  })
};

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
  
  $('div.gridBasic').each(function() {
    let $text = $(this).html().split(',').join('</p><p>');
    $(this).html('<p>' + $text + '</p>');
  });
  $('div.gridMusic').each(function() {
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
