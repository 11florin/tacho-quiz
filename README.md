# Tacho Quiz

A simple, interactive quiz application designed to provide users with a clean, enjoyable, and mobile‑friendly experience. The project is part of the Code Institute Full Stack Software Development programme (Milestone Project 2).

---

## 🎯 Project Purpose

The aim of this project is to create a responsive and accessible quiz that allows users to test their knowledge, receive instant feedback, and view their final score at the end. The application is designed with clarity, usability, and simplicity in mind.

---

## 🧩 Features (Planned)

- Start screen with a clear call‑to‑action
- One question displayed at a time
- Clickable answer options
- Immediate feedback (correct/incorrect)
- Final score screen
- Mobile‑friendly layout
- Optional timer
- Best score saved in local storage

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

tacho-quiz/
|
|-- index.html
|-- assets/
│ |-- css/
│ |-- js/
│ |-- images/
│ |-- audio/
|-- data/
|-- docs/
|-- README.md

---

## Image Credits

- [Favicon base image sourced from:](https://commons.wikimedia.org/wiki/File:Circle-icons-steeringwheel.svg)
- [truck img:](https://commons.wikimedia.org/wiki/File:Gevara_refrigerator_truck_in_europe.jpg)

---

## Wireframes

Wireframes were created with the assistance of Claude AI (Anthropic)
based on my own design decisions and requirements.

The layout, structure, and content for each page were planned by me,
then rendered using Claude as a tool.

**Tools used:** Claude AI (claude.ai) for wireframe generation

### Mobile

![Home Mobile](assets/wireframes/1-Home-mobile.png)
![Quiz Mobile](assets/wireframes/2-Quiz-mobile.png)
![Score Mobile](assets/wireframes/1-Score-mobile.png)
![Login Mobile](assets/wireframes/2-Login-mobile.png)
![About Mobile](assets/wireframes/1-About-mobile.png)

### Tablet

![Home Tablet](assets/wireframes/1-Home-tablet.png)
![Quiz Tablet](assets/wireframes/2-Quiz-tablet.png)
![Score Tablet](assets/wireframes/1-Score-tablet.png)
![Login Tablet](assets/wireframes/2-Login-tablet.png)
![About Tablet](assets/wireframes/1-About-tablet.png)

### Desktop

![Home Desktop](assets/wireframes/1-Home-desktop.png)
![Quiz Desktop](assets/wireframes/2-Quiz-desktop.png)
![Score Desktop](assets/wireframes/1-Score-desktop.png)
![Login Desktop](assets/wireframes/2-Login-desktop.png)
![About Desktop](assets/wireframes/1-About-desktop.png)

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

---

## 📄 Licence

This project is licensed under the **MIT Licence**.

---

## Future Enhancements

- Additional question categories
- Sound effects toggle
- Dark mode
- Animated transitions
