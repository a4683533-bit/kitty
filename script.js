const classicCharacters = [
  { id: "kitty", name: "凱蒂貓", en: "Hello Kitty", jp: "ハローキティ", year: "1974年", era: "70s", emoji: "🎀", bg: "#ffe4ee", birthday: "11月1日", hometown: "英國倫敦郊區", height: "5 個蘋果高", favorite: "媽媽烤的蘋果派", summary: "三麗鷗最具代表性的旗艦偶像，左耳戴著紅色蝴蝶結，用溫暖與友愛陪伴全世界。", detail: "本名 Kitty White，與雙胞胎妹妹 Mimmy 感情極好。擅長彈鋼琴與烘焙餅乾，夢想是成為鋼琴家或詩人。" },
  { id: "mymelody", name: "美樂蒂", en: "My Melody", jp: "マイメロディ", year: "1975年", era: "70s", emoji: "🐰", bg: "#ffd8e8", birthday: "1月18日", hometown: "瑪莉蘭德森林", height: "森林裡的小兔子", favorite: "杏仁磅蛋糕", summary: "戴著奶奶手縫粉色頭巾的純真小兔，個性溫柔善良，喜歡與媽媽一起做點心。", detail: "在瑪莉蘭德森林長大，最寶貴的東西是奶奶親手縫製的頭巾，好朋友是小老鼠弗蘭多。" },
  { id: "twinstars", name: "雙星仙子", en: "Little Twin Stars", jp: "リトルツインスターズ", year: "1975年", era: "70s", emoji: "🌟", bg: "#e7f5ff", birthday: "12月24日", hometown: "夢幻星雲", height: "與月亮差不多高", favorite: "雲朵棉花糖", summary: "從遙遠夢幻星雲來到地球學習閃耀的雙胞胎姊弟 Kiki 與 Lala，充滿粉彩浪漫氣息。", detail: "姊姊 Lala 喜歡畫畫與寫詩，弟弟 Kiki 充滿好奇心、喜歡發明與釣星星。" },
  { id: "pochacco", name: "帕恰狗", en: "Pochacco", jp: "ポチャッコ", year: "1989年", era: "80s-90s", emoji: "🐾", bg: "#e6fcf5", birthday: "2月29日", hometown: "軟綿綿小鎮", height: "4 個香蕉冰淇淋杯高", favorite: "香蕉冰淇淋", summary: "好奇心旺盛、喜歡散步卻常常繞遠路的白色小狗，是三麗鷗犬系偶像的元祖級人氣王。", detail: "個性活潑愛運動，喜歡在街角散步探險，近年在肖像大賞重返前五名！" },
  { id: "pompompurin", name: "布丁狗", en: "Pompompurin", jp: "ポムポムプリン", year: "1996年", era: "80s-90s", emoji: "🍮", bg: "#fff3bf", birthday: "4月16日", hometown: "主人家玄關的布丁籃子", height: "大布丁尺寸", favorite: "媽媽做的布丁與牛奶", summary: "頭戴咖啡色貝雷帽的黃金獵犬男孩，悠閒貪吃又愛睡午覺，擁有極高治癒能量。", detail: "夢想是長得更大更圓，興趣是蒐集主人的鞋子以及做布丁體操。" },
  { id: "cinnamoroll", name: "大耳狗", en: "Cinnamoroll", jp: "シナモロール", year: "2001年", era: "00s", emoji: "🐶", bg: "#d0ebff", birthday: "3月6日", hometown: "遙遠天空的白雲上", height: "像軟綿綿的雲朵", favorite: "肉桂捲", summary: "能用大耳朵在天空飛翔的白雲小狗，肉桂咖啡廳看板犬，肖像大賞五連霸冠軍！", detail: "因為尾巴捲起來像肉桂捲而被咖啡廳姐姐命名為 Cinnamoroll，性格乖巧愛撒嬌。" },
  { id: "kuromi", name: "酷洛米", en: "Kuromi", jp: "クロミ", year: "2005年", era: "00s", emoji: "😈", bg: "#f3d9fa", birthday: "10月31日", hometown: "瑪莉蘭德", height: "小惡魔頭巾尺寸", favorite: "醃蕎頭與烤肉", summary: "戴著黑色小惡魔頭巾的酷甜女孩，自稱美樂蒂的勁敵，反差萌魅力席捲全球。", detail: "看起來像不良少女組老大，其實超愛寫少女日記與看浪漫戀愛小說。" },
  { id: "gudetama", name: "懶蛋蛋", en: "Gudetama", jp: "ぐでたま", year: "2013年", era: "10s", emoji: "🍳", bg: "#fff9db", birthday: "每天都在盤子上", hometown: "冰箱與早餐盤", height: "一顆蛋的大小", favorite: "醬油與培根棉被", summary: "毫無幹勁、只想躺平的慵懶蛋黃，用厭世語錄精準療癒現代人的疲憊日常。", detail: "口頭禪是「好累喔～」「不想動～」，最喜歡蓋著培根睡覺，是三麗鷗最具反轉魅力的 IP。" }
];

