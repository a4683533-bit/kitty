# 🎀 Sanrio Character Wiki | 三麗鷗夢幻角色知識庫

結合 **LLM Wiki 知識庫架構 (`raw/` + `wiki/` + `index.md` + `AGENTS.md`)** 與 **可愛夢幻粉彩網頁 (`index.html` + `style.css` + `script.js`)** 的完整專案包，可直接上傳至 GitHub 並開啟 GitHub Pages 瀏覽！

## 📁 資料夾結構
```text
sanrio-character-wiki/
├── AGENTS.md       # AI Agent 知識庫與網頁同步維護規範
├── index.html      # 夢幻粉彩網頁主程式
├── index.md        # Markdown 知識庫總目錄
├── README.md       # 專案說明與 GitHub Pages 部署教學
├── script.js       # 角色資料庫與互動邏輯
├── style.css       # 粉彩漸層與角色元素視覺樣式
├── raw/            # 唯讀原始資料層
└── wiki/           # 結構化 Markdown 知識頁面層
```

## 🚀 部署至 GitHub Pages
1. 在 GitHub 建立新 Repository（例如 `sanrio-character-wiki`）。
2. 將本資料夾內的所有檔案與子資料夾（`raw`、`wiki`）上傳至 Repository 根目錄。
3. 前往 **Settings → Pages**，在 **Source** 選擇 `Deploy from a branch`，Branch 選 `main`、資料夾選 `/ (root)` 後點擊 **Save** 即可上線。
