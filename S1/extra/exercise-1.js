
const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

for (let i = 0; i < users.length; i++) {
  const element = users[i];
  if (element.years <= 17) {
    console.log(
      `Usuario menor de edad: ${element.name}`
      );
  }
  else {
    console.log(
      `Usuario mayor de edad: ${element.name}`
      );
  }
  
}
