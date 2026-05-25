# Tacho Quiz

A simple, interactive quiz application designed to provide users with a clean, enjoyable, and mobile‑friendly experience. The project is part of the Code Institute Full Stack Software Development programme (Milestone Project 2).

---

## 🎯 Target Audience

Tacho Quiz is designed for the following groups of users:
- Professional drivers preparing for CPC examinations
- New drivers who want to understand tachograph rules, driving times, and rest periods.
- Transport company trainees undergoing internal training programmes.
- Anyone interested in testing their knowledge of European road‑transport regulations.

The application is built using a mobile‑first approach, making it ideal for users who access the quiz on their phones during breaks or study sessions.

---

## UX Design
### 1. Strategy Plane
The purpose of the project is to provide a fast, clear, and accessible quiz that helps users learn driving and rest regulations.
User goals:

- Start the quiz immediately
- Receive instant feedback
- View their final score
- Navigate easily between pages
#### Developer goals:
- Simple interface
- Clear structure
- Smooth mobile experience

### 2. Scope Plane
Included features:
- Question categories
- Randomised questions
- Instant feedback
- Final score
- Score history
- Explanations for answers
#### Excluded features:
- User accounts
- Online leaderboards
- Cloud saving

### 3. Structure Plane
Primary user flow:
- Home -> choose category
- Quiz -> answer questions + receive feedback
- Score -> view results + breakdown
- Optional -> Login / About

Navigation is linear and intuitive, preventing users from breaking the flow.

### 4. Skeleton Plane
Layout decisions:
- Mobile‑first
- Large, square buttons
- High contrast
- Centred text
- Consistent spacing

### 5. Surface Plane
- Dark, modern colour palette
- Highlight colours for feedback
- Clean sans‑serif fonts
- Minimalist icon set

---

## 🧭 Navigation

-Dark, modern colour palette
- Highlight colours for feedback
- Clean sans‑serif fonts
- Minimalist iconography

---
 
## 😀 Ease of Use
- Intuitive interface requiring no documentation
- Tested with real users (friends/family)
- No aggressive pop‑ups
- No autoplay audio
- All inputs clearly labelled with placeholders
- Consistent UX patterns inspired by GoodUI
- Users maintain full control at all times

---

## Information Architecture

- Information is logically structured
- Clear headers for each section
- Straightforward, easy‑to‑read language
- Interactivity used where helpful (quiz, feedback)
- No content feels out of place

---

## Defensive Design
- Users cannot break the site through unexpected actions
- Forms handle invalid or empty input gracefully
- Back/Forward navigation does not break functionality
- No console errors during interaction
- Clear feedback for disallowed actions
- Quiz logic prevents multiple answers or skipping

---

## 📚 User Stories (Summary)

- As a user, I want to start the quiz easily so that I can begin without confusion.
- As a user, I want to see one question at a time so that I can focus clearly.
- As a user, I want to select answers with a single click so that the quiz feels intuitive.
- As a user, I want immediate feedback so that I know if I was correct.
- As a user, I want to see my final score so that I can understand my performance.
- As a user, I want the quiz to work on mobile devices so that I can play anywhere.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Git & GitHub** for version control
- **Copilot** for automated code review and debug
- **Claude** Quiz questions were AI-generated and manually reviewed for accuracy.

---

## 🚀 Deployment

The project will be deployed using **GitHub Pages**.  
A live link will be added here once deployment is complete.

---

## 🧪 Testing (To Be Added)

Testing documentation will be added later in the project, including:

- Manual testing
- Browser compatibility
- Responsiveness checks
- Accessibility checks

---

## 📁 Project Structure (Initial)

TACHO-QUIZ/
|
| -- docs/
│   | -- assets/
│   │   |-- audio/
│   │   |-- css/
│   │   │   |-- style.css
│   │   |-- images/
│   │   │   |-- icons/
│   │   │   │   |-- android-chrome-192x192.png
│   │   │   │   |-- android-chrome-512x512.png
│   │   │   │   |-- apple-touch-icon.png
│   │   │   │   |-- favicon-16x16.png
│   │   │   │   |-- favicon-32x32.png
│   │   │   │   |-- favicon.ico
│   │   │   │   |-- site.webmanifest
│   │   │   |-- img/
│   │   │   │   |-- truck-img2.png
│   │   │   |-- logo/
│   │   │       |-- logo.png
│   │   |-- js/
│   │       |-- index.js
│   │       |-- navbar.js
│   │       |-- questions.js
│   │       |-- quiz.js
│   │       |-- score.js
│   │
│   |-- wireframe/
│   │   |-- (wireframe images)
│   │
│   |-- about.html
│   |-- confirm.html
│   |-- index.html
│   |-- login.html
│   |-- quiz.html
│   |-- score.html
│
|-- LICENSE
|-- .gitignore
|-- README.md

---

## Image Credits

