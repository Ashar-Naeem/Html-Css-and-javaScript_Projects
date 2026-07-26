const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
const luckyColors = [
  "Red",
  "Green",
  "Yellow",
  "White",
  "Blue",
  "Purple",
  "Pink",
  "Orange",
  "Silver",
  "Gold",
  "Brown",
  "Turquoise"
];
const careerPredictions = [
  "A promotion may be closer than you think.",
  "Focus on teamwork today.",
  "A new opportunity will appear.",
  "Your hard work will be recognized.",
  "Avoid rushing important decisions.",
  "Networking will benefit your career.",
  "Stay confident during interviews.",
  "A small risk could bring great rewards.",
  "Your leadership will impress others.",
  "Success comes through consistency."
];
const form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const lastname=document.getElementById("lastname").value;
    const day=parseInt(document.getElementById("day").value);
    const month=parseInt(document.getElementById("month").value);
    const year=parseInt(document.getElementById("year").value);
    const result=document.getElementById("result");
    result.textContent = `Hi ${name} ${lastname}, your Zodiac sign is ${zodiacSigns[month - 1]}, your lucky color is ${luckyColors[month - 1]}, and your future prediction is ${careerPredictions[(day - 1) % careerPredictions.length]}`;
})