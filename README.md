# New Generation High School – Student Portal

A single-page student portal built with Next.js, React, TypeScript and Tailwind CSS.
The school administrator can see every student, search by name, see three numbers
about the school at a glance, and add and remove students.

## Deployed website

https://(WE HAVE TO PUT OUR WEBSITE LINK HERE GUYS).vercel.app

## Group members

| Member | Name         | What they built                                                                |
| ------ | ------------ | ------------------------------------------------------------------------------ |
| A      | Rahul Thakur | `app/layout.tsx`, Navbar, Footer, StatsPanel, and the overall look of the page |

| B | Henry Nguyen | `data/students.ts`, StudentList and StudentCard

| C | Aman Kumar | StudentPortal (state, Remove, Clear all and the search filter), SearchBox and AddStudent

## Running the project

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Test checklist

| #   | Do this       | You should see                                                                                                          | Result |
| --- | ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | Open the app. | Every student from the data file shows, and the three numbers match the data (8 students, 6 honour roll, 2 graduating). | PASS   |

| 2 | Click **Show details** on one card, then click it again. | That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. | PASS |

| 3 | Remove a grade 12 student. | The student is gone, and both Students and Graduating drop by one. | PASS |

| 4 | Type a last name in capitals, such as SINGH, into the search box. Then empty the box. | Only the matching student shows. When the box is empty, every student is back. | PASS |

| 5 | Search for zzz. | The no-students message shows. The three numbers do not change: search changes what is shown, not the list. | PASS |

| 6 | Leave the first name empty, fill in the last name, and click **Add student**. | Nothing is added. | PASS |

| 7 | Fill in all four inputs and click **Add student**. | The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. | PASS |

| 8 | Click **Clear all**. | The no-students message shows, and all three numbers are 0. | PASS |

| 9 | Narrow the browser to phone width (DevTools device toolbar). | The cards stack in one column, and nothing scrolls sideways. | PASS |

| 10 | Click each link in the navbar. | The page jumps to that section. | PASS |

## Live Deployment

The **New Generation High School Student Portal** has been successfully deployed using Vercel.

**Live Website:** https://studentportal-bice.vercel.app/

**Deployment Platform:** Vercel

**Framework:** Next.js, React, TypeScript, and Tailwind CSS

The deployed application allows users to view student information, search for students, add new students, remove students, and view school statistics.
