# math

---

An easing library that allows you to interpolate with various kinds of smoothing [functions](https://easings.net/). To use with Global.Lerp, input what you would to the fraction argument in one of these easing functions and then the output of that into the Global.Lerp fraction argument.

Example usage with Lerp and math.ease.InSine

-- Define a wrapper function to make it easier to work with
local function easedLerp(fraction, from, to)
return Lerp(math.ease.InSine(fraction), from, to)
end

-- Compare with the non-eased version of Lerp
print(easedLerp(0.25, 0, 1))
print(Lerp(0.25, 0, 1))

print(easedLerp(0.25, 0, 5))
print(Lerp(0.25, 0, 5))

```
0.076120467488713
0.25

0.38060233744357
1.25
```

A brief visual example of different easing methods

---


## Miembros (87)


---

### `math:AngleDifference` `[client/menu/server]`

Calculates the difference between two angles.

**Argumentos:**

- `number a` — The first angle.
- `number b` — The second angle.

**Retorna:**

- `number` — The difference between the angles between -180 and 180

*Fuente: `lua/includes/extensions/math.lua:193`*

---

### `math:Approach` `[client/menu/server]`

Gradually approaches the target value by the specified amount.

**Argumentos:**

- `number current` — The value we're currently at.
- `number target` — The target value. This function will never overshoot this value.
- `number change` — The amount that the current value is allowed to change by to approach the target. (It makes no difference whether this is positive or negative.)

**Retorna:**

- `number` — New current value, closer to the target than it was previously.

*Fuente: `lua/includes/extensions/math.lua:173`*

---

### `math:ApproachAngle` `[client/menu/server]`

Increments an angle towards another by specified rate.

This function is for numbers representing angles (0-360), NOT Angle objects!

**Argumentos:**

- `number currentAngle` — The current angle to increase
- `number targetAngle` — The angle to increase towards
- `number rate` — The amount to approach the target angle by

**Retorna:**

- `number` — Modified angle

*Fuente: `lua/includes/extensions/math.lua:1203`*

---

### `math:BSplinePoint` `[client/menu/server]`

Basic code for Bézier-Spline algorithm.

**Argumentos:**

- `number fraction` — A number in the range `[0,fractionMax]` which controls which location along the spline's length should be evaluated as the return value.
- `table points` — A table of Vector that form the spline.

There must be **at least** 4 points.
- `number fractionMax` — The maximum value of the `fraction` argument.

The most common value for this is `1`.

**Retorna:**

- `Vector` — The point on the Bézier curve that corresponds to the given `fraction` argument.

*Fuente: `lua/includes/extensions/math.lua:131`*

---

### `math:BinToInt` `[client/menu/server]`

Converts a binary string into a number.

**Argumentos:**

- `string string` — Binary string to convert

**Retorna:**

- `number` — Base 10 number.

*Fuente: `lua/includes/extensions/math.lua:31`*

---

### `math:CHSpline` `[client/menu/server]`

Cubic Hermite spline algorithm.

**Argumentos:**

- `number frac` — From 0 to 1, where alongside the spline the point will be.
- `Vector point0` — First point for the spline.
- `Vector tan0` — Tangent for the first point for the spline.
- `Vector point1` — Second point for the spline.
- `Vector tan1` — Tangent for the second point for the spline.

**Retorna:**

- `Vector` — Point on the cubic Hermite spline, at given fraction.

*Fuente: `lua/includes/extensions/math.lua:148`*

---

### `math:Clamp` `[client/menu/server]`

Clamps a number between a minimum and maximum value.

**Argumentos:**

- `number input` — The number to clamp.
- `number min` — The minimum value.
- `number max` — The maximum value, this function will **never** return a number greater than this.

**Retorna:**

- `number` — The clamped value.

*Fuente: `lua/includes/extensions/math.lua:53`*

---

### `math:CubicBezier` `[client/menu/server]`

Lerp point between 4 control points with cubic bezier.

See math.QuadraticBezier for a similar function which works with 3 control points.

**Argumentos:**

- `number frac` — The fraction for finding the result. This number is clamped between 0 and 1.
- `Vector p0` — First control point
- `Vector p1` — First tangent
- `Vector p2` — Second tangent
- `Vector p3` — Second control point

**Retorna:**

- `Vector` — Point between control points at the specified fraction

*Fuente: `lua/includes/extensions/math.lua:220`*

---

### `math:Dist` `[client/menu/server]`

You should use math.Distance instead

Returns the difference between two points in 2D space. Alias of math.Distance.

**Argumentos:**

- `number x1` — X position of first point
- `number y1` — Y position of first point
- `number x2` — X position of second point
- `number y2` — Y position of second point

**Retorna:**

- `number` — Distance between the two points.

*Fuente: `lua/includes/extensions/math.lua:20`*

---

### `math:Distance` `[client/menu/server]`

Returns the difference between two points in 2D space.

**Argumentos:**

- `number x1` — X position of first point
- `number y1` — Y position of first point
- `number x2` — X position of second point
- `number y2` — Y position of second point

**Retorna:**

- `number` — Distance between the two points

*Fuente: `lua/includes/extensions/math.lua:20`*

---

### `math:DistanceSqr` `[client/menu/server]`

Returns the squared difference between two points in 2D space. This is computationally faster than math.Distance.

**Argumentos:**

- `number x1` — X position of first point
- `number y1` — Y position of first point
- `number x2` — X position of second point
- `number y2` — Y position of second point

**Retorna:**

- `number` — The squared distance between the two points.

*Fuente: `lua/includes/extensions/math.lua:10`*

---

### `math:EaseInOut` `[client/menu/server]`

Calculates the progress of a value fraction, taking in to account given easing fractions

**Argumentos:**

- `number progress` — Fraction of the progress to ease, from 0 to 1.
- `number easeIn` = `0` — Fraction of how much easing to begin with, from 0 to 1.
- `number easeOut` = `1` — Fraction of how much easing to end with, from 0 to 1.

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math.lua:74`*

---

### `math:Factorial` `[client/menu/server]`

Simple function that calculates [factorial](https://en.wikipedia.org/wiki/Factorial) of a whole number.

**Argumentos:**

- `number val_in` — An whole number to get a factorial of. Decimal numbers will be treated as whole numbers.

**Retorna:**

- `number` — The factorial of given number.

*Fuente: `lua/includes/extensions/math.lua:248`*

---

### `math.ease:InBack` `[client/menu/server]`

Eases in by reversing the direction of the ease slightly before returning.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:128`*

---

### `math.ease:InBounce` `[client/menu/server]`

Eases in like a bouncy ball.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:168`*

---

### `math.ease:InCirc` `[client/menu/server]`

Eases in using a circular function.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:114`*

---

### `math.ease:InCubic` `[client/menu/server]`

Eases in by cubing the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:61`*

---

### `math.ease:InElastic` `[client/menu/server]`

Eases in like a rubber band.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:142`*

---

### `math.ease:InExpo` `[client/menu/server]`

Eases in using an exponential equation with a base of 2 and where the fraction is used in the exponent.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:97`*

---

### `math.ease:InOutBack` `[client/menu/server]`

Eases in and out by reversing the direction of the ease slightly before returning on both ends.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:136`*

---

### `math.ease:InOutBounce` `[client/menu/server]`

Eases in and out like a bouncy ball.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:187`*

---

### `math.ease:InOutCirc` `[client/menu/server]`

Eases in and out using a circular function.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:122`*

---

### `math.ease:InOutCubic` `[client/menu/server]`

Eases in and out by cubing the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:69`*

---

### `math.ease:InOutElastic` `[client/menu/server]`

Eases in and out like a rubber band.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:158`*

---

### `math.ease:InOutExpo` `[client/menu/server]`

Eases in and out using an exponential equation with a base of 2 and where the fraction is used in the exponent.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:105`*

---

### `math.ease:InOutQuad` `[client/menu/server]`

Eases in and out by squaring the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:57`*

---

### `math.ease:InOutQuart` `[client/menu/server]`

Eases in and out by raising the fraction to the power of 4.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:81`*

---

### `math.ease:InOutQuint` `[client/menu/server]`

Eases in and out by raising the fraction to the power of 5.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:93`*

---

### `math.ease:InOutSine` `[client/menu/server]`

Eases in and out using math.sin.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:45`*

---

### `math.ease:InQuad` `[client/menu/server]`

Eases in by squaring the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:49`*

---

### `math.ease:InQuart` `[client/menu/server]`

Eases in by raising the fraction to the power of 4.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:73`*

---

### `math.ease:InQuint` `[client/menu/server]`

Eases in by raising the fraction to the power of 5.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:85`*

---

### `math.ease:InSine` `[client/menu/server]`

Eases in using math.sin.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:37`*

---

### `math:IntToBin` `[client/menu/server]`

Converts an integer to a binary (base-2) string.

**Argumentos:**

- `number int` — Number to be converted.

**Retorna:**

- `string` — Binary number string. The length of this will always be a multiple of 3.

*Fuente: `lua/includes/extensions/math.lua:44`*

---

### `math:IsNearlyEqual` `[client/menu/server]`

Checks if two floating point numbers are nearly equal.

This is useful to mitigate  [accuracy issues in floating point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems). See examples below.

**Argumentos:**

- `number a` — The first number to compare.
- `number b` — The second number to compare.
- `number tolerance` = `1e-8` — The maximum difference between the two numbers to consider them equal.

**Retorna:**

- `boolean` — True if the difference between the two numbers is less than or equal to the tolerance.

*Fuente: `lua/includes/extensions/math.lua:267`*

---

### `math:NormalizeAngle` `[client/menu/server]`

Normalizes angle, so it returns value between -180 and 180.

**Argumentos:**

- `number angle` — The angle to normalize, in degrees.

**Retorna:**

- `number` — The normalized angle, in the range of -180 to 180 degrees.

*Fuente: `lua/includes/extensions/math.lua:189`*

---

### `math.ease:OutBack` `[client/menu/server]`

Eases out by reversing the direction of the ease slightly before finishing.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:132`*

---

### `math.ease:OutBounce` `[client/menu/server]`

Eases out like a bouncy ball.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:172`*

---

### `math.ease:OutCirc` `[client/menu/server]`

Eases out using a circular function.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:118`*

---

### `math.ease:OutCubic` `[client/menu/server]`

Eases out by cubing the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:65`*

---

### `math.ease:OutElastic` `[client/menu/server]`

Eases out like a rubber band.
This doesn't work properly when used with Global.Lerp as it clamps the fraction between 0 and 1. Using your own version of Global.Lerp that is unclamped would be necessary instead.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value

*Fuente: `lua/includes/extensions/math/ease.lua:150`*

---

### `math.ease:OutExpo` `[client/menu/server]`

Eases out using an exponential equation with a base of 2 and where the fraction is used in the exponent.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:101`*

---

### `math.ease:OutQuad` `[client/menu/server]`

Eases out by squaring the fraction.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:53`*

---

### `math.ease:OutQuart` `[client/menu/server]`

Eases out by raising the fraction to the power of 4.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:77`*

---

### `math.ease:OutQuint` `[client/menu/server]`

Eases out by raising the fraction to the power of 5.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:89`*

---

### `math.ease:OutSine` `[client/menu/server]`

Eases out using math.sin.

**Argumentos:**

- `number fraction` — Fraction of the progress to ease, from 0 to 1

**Retorna:**

- `number` — "Eased" Value, from 0 to 1

*Fuente: `lua/includes/extensions/math/ease.lua:41`*

---

### `math:QuadraticBezier` `[client/menu/server]`

Lerp point between 3 control points with quadratic bezier.

See math.CubicBezier for a function which works with 4 control points.

**Argumentos:**

- `number frac` — The fraction for finding the result.
- `Vector p0` — First control point
- `Vector p1` — Tangent
- `Vector p2` — Second control point

**Retorna:**

- `Vector` — Point between control points at the specified fraction

*Fuente: `lua/includes/extensions/math.lua:232`*

---

### `math:Rand` `[client/menu/server]`

Returns a random float between min and max.

See also math.random

**Argumentos:**

- `number min` — The minimum value.
- `number max` — The maximum value.

**Retorna:**

- `number` — Random float between min and max.

*Fuente: `lua/includes/extensions/math.lua:61`*

---

### `math:Remap` `[client/menu/server]`

Remaps the value from one range to another

**Argumentos:**

- `number value` — The value
- `number inMin` — The minimum of the initial range
- `number inMax` — The maximum of the initial range
- `number outMin` — The minimum of new range
- `number outMax` — The maximum of new range

**Retorna:**

- `number` — The number in the new range

*Fuente: `lua/includes/extensions/math.lua:211`*

---

### `math:Round` `[client/menu/server]`

Rounds the given value to the nearest whole number or to the given decimal places.

**Argumentos:**

- `number value` — The value to round.
- `number decimals` = `0` — The decimal places to round to.

**Retorna:**

- `number` — The rounded value.

*Fuente: `lua/includes/extensions/math.lua:162`*

---

### `math:Sign` `[client/menu/server]`

Returns the mathematical negative/positive sign of the input number.

**Argumentos:**

- `number value` — The input number.

**Retorna:**

- `number` — `-1` for inputs of less than 0, `0` if given a 0, `1` for inputs above 0.

*Fuente: `lua/includes/extensions/math.lua:185`*

---

### `math:SnapTo` `[client/menu/server]`

Snaps a number to the closest multiplicative of given number. See also Angle:SnapTo.

**Argumentos:**

- `number input` — The number to snap.
- `number snapTo` — What to snap the input number to.

**Retorna:**

- `number` — The clamped value.

*Fuente: `lua/includes/extensions/math.lua:216`*

---

### `math:TimeFraction` `[client/menu/server]`

Returns the fraction of where the current time is relative to the start and end times

**Argumentos:**

- `number start` — Start time in seconds
- `number end` — End time in seconds
- `number current` — Current time in seconds

**Retorna:**

- `number` — Fraction

*Fuente: `lua/includes/extensions/math.lua:207`*

---

### `math:Truncate` `[client/menu/server]`

Trim unwanted decimal places.

**Argumentos:**

- `number num` — The number to truncate
- `number digits` = `0` — The amount of digits to keep after the point.

**Retorna:**

- `number` — The result.

*Fuente: `lua/includes/extensions/math.lua:168`*

---

### `math:abs` `[client/menu/server]`

Calculates the absolute value of a number (effectively removes any negative sign).

**Argumentos:**

- `number x` — The number to get the absolute value of.

**Retorna:**

- `number` — The absolute value.

---

### `math:acos` `[client/menu/server]`

Returns the [arccosine](https://en.wikipedia.org/wiki/Arccosine) of the given number.

**Argumentos:**

- `number cos` — Cosine value in range of -1 to 1.

**Retorna:**

- `number` — An angle in radians, between 0 and pi, which has the given cos value.

nan if the argument is out of range.

---

### `math:asin` `[client/menu/server]`

Returns the [arcsine](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions) of the given number.

**Argumentos:**

- `number normal` — Sine value in the range of -1 to 1.

**Retorna:**

- `number` — An angle in radians, in the range -pi/2 to pi/2, which has the given sine value.

nan if the argument is out of range.

---

### `math:atan` `[client/menu/server]`

Returns the [arctangent](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions) of the given number.

**Argumentos:**

- `number normal` — Tangent value.

**Retorna:**

- `number` — An angle in radians, in the range -pi/2 to pi/2, which has the given tangent.

---

### `math:atan2` `[client/menu/server]`

functions like math.atan(y / x), except it also takes into account the quadrant of the angle and so doesn't have a limited range of output.

The Y argument comes first!

**Argumentos:**

- `number y` — Y coordinate.
- `number x` — X coordinate.

**Retorna:**

- `number` — The angle of the line from (0, 0) to (x, y) in radians, in the left-open interval (-pi, pi]

---

### `math:calcBSplineN` `[client/menu/server]`

Use math.BSplinePoint instead.

Basic code for Bezier-Spline algorithm, helper function for math.BSplinePoint.

**Argumentos:**

- `number i` — 
- `number k` — Sending in a value &lt; 1 will result in an infinite loop.
- `number t` — 
- `number tinc` — 

**Retorna:**

- `number` — 

*Fuente: `lua/includes/extensions/math.lua:100`*

---

### `math:ceil` `[client/menu/server]`

Ceils or rounds a number up.

See math.floor for the inverse of this function.

**Argumentos:**

- `number number` — The number to be rounded up.

**Retorna:**

- `number` — ceiled numbers

---

### `math:cos` `[client/menu/server]`

Returns the [cosine](https://en.wikipedia.org/wiki/Trigonometric_functions#cos) of given angle.

**Argumentos:**

- `number number` — Angle in radians

**Retorna:**

- `number` — Cosine of given angle in the range (-1, 1)

---

### `math:cosh` `[client/menu/server]`

Returns the [hyperbolic cosine](https://en.wikipedia.org/wiki/Cosh_(mathematical_function)) of the given angle.

**Argumentos:**

- `number number` — Angle in radians.

**Retorna:**

- `number` — The hyperbolic cosine of the given angle.

---

### `math:deg` `[client/menu/server]`

Converts radians to degrees.

**Argumentos:**

- `number radians` — Value to be converted to degrees.

**Retorna:**

- `number` — degrees

---

### `math:exp` `[client/menu/server]`

Returns e to the power of the input.

**Argumentos:**

- `number exponent` — The exponent for the function.

**Retorna:**

- `number` — e to the specified power

---

### `math:floor` `[client/menu/server]`

Floors or rounds a number down.

See math.ceil for the inverse of this function.

**Argumentos:**

- `number number` — The number to be rounded down.

**Retorna:**

- `number` — floored numbers

---

### `math:fmod` `[client/menu/server]`

Returns the modulus of the specified values.

While this is similar to the `%` operator, **it will return a negative value if the first argument is negative**, whereas the % operator will return a **positive** value **even if the first operand is negative**.

This function is also slower than the `%` operator.

**Argumentos:**

- `number base` — The base value.
- `number modulator` — The modulator.

**Retorna:**

- `number` — The calculated modulus.

---

### `math:frexp` `[client/menu/server]`

**Lua reference description**: Returns `m` and `e` such that `x = m2e`, `e` is an integer and the absolute value of `m` is in the range ((0.5, 1) (or zero when x is zero).

Used to split the number value into a normalized fraction and an exponent. Two values are returned: the first is a multiplier in the range `1/2` (**inclusive**) to `1` (**exclusive**) and the second is an integer exponent.

The result is such that `x = m*2^e`.

**Argumentos:**

- `number x` — The value to get the normalized fraction and the exponent from.

**Retorna:**

- `number` — m, multiplier - between `0.5` and `1`.
- `number` — e, exponent - **always** an integer.

---

### `math:huge` `[client/menu/server]`

A variable that effectively represents infinity, in the sense that in any numerical comparison every number will be less than this.

For example, if `x` is a number, `x &gt; math.huge` will **NEVER** be `true` except in the case of overflow (see below).

Lua will consider any number greater than or equal to `2^1024` (the exponent limit of a [double](http://en.wikipedia.org/wiki/Double-precision_floating-point_format)) as `inf` and hence equal to this.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The effective infinity.

---

### `math:ldexp` `[client/menu/server]`

Takes a normalised number and returns the floating point representation.

Effectively it returns the result of `normalizedFraction * 2.0 ^ exponent`. math.frexp is the opposite function.

**Argumentos:**

- `number normalizedFraction` — The value to get the normalized fraction and the exponent from.
- `number exponent` — The value to get the normalized fraction and the exponent from.

**Retorna:**

- `number` — result

---

### `math:log` `[client/menu/server]`

With one argument, return the natural logarithm of x (to base e).

With two arguments, return the logarithm of x to the given base, calculated as log(x)/log(base).

**Argumentos:**

- `number x` — The value to get the base from exponent from.
- `number base` = `e` — The logarithmic base.

**Retorna:**

- `number` — Logarithm of x to the given base

---

### `math:log10` `[client/menu/server]`

Returns the base-10 logarithm of x. This is usually more accurate than math.log(x, 10).

**Argumentos:**

- `number x` — The value to get the base from exponent from.

**Retorna:**

- `number` — The result.

---

### `math:max` `[client/menu/server]`

Returns the largest value of all arguments.

**Argumentos:**

- `vararg numbers` — Numbers to get the largest from

**Retorna:**

- `number` — The largest number

---

### `math:min` `[client/menu/server]`

Returns the smallest value of all arguments.

**Argumentos:**

- `vararg numbers` — Numbers to get the smallest from.

**Retorna:**

- `number` — The smallest number

---

### `math:mod` `[client/menu/server]`

This is removed in Lua versions later than what GMod is currently using. You should use the % operator or math.fmod instead.

Returns the modulus of the specified values. Same as math.fmod.

**Argumentos:**

- `number base` — The base value
- `number modulator` — Modulator

**Retorna:**

- `number` — The calculated modulus

---

### `math:modf` `[client/menu/server]`

Returns the integral and fractional component of the modulo operation.

**Argumentos:**

- `number base` — The base value.

**Retorna:**

- `number` — The integral component.
- `number` — The fractional component.

---

### `math:pi` `[client/menu/server]`

A variable containing the mathematical constant pi. (`3.1415926535898`)

See also: Trigonometry

It should be noted that due to the nature of floating point numbers, results of calculations with `math.pi` may not be what you expect. See second example below.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The mathematical constant, Pi.

---

### `math:pow` `[client/menu/server]`

Returns x raised to the power y.
In particular, math.pow(1.0, x) and math.pow(x, 0.0) always return 1.0, even when x is a zero or a nan. If both x and y are finite, x is negative, and y is not an integer then math.pow(x, y) is undefined.

**Argumentos:**

- `number x` — Base.
- `number y` — Exponent.

**Retorna:**

- `number` — y power of x

---

### `math:rad` `[client/menu/server]`

Converts an angle in degrees to it's equivalent in radians.

**Argumentos:**

- `number degrees` — The angle measured in degrees.

**Retorna:**

- `number` — radians

---

### `math:random` `[client/menu/server]`

When called without arguments, returns a uniform pseudo-random real number in the range 0 to 1 which includes 0 but excludes 1.

When called with an integer number m, returns a uniform pseudo-random integer in the range 1 to m inclusive.

When called with two integer numbers m and n, returns a uniform pseudo-random integer in the range m to n inclusive.

See also math.Rand

**Argumentos:**

- `number m` = `nil` — If m is the only parameter: upper limit.

If n is also provided: lower limit.

If provided, this must be an integer.
- `number n` = `nil` — Upper limit.

If provided, this must be an integer.

**Retorna:**

- `number` — Random value

---

### `math:randomseed` `[client/menu/server]`

Seeds the random number generator. The same seed will guarantee the same sequence of numbers each time with math.random.

For shared random values across predicted realms, use util.SharedRandom.

Usage of this function affects **ALL** random numbers in the game. This means that improper use (such as setting the seed to a static value that doesn't change with time) can negatively affect other addons or the base game.

It is a good idea to set the seed back to at least something like Global.SysTime in those cases.

**Argumentos:**

- `number seed` — The new seed

**Retorna:**

*(sin retorno)*

---

### `math:sin` `[client/menu/server]`

Returns the [sine](https://en.wikipedia.org/wiki/Trigonometric_functions) of given angle.

**Argumentos:**

- `number number` — Angle in radians

**Retorna:**

- `number` — Sine for given angle in the range (-1, 1)

---

### `math:sinh` `[client/menu/server]`

Returns the [hyperbolic sine](https://en.wikipedia.org/wiki/Hyperbolic_functions) of the given angle.

**Argumentos:**

- `number number` — Angle in radians.

**Retorna:**

- `number` — The hyperbolic sine of the given angle.

---

### `math:sqrt` `[client/menu/server]`

Returns the square root of the number.

**Argumentos:**

- `number value` — Value to get the square root of.

**Retorna:**

- `number` — squareRoot

---

### `math:tan` `[client/menu/server]`

Returns the tangent of the given angle.

**Argumentos:**

- `number value` — Angle in radians

**Retorna:**

- `number` — The tangent of the given angle.

---

### `math:tanh` `[client/menu/server]`

Returns the [hyperbolic tangent](https://en.wikipedia.org/wiki/Hyperbolic_functions) of the given number.

**Argumentos:**

- `number number` — Angle in radians.

**Retorna:**

- `number` — The hyperbolic tangent of the given angle.

---

### `math:tau` `[client/menu/server]`

A variable containing the mathematical constant tau, which is equivalent to 2*math.pi. (`6.28318530718`)

See also: Trigonometry

It should be noted that due to the nature of floating point numbers, results of calculations with `math.tau` may not be what you expect. See the second example on math.pi page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The mathematical constant, Tau.

*Fuente: `lua/includes/extensions/math.lua:4`*