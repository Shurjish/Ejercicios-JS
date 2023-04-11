const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let lolPlayers = streamers.filter((streamer) => {
  let lolStreamer = (streamer.gameMorePlayed.includes("Legends")) && (streamer.age < 30);

  return lolStreamer;
});

console.log(lolPlayers);
