const circle = {
  radius: parseFloat(prompt("Enter radius")),
  pi: Math.PI,
  area: function () {
    return this.pi * this.radius * this.radius;
  },
  perimeter: function () {
    return 2 * this.pi * this.radius;
  },
};

const area = circle.area();
console.log("Area of the circle:", area);

const perimeter = circle.perimeter();
console.log("Perimeter of the circle:", perimeter);
