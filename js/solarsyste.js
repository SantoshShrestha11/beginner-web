// In the planetData array, update the speed values to:
const planetData = [
  // ... (other planet properties remain the same)
  {name: "Mercury", speed: 4, /* ... */},
  {name: "Venus", speed: 1.5, /* ... */},
  {name: "Earth", speed: 1, /* ... */},
  {name: "Mars", speed: 0.8, /* ... */},
  {name: "Jupiter", speed: 0.2, /* ... */},
  {name: "Saturn", speed: 0.09, /* ... */},
  {name: "Uranus", speed: 0.04, /* ... */},
  {name: "Neptune", speed: 0.01, /* ... */},
];

// The animation loop remains the same but with more visible movement:
function animate() {
  requestAnimationFrame(animate);
  time += 0.001;

  planetData.forEach((data) => {
    if (data.type !== "star") {
      const planet = planets.get(data.name);
      if (autoRotate) {
        planet.position.x = Math.cos(time * data.speed) * data.distance;
        planet.position.z = Math.sin(time * data.speed) * data.distance;
      }
      planet.rotation.y += 0.01; // Rotation around own axis
    }
  });

  renderer.render(scene, camera);
}
