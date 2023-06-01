
    const inputNumbers = document.getElementById("inputNumbers");
    const btnStandardDeviation = document.getElementById("btnStandardDeviation");
    const btnTriangleArea = document.getElementById("btnTriangleArea");
    const btnCircleArea = document.getElementById("btnCircleArea");
    const result = document.getElementById("result");

    btnStandardDeviation.addEventListener("click", function() {
      const numbers = inputNumbers.value.split(",").map(Number);
      result.innerHTML = standardDeviation(numbers).toFixed(2);
    });

    btnTriangleArea.addEventListener("click", function() {
      const numbers = inputNumbers.value.split(",").map(Number);
      result.innerHTML = triangleArea(numbers[0], numbers[1]).toFixed(2);
    });

    btnCircleArea.addEventListener("click", function() {
      const numbers = inputNumbers.value.split(",").map(Number);
      result.innerHTML = circleArea(numbers[0]).toFixed(2);
    });

    function standardDeviation(numbers) {
      const mean = numbers.reduce((a, b) => a + b) / numbers.length;
      const deviations = numbers.map(num => num - mean);
      const squareDeviations = deviations.map(d => d * d);
      const variance = squareDeviations.reduce((a, b) => a + b) / (numbers.length - 1);
      return Math.sqrt(variance);
    }

    function triangleArea(base, height) {
      return 0.5 * base * height;
    }

    function circleArea(radius) {
      return Math.PI * radius * radius;
    }