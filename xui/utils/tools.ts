// export async function writeFile(blob: Blob) {
//   try {
//     const handle = await (window as any).showSaveFilePicker({
//       types: [{
//         accept: {
//           // Omitted
//         },
//       }],
//     });
//     const writable = await handle.createWritable();
//     await writable.write(blob);
//     await writable.close();
//     return handle;
//   } catch (err) {
//     console.error(err.name, err.message);
//   }
// }

// export async function openFile() {
//   try {
//     // Always returns an array.
//     const [handle] = await (window as any).showOpenFilePicker();
//     return handle.getFile();
//   } catch (err) {
//     console.error(err.name, err.message);
//   }
// }

export const appendImage = (blob: Blob) => {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(blob);
  document.body.append(img);
  img.onload = img.onerror = () => URL.revokeObjectURL(img.src);
};

export const listDirectory = (blobs: any) => {
  let fileStructure = '';
  blobs
    .sort((a: any, b: any) => a.webkitRelativePath.localeCompare(b))
    .forEach((blob: any) => {
      // The File System Access API currently reports the `webkitRelativePath`
      // as empty string `''`.
      fileStructure += `${blob.webkitRelativePath}\n`;
    });

  // blobs
  //   .filter((blob: Blob) => {
  //     return blob.type.startsWith('image/');
  //   })
  //   .forEach((blob: Blob) => {
  //     appendImage(blob);
  //   });

  return fileStructure;
};
