// campaigns (initial - double face album)
function may__campaignOne() {
  let $campaignEng = $('td:last-child');
  let campaignArr = [
    ['initial','Basic/Music初期実装カード','scout other'],
    ['mikaFS1','フィーチャースカウト みか編','scout feature'],
    ['meowsketeer','スカウト！ニャン銃士','scout theme'],
    ['bigbang','新星団★輝きのBIGBANG！','event song'],
    ['tatsumiFS1','フィーチャースカウト 巽編','scout feature'],
    ['atozScout','スカウト！√AtoZ','scout theme'],
    ['atozEvent','SHUFFLE×恋の√はAtoZ','event song'],
    ['ibaraFS1','フィーチャースカウト 茨編','scout feature'],
    ['anni5thStarProA','5周年記念スカウト スタプロ編 グループA','scout limited'],
    ['honeyBee','スカウト！ハニービー','scout theme'],
    ['motorshow','交差する／モーターショウ','event tour'],
    ['anni5thStarProB','5周年記念スカウト スタプロ編 グループB','scout limited'],
    ['kogaFS1','フィーチャースカウト 晃牙編','scout feature'],
    ['anni5thStarProC','5周年記念スカウト スタプロ編 グループC','scout limited'],
    ['vagabond','スカウト！風来坊','scout theme'],
    ['tempest','春雷＊謳歌のテンペスト','event song'],
    ['izumiFS1','フィーチャースカウト 泉編','scout feature'],
    ['sweetsHouse','スカウト！お菓子の家','scout theme'],
    ['conquest','軋轢◆内なるコンクエスト','event song'],
    ['toriFS1','フィーチャースカウト 桃李編','scout feature'],
    ['kingThieves','スカウト！盗賊王','scout theme'],
    ['nightclub','召しませ／ナイトクラブ','event tour'],
    ['maoFS1','フィーチャースカウト 真緒編','scout feature'],
    ['anni5thCosProA','5周年記念スカウト コズプロ編 グループA','scout limited'],
    ['beastSurvival','スカウト！ケモノサバイバル','scout theme'],
    ['highTouch','再開＊成長見せてハイタッチ！','event song'],
    ['anni5thCosProB','5周年記念スカウト コズプロ編 グループB','scout limited'],
    ['hokutoFS1','フィーチャースカウト 北斗編','scout feature'],
    ['dollhouse','スカウト！ドールハウス','scout theme'],
    ['succmatch','温故知新／継承の御前試合','event tour'],
    ['mitsuruFS1','フィーチャースカウト 光編','scout feature'],
    ['deadEndLand','スカウト！デッドエンドランド','scout theme'],
    ['darkNight','新参！目覚めの暗夜行路','event song'],
    ['dfLogIn','新参！Double Faceログインボーナス','other'],
    ['regular','ダイヤスカウト','scout'],
    ['himeruFS1','フィーチャースカウト HiMERU編','scout feature'],
    ['summerSnow','スカウト！サマースノー','scout theme'],
    ['nextDoor','踏み出す行き先／ネクストドア','event tour'],
    ['soumaFS1','フィーチャースカウト 颯馬編','scout feature'],
    ['anni5thRhyLinA','5周年記念スカウト リズリン編 グループA','scout limited'],
    ['wasteFlower','スカウト！荒野の花','scout theme'],
    ['neverland','降臨！紡ぎ始めるネヴァーランド','event song'],
    ['anni5thRhyLinB','5周年記念スカウト リズリン編 グループB','scout limited'],
    ['shinobuFS1','フィーチャースカウト 忍編','scout feature'],
    ['startDash','キラキラ☆スタートダッシュミッション','other'],
    ['tsuki','スカウト！月見語り','scout theme'],
    ['hotlimit','陽炎◆夏の名残とホットリミット','event song'],
    ['naruFS1','フィーチャースカウト 嵐編','scout feature'],
    ['werewolf','スカウト！ジンロウ','scout theme'],
    ['shangriLa','銀幕死闘の／桃源郷偶像拳','event tour'],
    ['tomoyaFS1','フィーチャースカウト 友也編','scout feature'],
    ['spyD','スカウト！スパイTHEミッション','scout theme'],
    ['featherTouch','羨望♦小さな翼のフェザータッチ','event song'],
    ['tsukasaFS1','フィーチャースカウト 司編','scout feature'],
    ['halloweenBox','スカウト！ハロウィンBOX','scout theme'],
    ['nightless','Howl！魂を燃やす不夜城','event song'],
    ['wataruFS1','フィーチャースカウト 渉編','scout feature'],
    ['anni5thNewDiA','5周年記念スカウト ニューディ編 グループA','scout limited'],
    ['centuryWars','スカウト！世紀末ウォーズ','scout theme'],
    ['bogieTime','バラエティとタッグ／ボギータイム！','event tour'],
    ['anni5thNewDiB','5周年記念スカウト ニューディ編 グループB','scout limited'],
    ['shuFS1','フィーチャースカウト 宗編','scout feature'],
    ['xxveilScout','スカウト！XXVeil','scout theme'],
    ['xxveilEvent','SHUFFLE×夜の帳とバトラー','event song'],
    ['rinneFS1','フィーチャースカウト 燐音編','scout feature'],
    ['brancoScout','スカウト！Branco','scout theme'],
    ['brancoEvent','SHUFFLE×白雪たちのMerryXmas','event song'],
    ['mugiFS1','フィーチャースカウト つむぎ編','scout feature'],
    ['anni5ring','5周年展示会 ring for SMILE 開催記念ログインボーナス','other'],
    ['ushimairi1st','スカウト！丑参り（前編）','scout theme'],
    ['cometShow','変身！星々を繋ぐコメットショウ','event song'],
    ['leoFS1','フィーチャースカウト レオ編','scout feature'],
    ['ushimairi2nd','スカウト！丑参り（後編）','scout theme'],
    ['twinPeaks','Beyond！共鳴するツインピークス','event song'],
    ['nazunaFS1','フィーチャースカウト なずな編','scout feature'],
    ['whiteLily','スカウト！ホワイトリリー','scout theme'],
    ['antiqueLegends','秘宝紐解く／骨董綺譚','event tour'],
    ['hiyoriFS1','フィーチャースカウト 日和編','scout feature'],
    ['sweetHunt','スカウト！スイートハント','scout theme'],
    ['kuroCenter','一戦！矜持示す天下布武','event song'],
    ['yuutaFS1','フィーチャースカウト ゆうた編','scout feature'],
    ['phantomFake','スカウト！怪盗フェイク','scout theme'],
    ['euthanasia','白昼夢＊微睡みのユーサネイジア','event song'],
    ['madaraFS1','フィーチャースカウト 斑編','scout feature'],
    ['springBed','スカウト！スプリングベッド','scout theme'],
    ['magicLantern','投影★心を映す幻灯機','event song'],
    ['senSenble','先輩とあんさんぶるミッション ','other'],
    ['reiFS1','フィーチャースカウト 零編','scout feature'],
    ['reloaded','スカウト！RELOADED','scout theme'],
    ['primavera','ショコラ♥︎甘風そよぐプリマヴェーラ','event song'],
    ['junFS1','フィーチャースカウト ジュン編','scout feature'],
    ['asobiClub','スカウト！あそび部','scout theme'],
    ['ss1','『SS』編／1st Stageサテライト','event tour'],
    ['adonisFS1','フィーチャースカウト アドニス編','scout feature'],
    ['anni6thLoveA','6周年記念スカウト LOVE編 グループA','scout limited'],
    ['pretty5','スカウト！プリティ5','scout theme'],
    ['blackBunny','Wander！ブラックバニー in UNDERLAND','event song'],
    ['anni6thLoveB','6周年記念スカウト LOVE編 グループB','scout limited'],
    ['natsumeFS1','フィーチャースカウト 夏目編','scout feature'],
    ['anni6thLoveC','6周年記念スカウト LOVE編 グループC','scout limited'],
    ['harusaki','スカウト！ハルサキRide→ON！','scout theme'],
    ['ariadne','攻略！迷宮結ぶアリアドネの糸','event song'],
    ['anni6thLoveD','6周年記念スカウト LOVE編 グループD','scout limited'],
    ['mayoiFS1','フィーチャースカウト マヨイ編','scout feature'],
    ['anni6thLoveE','6周年記念スカウト LOVE編 グループE','scout limited'],
    ['azaleas','スカウト！ツツジ燃ゆる','scout theme'],
    ['ss2','『SS』編／2nd Stageサブマリン','event tour'],
    ['airaFS1','フィーチャースカウト 藍良編','scout feature'],
    ['ringabellScout','スカウト！Ring.A.Bell','scout theme'],
    ['ringabellEvent','SHUFFLE×Ringが誘う鐘の音','event song'],
    ['makotoFS1','フィーチャースカウト 真編','scout feature'],
    ['gemSphere','スカウト！ジェムスフィア','scout theme'],
    ['ss3','『SS』編／3rd Stageシークレットサービス','event tour'],
    ['soraFS1','フィーチャースカウト 宙編','scout feature'],
    ['prisonBreaker','スカウト！プリズンブレイカーズ','scout theme'],
    ['fragrance','芳香＊忍ばせたフレグランス','event song'],
    ['chiakiFS1','フィーチャースカウト 千秋編','scout feature'],
    ['frontDog','スカウト！前線の番犬','scout theme'],
    ['ss4','『SS』編／4th Stageシンセカイ','event tour'],
    ['hiiroFS1','フィーチャースカウト 一彩編','scout feature'],
    ['marine','スカウト！潮騒マリーナ','scout theme'],
    ['ss5','『SS』編／5th Stageサンドストーム','event tour'],
    ['kohakuFS1','フィーチャースカウト こはく編','scout feature'],
    ['discoScout','スカウト！月都スペクタクル','scout theme'],
    ['discoEvent','SHUFFLE×月光ミラーボール','event song'],
    ['subaruFS1','フィーチャースカウト スバル編','scout feature'],
    ['army','スカウト！一騎当千','scout theme'],
    ['ss6','『SS』編／6th Stageサンクチュアリ','event tour'],
    ['tetsuFS1','フィーチャースカウト 鉄虎編','scout feature'],
    ['anni6thSoulA','6周年記念スカウト SOUL編 グループA','scout limited'],
    ['fruitOct','スカウト！実りのOCTOBER','scout theme'],
    ['solids','羽撃き◆雲散らすソリッドステージ','event song'],
    ['anni6thSoulB','6周年記念スカウト SOUL編 グループB','scout limited'],
    ['midoriFS1','フィーチャースカウト 翠編','scout feature'],
    ['anni6thSoulC','6周年記念スカウト SOUL編 グループC','scout limited'],
    ['dramatica','スカウト！ドラマティカ','scout theme'],
    ['ss7','『SS』編／7th Stageサドンデス','event tour'],
    ['anni6thSoulD','6周年記念スカウト SOUL編 グループD','scout limited'],
    ['soleil','スカウト！ソレイユ','scout theme'],
    ['scarletHalloween','悠久の鬼◆スカーレットハロウィン','event song'],
    ['kanataFS1','フィーチャースカウト 奏汰編','scout feature'],
    ['decadance','スカウト！刑事DANCE','scout theme'],
    ['hiddenBeast','深層＊裏腹に潜んだBeast','event song'],
    ['yuzuruFS1','フィーチャースカウト 弓弦編','scout feature'],
    ['hotWinter','スカウト！ホットウィンター','scout theme'],
    ['ninjaClan','ピンチ！？ズバッと両断！忍者団','event song'],
    ['lamortScout','スカウト！La Mort','scout theme'],
    ['lamortEvent','SHUFFLE×静寂の黒雪','event song'],
    ['nikiFS1','フィーチャースカウト ニキ編','scout feature'],
    ['tiger5th','スカウト！五黄の寅','scout theme'],
    ['ssFinal','『SS』編／Final Stage 『SS』','event tour'],
    ['hinataFS1','フィーチャースカウト ひなた編','scout feature'],
    ['whiteTiger','スカウト！白虎舞','scout theme'],
    ['fourSeasons','Focus＊ファインダー越しの四季','event song'],
    ['hajimeFS1','フィーチャースカウト 創編','scout feature'],
    ['astraea','スカウト！アストレアの工房','scout theme'],
    ['phantomShip','航海◆心を渡る幻影飛行船','event song'],
    ['kuroFS1','フィーチャースカウト 紅郎編','scout feature'],
    ['romanticDate','スカウト！ロマンチック？デイト','scout theme'],
    ['loveLetter','ショコラ♥︎ハートで彩るLove Letter','event song'],
    ['kaoruFS1','フィーチャースカウト 薫編','scout feature'],
    ['myriad','スカウト！色彩百花','scout theme'],
    ['trilights','Shine▲多面体のトライライツ','event song'],
    ['roadToShow','特別上映版あんさんぶるスターズ！！ -Road to Show!!-公開記念ログインボーナス','other'],
    ['keitoFS1','フィーチャースカウト 敬人編','scout feature'],
    ['whiteBrim','スカウト！ホワイトブリム','scout theme'],
    ['tagSenble','タッグであんさんぶるミッション','other'],
    ['hermitage','萌芽＊うつろいゆくエルミタージュ','event song'],
    ['ritsuFS1','フィーチャースカウト 凛月編','scout feature'],
    ['cityRider','スカウト！きまぐれシティライダー','scout theme'],
    ['kohaSpring','咲き初め＊つかの間の春宵一刻','event song'],
    ['cryWolf','あんさんぶくぶスターズ！！-Cry Worf-','other'],
    ['eichiFS1','フィーチャースカウト 英智編','scout feature'],
    ['puffybunnyScout','スカウト！Puffy☆Bunny','scout theme'],
    ['puffybunnyEvent','SHUFFLE×Easter to you☆','event song'],
    ['nagisaFS1','フィーチャースカウト 凪砂編','scout feature'],
    ['anni7thHeadsA','7周年記念スカウト HEADS編 グループA','scout limited'],
    ['bandBB','スカウト！バンド『BB』','scout theme'],
    ['obligato','追憶＊遊色が奏でるオブリガート','event tour'],
    ['anni7thHeadsB','7周年記念スカウト HEADS編 グループB','scout limited'],
    ['izumiFS2','フィーチャースカウト 泉編2','scout feature'],
    ['anni7thHeadsC','7周年記念スカウト HEADS編 グループC','scout limited'],
    ['orient','スカウト！Orient','scout theme'],
    ['vsGame','Attack！孤軍奮闘のVS GAME','event song'],
    ['anni7thHeadsD','7周年記念スカウト HEADS編 グループD','scout limited'],
    ['nazunaFS2','フィーチャースカウト なずな編2','scout feature'],
    ['anni7thHeadsE','7周年記念スカウト HEADS編 グループE','scout limited'],
    ['hangry','スカウト！甜々ハングリー','scout theme'],
    ['bridelight','祝辞＊爪弾くブライドライト','event song'],
    ['cover1','COVER SONG 01 スカウト','scout limited'],
    ['tsukasaFS2','フィーチャースカウト 司編2','scout feature'],
    ['bankara','スカウト！バンカラグラフィティ','scout theme'],
    ['soumaCenter','光明◆大空を仰ぐ三光鳥','event song'],
    ['kanataFS2','フィーチャースカウト 奏汰編2','scout feature'],
    ['keitoLecture','スカウト！敬人塾','scout theme'],
    ['ymnskTanabata','分断夢ノ咲／希望を架ける七夕祭','event tour'],
    ['hajimeFS2','フィーチャースカウト 創編2','scout feature'],
    ['polkadots','スカウト！みずたま模様','scout theme'],
    ['cruise','船旅！海と出会うクルーズ','event song'],
    ['cover2','COVER SONG 02 スカウト','scout limited'],
    ['mayoiFS2','フィーチャースカウト マヨイ編2','scout feature'],
    ['animals','スカウト！アニマルズ','scout theme'],
    ['sunshine','夏風！異国で煌めくサンシャイン','event song'],
    ['ibaraFS2','フィーチャースカウト 茨編2','scout feature'],
    ['redIsland','スカウト！レッドホットアイランド','scout theme'],
    ['ymnskSports','激闘夢ノ咲／存在示す体育祭！','event tour'],
    ['maoFS2','フィーチャースカウト 真緒編2','scout feature'],
    ['butoukaiScout','スカウト！舞闘会','scout theme'],
    ['butoukaiEvent','SHUFFLE×烈火の舞闘祭','event song'],
    ['cover3','COVER SONG 03 スカウト','scout limited'],
    ['toriFS2','フィーチャースカウト 桃李編2','scout feature'],
    ['anni7thTailsA','7周年記念スカウト TAILS編 グループA','scout limited'],
    ['mirage','スカウト！MIRAGE','scout theme'],
    ['cards','Fantasy♠トランプ in UNDERLAND','event song'],
    ['anni7thTailsB','7周年記念スカウト TAILS編 グループB','scout limited'],
    ['reiFS2','フィーチャースカウト 零編2','scout feature'],
    ['anni7thTailsC','7周年記念スカウト TAILS編 グループC','scout limited'],
    ['chillYellow','スカウト！Chill Yellow','scout theme'],
    ['ymnskAustralia','放浪夢ノ咲／大陸へ修学旅行！','event tour'],
    ['anni7thTailsD','7周年記念スカウト TAILS編 グループD','scout limited'],
    ['rinneFS2','フィーチャースカウト 燐音編2','scout feature'],
    ['anni7thTailsE','7周年記念スカウト TAILS編 グループE','scout limited'],
    ['portrait','スカウト！PORTRAIT - Look back -','scout theme'],
    ['ghostic','朧な影＊ゴースティックハロウィン','event song'],
    ['cover4','COVER SONG 04 スカウト','scout limited'],
    ['soraFS2','フィーチャースカウト 宙編2','scout feature'],
    ['dollyNight','スカウト！ドーリーナイト','scout theme'],
    ['spider','悪戯心◆スパイダーハロウィン','event song'],
    ['nagisaFS2','フィーチャースカウト 凪砂編2','scout feature'],
    ['blendScout','スカウト！BLEND+','scout theme'],
    ['blendEvent','SHUFFLE×憩う一杯とカフェテリア','event song'],
    ['naruFS2','フィーチャースカウト 嵐編2','scout feature'],
    ['secretJewel','スカウト！秘密の宝石商','scout theme'],
    ['ymnskFinal','誓願夢ノ咲／最後の七不思議とスタフェス','event tour'],
    ['cover5','COVER SONG 05 スカウト','scout limited'],
    ['wataruFS2','フィーチャースカウト 渉編2','scout feature'],
    ['flambeScout','スカウト！Flambé！','scout theme'],
    ['flambeEvent','SHUFFLE×未知の聖夜とナイトヘッド！','event song'],
    ['mikaFS2','フィーチャースカウト みか編2','scout feature'],
    ['scramble','スカウト！強運SCRAMBLE','scout theme'],
    ['newColor','Vision＊新たな景色を描くNEW COLOR','event song'],
    ['keitoFS2','フィーチャースカウト 敬人編2','scout feature'],
    ['fumble','スカウト！乱雲FUMBLE','scout theme'],
    ['greenGo','社会人☆門出を出発新GO！','event song'],
    ['cover6','COVER SONG 06 スカウト','scout limited'],
    ['hiyoriFS2','フィーチャースカウト 日和編2','scout feature'],
    ['fairWaltz','スカウト！フェアなワルツ','scout theme'],
    ['universe','彩星！全てを包むthe Universe','event song'],
    ['rstPowerUp','フィーチャースカウト 巽編2','other'],
    ['tatsumiFS2','パワーアップ衣装つき！新カードプレゼントログインボーナス','scout feature'],
    ['craftMonster','スカウト！クラフトモンスター','scout theme'],
    ['rougeruby','ショコラ◆格別な一粒Rouge&Ruby','event song'],
    ['soumaFS2','フィーチャースカウト 颯馬編2','scout feature'],
    ['flush','スカウト！赤面フラッシュ','scout theme'],
    ['machina','独創◆先行くマキナの回廊','event song'],
    ['mitsuruFS2','フィーチャースカウト 光編2','scout feature'],
    ['graduationScout','スカウト！共に進む先','scout theme'],
    ['graduationEvent','波乱の夢の先／君と立つグラデュエーション','event tour'],
    ['triTeam','三色お祭りあんスタ合戦！！','other'],
    ['cover7','COVER SONG 07 スカウト','scout limited'],
    ['leoFS2','フィーチャースカウト レオ編2','scout feature'],
    ['scorpio','スカウト！スコルピオの毒','scout theme'],
    ['bigocean','謝儀！寄せては返すBig Ocean','event song'],
    ['nikiFS2','フィーチャースカウト ニキ編2','scout feature'],
    ['originScout','スカウト！風変わりな終止たち','scout theme'],
    ['originEvent','Origin★星空を歌うAltered','event tour'],
    ['hiiroFS2','フィーチャースカウト 一彩編2','scout feature'],
    ['batsu','スカウト！バツ×バッテン','scout theme'],
    ['madParty','ひと雫＊特別を選んだMad Party in UNDERLAND','event song'],
    ['shinobuFS2','フィーチャースカウト 忍編2','scout feature'],
    ['mangaClub','スカウト！漫画会','scout theme'],
    ['weddingMarch','花婿修行？／ウェディングマーチ！','event tour'],
    ['kogaFS2','フィーチャースカウト 晃牙編2','scout feature'],
    ['biblion','スカウト！ビブリオン','scout theme'],
    ['numberEight','スゴロク旅！BGMはナンバーエイト','event song'],
    ['airaFS2','フィーチャースカウト 藍良編2','scout feature'],
    ['showWindow','スカウト！雨垂れショーウィンドウ','scout theme'],
    ['parallelWorld','無限大★僕らの可能性パラレルワールド','event song'],
    ['yuzuruFS2','フィーチャースカウト 弓弦編2','scout feature'],
    ['suntan','スカウト！サンタンSUMMER','scout theme'],
    ['tropical','ぎゅっと☆好きを詰めたトロピカルパラダイス','event song'],
    ['adonisFS2','フィーチャースカウト アドニス編2','scout feature'],
    ['eveningPaddle','スカウト！夕立のパドル','scout theme'],
    ['driftIsland','料理対決／漂流？アイランド','event tour'],
    ['crazybAlbum','アルバム発売記念スカウト Crazy：B','scout limited'],
    ['makotoFS2','フィーチャースカウト 真編2','scout feature'],
    ['translucent','スカウト！幻想夜光','scout theme'],
    ['lastMission','ガーディアンズ◆アイとラストミッション','event song'],
    ['tetsuFS2','フィーチャースカウト 鉄虎編2','scout feature'],
    ['knightkillers','スカウト！ナイトキラーズ','scout theme'],
    ['atlantis','蒼海＊輝く真実のアトランティス','event song'],
    ['rabitsAlbum','アルバム発売記念スカウト Ra*bits','scout limited'],
    ['natsumeFS2','フィーチャースカウト 夏目編2','scout feature'],
    ['abyss','スカウト！海の鼓動 - Look back -','scout theme'],
    ['raison','Remplacer＊語る人形とレゾンデートル','event song'],
    ['junFS2','フィーチャースカウト ジュン編2','scout feature'],
    ['sportsSurvivor','スカウト！スポーツサバイバー','scout theme'],
    ['escapeMansion','謎・解／エスケープマンション','event tour'],
    ['entrain','あんさんぶるトレーニング！！リリース記念キャンペーン','other'],
    ['dfAlbum','アルバム発売記念スカウト Double Face','scout limited']
  ];
  $campaignEng.each(function() {
    campaignReplaceClass($(this),campaignArr);
  });
}
