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

  // process
  const area = (a * b) / 2
  const perimeter = a + b * 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
