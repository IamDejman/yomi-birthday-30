# Quick Start Guide 🚀

## Step 1: Add Photos for Each Wish

1. Copy all your photos into the `images` folder
2. Open `data.js`
3. For each wish, add the photo path in the `photo` field:

```javascript
const wishes = [
    {
        author: "Your Name",
        photo: "images/your-photo.jpg",  // Add photo path here
        message: "Your birthday message here..."
    },
];
```

## Step 2: Add Your Wishes

1. Open `data.js`
2. Edit the `wishes` array with your family's messages
3. **Important:** Each wish should have a `photo` field with the image path

```javascript
const wishes = [
    {
        author: "Your Name",
        photo: "images/photo-with-yomi.jpg",  // Photo displayed before the wish
        message: "Your birthday message here..."
    },
];
```

**Note:** If a wish doesn't have a photo yet, you can leave the `photo` field as an empty string `""`. The photo will be skipped, but the wish will still display.

## Step 3: View the Experience

Simply double-click `index.html` to open it in your browser, or:

1. Right-click `index.html`
2. Select "Open with" → Your web browser

That's it! Enjoy the celebration! 🎉

---

**Tip:** For the best experience, use Chrome, Firefox, Safari, or Edge browser.

