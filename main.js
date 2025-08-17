const products = [
  {
    name: "XL-1608UBC-04",
    price: 0.0034,
    seller: "XINGLIGHT",
    image: "images/XL-1608UBC-04.png",
    link: "https://www.lcsc.com/product-detail/LED-Indication-Discrete_XINGLIGHT-XL-1608UBC-04_C965807.html"
  },
  {
    name: "W25Q16JVSSIQ",
    price: 0.238,
    seller: "Winbond Elec",
    image: "images/W25Q16JVSSIQ.png",
    link: "https://www.lcsc.com/product-detail/NOR-FLASH_Winbond-Elec-W25Q16JVSSIQ_C131025.html"
  },
  {
    name: "SN74LVC1G125DBVR",
    price: 0.058,
    seller: "Texas Instruments",
    image: "images/SN74LVC1G125DBVR.png",
    link: "https://www.lcsc.com/product-detail/Buffers-Drivers-Receivers-Transceivers_Texas-Instruments-SN74LVC1G125DBVR_C23654.html"
  },
  {
    name: "STM32F303CBT6",
    price: 1.8613,
    seller: "STMicroelectronics",
    image: "images/STM32F303CBT6.png",
    link: "https://www.lcsc.com/product-detail/Microcontrollers-MCU-MPU-SOC_STMicroelectronics-STM32F303CBT6_C108516.html"
  },
  {
    name: "BMI088",
    price: 2.7387,
    seller: "Bosch Sensortec",
    image: "images/BMI088.png",
    link: "https://www.lcsc.com/product-detail/Accelerometers_Bosch-Sensortec-BMI088_C194919.html"
  },
  {
    name: "B1601S",
    price: 0.2005,
    seller: "CND-tek",
    image: "images/B1601S.png",
    link: "https://www.lcsc.com/product-detail/Pulse-Transformers-LAN_CND-tek-B1601S_C510548.html"
  },
  {
    name: "ESP32-WROOM-32E-N8",
    price: 4.8491,
    seller: "Espressif Systems",
    image: "images/ESP32-WROOM-32E-N8.png",
    link: "https://www.lcsc.com/product-detail/WiFi-Modules_Espressif-Systems-ESP32-WROOM-32E-N8_C701342.html"
  },
  {
    name: "ADM2582EBRWZ-REEL7",
    price: 5.6397,
    seller: "Analog Devices",
    image: "images/ADM2582EBRWZ-REEL7.png",
    link: "https://www.lcsc.com/product-detail/Isolated-RS-485-422-Transceivers_Analog-Devices-ADM2582EBRWZ-REEL7_C39494.html"
  },
  {
    name: "3296W-1-502LF",
    price: 0.6411,
    seller: "BOURNS",
    image: "images/3296W-1-502LF.png",
    link: "https://www.lcsc.com/product-detail/Potentiometers-Variable-Resistors_BOURNS-3296W-1-502LF_C60620.html"
  },
  {
    name: "R-RJ45R08P-B000",
    price: 0.3688,
    seller: "Ckmtw(Shenzhen Cankemeng)",
    image: "images/R-RJ45R08P-B000.png",
    link: "https://www.lcsc.com/product-detail/Ethernet-Connectors-Modular-Connectors-RJ45-RJ11_Ckmtw-Shenzhen-Cankemeng-R-RJ45R08P-B000_C386756.html"
  },
];


let sectionToAppend = document.getElementById("sectionToAppend");

products.forEach(product => {
    let section = document.createElement("section");
    section.className = "popular-product";

    let img = document.createElement("img");
    img.alt = "image of " + product.name;
    img.src = product.image;
    section.appendChild(img);

    let a = document.createElement("a");
    a.rel = "noopener";
    a.href = product.link;
    section.appendChild(a);

    let h3 = document.createElement("h3");
    h3.className = "product-name";
    h3.textContent = product.name;
    a.appendChild(h3);

    let p1 = document.createElement("p");
    p1.className = "manufacturer-name";
    p1.textContent = product.seller;
    section.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "price";
    p2.textContent = "$ " + product.price;
    section.appendChild(p2);

   sectionToAppend.appendChild(section);

});

