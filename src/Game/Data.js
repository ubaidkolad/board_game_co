export const ALL_CARDS = {
  22: {
    name: "Key",
    number: 22,
    text:
      "A key kept on the table near the desktop. Did someone forget to take this? Wonder what this key can open?",
    imgURL: "key.jpg"
  },
  42: {
    name: "Computer",
    number: 42,
    text:
      "A Desktop. There’s no electricity. If I can get this computer working probably can get some vital information. But seems the power is cut. Need to restore the power first to get this computer on.",
    imgURL: "computer_off.jpg"
  },

  14: {
    name: "Locked Cabinet",
    number: 14,
    text:
      "Breaking this open will cause a lot of noise and I don’t want to attract unnecessary attention. There should be a better way",
    imgURL: "locked_cabinet.jpg"
  },
  67: {
    name: "A Grid",
    number: 67,
    text: "A grid with pins 5 cm apart and some black numbers.",
    imgURL: "grid.jpg"
  },
  21: {
    name: "Door",
    number: 21,
    text:
      "This is the exit door. It is controlled by a digital code. Look around the room for clues to get the correct code",
    imgURL: "door.jpg"
  },
  7: {
    name: "Pieces of Pyramid",
    number: 7,
    text:
      "I wonder what these pieces are and the dots on them wonder what they resemble? These pieces look out of place but I am sure they are here for a reason. Can they form a structure?  ",
    imgURL: "blocks.jpg"
  },
  16: {
    name: "Wallet",
    number: 16,
    text:
      ". The wallet can be of the suspect. However there isn’t much in the wallet, no identity card, only the photo of a girl with a cake. Could be his daughter’s photo",
    imgURL: "wallet.jpg"
  },
  36: {
    name: "Opened Cabinet",
    number: 36,
    text:
      "The cabinet is open Look closely there are TWO interesting elements.",
    imgURL: "opened_cabinet.jpg"
  },
  2: {
    name: "Tool Box",
    number: 2,
    text:
      "What was it doing there? Can you believe it the tool box too is locked. Need a 4 digit code to open the tool box. How am supposed to guess this? There should be something related in this room that can help me crack the code.",
    imgURL: "closed_toolbox.jpg"
  },
  15: {
    name: "Electric Wire",
    number: 15,
    text: "A 10 cm long electrical wire with ends in the form of rings.",
    imgURL: "wire.jpg"
  },
  43: {
    name: "Switched On Computer",
    number: 43,
    text:
      "Well done. You have successfully restored electricity by placing the wire on the machine.There seems to be a password. Need to figure out the password to unlock the computer.",
    imgURL: "computer_locked.jpg"
  },
  48: {
    name: "Unlocked Computer",
    number: 48,
    text:
      "Well Done! The screen is on. This should help you get out. Enter the correct 4 digit code in the key pad to unlock the door and escape",
    imgURL: "computer_on.jpg"
  }
};

export const LEVELS = [
  {
    key: "36",
    reveled_cards: [36, 2],
    discarded_cards: [22, 14],
    hint:
      "Use the key to open the cabinet. Add their numbers for them to interact with each other and enter the total in the 'Enter Number'"
  },
  {
    key: "1348",
    reveled_cards: [15],
    discarded_cards: [2, 7],
    hint:
      "The blocks(07) will help to get the code for the tool box.On the box there are 4 triangles small to big.Imagine to arrange the blocks to form a pyramid. If you observe carefully, you can identify 4 triangles of different size. Cunt the total dots each triangle has. From the smallest to the largest triangle the number of dots"
  },
  {
    key: "24",
    reveled_cards: [43],
    discarded_cards: [15, 67, 42, 36],
    hint:
      "You need to connect the wire to he right spots on the electric gridBlack numbers are the numbers on the grid. To calculate the single red digit number, one needs to add few black numbers. The pattern on cabinet indicates which numbers to add to get the single red digit number. Then add that red single digit number to the number on the wire"
  },
  {
    key: "2011",
    reveled_cards: [48],
    discarded_cards: [16, 43],
    hint:
      "The daughter’s birth year is the password. The photo was taken in 2017 on her 7th birthday as it has seven candles. Enter her birth year in the “Enter Number"
  }
];

export const START_CARDS = [22, 14, 67, 21, 42, 7, 16];

export const FINAL_ASNWER = {
  key: "6429",
  hint: "The colors should help you arrange the digits in the right order"
};

export const ROOM_DETAILS = {
  name: "Office",
  description:
    "In this adventure, you are a top ranked detective. You are extremely close to solving a high-class murder case. A tip leads you to the office space of a suspect. The clue that you want to gather might be the last missing puzzle piece to connect the dots. Without any prior preparation you rush to the suspect’s office. Its late in the night, so you have managed to sneak in without being noticed by the cameras and security guards. You enter the office room AND slam, the door shut on its own. You try to open it again but it won’t open. Seem like you have fallen into a trap. You have limited time to escape the room. GOOD LUCK. ",
  imgURL: "office.jpg"
};
