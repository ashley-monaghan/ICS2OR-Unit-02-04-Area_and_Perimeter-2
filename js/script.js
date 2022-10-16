// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  const a = parseInt(document.getElementById("side-a-of-rectangle").value)
  const b = parseInt(document.getElementById("side-b-of-rectangle").value)
  const h = parseInt(document.getElementById("side-h-of-rectangle").value)

  // process
  const area = (b * h) / 2
  const perimeter = 2 * a + b

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
