// lpr -P BK-C310-U-1 test.txt

// ver -> https://www.raspberrypi.org/forums/viewtopic.php?t=19883&start=50

// lpr options -> http://www.it.uu.se/datordrift/maskinpark/skrivare/cups/

/*

  #!/bin/sh
  ## print a fortune
  #
  # set condensed text
  /usr/local/bin/escposf -f 1 >/tmp/out.txt
  # create fortune to print
  echo "Your personal fortune:\n" >>/tmp/out.txt
  /usr/games/fortune >>/tmp/out.txt
  echo "\n\n\n\n\n\n" >>/tmp/out.txt
  # reset to normal font
  /usr/local/bin/escposf -t 0 >>/tmp/out.txt
  # print and clean up
  /usr/bin/lpr -P thermie -o raw /tmp/out.txt
  /bin/rm /tmp/out.txt

 */

const { spawn } = require("child_process");
const fs = require("fs");

const name = "Cristiano";
const lastName = "Sarmento";
const address = "Rua Guaravera";
const number = "480";
const cep = "22710-040";
const neighborhood = "Curicica";
const state = "Rio de Janeiro";
const city = "Rio de Janeiro";
const country = "Brazil";
const fileName = "out.txt";

let text = `Welcome, ${name} ${lastName}\n`;
text += `Address: ${address}, ${number}\n`;
text += `Zip ${cep}, ${neighborhood}\n`;
text += `${city} - ${state}\n`;
text += `${country}`;

fs.writeFile(fileName, text, err => {
  if (err) {
    return console.log("error writing file", err);
  }

  const child = spawn("lpr", [
    "-P",
    "BK-C310-U-1",
    "-o landscape",
    "-o PageSize=w68h252",
    "-o CutOptions=ChainMarks",
    "-o page-left=3",
    "-o page-right=3",
    "-o page-top=5",
    "-o page-bottom=5",
    "out.txt"
  ]);

  child.stdout.on("end", data => {
    removeFile(fileName, () => {
      console.log("Successfully printed!");
    });
  });

  child.stdout.on("error", data => {
    removeFile(fileName, () => {
      console.log("err printing ", data);
    });
  });
});

const removeFile = (fileName, cb) => {
  fs.unlink(fileName, err => {
    cb();
  });
};
