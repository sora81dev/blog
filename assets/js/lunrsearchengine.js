
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "現在準備中 "
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               NeoPixel制御指南              :       超お久しぶりです。最近は受験生なもので、全然したいことができてないわけなんですが、NeoPixelを乗っけたロボットを全国大会に持っていったら案外興味を持ってくれました。 主に興味を持ってくれた人たち   FTomo@ftomo  Yuta@yuta_ciao  会場にいたたくさんのロボカッパーさんたち :                                                                               そら                 14 Jun 2024                                                                                                                           岐阜ブロック              :       さぁ、このサイトに代わってから約1年が経過しました。皆さんいかがお過ごしでしょうか？珈琲牛乳Twitter担当のSoraです。:                                                                               そら                 02 Mar 2024                                                                                                                           #猫の日2024              :       まずはどうぞ  Your browser does not support the video tag. :                                                                               そら                 22 Feb 2024                                                                                                                           JLCPCBにおいての基盤発注              :       みなさん。JLCPCBを使ったことはありますか？:                                                                               そら                 25 Nov 2023                                                                                                                           ラインセンサー基板（ミス）              :       タイトルについて:                                                                               そら                 24 Sep 2023                                                                                                                           ボールセンサー基板              :       今日はロボカップのボールセンサー基板を作成したので、紹介したいと思います。:                                                                               そら                 13 Aug 2023                                   &laquo;          1        2       &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/about",
    "title": "Profile",
    "body": "そら: こんにちは！日本のthe中心に住んでる人です！趣味はロボット製作です！ 2021: RCJ Soccer Beginerにちゃチャ茶として参加しました。同年、2021に全国大会に出場し、41位。 2022: RCJ Soccer LightweightにSTとして参加しました。県大会12位（14チーム）。 Link:GithubLink:Twitter 2023 -: RCJ Soccer Lightweightに珈琲牛乳を結成。 Link:Github Link:Twitter Contact:  Twitter:@sora81dev Github:sora81devこのブログについて: このブログは以下のレポジトリをフォークしたものを使用し、Netlifyを用いてホスティングしています。 "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/20240616/",
    "title": "NeoPixel制御指南",
    "body": "2024/06/14 - 超お久しぶりです。最近は受験生なもので、全然したいことができてないわけなんですが、NeoPixelを乗っけたロボットを全国大会に持っていったら案外興味を持ってくれました。  主に興味を持ってくれた人たち    FTomo@ftomo  Yuta@yuta_ciao  会場にいたたくさんのロボカッパーさんたち ありがとうございます てなわけで。始めましょうか。 ひかるんばっていわれたんですけど、Root41の固有名詞ですよね…？まあ個人的にはずっと実装したかったので、うれしいです。 今回協力していただいた方々: このNeoPixelの回路、プログラムの参考にした方、およびサイトを掲載させていただきます。 協力していただいた方々:    @JLCPCBスポンサーについていただいている海外企業様です。NeoPixelの基板の発注をお願いいたしました。     次世代ロボットエンジニア支援機構 Scramble実験にあたり、支援していただいた、ブレッドボードを使用させていただいております。ご支援、ありがとうございます。     しろくま胡瓜@shirokuma89dev今回、回路のミスがないかを見ていただきました。にしても、サタデープログラムで会うなんて奇遇ですね…  参考にしたサイト:    NeoPixel指南 ｜ しろくま胡瓜の自由帳     ラズパイでNeoPixel（マイコン内蔵RGB LED）を手軽に激しくLチカする方法     ArduinoでNeoPixelを動かす     ArduinoでNeoPixelを動かす方法     NeoPixelリングに使えるエフェクト実装例集  本当に、ありがとうございます。 この記事を見るうえでの前提: この記事では、以下のことについては解説しません。  Arduinoの概要・および操作念のため環境をば  環境 項目 | - -|- OS | Windows 11 Home 23H2 マイコン | Arduino MEGA 2560 (ELEGOO) IDE | Arduino IDE 2. 0. 4 ライブラリ名 | バージョン -|- Adafruit NeoPixel | 1. 12. 0今回はWS2812Bを使用します。使用する物によって電圧が変化する場合がありますので、必ずデータシートを見てください。 また、今回使用したデータ（以下参照）を公開します。公開するデータ  基板データ(Eagle) BOM, CPL 今回使用するプログラムです。CoffeeMilk-RCJ/NeoPixel - GitHubライセンスは、CC　BY-NC-ND 4. 0です。  現在、まだ追加完了していません なんでそんなのつけるねん: 言いたいことはわかります。理由は、デバッグのためです。以下の動画を見てください。こちらの動画では、コンパスの向きを表しています。 ロボカッパーの皆様なら一度は体験したことある、コンパス狂いです。急に相手のほう向かれても困りますよね。でも、一発でわからないじゃないですか。なので実装しました。 また、ライトウェイトでは、有名な話ですが、白線を超えてはいけません。その時に、全体の色を変えるように変更したりすることもできます。 具体的には以下のような感じです（実演） ※音声を0にしてみてください#今日の進捗　その1・起動のアニメーション・コンパスの位置を光で表す・ラインの時の処理 pic. twitter. com/HXSUUsmHEu &mdash; そら @WSL027 (@sora81dev) March 22, 2024また、色の自由度が高いです。もし、色付きLEDで、ルールに違反する色だった場合、外すか、プログラム上から消すしかありません。しかし、NeoPixelは後から色を変更できます。 え？フルカラーLEDでいいって？それは次の章でわかります。 NeoPixelの概要: 概要についてですが、NeoPixelという部品。ご存知でしょうか？こちらはマイコン付きLEDみたいなものでして、自由に色を指定出来ちゃいます。 そしてそして！ここが超魅力でして、通信ケーブルが電源（2本）+通信用（1本）のみなんですよね。個数制限？そんなのは存在しません。  追記✎  個数制限がないといいましたが、それ相応の電源は必要になります。なので、無限ではありません。しかしながら、ロボカップで使用するぐらいなら十分すぎるぐらいだと思います。 こんな簡単なのに超簡単に制御できちゃうって本当？はい。もちろん本当です。 では、さっそく、回路の設計から行きましょう。 NeoPixelの回路: これがですね、超簡単なんです。みてください。これだけです。 信じられますか？マジでこんだけです。 今回の回路の発注は、JLCPCBさんに依頼しました。本当にありがとうございました。 発注した基盤はこれです  現在、画像用意中です。 それにPLAで3Dプリントしたカバーをつけてます。 では、解説行きます。まず、あたりまえですが、電源が必要になります。3. 3Vですね。それをNeoPixelのVCCとGNDにつなげてあげてください。そして、PWM対応のデジタルピンをD-inにつなげてください。これが1個めのつなげ方です。 2個目以降は電源をつなげて、1個めのD-outを2個めのD-inにつなげるだけです。つまり、前のD-inを次のD-outにつなげてあげるだけです。最後のD-outは繋げてはいけません。(気になるならGNDに落とすかぐらいです) NeoPixelの制御: さて、本題に入りましょうか。まずは見てみましょう。百聞は一見に如かずです。これが必要最低限のプログラムです。 順に解説していきます。まずは定義(define)から。       名称   意味         PIN   NeoPixelを刺しているピン       NUM_PIXELS   NeoPixelの数   ※PWM対応のデジタルピンにNeoPixelを刺してください。 では、いよいよ光らせ方です。 pixels. clear() で全部消そう: これは基本です。これを入れないと消えないです。とりあえず脳死で最初に入れときましょう。 pixels. setBrightness() で光の強さを決めよう: Brightness、日本語で光の強さという意味です。光の強さによっては目を傷めたり、ルールに違反する恐れがあるのでほどほどに。 pixels. setPixelColor() でどこをどんな色に光らせるかを決めよう: この中には2つの値を入れる必要があります。  光らせる位置 色光らせる位置は普通に数字(int)で指定すればいいです。色は少しだけ面倒で、pixels. Color(R, G, B) にRGBを突っ込んでやればうまい事光ってくれます。 …長々と書きましたが、めんどいですよねサンプル使っちゃいましょう！！！！！使えるものは使っちゃおう！の精神で行った方が気楽ですよ。 では早速。ファイル＞スケッチ例＞Adafruit NeoPixelたくさんありますね～(無かったら、ライブラリインスコしてあげてください。)さっそく、Simpleを選んでみてください。このような画面が出てくると思います。あとは先ほどと同じように、PINにNeoPixelの刺さっているピン。（PWM対応）NUMPIXELSにつなげているNeoPixelの数を入れてあげてください。そうするとうまい事行くはずです。 実演するとこのようになります。※プログラムはbuttoncyclerを使用しています。 #NeoPixel治りました！良かったです！ちなみに治った原因は不明！Program : [Sample] buttoncyclerShot on SONY IXY 510 is1280x720 30fps https://t. co/g20jIjjahw pic. twitter. com/XxVzQQHW8a &mdash; そら @WSL027 (@sora81dev) March 21, 2024バグるときは: 私自身も、なぜかバグるという現象が発生しました。それに対しての対応を見ていきましょう。 なんか変な色がついたりするんだけど？: NeoPixelはノイズに弱いです。はんだ付けがうまい事言っているか、見てあげてください。 うまく光らない！: おそらく、電流もしくは電圧が足りていないのでしょう。NeoPixelは、3. 3Vの電圧を要します。また、個数が増えれば増えるほど、たくさん電流が必要になります。電源を見直してみましょう。 それでも動かん！: DMしてみてください。できる限り対応します。Twitter "
    }, {
    "id": 8,
    "url": "http://localhost:4000/20240302/",
    "title": "岐阜ブロック",
    "body": "2024/03/02 - さぁ、このサイトに代わってから約1年が経過しました。皆さんいかがお過ごしでしょうか？珈琲牛乳Twitter担当のSoraです。 結構まえにロボカップジュニア岐阜ブロック大会が開催されました。私たちはそこに参加してきました。今日はその結果報告的somethingです。 ちなみに参加したのはそら(@sora81dev)とするめいか(@surumeika2080)です。 第1試合: vs. RAISOU １：４で負けちゃいました。正直画像見てもらえばわかると思いますが、車高がものすごく低いんですよ！ 次のデザインの参考になりました！ 第2試合: vs. そいそーす ２：０で勝ちました！一台が壊れちゃって、相手側がかなり不利な状況でしたが…大垣の地場圧倒的悪さのおかげで勝つことができました。 たぬき(@nekuok_)さん、MiMiMi*(@pupupupuipuipu)さん、ありがとうございました！ 第3試合: vs. ハローズ ２：０で勝ちました！楽しかったです！また戦いましょう！ 第4試合: vs. KSKT ２：２で引き分けでした！同じ岐阜ブロック、なんならノードも同じ大垣ノードで、大垣ノード大会でも戦いましたが、やはり強いし見た目がかっこいいですよね…！戦えて楽しかったです！ 第5試合: vs. 緑茶Ⅱ ２：１で勝ちました！こちらも一台調整中…でしたっけ？（記憶曖昧）写真に1台しか相手ロボットが映っていなかったのでそうだと思います。何より楽しかったです！ 第6試合: vs. SpeeD ShooteR ３：３で引き分けでした！SpeeD Shooter(@SpeeDShooteR06)さん、一度戦ってみたくて…戦えて楽しかったです！こちらの試合、いろんな方に見ていただいてて、ほんとにうれしい限りです。もし動画持ってたら、そら(@sora81dev)までよろしくお願いします！ 結果: 結果は4位で、技術委員賞をもらえました！全国大会もよろしくお願いします！ 私たちをサポートしてくれたJLCPCBさんへ: もうすぐ日本法人ができる？かもしれないということで、応援しています。特に私のロボットにはたくさんの基板が載っています。以下は画像です。これからもよろしくお願いします。また、日本のサイトが公式にできました。見やすくなってるので是非見てやってください。 ついでに注文もしてあげてくださいね！@JLCPCB (日本)@JLC3DP (日本) "
    }, {
    "id": 9,
    "url": "http://localhost:4000/20240222/",
    "title": "#猫の日2024",
    "body": "2024/02/22 - まずはどうぞ  Your browser does not support the video tag. 使用した時計いつものごとくこの時計です！この時計便利… まとめことしはなんか猫の日の盛り上がりがすごい気がします。私が去年見てなかっただけだと思うんですけどね（） ところで、皆さんこれを覚えていますか？ またらいねんもとりたいな2023年2月22日投稿　「にゃんにゃんにゃんの日」より今年も取れました！！つまり、このブログはこのデザインにしてから約1周年ということです！！ 来年も撮ります！！！(もはや風物詩) "
    }, {
    "id": 10,
    "url": "http://localhost:4000/20231125/",
    "title": "JLCPCBにおいての基盤発注",
    "body": "2023/11/25 - みなさん。JLCPCBを使ったことはありますか？ 私は使い倒しているのですが、そんなJLCPCBへの発注について👦「難しそう。中国の企業だし」という疑問を持ったことはありませんか？ 今回はこのような疑問を解消すべく、発注方法をわかりやすくお伝えできればなと思います。 1. 概要まずはJLCPCBについておさらいをしましょう。 JLCPCBのサイトはこちらから↓ PCB Prototype &amp; PCB Fabrication Manufacturer - JLCPCB China's Largest PCB Prototype Manufacturer, offers 24 hours Quick Turn PCB prototype, PCB assembly and Reliable small-batch PCB production. https://jlcpcb. com/ 　　 JLCPCBとは中国にある世界的基盤製作企業です。中国などでは梱包が雑や過剰であったりしますが、JLCPCBはそんなことはありません。 基板はビニール（薄め）の中にJLCPCBのはこがあり、その中にしっかりとした梱包がある。そんな状態で中国から基板が届きます。 2. 発注方法では、さっそく基板を発注していきましょう。 まずは、JLCPCBが日本人のみに配布しているクーポンをGETしにいきましょう。それがこちらです。 PCB Prototype &amp; PCB Fabrication Manufacturer - JLCPCB Have Your PCB Assembled in 24 Hours with In-stock 40k+ Original Components JLCPCB provided. Reduce Your Time And Cost From PCB to SMT Service https://jlcpcb. com/JPV ここにアクセスした後、$54クーポンを獲得を押すと $54ぶんの注文が無料になります。  Note📒:獲得するにはアカウントの作成が必要になります。右上のSign Inから作成をお願いします。  有益情報：Twitterアカウントをフォローすると追加で$10クーポンがもらえます。 それでは、発注しに行きましょう。まずは下記サイトに飛んでいただき、 PCB Prototype &amp; PCB Fabrication Manufacturer - JLCPCB Have Your PCB Assembled in 24 Hours with In-stock 40k+ Original Components JLCPCB provided. Reduce Your Time And Cost From PCB to SMT Service https://jlcpcb. com 　　  メモ📝：日本語だと翻訳が変になりやすいので、自動翻訳をOFFにしておくことを推奨します。 まず、Resourcesを押して、PCB Assenblyを押してください。その後、Get Startedを押してください。これで発注画面に移動しました。そうすると下のようなサイトに飛ぶと思います。 そうしたら、Add gerber fileを押し、ガーバーファイルを選択してください。 その後は好きに設定していってください。 私のおすすめは1. PCB Thickness(基板厚さ)が1. 22. PCB Color(色)がBlack 実際にそちらの設定で発注したのがこちらです。  注意：ケーブル・センサー等はありません（画像張替え予定） ブラックはマットな質感でとても美しいです  注意：スポンサーだからって忖度しているわけではありません。 では、気を取り直して。  メモ📝：PCB Assemblyはない条件として進めます（追記予定） 次は製造速度ですね。お金に余裕がある方は最速を選べばいいでしょうし、節約したいという方はその他のプランを選べばいいと思います。 もちろんですが、早いだけで、質は同じだということを忘れないでくださいね。 そしたら、Save to cartを押してください。 これで基盤がカートに入りました。 3. 注文正直わかるという方はスキップしてもらって構わないです。 では行きましょう。そういえば、ここは時間をあけてもう一度注文前にもう一度基板を確認することをお勧めします。これだけでミスが減ります。 Secure check outを押し、住所を登録後、配送プランを選択し、(クーポンを使いたい方はここです。)支払方法を選択。そして支払います。 以上で注文が完了します。 4. 最後に今回の記事も見ていただいてありがとうございます。 明日はノード大会なので寝ますね。おやすみなさい！ "
    }, {
    "id": 11,
    "url": "http://localhost:4000/20230924/",
    "title": "ラインセンサー基板（ミス）",
    "body": "2023/09/24 - タイトルについてタイトルが「ラインセンサー基板（ミス）」になっていますよね。理由は簡単です。 理由は間違えたからです。  正確には、抵抗の分圧や、本数を間違えました。 JLCPCBさん、本当に申し訳ございません。 JLCPCBの公式HPはこちらからどうぞJLCPCB(公式) なので、二度と私が過ちを侵さないために、なぜミスをしたのかを公開しておきたいと思います。 どこで間違えたか私は、動くかどうかを確認するのを忘れていました。つまり、ブレッドボードにチェックせずに動かしてしまいました。 それは本当に間違えた行為であり、するべき行動なのに間違えてしまいした。 私は届いたときに、動作確認をしたところ、なんと、動きませんでした。ブレッドボードでも動きませんでした。 その瞬間に、私は回路にミスがあることが分かりました。  抵抗の分圧が間違っていました。 なので、もう二度とミスをしないために、ブレットボードに配線をまずはおこない、それで動いたら、初めて基板を作成するべきでした。 まとめ現在、新しい基板を作成しています。JLCPCBさん、本当に申し訳ございません。 次回予告次回は、直したラインセンサー基板を紹介できればいいと思っています。なるべく早めに、しっかりとミスをしないように作成したいと思います。 画像集 2023. 10. 30      ・動作角煮→動作確認    ・JLCPCBのリンク追加    . 28    ・画像追加"
    }, {
    "id": 12,
    "url": "http://localhost:4000/20230813/",
    "title": "ボールセンサー基板",
    "body": "2023/08/13 - 今日はロボカップのボールセンサー基板を作成したので、紹介したいと思います。 今回のレポジトリ注意　BSBとBSB-2がありますが、両方がないと使えません。 #今日の進捗まさかのいっぱつ！あとは値かくにんのみ！ pic. twitter. com/66d24wVQ0i &mdash; そら@RCJJ (@sora81dev) July 15, 2023↑これですね 基盤の構成レポジトリの説明についての時に乗せたように、2つに基盤が分かれています。それぞれ目的は違います。そして、今回は1ケーブルで接続できるようにしています。 1つ目はボールセンサー(TSSP58038)のみを乗せています。2つ目はそのボールセンサーの制御基板になっています。とかいっても、RP2040とかは載っていませんが。 なぜ分けたかというと、どちらかが壊れた際に簡単に交換することができるようにするためです。ロボカップで壊れることはしょっちゅうあることです。  私も一週間前にTJ3Bを壊したことがあります。 そして、簡単に交換するために、1つ目と2つ目は1本で2つ目とメインは2本+電源1本のみでつなげれるようにしました。 なんで TSSP58038にしたのかここまで読んできてきっと疑問に思っていると思います そう。「TSSP5038って生産終了してるよね？なんでTSSP4038にしないの？」って。 正直、理由は一つです。買ったサイトでは、TSSP58038のほうが安いからです。これにつきます。 そしてこれも交換式にした理由で、TSSP58038からTSSP4038に移行する際、基盤をすべて交換する必要があります。そして費用も掛かります。そのために私は1つ目のやつさえ変えれば直せます。  プログラムの修正が必要なのは承知の上です。 基盤作成したところ前回記事にはJLCPCBについて詳しく伝えるといいましたが、それは次回に回します。 ほんで、作成したところは、いつもおなじみのJLCPCBさんです。 ↓ JLCPCBさんのサイトはこちらからJLCPCB公式サイト(日本語) ちなみにこの基板 + USB-Cでプログラム書き込めるやつ　の二つを発注しましたが、最速便でまさかの3日で届きました。嘘じゃないですよ。ほんとです。正直めちゃくちゃ驚きました。  追記：そういえば、最速便はバカ高いのでご注意を。 最後にまたまた短かったですが、いかがでしたでしょうか。技術紹介的なものはありませんが、Blendのいぬわしくんを実際に高専Open Canvasのときに見てきました。そのときに思ったんです。簡単に分離できるのはすごくいいことと。上下分離が1本というのにすごく惹かれまして。今回のボールセンサーに実現したわけです。(一つにまとめれば簡単とは言ってはいけませんよ。) 画像集作った上での画像です。(一部はTwitterに載っています) 次回次回こそJLCPCBさんについて詳しくお伝えします。 また次の時まで。じゃあね👋 "
    }, {
    "id": 13,
    "url": "http://localhost:4000/20230809/",
    "title": "JLCPCBとの契約",
    "body": "2023/08/09 - こんにちは。ブログも久しぶりですね。 バグがありまして… URLも使えなくなっていた状況でした。何が起こっているかというのは別の記事で紹介するとして、今回は私の所属しているSTとJLCPCBさんについて話していきたいと思います。 JLCPCB (公式) ホームページ ↑$54クーポンが無料でもらえますので是非 どうやってそもそも契約したのか: 極稀にDMでどうやってスポンサー契約したの？とか聞かれたりもします  本当にごくまれにです。いままでで3回ぐらいです 簡単に言うと、TwitterのDMでJLCPCB公式さんに送りました。 JLCPCB (公式) Twitter どんな内容を送ったのかは教えてはいけない気がするので教えませんが、どんな構成だったのかはお伝えしておきます。  正直言って参考になりません。ご自身で考えて記入することをお勧めいたします。 前半は、どのようなことをしているのか。それにおいて、どのような立場なのかを書きました。そして後半は、なぜ契約しようと思ったのかを書きます。正直ここが一番大切だと思ってます。 以上になります。 もう一度言いますが、ご自身で書くことをお勧めします。（じゃあなんでこれ書いたんだよ） 最後に: ほんとに申し訳ございませんでした。正直放置してました。ごめんなさい。ネームサーバー代が…ということで、Netlifyで作り直しましたのでよろしくお願いします！ 次の記事: つぎはJLCPCBとはどんな企業なのか。を詳しくお伝えしたいと思います。 "
    }, {
    "id": 14,
    "url": "http://localhost:4000/20230222/",
    "title": "にゃんにゃんにゃんの日",
    "body": "2023/02/22 - まずはどうぞ  Your browser does not support the video tag. #　奇跡的に取れました。ちょうどパソコン開いたら22:21ふんで、いそいで収録して編集しました。ちなみに編集ソフトはClipchampです。使用した時計 まとめまたらいねんもとりたいな。 ・2023. 11. 1  ・トップ画像編集"
    }, {
    "id": 15,
    "url": "http://localhost:4000/20240129/",
    "title": "サイトをJekyllに移動しました。",
    "body": "2023/01/29 - 新しいサイトに移動しました！ 2023. 11. 01  ・トップ画像編集"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});