// campaigns (subaru fs2 - switch climax)
function may__campaignTwo() {
  let $campaignEng = $('td:last-child');
  let campaignArr = [
    ['subaruFS2','フィーチャースカウト スバル編2','scout feature'],
    ['privateRoom','スカウト！プライベートルーム','scout theme'],
    ['liesAndtruth','表裏◆LiesアンドTruthの2×2','event song'],
    ['fineAlbum','アルバム発売記念スカウト fine','scout limited'],
    ['kuroFS2','フィーチャースカウト 紅郎編2','scout feature'],
    ['new2wink','2wink新☆2カードプレゼントログインボーナス','other'],
    ['hidingMoon','スカウト！月隠れの宴','scout theme'],
    ['holic','明ける夜＊ホリスティックハロウィン','event song'],
    ['tsumugiFS2','フィーチャースカウト つむぎ編2','scout feature'],
    ['yorishiro','スカウト！君の依代','scout theme'],
    ['chanbara','シンケン勝負／チャンバラナイト','event tour'],
    ['valkAlbum','アルバム発売記念スカウト Valkyrie','scout limited'],
    ['moeru','燃える晃牙もらえる！ハーフアニバーサリー記念ミッション！','other'],
    ['chiakiFS2','フィーチャースカウト 千秋編2','scout feature'],
    ['madeMe','スカウト！Made Me','scout theme'],
    ['flashback','分かれ道＊憧れた姿とフラッシュバック','event song'],
    ['eichiFS2','フィーチャースカウト 英智編2','scout feature'],
    ['colorCode','スカウト！カラーコード','scout theme'],
    ['grandStage','昇華＊天地鳴動の晴レ舞台','event song'],
    ['winkAlbum','アルバム発売記念スカウト 2wink','scout limited'],
    ['himeruFS2','フィーチャースカウト HiMERU編2','scout feature'],
    ['whiteBear','スカウト！ホワイトベア','scout theme'],
    ['xday','贈り物★子供たちのためのXday！','event song'],
    ['alkaAlbum','アルバム発売記念スカウト ALKALOID','scout limited'],
    ['kaoruFS2','フィーチャースカウト 薫編2','scout feature'],
    ['goldHeaven','スカウト！黄金天','scout theme'],
    ['sugoroku','探り合いの出目／双六盤上戦','event tour'],
    ['tomoyaFS2','フィーチャースカウト 友也編2','scout feature'],
    ['crane','スカウト！宝相華','scout theme'],
    ['stellaMaris','Reverb★水平線を渡るステラマリス','event song'],
    ['undeadAlbum','アルバム発売記念スカウト UNDEAD','scout limited'],
    ['ritsuFS2','フィーチャースカウト　凛月編2','scout feature'],
    ['koikoi','スカウト！恋こい喫茶','scout theme'],
    ['candyHouse','ショコラ△瞳の中のキャンディーハウス','event song']
  ]
    
  $campaignEng.each(function() {
    campaignReplaceClass($(this),campaignArr);
  });
}
