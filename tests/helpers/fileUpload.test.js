import { fileUpload } from "../../src/helpers";

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    // Arrange
    const imageUrl =
      "https://st4.depositphotos.com/1741969/29457/i/450/depositphotos_294571810-stock-photo-blackground-of-abstract-glitter-lights.jpg";

    // Act
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "image.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");
    // Assert
  });

  //   test("Debe lanzar un error si no se proporciona un archivo", async () => {
  //     // Arrange
  //     const file = null;

  //     // Act & Assert
  //     await expect(fileUpload(file)).rejects.toThrow(
  //       "No tenemos ningun archivo para subir"
  //     );
  //   });

  //   test("Debe lanzar un error si no se puede subir la imagen", async () => {
  //     // Arrange
  //     const file = new File(["dummy content"], "test.jpg", {
  //       type: "image/jpeg",
  //     });

  //     // Mock the fetch function to simulate a failed request
  //     global.fetch = jest.fn(() =>
  //       Promise.reject(new Error("Failed to upload image"))
  //     );

  //     // Act & Assert
  //     await expect(fileUpload(file)).rejects.toThrow("No se puede subir imagen");
  //   });
});
