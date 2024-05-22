export const fileUpload = async (file) => {
  const { VITE_CLOUDINARY_NAME, VITE_CLOUDINARY_PRESET } = import.meta.env;
  if (!file) throw new Error("No tenemos ningun archivo para subir");
  const cloudUrl = `https://api.cloudinary.com/v1_1/${VITE_CLOUDINARY_NAME}}/upload`;

  const formData = new FormData();
  formData.append("upload_preset", `${VITE_CLOUDINARY_PRESET}`);
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("No se puede subir imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
