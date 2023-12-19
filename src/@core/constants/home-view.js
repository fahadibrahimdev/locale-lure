import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Can’t Decide Where to Go Out? Locale Lure Your Next Night Out',
    text: 'Why Locale Lure takes the modern-day directory of restaurants, bars, and nightclubs to another level. The mobile app works by helping you search for places by location, or by a food item you are craving or an event you would like to attend. The app’s star feature is concisely combining valuable information about each establishment that users will be interested in such as when the kitchen closes and the dress code.',
}


export const brandFeaturesContent = {
    heading: 'Features for Individual Users',
    features: [
        {
            title: 'Browse Near You ',
            description: 'Look for venues on the Locale Lure app near you.',
            icon: 'select-category'
        },
        {
            title: 'Search by Word ',
            description: 'Find restaurants and clubs by typing in events and specials that you prefer.',
            icon: 'find-customers'
        },
        {
            title: 'Find Details',
            description: 'Get access to the menu, dress code, and reviews of every place.',
            icon: 'search'
        },
        {
            title: 'Reserve',
            description: 'Make a reservation and pay the cover charge directly via the app.',
            icon: 'meeting'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Locale Lure is geared to be the first app of its kind to include everything you need from finding a restaurant or a club for a night out with friends to determining every detail about the place.',
        'Unlike other apps, Locale Lure lists updated specials, alerts users of events they may be interested in, and lists details such as the appointed dress code of each place so users do not have to search that separately or be disappointed when discovering later.',
        'The app also focuses on making the platform inclusive to small businesses that have just entered the gastronomy industry.'
    ],
}

export const benefitsContent = {
    heading: 'What’s in it for Businesses?',
    text: 'Locale Lure intends to be a revolutionary mobile platform for businesses just as much as potential customers of restaurants, bars, and clubs. The app encapsulates a unique set of features meant to help aspiring restaurants without big marketing budgets to get a chance and show off their offerings.',
    benefits: [
        {
            title: 'Business Exposure',
            description: 'Small businesses and up-and-coming venues can market their establishment to a filtered audience. Positive reviews posted by users become part of a venue’s profile.',
            icon: 'business-canvas'
        },
        {
            title: 'Boost',
            description: 'The boost feature helps restaurants, bars, and clubs compete with similar businesses by making sure their business is visible above the others on the app.',
            icon: 'rocket'
        },
        {
            title: 'Post Happenings',
            description: 'Establishments can post the latest news and send out a notification regarding their upcoming events.',
            icon: 'uploaded-post'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Locale Lure Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Explore Exciting New Places for the Weekend or a Get Together',
    text: 'Sign up to download the Locale Lure app as it launches.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: 'Why Soya?',
    ctaBtn: 'Download App'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