const topRankingList = [
  { rank: 4, name: "帕恰狗 Pochacco", desc: "閏年誕生的運動系好奇小白狗", emoji: "🐾" },
  { rank: 5, name: "凱蒂貓 Hello Kitty", desc: "永恆不敗的全球三麗鷗文化象徵", emoji: "🎀" },
  { rank: 6, name: "美樂蒂 My Melody", desc: "溫柔純真的瑪莉蘭德粉色小兔", emoji: "🐰" },
  { rank: 7, name: "人魚漢頓 Hangyodon", desc: "愛搞笑卻容易寂寞的浪漫半魚人", emoji: "🐟" },
  { rank: 8, name: "雙星仙子 Little Twin Stars", desc: "粉嫩夢幻的星雲雙胞胎 Kiki & Lala", emoji: "🌟" },
  { rank: 9, name: "山姆企鵝 Tuxedosam", desc: "來自南極、擁有 365 個領結的紳士企鵝", emoji: "🐧" },
  { rank: 10, name: "大眼蛙 Kerokerokeroppi", desc: "活力滿滿、擅長游泳與唱歌的冒險青蛙", emoji: "🐸" }
];

const timelineCharacters = [
  { year: "1974", era: "1970s", name: "凱蒂貓", jp: "ハローキティ", icon: "🎀" },
  { year: "1975", era: "1970s", name: "雙星仙子", jp: "リトルツインスターズ", icon: "🌟" },
  { year: "1975", era: "1970s", name: "美樂蒂", jp: "マイメロディ", icon: "🐰" },
  { year: "1979", era: "1970s", name: "山姆企鵝", jp: "タキシードサム", icon: "🐧" },
  { year: "1984", era: "1980s", name: "大口仔", jp: "みんなのたあ坊", icon: "👦" },
  { year: "1985", era: "1980s", name: "人魚漢頓", jp: "ハンギョドン", icon: "🐟" },
  { year: "1985", era: "1980s", name: "茉莉兔", jp: "マロンクリーム", icon: "🐇" },
  { year: "1987", era: "1980s", name: "大眼蛙", jp: "けろけろけろっぴ", icon: "🐸" },
  { year: "1989", era: "1980s", name: "帕恰狗", jp: "ポチャッコ", icon: "🐾" },
  { year: "1989", era: "1980s", name: "貝克鴨", jp: "アヒルのペックル", icon: "🦆" },
  { year: "1991", era: "1990s", name: "淘氣猴", jp: "おさるのもんきち", icon: "🐵" },
  { year: "1993", era: "1990s", name: "酷企鵝", jp: "バッドばつ丸", icon: "🐧" },
  { year: "1995", era: "1990s", name: "巧克貓", jp: "チョコキャット", icon: "🐈‍⬛" },
  { year: "1996", era: "1990s", name: "布丁狗", jp: "ポムポムプリン", icon: "🍮" },
  { year: "1997", era: "1990s", name: "可樂鈴", jp: "コロコロクリリン", icon: "🐹" },
  { year: "1999", era: "1990s", name: "新幹線", jp: "しんかんせん", icon: "🚄" },
  { year: "1999", era: "1990s", name: "丹尼爾", jp: "ディアダニエル", icon: "🎩" },
  { year: "2001", era: "2000s", name: "米花兔", jp: "ウサハナ", icon: "🌷" },
  { year: "2001", era: "2000s", name: "大耳狗", jp: "シナモロール", icon: "🐶" },
  { year: "2004", era: "2000s", name: "恰咪", jp: "チャーミーキティ", icon: "🐱" },
  { year: "2004", era: "2000s", name: "蜜糖邦尼", jp: "シュガーバニーズ", icon: "🧁" },
  { year: "2005", era: "2000s", name: "酷洛米", jp: "クロミ", icon: "😈" },
  { year: "2005", era: "2000s", name: "Cinnamoangels", jp: "シナモエンジェルス", icon: "🪽" },
  { year: "2005", era: "2000s", name: "拿鐵熊", jp: "てのりくま", icon: "🧸" },
  { year: "2006", era: "2000s", name: "棉花糖", jp: "ふわふわにゃんこ", icon: "☁️" },
  { year: "2007", era: "2000s", name: "Pankunchi", jp: "ぱんくんち", icon: "🐼" },
  { year: "2008", era: "2000s", name: "寶石寵物", jp: "ジュエルペット", icon: "💎" },
  { year: "2013", era: "2010s", name: "懶蛋蛋", jp: "ぐでたま", icon: "🍳" },
  { year: "2015", era: "2010s", name: "衝吧烈子", jp: "アグレッシブ烈子", icon: "🎸" },
  { year: "2017", era: "2010s", name: "毛毯熊莫普", jp: "まるもふびより", icon: "🧣" }
];

