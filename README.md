# Screen Identification Number (SID) Generator

A utility tool for generating consistent and unique screen identifiers for enterprise applications (e.g., login pages, dashboards, order modules). Useful for large IT teams managing multiple apps, microservices, or frontend components.

---

## 📋 Example

ORDERS LOGIN PAGE - 6959670288
DASHBOARD OVERVIEW - 5842031127
USER PROFILE SCREEN - 7718239950



---

## ⚙️ How It Works

Each screen ID is generated based on:
- **Screen Name** (e.g., "ORDERS LOGIN PAGE")
- A hash or numeric transformation of the name
- Ensures consistency and uniqueness across teams

---

## 🔢 Generation Logic (Concept)

1. Take the screen name as input.
2. Normalize the name (uppercase, trim spaces).
3. Generate a numeric hash (e.g., FNV, CRC32, or a base-36 hash).
4. Output as:  
   `SCREEN NAME - SCREEN_ID`

---

## 📦 Example Code (JavaScript)

```ts
function generateScreenId(screenName: string): string {
  const normalized = screenName.trim().toUpperCase();
  let hash = 0;

  for (let i = 0; i < normalized.length; i++) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }

  return `${screenName} - ${hash}`;
}
"# sin-generator" 


echo "# sin-generator" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ms-vishwanath/sin-generator.git
git push -u origin main