export const ALL_CARDS = {
  22: {
    name: "Key",
    number: 22,
    text:
      "A key kept on the table near the desktop. “Did someone forget to take this? Wonder what this key can open?”",
    imgURL: "key.jpg",
  },
  42: {
    name: "Computer",
    number: 42,
    text:
      "A Desktop. There’s no electricity.“If I can get this computer working probably, I can get some vital information from it. But seems the power is cut. Need to restore the power first to get the computer on.”",
    imgURL: "computer_off.jpg",
  },

  14: {
    name: "Locked Cabinet",
    number: 14,
    text:
      "A locked cabinet. “Breaking this open will cause a lot of noise and I don’t want to attract unnecessary attention. There should be a better way to open it.”",
    imgURL: "locked_cabinet.jpg",
  },
  67: {
    name: "A Grid",
    number: 67,
    text:
      "An electric grid with pins 5 cm apart and some black numbers.This is a Machine. Your goal is first to obtain a SINGLE DIGIT number (sum of one or more black numbers), then ADD SINGLE DIGIT number to a relevant object which this grid can interact with.Enter the number thus obtained in the “ENTER NUMBER” box to see the result",
    imgURL: "grid.jpg",
  },
  21: {
    name: "Door",
    number: 21,
    text:
      "This is the exit door. It is electronically locked and is controlled by a digital code.To get out, you must first find the code and then punch in to escape. Look around the room for clues to get the correct code. “Should be a piece of cake”",
    imgURL: "door.jpg",
  },
  7: {
    name: "Blocks",
    number: 7,
    text:
      "“I wonder what are these pieces doing here? Do they allow children here? Do the dots on the blocks resemble something? These pieces look out of place but I am sure they are here for a reason.”",
    imgURL: "blocks.jpg",
  },
  16: {
    name: "Wallet",
    number: 16,
    text:
      "A wallet found from the bag .On investigating the bag, you find a wallet. “The wallet can be of the suspect. However, there isn’t much in the wallet, no identity card, only the photo of a girl with a cake. Could it be the suspect’s daughter’s photo?”",
    imgURL: "wallet.jpg",
  },
  36: {
    name: "Opened Cabinet",
    number: 36,
    text:
      "The cabinet is open.You find a locked tool box and a pattern carved on the inside of the cabinet.“I am not sure what this pattern means”",
    imgURL: "opened_cabinet.jpg",
  },
  2: {
    name: "Tool Box",
    number: 2,
    text:
      "A tool box found from the cabinet. What was it doing there? Can you believe it the tool box too is locked. Need a 4 digit code to unlock the tool box. How am supposed to guess this? There should be something related in this room that can help me crack the code.Once you get the code, enter it in the “ENTER NUMBER” box to open the box",
    imgURL: "closed_toolbox.jpg",
  },
  15: {
    name: "Electric Wire",
    number: 15,
    text:
      "A 10 cm long electrical wire with ends in the form of rings.You find a wire from the tool box",
    imgURL: "wire.jpg",
  },
  43: {
    name: "Switched On Computer",
    number: 43,
    text:
      "The computer switches on.The electricity is back and the computer switches on.“There seems to be a password. Need to figure out the password to unlock the computer.”Once you get the 4 digit code, enter it in the “Enter Number” button to unlock the computer",
    imgURL: "computer_locked.jpg",
  },
  48: {
    name: "Unlocked Computer",
    number: 48,
    text:
      "The computer is unlocked. “Could this be the Exit code to unlock the door?”",
    imgURL: "computer_on.jpg",
  },
};

export const LEVELS = [
  {
    key: "36",
    reveled_cards: [36, 2],
    discarded_cards: [22, 14],
    msg: "Well done Cabinet unlocked",
    hint:
      "Use the key to open the cabinet. Add their numbers for them to interact with each other and enter the total in the 'Enter Number'",
  },
  {
    key: "1348",
    reveled_cards: [15],
    discarded_cards: [2, 7],
    msg: "You unlock the tool box. Great Job! You find a wire inside",
    hint:
      "The blocks(07) will help to get the code for the tool box.On the box there are 4 triangles small to big.Imagine to arrange the blocks to form a pyramid. If you observe carefully, you can identify 4 triangles of different size. Cunt the total dots each triangle has. From the smallest to the largest triangle the number of dots",
  },
  {
    key: "24",
    reveled_cards: [43],
    discarded_cards: [15, 67, 42, 36],
    msg: "Electricity is restored. Well done. Computer switches on",
    hint:
      "You need to connect the wire to he right spots on the electric gridBlack numbers are the numbers on the grid. To calculate the single red digit number, one needs to add few black numbers. The pattern on cabinet indicates which numbers to add to get the single red digit number. Then add that red single digit number to the number on the wire",
  },
  {
    key: "2011",
    reveled_cards: [48],
    discarded_cards: [16, 43],
    msg: "You cracked the password. Superb! Computer unlocks.",
    hint:
      "The daughter’s birth year is the password. The photo was taken in 2017 on her 7th birthday as it has seven candles. Enter her birth year in the “Enter Number",
  },
];

export const START_CARDS = [22, 14, 67, 21, 42, 7, 16];

export const FINAL_ASNWER = {
  key: "6429",
  hint: "The colors should help you arrange the digits in the right order",
  msg:
    "Great work! You have been able to retrieve the last piece of evidence and found a way to escape. This will nail the suspect and put him behind thebars. Once again, Great job!",
};

export const ROOM_DETAILS = {
  name: "Office",
  description:
    "In this adventure, you are a top ranked detective. You are extremely close to solving a high-class murder case. A tip leads you to the office space of a suspect. The clue that you want to gather might be the last missing puzzle piece to connect the dots. Without any prior preparation you rush to the suspect’s office. Its late in the night, so you have managed to sneak in without being noticed by the cameras and security guards. You enter the office room AND slam, the door shut on its own. You try to open it again but it won’t open. Seem like you have fallen into a trap. You have limited time to escape the room. GOOD LUCK. ",
  imgURL: "office.jpg",
};
