# Sanrio Character Wiki 專案維護指南 (AGENTS.md)

本專案結合 **Andrej Karpathy LLM Wiki 知識庫架構** 與 **GitHub Pages 靜態夢幻粉彩網頁**，所有原始資料存於 `raw/`，結構化 Markdown 知識節點存於 `wiki/`，並同步呈現在根目錄的 `index.html`、`style.css` 與 `script.js` 網頁中。

## 1. 目錄結構規範
```text
sanrio-character-wiki/
├── AGENTS.md           # 本專案維護規範
├── index.html          # 夢幻粉彩知識庫主網頁
├── style.css           # 粉彩漸層、漂浮裝飾與響應式樣式
├── script.js           # 角色資料庫、篩選、彈窗與扭蛋互動邏輯
├── index.md            # 知識庫總目錄索引 (Obsidian / GitHub 雙用)
├── README.md           # GitHub 專案與 Pages 部署說明
├── raw/                # [唯讀原始資料層] 原始文章與資料備份，不可修改
└── wiki/               # [Markdown 知識庫層] 結構化角色、誕生故事與編年史筆記
```

## 2. 標準更新工作流 (`Ingest` & `Sync`)
1. **歸檔原文**：凡貼上或上傳新的三麗鷗相關文章，先保存至 `raw/articles/`。
2. **更新知識庫 (`wiki/` 與 `index.md`)**：在 `wiki/` 對應子目錄建立或更新 Markdown 筆記（使用 `[[Wikilinks]]` 連結），並同步更新根目錄的 `index.md`。
3. **同步網頁資料 (`script.js` / `index.html`)**：將新增的角色、誕生故事或排名數據同步更新至 `script.js`（如 `classicCharacters`、`timelineCharacters`）與 `index.html`，維持可愛夢幻粉彩視覺風格。