- [Favicon base image sourced from](https://commons.wikimedia.org/wiki/File:Circle-icons-steeringwheel.svg)
- [truck img](https://commons.wikimedia.org/wiki/File:Gevara_refrigerator_truck_in_europe.jpg)

---

## Wireframes

Wireframes were created with the assistance of Claude AI (Anthropic)
based on my own design decisions and requirements.

The layout, structure, and content for each page were planned by me,
then rendered using Claude as a tool.

**Tools used:** Claude AI (claude.ai) for wireframe generation

### Mobile

![Home Mobile](docs/wireframe/1-Home-mobile.png)
![Quiz Mobile](docs/wireframe/2-Quiz-mobile.png)
![Score Mobile](docs/wireframe/3-Score-mobile.png)
![Login Mobile](docs/wireframe/4-Login-mobile.png)
![About Mobile](docs/wireframe/5-About-mobile.png)

### Tablet

![Home Tablet](docs/wireframe/1-Home-tablet.png)
![Quiz Tablet](docs/wireframe/2-Quiz-tablet.png)
![Score Tablet](docs/wireframe/3-Score-tablet.png)
![Login Tablet](docs/wireframe/4-Login-tablet.png)
![About Tablet](docs/wireframe/5-About-tablet.png)

### Desktop

![Home Desktop](docs/wireframe/1-Home-desktop.png)
![Quiz Desktop](docs/wireframe/2-Quiz-desktop.png)
![Score Desktop](docs/wireframe/3-Score-desktop.png)
![Login Desktop](docs/wireframe/4-Login-desktop.png)
![About Desktop](docs/wireframe/5-About-desktop.png)

---

## Bugs

1. ### Unbalanced distribution of correct answers
   At an early stage of development, most questions had the correct answer set to option B.The approximate distribution was:

- A: 7%
- B: 65%
- C: 27%
- D: 2%

### Issue:

Users could guess the correct answer simply by selecting option B, which undermined the purpose of the quiz.

### Solution:

GitHub Copilot automatically reviewed and reorganised the questions to achieve a more balanced spread of correct answers:

- A: 23%
- B: 2%
- C: 27%
- D: 33%
  This ensures a fairer and more realistic testing experience.

2. ### Explanation box not displaying correctly
   The explanation box was implemented in JavaScript but had no corresponding CSS class, meaning it appeared unstyled or not at all.

### Issue:

The element was visible in the DOM but had no visual presence.

### Solution:

I created a dedicated .explanation-box class, added styling consistent with the project’s dark theme, and introduced a subtle fade‑in animation to improve user experience.

3. ### Resolved Issue
   I identified that the forgot-link element in login.html was not centring correctly on larger screens. Although the .forgot-link class applied display: block;, the element also used the .link-btn class, which did not define a width. As a result, the button behaved like an inline element and did not expand to the full container width, preventing text-align: centre; from having any visible effect.

### Solution:

I updated the .forgot-link class by adding width: 100%;, ensuring the element occupies the full available width and aligns correctly across all screen sizes.

4. ### Resolved Category Bug
   I identified an issue where selecting any category briefly triggered the cpc-mixed button as well. This happened because the previous selection was not being cleared consistently before applying the new one, causing a momentary visual flash on the wrong button.

### Solution:

I updated the category‑selection logic in index.js to ensure that all buttons have the selected class removed before applying it to the newly clicked category. This prevents any unintended activation and ensures that only the chosen category remains highlighted.

### Testing:

I opened the categories section in the browser and selected each category individually to confirm that only the intended button stays active, with no temporary activation of cpc-mixed.

5. ### Resolved Issue Summary (Navbar Remaining Open / Invisible Click Area)
   I identified an issue where the mobile navigation menu remained open but invisible when clicking near the top of the page. This caused unexpected behaviour, such as the About page being triggered when clicking outside the visible navbar.

### Solution:

I reviewed the toggle logic and updated the event handling so that the menu closes correctly whenever the user interacts outside the navigation area. This prevents the hidden menu from staying active and ensures consistent behaviour across all pages. The fix was implemented with the assistance of copilot.

6. ### Issues identified by GitHub Copilot Code Review

- Inconsistent localStorage key usage (tq-category vs tq_category)
- Unsafe JSON parsing for tq_answers
- Potential HTML injection risk caused by using innerHTML in the breakdown section
- Missing CSS styling for .breakdown-item.wrong
- Duplicate history entries when refreshing score.html
- Invalid score percentage values (NaN/Infinity) when total was zero or corrupted

### Fixes implemented

- Standardised localStorage key names (tq_category)
- Added safe JSON fallback ("[]")
- Replaced innerHTML with textContent and createTextNode for secure DOM rendering
- Added missing .breakdown-item.wrong styling using existing colour variables
- Introduced a tq_saved flag to prevent duplicate history entries
- Added validation and clamping for score percentage calculations

### Inconsistent state handling, stale best‑score data, and minor CSS error

### Issue

- tq_category was being cleared automatically on every index page load, causing state corruption when multiple tabs were open.
- updateBestScoreBanner() used a cached version of tq_best_scores, resulting in stale best‑score data when navigating back or after updates.
- Date formatting was inconsistent across best‑score and history entries (en-GB vs browser default).
- A missing semicolon in .best-score-value introduced a minor CSS inconsistency.

### Solution

- Removed automatic clearing of tq_category to prevent cross‑tab state corruption.
- Updated updateBestScoreBanner() to re‑parse tq_best_scores from localStorage on each call.
- Standardised all date formatting to en‑GB for consistent UI output.
- Added the missing semicolon in .best-score-value to align with the stylesheet’s formatting standards.

---

## 📄 Licence

This project is licensed under the **MIT Licence**.

---

## Future Enhancements

- Additional question categories
- Sound effects toggle
- Dark mode
- Animated transitions
