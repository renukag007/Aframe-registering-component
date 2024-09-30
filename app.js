// Register the change-color-on-click component
AFRAME.registerComponent('change-color-on-click', {
    init: function () {
      var el = this.el;
  
      // Add a click event listener to the entity (box)
      el.addEventListener('click', function () {
        // Log that the box was clicked
        console.log('Box was clicked');
  
        // Generate a random color
        var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
        // Change the material color of the box
        el.setAttribute('material', 'color', newColor);
  
        // Log the new color to the console
        console.log('New color: ' + newColor);
      });
    }
  });
  