const gachaPool = [
  { char: "大耳狗 Cinnamoroll", emoji: "🐶☁️", luck: "雲端軟綿綿大吉", msg: "今天適合放慢腳步，喝杯熱拿鐵或吃個肉桂捲，好運會像白雲一樣飄向你！" },
  { char: "凱蒂貓 Hello Kitty", emoji: "🎀🍎", luck: "甜蜜友愛大吉", msg: "一個小小的微笑就能點亮今天！試著向身邊的朋友說聲謝謝或分享小點心吧。" },
  { char: "酷洛米 Kuromi", emoji: "😈💜", luck: "酷甜逆襲大吉", msg: "做最真實、最帥氣的自己！今天你的直覺特別準，大膽朝喜歡的事情前進吧。" },
  { char: "布丁狗 Pompompurin", emoji: "🍮🐕", luck: "悠閒午睡大吉", msg: "別給自己太大壓力啦～忙完手邊的事就好好休息，吃頓喜歡的美食犒賞自己！" },
  { char: "美樂蒂 My Melody", emoji: "🐰🌸", luck: "溫柔治癒大吉", msg: "保持純真與好心情，今天會有意想不到的溫暖小事發生在你身邊喔。" },
  { char: "懶蛋蛋 Gudetama", emoji: "🍳💤", luck: "理直氣壯躺平吉", msg: "累了就休息一下吧～偶爾什麼都不想做，也是充電的重要魔法！" }
];

function renderCharacters(filter = "all") {
  const grid = document.getElementById("charGrid");
  const filtered = filter === "all" ? classicCharacters : classicCharacters.filter(c => c.era === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="char-card">
      <span class="char-year-badge">${c.year}</span>
      <div class="char-avatar" style="background:${c.bg}">${c.emoji}</div>
      <h3>${c.name}</h3>
      <span class="char-jp">${c.en} • ${c.jp}</span>
      <p class="char-summary">${c.summary}</p>
      <button class="char-detail-btn" onclick="openCharModal('${c.id}')">✨ 查看詳細檔案</button>
    </div>
  `).join("");
}

function openCharModal(id) {
  const c = classicCharacters.find(item => item.id === id);
  if (!c) return;
  document.getElementById("modalBody").innerHTML = `
    <div style="text-align:center">
      <div style="width:92px;height:92px;margin:0 auto 0.8rem;border-radius:50%;background:${c.bg};display:flex;align-items:center;justify-content:center;font-size:3rem;">${c.emoji}</div>
      <h2 style="color:#ff5c9d;margin-bottom:0.2rem;">${c.name}（${c.en}）</h2>
      <p style="color:#7a6280;font-size:0.9rem;margin-bottom:1rem;">${c.jp} • 誕生於 ${c.year}</p>
    </div>
    <div style="background:#fff5f8;border-radius:18px;padding:1rem;margin-bottom:1rem;font-size:0.92rem;">
      <p><strong>🎂 生日：</strong>${c.birthday}</p>
      <p><strong>🏡 出生地：</strong>${c.hometown}</p>
      <p><strong>📏 身高特徵：</strong>${c.height}</p>
      <p><strong>🍰 最喜歡的食物：</strong>${c.favorite}</p>
    </div>
    <p style="font-size:0.95rem;line-height:1.75;">${c.detail}</p>
  `;
  document.getElementById("charModal").classList.add("open");
}

function renderRanking() {
  document.getElementById("rankBars").innerHTML = topRankingList.map(item => `
    <div class="rank-row">
      <div class="rank-num">${item.rank}</div>
      <div style="font-size:1.5rem">${item.emoji}</div>
      <div class="rank-info"><strong>${item.name}</strong><small>${item.desc}</small></div>
    </div>
  `).join("");
}

function renderTimeline(era = "all") {
  const list = era === "all" ? timelineCharacters : timelineCharacters.filter(item => item.era === era);
  document.getElementById("timelineGrid").innerHTML = list.map(item => `
    <div class="tl-item">
      <span class="tl-year">${item.year}</span>
      <span style="font-size:1.45rem">${item.icon}</span>
      <div class="tl-text"><strong>${item.name}</strong><span>${item.jp}</span></div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  renderRanking();
  renderTimeline();

  document.querySelectorAll("#charFilterBar .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#charFilterBar .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCharacters(btn.dataset.filter);
    });
  });

  document.querySelectorAll(".timeline-tabs .t-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".timeline-tabs .t-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderTimeline(tab.dataset.era);
    });
  });

  document.getElementById("gachaBtn").addEventListener("click", () => {
    const pick = gachaPool[Math.floor(Math.random() * gachaPool.length)];
    document.getElementById("gachaResult").innerHTML = `
      <div style="font-size:2.8rem;margin-bottom:0.3rem;">${pick.emoji}</div>
      <span style="display:inline-block;background:#ffe4ee;color:#ff5c9d;font-weight:800;font-size:0.82rem;padding:0.2rem 0.75rem;border-radius:999px;margin-bottom:0.4rem;">${pick.luck}</span>
      <h3 style="font-size:1.25rem;margin-bottom:0.4rem;">今日守護夥伴：${pick.char}</h3>
      <p style="font-size:0.94rem;color:#5c4463;">${pick.msg}</p>
    `;
  });

  const modal = document.getElementById("charModal");
  document.getElementById("modalClose").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
  document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
});
