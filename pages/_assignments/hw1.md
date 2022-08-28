---
layout: assignment-two-column
title: "Make a fake portfolio website"
abbreviation: HW1
type: homework
due_date: 2022-09-12
ordering: 1
draft: 1
points: 16
---

<style>
    blockquote h2 {
        margin: auto !important;
        padding: 0px !important;
    }

    .frame {
        padding: 0;
    }

    .medium th:first-child, .medium td:first-child {
        width: 40px;
        max-width: 40px;
        min-width: 40px;
    }
</style>

{:.blockquote-no-margin}
> ## Readings
> TODO: resources here.
>

## Introduction
The goal of today's lab is to style the `index.html` page that was given to you so that it looks like the page shown in [this video](https://drive.google.com/file/d/1eLJVLW7AGQ_1EX6Hvqh_BVMAkPxKJZFX/view?usp=sharing). This is mostly a CSS exercise. That is, 99% of the edits you will make will be in `style.css`. That said, you are also welcome to change `index.html` to make things easier for you to style (optional, not required).

## Your Tasks
In order to complete this assignment, you will be modifying the 6 sections described below. Please read the checklist carefully, to ensure that you receive full credit for this assignment.

1. [Navigation](#nav)
1. [Header](#header)
1. [About Me](#about)
1. [Projects](#projects)
1. [Contact](#contact)
1. [Footer](#footer)
1. [Publish to GitHub](#publish)

{:#nav}
### 1. Navigation
Style the `<nav></nav>` section so that it matches the style of the screenshot below. Specifically, you will:

{:.checkbox-list}
* Style the `<ul></ul>` so that it's laid out horizontally, and remove the bullets.
* Ensure that the color of the links are white and that they do not have an underline. 
* Modify the link HTML so that when each link is clicked, the page scrolls down to the relevant section (see video).

<img class="large frame" src="/fall2022/assets/images/homework/hw01/01-header.png" />

{:#header}
### 2. Header
Style the `<header></header>` section so that it matches the style of the screenshot above. Specifically, you will:

{:.checkbox-list}
* Change the background color to a color that you like (but ensure that it's dark enough for the white text to be readable).
* Center the text and image.
* Style the image so that it's circular (hint: Google "border radius").
* Use a custom google font for the `<h1></h1>` tag.

{:#about}
### 3. About Me
Style the `<section id="about"></section>` section so that it matches the style of the screenshot below. Specifically, you will:

{:.checkbox-list}
* Use a custom google font for the `<h2></h2>` tag (same font you used for the h1 tag).
* Use a simple font for the rest of your tags (p, li, a, etc.) -- something that is well-suited for body copy.
* Ensure that the text has sufficient spacing from the sides of the screen and from the top and bottom, and that it is left-justified (see screenshot).

<img class="large frame" src="/fall2022/assets/images/homework/hw01/02-about.png" />


{:#projects}
### 4. Projects

Style the `<section id="projects"></section>` section so that it matches the style of the screenshot below. Specifically, you will:

{:.checkbox-list}
* Arrange your project "cards" into two columns.
* Ensure that there is adequate spacing between the cards (remember the principle of alignment).
* Change the background of the entire section to light gray.
* Ensure that the cards have sufficient spacing from the sides of the parent container.

<img class="large frame" src="/fall2022/assets/images/homework/hw01/03-projects.png" />

{:#contact}
### 5. Contact

Style the `<section id="contact"></section>` section so that it matches the style of the screenshot below. Specifically, you will:

{:.checkbox-list}
* Arrange the screen into two columns, where the left column displays the form and the right column displays the author's contact information.
* Arrange the form textboxes and button as shown in the screenshot.
* Ensure that the textboxes have a light gray background and some padding and marging (as shown in the screenshot).
* Ensure that the form and contact info have sufficient spacing from the sides of the parent container.

<img class="large frame" src="/fall2022/assets/images/homework/hw01/04-contact.png" />


{:#footer}
### 6. Footer
Style the `<footer></footer>` section so that it matches the style of the screenshot above, with center-aligned text and a light gray background color.

{:#publish}
### 7. Publish to GitHub

## Rubric

{:.medium}
| | Task | Points | Description |
|--|--|--|--|
| 1. | Navigation | 2pts | [see requirements](#nav) |
| 2. | Header | 2pts | [see requirements](#header) |
| 3. | About Me | 1pts | [see requirements](#about) |
| 4. | Projects | 3pts | [see requirements](#projects) |
| 5. | Contact | 4pts | [see requirements](#contact) |
| 6. | Footer | 1pt | [see requirements](#footer) |
| 7. | Publish to GitHub | 2pts | [see requirements](#publish) |
|  | **Total** | **16pts** |  |


## What to Submit
**Please Read Carefully:** To submit homework 1, please paste the following links into the Moodle under the Homework 1 submission section:

1. A link to your **homepage** (from Tutorial 4) on GitHub pages, which should link to your hw01 assignment (and previous tutorials and classwork you have done).
2. A link to your GitHub **code repository** (where your code files are stored).