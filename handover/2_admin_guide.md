# PRICELESS HOME CENTER — WEBSITE ADMIN GUIDE

**Static HTML site.** No CMS login. Edit source files directly.

---

## HOW TO ACCESS THE WEBSITE FILES

**Option A — Via GitHub (recommended)**
1. Go to https://github.com/defnotjaved/pricelesshomecenter
2. Log in with GitHub credentials
3. Click file to edit (e.g. `index.html`)
4. Click pencil icon (Edit)
5. Make changes
6. Scroll down → click "Commit changes"
7. Changes live within 1–2 minutes

**Option B — Download and edit locally**
1. Download repo as ZIP from GitHub
2. Edit in any text editor (Notepad, VS Code, etc.)
3. Re-upload via GitHub

---

## HOW TO UPDATE TEXT CONTENT

All text in `index.html`.

**Change business description:**
1. Open `index.html`
2. Find About section (search "27 Years of Making Homes Priceless")
3. Edit text between `<p>` tags
4. Save and commit

**Change phone numbers:**
1. Open `index.html`
2. Ctrl+F search old number (e.g. `232-7966`)
3. Update every occurrence
4. Save and commit

**Change store hours:**
1. Open `index.html`
2. Search "Store Hours"
3. Update time values inside `<span class="time">` tags
4. Save and commit

---

## HOW TO CHANGE IMAGES

All images in `assets/images/`.

**Replace store photo:**
1. Name new image same as old (e.g. `img1.jpeg`)
2. Upload to `assets/images/` in GitHub (Add file → Upload files)
3. GitHub replaces old file automatically

**Add new image:**
1. Upload image to `assets/images/`
2. In `index.html`, add `<img>` tag:
   ```html
   <img src="assets/images/your-new-image.jpg" alt="Description" />
   ```

---

## HOW TO REPLACE THE LOGO

1. Name new logo file `logo.jpg`
2. Upload to `assets/images/`
3. Appears everywhere automatically (navbar, hero, footer)

---

## HOW TO ADD A CUSTOMER REVIEW

1. Open `index.html`
2. Find Reviews section (search "review-card")
3. Copy existing review block, paste it
4. Update text, name, initials, location
5. Save and commit

Example block:
```html
<div class="review-card reveal">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Your customer quote here."</p>
  <div class="review-author">
    <div class="review-avatar">AB</div>
    <div>
      <div class="review-name">Customer Name</div>
      <div class="review-role">Role, Location</div>
    </div>
  </div>
</div>
```

---

## HOW TO ADD A NEW BRAND

1. Open `index.html`
2. Find Brands section (search "brand-card")
3. Copy existing card, paste it
4. Update name and category:
```html
<div class="brand-card">
  <div class="brand-name">Brand Name</div>
  <div class="brand-cat">Category</div>
</div>
```

---

## HOW TO UPDATE THE WHATSAPP NUMBER

1. Open `index.html`
2. Ctrl+F search `wa.me/1868`
3. Update every link with new number
4. Format: `https://wa.me/1868XXXXXXX`

---

## HOW TO UPDATE SOCIAL MEDIA LINKS

1. Open `index.html`
2. Search `tiktok.com` or `instagram.com`
3. Replace URL with new link
4. Save and commit

---

## HOW TO REPLACE THE VIDEO

1. Upload new video to `assets/videos/` in GitHub
2. Open `index.html`
3. Find: `<source src="assets/videos/tiktok1.mp4"`
4. Update filename
5. Save and commit

---

## NEED HELP?

Contact developer for unclear or complex changes. WhatsApp fastest for small fixes.
