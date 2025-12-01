# Happy 30th Birthday Yomi! 🎉

An immersive web experience to celebrate Yomi's 30th birthday with wishes and memories.

## Features

- ✨ Beautiful animated landing page with confetti
- 💌 Birthday wishes section with cards
- 📸 Photo gallery with lightbox view
- 🎈 Floating balloon animations
- 📱 Fully responsive design
- 🎨 Modern, elegant UI

## How to Use

### 1. Add Your Wishes with Photos

Edit the `wishes` array in `data.js` to add your family's birthday wishes. **Each wish should include a photo:**

```javascript
const wishes = [
    {
        author: "Your Name",
        photo: "images/photo-with-yomi.jpg",  // Photo displayed before the wish
        message: "Your birthday wish here..."
    },
    // Add more wishes...
];
```

**Important Features:**
- Each wish can have a photo that displays **before** the wish message
- Photos are clickable and open in a lightbox for full-screen viewing
- If a wish doesn't have a photo, leave the `photo` field as an empty string `""`
- The layout is **mobile-first** and fully responsive

### 3. Open the Experience

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

- **Colors**: Edit the CSS variables in `styles.css` (in the `:root` section)
- **Fonts**: The project uses Google Fonts (Poppins). You can change this in `index.html`
- **Animations**: Adjust animation timings and effects in `styles.css`

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

## Enjoy the Celebration! 🎊

