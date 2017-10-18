// Description:
//   Confirm something
//
// Commands:
//   hubot confirm <question>?
//
// Author:
//   Naoto Kaneko <naoty.k@gmail.com>
module.exports = robot => {
  robot.respond(/confirm (.*)$/i, message => {
    question = message.match[1];

    client = robot.adapter.client;
    attachment = {
      pretext: question,
      actions: [
        {
          name: "confirmation",
          text: "YES",
          type: "button",
          value: "yes"
        },
        {
          name: "confirmation",
          text: "NO",
          type: "button",
          value: "no"
        }
      ]
    };
    options = {
      as_user: true,
      link_names: 1,
      attachments: [attachment]
    };
    client.web.chat.postMessage(message.envelope.room, "", options);
  });
};
