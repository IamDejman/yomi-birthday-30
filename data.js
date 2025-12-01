// Birthday Wishes Data
// Edit this file to add your family's wishes for Yomi

const wishes = [
    {
        author: "Semilogo",
        photo: "", // No photo - photos shown in separate photo slides
        message: "Happy birthday to my sweet and kind brother ❤️\n\nThank you for always being there for me 🥰\n\nLong life and prosperity\n\nAs you are clocking 30 you will clock many more years in Jesus name, more abundant blessings in Jesus name, you shall live long in Jesus name 🙏\n\nI love you so much 💗 💓\n\nEnjoy your day 🥰😘"
    },
    {
        author: "Olamiposi",
        photo: "",
        message: "Happy Birthday Yomi is a Boy! 😊🥳\n\nI wish you Long life good health and prosperity!\n\nThe Lord will be with you, cause his Grace and Mercy to go before you and around you.\n\nMay your light never grow dim, your joy never run dry.\n\nThank you for all you do, your love, support, care and many more 🫂❤️\n\nCheers mate 🥂🤗🎉"
    },
    {
        author: "Adedolapo",
        photo: "",
        message: "Hiyya Olori ebi/Big Bro/Married man… Lol….. Anyways Happy Birthday big man… wishing you God's bountiful blessings and prosperity. I love you bro😍😍😍. Thank you for being a safe space for everyone of us and for always having a listening ear."
    },
    {
        author: "Ayodeji",
        photo: "",
        message: "Happy 30th Birthday Yomete, the Anelka. Thank you for being a guide and help all through the years. Thank you for being a good role model to all of us. Wishing you many more happy returns. Do enjoy your 30th celebrations!!!!"
    },
    {
        author: "Dad",
        photo: "",
        message: "Happy birthday to my dear son, Abayomi David Oluwafunminiyi Akanni. As you celebrate your 30th birthday today, I pray that God Almighty will give you your heart desires in Jesus name. Your vision and dreams shall come to fulfilment in Jesus name. You shall be favoured and fulfilled in this new year of yours in Jesus name. Enjoy your day.\n\nFrom your loving Dad."
    },
    {
        author: "Mom",
        photo: "",
        message: "Happy 30th birthday, my son. Hmm, it was just like yesterday when my co-students at AOCOED gathered together celebrated with my family. Otaibayomioluwanioje Akani, the joy of my heart ❤️.\n\nIt shall be well with you, you will be great and untimely death will not be your portion in Jesus name, you will celebrate many more fruitful years with good health 🙏🏻 your marriage will not scatter, plenty children will round your table in Jesus name ❤️ Oluwafunminiyi, goodness and mercy of God will follow you all the days of your life. Congratulations, my love ❤️💋🍷🍾👑🍾\n\nFrom your first sweetheart (loving mum)"
    },
    {
        author: "Ngozi",
        photo: "",
        message: "Happy birthday to the love of my life. I am so grateful to call you mine. Turning 30 is the beginning of something even greater for you and for us, and I'm excited to watch you step into this new chapter with grace. May God keep you, guide you, and bless you always. Thank you for everything you do for us. I love you. ❤️"
    }
];

// All available images
const allImages = [
    'images/20200519_165028_1.png',
    'images/2023-06-18.jpg',
    'images/704fd010-48a4-4b22-b701-e3c68d553405.jpg',
    'images/IMG-20180102-WA0004.jpg',
    'images/IMG-20180102-WA0013.jpg',
    'images/IMG-20180615-WA0047.jpg',
    'images/IMG-20190901-WA0017.jpg',
    'images/IMG-20200928-WA0031.jpg',
    'images/IMG-20221202-WA0012.jpg',
    'images/IMG_0154.JPG',
    'images/IMG_20190118_142839_0.jpg',
    'images/IMG_3367.jpg',
    'images/IMG_3528.png',
    'images/IMG_4488.JPG',
    'images/IMG_5188.png',
    'images/IMG_5194.png',
    'images/IMG_5214.png',
    'images/IMG_5226.png',
    'images/IMG_5280.png',
    'images/IMG_5321.png',
    'images/IMG_5397.png',
    'images/IMG_5413.JPG',
    'images/IMG_5465.png',
    'images/IMG_5581.png',
    'images/IMG_5674.png',
    'images/IMG_6740.png',
    'images/Screenshot_2017-07-21-18-46-43.png',
    'images/Screenshot_20180730-082707.png',
    'images/WhatsApp Image 2025-12-01 at 20.07.25.jpeg',
    'images/WhatsApp Image 2025-12-01 at 20.27.40.jpeg',
    'images/WhatsApp Image 2025-12-01 at 21.37.28.jpeg',
    'images/WhatsApp Image 2025-12-01 at 22.35.12.jpeg',
    'images/WhatsApp Image 2025-12-01 at 22.42.11.jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.31.jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.32 (1).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.32 (2).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.32.jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.33 (1).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.33 (2).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.33.jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.34 (1).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.34 (2).jpeg',
    'images/WhatsApp Image 2025-12-01 at 23.06.34.jpeg',
    'images/Yomi Bro 20180125_203737.jpg',
    'images/ae975355-c65d-4de2-ac6d-6a2af465ed27.jpg',
    'images/f61cf70e-6b7c-4342-bda6-9587e938a2ef.jpg',
    'images/image0.jpeg',
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.png',
    'images/image5.jpeg',
    'images/image6.jpeg'
];

// Seeded random number generator for consistent shuffling
function seededRandom(seed) {
    let value = seed;
    return function() {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}

// Shuffle images once with a fixed seed (so order stays the same)
function shuffleArrayOnce(array, seed = 12345) {
    const shuffled = [...array];
    const random = seededRandom(seed);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create photo slides: 7 before first wish + 7 after each wish (8 slides total)
// Need 56 photos, but only have 53, so 3 photo slots will be empty
// Photos are shuffled once with a fixed seed and remain static
const shuffledImages = shuffleArrayOnce(allImages);
const photoSlides = [];

// Before first wish: 7 photos
photoSlides.push(shuffledImages.slice(0, 7));

// After each of 7 wishes: 7 photos each (but we only have 46 left)
let currentIndex = 7;
for (let i = 0; i < 7; i++) {
    const photosForThisSlide = shuffledImages.slice(currentIndex, currentIndex + 7);
    if (photosForThisSlide.length > 0) {
        photoSlides.push(photosForThisSlide);
        currentIndex += photosForThisSlide.length;
    }
}

// Export photo slides for use in script.js
// photoSlides[0] = 7 photos before first wish
// photoSlides[1-7] = 7 photos after each wish (last one will have 4 photos instead of 7)
