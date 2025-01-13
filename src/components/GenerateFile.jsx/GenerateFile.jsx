const generateFile = (selectedData, selectedOptions) => {
  console.log("Generate File called with data", selectedData, selectedOptions);
  let fileContent = "";

  for (let i = 0; i < selectedData.length; i++) {
    fileContent += "BEGIN:VCARD\n";
    fileContent += "VERSION:3.0\n";

    const firstName =
      selectedData[i][selectedOptions.indexOf("First Name")] || "";
    const middleName =
      selectedData[i][selectedOptions.indexOf("Middle Name")] || "";
    const lastName =
      selectedData[i][selectedOptions.indexOf("Last Name")] || "";
    const nickname = selectedData[i][selectedOptions.indexOf("Nickname")] || "";

    fileContent += `FN:${firstName} ${middleName} ${lastName}\n`;
    fileContent += `N:${lastName};${firstName};${middleName};;\n`;
    fileContent += `NICKNAME:${nickname}\n`;
    fileContent += `REV:${generateRevField()}\n`;

    for (let j = 0; j < selectedOptions.length; j++) {
      const option = selectedOptions[j];
      const data = selectedData[i][j];

      switch (option) {
        case "Phone (Cell)":
          fileContent += `TEL;type=CELL,VOICE:${data}\n`;
          break;
        case "Phone (Home)":
          fileContent += `TEL;type=HOME,VOICE:${data}\n`;
          break;
        case "Phone (Work)":
          fileContent += `TEL;type=WORK,VOICE:${data}\n`;
          break;
        case "Email (Home)":
          fileContent += `EMAIL;type=HOME,INTERNET:${data}\n`;
          break;
        case "Email (Work)":
          fileContent += `EMAIL;type=WORK,INTERNET:${data}\n`;
          break;
        //   case "Birthday (DD/MM/YYYY)": {
        //     // Format birthday as YYYYMMDD
        //     const parts = data.split("/");
        //     const formattedDate = `${parts[2]}${parts[1]}${parts[0]}`;
        //     fileContent += `BDAY:${formattedDate}\n`;
        //     break;
        //   }
        default:
          break;
      }
    }

    fileContent += "END:VCARD\n";
  }

  const blob = new File([fileContent], {
    type: "text/vcard",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.vcf";
  link.click();
  URL.revokeObjectURL(url);
};

function generateRevField() {
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

export default generateFile;
