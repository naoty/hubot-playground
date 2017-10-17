// Description:
//   Reply to greeting
//
// Commands:
//   hubot hello
//
// Author:
//   Naoto Kaneko <naoty.k@gmail.com>
module.exports = robot => {
  robot.respond(/hello/, res => {
    res.reply("Hello, world!")
  });
};
