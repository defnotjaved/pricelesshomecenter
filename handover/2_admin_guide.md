# PRICELESS HOME CENTER — WEBSITE ADMIN GUIDE

This website is a **static HTML site**. There is no CMS login. To make changes, you edit the source files directly. Below is a guide for each common task.

---

## HOW TO ACCESS THE WEBSITE FILES

**Option A — Via GitHub (recommended for the developer)**
1. Go to https://github.com/defnotjaved/pricelesshomecenter
2. Log in with the GitHub account credentials
3. Click on the file you want to edit (e.g. `index.html`)
4. Click the pencil icon (Edit)
5. Make your changes
6. Scroll down → click "Commit changes"
7. Changes go live within 1–2 minutes

**Option B — Download and edit locally**
1. Download the repository as a ZIP from GitHub
2. Edit files in any text editor (Notepad, VS Code, etc.)
3. Re-upload via GitHub

---

## HOW TO UPDATE TEXT CONTENT

All website text is inside `index.html`.

**To change the business description:**
1. Open `index.html`
2. Find the About section (search for "27 Years of Making Homes Priceless")
3. Edit the text between the `<p>` tags
4. Save and commit

**To change phone numbers:**
1. Open `index.html`
2. Use Ctrl+F to search for the old number (e.g. `232-7966`)
3. Update every occurrence
4. Save and commit

**To change store hours:**
1. Open `index.html`
2. Search for the Hours section (search for "Store Hours")
3. Update the time values inside the `<span class="time">` tags
4. Save and commit

---

## HOW TO CHANGE IMAGES

All images are in `assets/images/`.

**To replace a store photo:**
1. Name your new image the same as the old one (e.g. `img1.jpeg`)
2. Upload it to `assets/images/` in GitHub (Add file → Upload files)
3. GitHub will replace the old file automatically

**To add a new image:**
1. Upload the image to `assets/images/`
2. In `index.html`, add an `<img>` tag pointing to the new file:
   ```html
   <img src="assets/images/your-new-image.jpg" alt="Description" />
   ```

---

## HOW TO REPLACE THE LOGO

1. Name your new logo file `logo.jpg`
2. Upload it to `assets/images/`
3. The new logo will appear everywhere automatically (navbar, hero, footer)

---

## HOW TO ADD A CUSTOMER REVIEW

1. Open `index.html`
2. Find the Reviews section (search for "review-card")
3. Copy one existing review block and paste it
4. Update the review text, customer name, initials, and location
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
2. Find the Brands section (search for "brand-card")
3. Copy an existing brand card and paste it
4. Update the brand name and category:
```html
<div class="brand-card">
  <div class="brand-name">Brand Name</div>
  <div class="brand-cat">Category</div>
</div>
```

---

## HOW TO UPDATE THE WHATSAPP NUMBER

1. Open `index.html`
2. Use Ctrl+F to search for `wa.me/1868`
3. Update every WhatsApp link with the new number
4. Format: `https://wa.me/1868XXXXXXX`

---

## HOW TO UPDATE SOCIAL MEDIA LINKS

1. Open `index.html`
2. Search for `tiktok.com` or `instagram.com`
3. Replace the URL with your new link
4. Save and commit

---

## HOW TO REPLACE THE VIDEO

1. Upload your new video to `assets/videos/` in GitHub
2. Open `index.html`
3. Find: `<source src="assets/videos/tiktok1.mp4"`
4. Update the filename to match your new video
5. Save and commit

---

## NEED HELP?

Contact your developer for any changes that are unclear or complex.
WhatsApp is the fastest way to reach them for small fixes.
