---
layout: assignment-two-column
title: "Practice with Functions: Make a Creature"
abbreviation: HW3
type: homework
due_date: 2022-10-05
ordering: 3
points: 16
draft: 1
---


> **LEARNING OBJECTIVES:** 
> 1. Practice working with a JavaScript library (p5.js)
> 1. Practice writing your own functions
> 1. The opportunity to get creative!

<img class="creature" src="/fall2022/assets/images/homework/hw03/creature.png" /> In this assignment, you are going to write a program to draw a creature of your own design/choosing using p5.js. At the end of this assignment, someone should be able to use your function to draw your creature: anywhere on the screen at any size or color. In other words, your function needs to honor the parameters that are passed into it. If you don't quite know what this means (this can be a very confusing concept for people just learning to program), ask Sarah during class or come to tuturing / office hours.

## Part 1: Design your creature
On paper, sketch out at least 3 VERY SIMPLE creature ideas (shoot for using between 4-8 shapes). These can be different variations of the same creature or all different ones. You can just implement the head of your creature (similar to the bear at the top) or the whole thing — the choice is up to you. Here are some links to ideas:

* <a href="https://www.youtube.com/watch?v=yh_A09CrT68" target="_blank">https://www.youtube.com/watch?v=yh_A09CrT68</a> (this one is pretty sophisticated, but interesting!)
* <a href="circle drawing monsters" target="_blank">https://www.youtube.com/watch?v=dhiy00COsWQ/</a>
* <a href="https://goo.gl/hKewyL" target="_blank">https://goo.gl/hKewyL</a>

From your 3 sketched ideas, select the one that you would like to use for the assignment and draw the creature bigger on a different piece of paper — ideally graph paper — and label the points that will help you to program your creature. 

{: .blockquote-no-margin}
> **AGAIN:** Making a **SIMPLE** creature (e.g using 4-8 shapes) is encouraged. You don’t need to get too detailed unless you want to! You will continue working on your creature in subsequent assignments, so you can revise it later.

## Part 2: Implement your "drawCreature" function
Once you are satisfied with your animal concept, create a `drawCreature` function, inside of `sketch.js`, using any combination of shapes (points, lines, polygons, rectangles, ovals, etc.). Feel free to use any of the code in the `samples` folder. 

**Tips**: 
1. Keep it simple (I recommend anywhere between 4-8 shapes)! You can always add more functionality later. The spirit of this assignment is for you to get creative, given your developing knowledge of functions. That said, `p5.js` is limited in the functionality it offers, so see what you can come up with with a few simple shapes. Don't overthink it.
2. Make only one or two changes at a time and then test out those changes in the browser. This makes things easier to debug.
3. Use the `console` panel of the developer tools to see your error messages.

Once your function successfully draws the creature that you sketched (in Part 2), you will start adding **parameters** that will allow your creature to be further customized. Please add the following required parameters in the order specified:

1. An `x` parameter, specifying the x-position of the center of your creature (should be a number).
1. A `y` parameter, specifying the y-position of the center of your creature (should also be a number).
1. A`size` parameter, specifying the size of the creature.
1. A `primaryColor` parameter, specifying the primary color of the creature. In the case of the bear, this is the face color.
1. A `secondaryColor` parameter, specifying the secondary color of the creature. In the case of the bear, this is the ear color.

When you're done, please add at least five calls to the `drawCreature` function in your `sketch.js` file, using different values for the arguments. For instance, after completing the assignment, I used my drawCreature function in the following way to produce the drawing below (feel free to use whatever arguments you want for your positional / keyword parameters):

```js
// using your drawCreature function, you should be able to make different 
// versions of your design (different sizes, colors, etc), thereby reusing 
// the same code over and over again

drawCreature(92, 115, 85, '#5e6976', '#1b324d');
drawCreature(487, 110, 101, '#bfdc65', '#abb880');
drawCreature(454, 423, 141, '#aebb83', '#227876');
drawCreature(333, 227, 99, '#94ba77', '#3f5364');
drawCreature(117, 314, 91, '#648d8e', '#afc272');
drawCreature(199, 469, 122, '#3f5364', '#bfdc65');

// helper code for making a grid (inside of utilities.js)
drawGrid(canvas, screen_width, screen_height)
```

<img class="medium frame center" src="/fall2022/assets/images/homework/hw03/creatures.png" />


## What to Submit
Before you submit, please do test your make creature function by invoking the function calls above. If your function is working correctly, all of the input parameters will be honored (i.e. the creature will be drawn at the correct position at (roughly) the specified size, with the specified colors).

When you're done, please create a zip file that includes the following files:

1. A photo / scan of your sketches (PDF or JPG)
1. Your sketch.js file
1. A link to your home page and code repository.
