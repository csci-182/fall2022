---
layout: module
title: "CSS Layouts: Part 2"
type: lecture
draft: 0
num: 7
due_date: 2022-09-07
slides:
   - title: "CSS Flexbox"
     url: https://docs.google.com/presentation/d/18NrEIcj3dx1BxCdTq4ji1O27hf-q2bn77AYyprggyO8/edit?usp=sharing
readings:
   - url: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
     title: "CSS Tricks: A Complete Guide to Flexbox"
   - url: https://flexboxfroggy.com/
     title: Flexbox Froggy
     notes: Please try to complete at least the first 12 levels after class!
   - url: https://www.w3schools.com/css/css3_flexbox.asp
     title: W3 Schools Flexbox Guide
   - url: https://university.webflow.com/lesson/flexbox-vs-grid
     title: When to use Flex versus CSS Grid?
     optional: 1
   - url: ../css-reference/media-queries/
     title: Media Queries (review)
     internal: 1 
     optional: 1      
include_pages: 
    - extras/css_flex_activity.md
exercise_url: "lecture07.zip"
---
<style>
    img {
        max-width: 100%;
    }

    .flex-container {
        display: flex;
        min-height: 400px;
        align-items: center;
        justify-content: center;
        border: solid 1px #CCC;
    } 
    .flex-container img {
        max-height: 300px;
    }
</style>

Today, we will be delving into another way to make layouts, using Flexbox. Sarah strongly suggests that you invest some time into doing the readings / exercises for both CSS Grid and Flexbox. Putting in an investment early on will make you a much better designer / web programmer, and give you more power to instantiate your designs later in the semester.
