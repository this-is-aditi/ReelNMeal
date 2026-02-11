// import dotenv from "dotenv";
// dotenv.config();

// import ImageKit from '@imagekit/nodejs';
// if (!process.env.IMAGEKIT_PRIVATE_KEY) {
//   throw new Error("IMAGEKIT_PRIVATE_KEY is not loaded");
// }

// const imagekit=new ImageKit({
//     publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
   

//     urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT
    //console.log("IMAGEKIT_PUBLIC_KEY:", process.env.IMAGEKIT_PUBLIC_KEY),
//console.log("IMAGEKIT_PRIVATE_KEY:", process.env.IMAGEKIT_PRIVATE_KEY),
//console.log("IMAGEKIT_URL_ENDPOINT:", process.env.IMAGEKIT_URL_ENDPOINT)

//});

// async function uploadFile(file,fileName){
//     const result=await imagekit.upload({
//         file:file,
//         fileName:fileName,
//     })
//     return result;
// }

// async function uploadFile(file, fileName) {

//     const base64File = file.toString("base64");

//     const result = await imagekit.upload({
//         file: base64File,
//         fileName: fileName,
//     });

//     return result;
// }

// export default{
//     uploadFile,
// }

import dotenv from "dotenv";
dotenv.config();

import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});
console.log(imagekit);

async function uploadFile(buffer, fileName) {
  const base64 = buffer.toString("base64");

  const result = await imagekit.files.upload({
    file: base64,
    fileName: fileName
  });

  return result;
}

export default {
  uploadFile
};
